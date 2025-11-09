# rag_utils.py
from sentence_transformers import SentenceTransformer
import chromadb
from chromadb.utils import embedding_functions
from PyPDF2 import PdfReader
from functools import lru_cache

def load_pdf_text(path):
    """Extract text from PDF"""
    text = ""
    reader = PdfReader(path)
    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text + "\n"
    return text

def build_vector_db(pdf_path, persist_dir="db/chroma"):
    """Build vector database from single PDF - DEPRECATED, use build_vector_db_multi"""
    return build_vector_db_multi([pdf_path], persist_dir)

def build_vector_db_multi(pdf_paths, persist_dir="db/chroma"):
    """Build vector database from multiple PDFs - run this ONCE before starting server"""
    client = chromadb.PersistentClient(path=persist_dir)
    
    # Check if collection already exists
    try:
        coll = client.get_collection("periodcare_docs")
        if coll.count() > 0:
            print(f"⚠️  Collection already exists with {coll.count()} chunks")
            user_input = input("Do you want to rebuild? This will delete existing data. (yes/no): ")
            if user_input.lower() != 'yes':
                print("✅ Using existing collection")
                return coll
            else:
                client.delete_collection("periodcare_docs")
                print("🗑️  Deleted existing collection")
    except:
        pass
    
    # Create new collection
    coll = client.get_or_create_collection(
        name="periodcare_docs",
        embedding_function=embedding_functions.SentenceTransformerEmbeddingFunction(
            model_name="all-MiniLM-L6-v2"
        ),
    )
    
    all_chunks = []
    all_metadata = []
    
    # Process each PDF
    for pdf_idx, pdf_path in enumerate(pdf_paths):
        print(f"\n📄 Processing {pdf_path}...")
        text = load_pdf_text(pdf_path)
        
        # Chunk with overlap for better retrieval
        chunk_size = 400
        overlap = 50
        pdf_chunks = []
        
        for i in range(0, len(text), chunk_size - overlap):
            chunk = text[i:i+chunk_size].strip()
            if chunk and len(chunk) > 50:  # Skip very small chunks
                pdf_chunks.append(chunk)
                all_metadata.append({
                    "source": pdf_path,
                    "pdf_index": pdf_idx
                })
        
        all_chunks.extend(pdf_chunks)
        print(f"   ✓ Created {len(pdf_chunks)} chunks from {pdf_path}")
    
    print(f"\n📦 Total chunks across all PDFs: {len(all_chunks)}")
    
    # Add to database in batches
    ids = [f"chunk_{i}" for i in range(len(all_chunks))]
    batch_size = 100
    
    for i in range(0, len(all_chunks), batch_size):
        batch_chunks = all_chunks[i:i+batch_size]
        batch_ids = ids[i:i+batch_size]
        batch_metadata = all_metadata[i:i+batch_size]
        
        coll.add(
            ids=batch_ids,
            documents=batch_chunks,
            metadatas=batch_metadata
        )
        print(f"  Added batch {i//batch_size + 1}/{(len(all_chunks)-1)//batch_size + 1}")
    
    print(f"\n✅ Vector DB built successfully with {len(all_chunks)} chunks from {len(pdf_paths)} PDFs")
    return coll

@lru_cache(maxsize=1)
def get_collection(persist_dir="db/chroma"):
    """Get cached collection object"""
    client = chromadb.PersistentClient(path=persist_dir)
    return client.get_collection(
        name="periodcare_docs",
        embedding_function=embedding_functions.SentenceTransformerEmbeddingFunction(
            model_name="all-MiniLM-L6-v2"
        ),
    )

def query_vector_db(question, n_results=5):
    """Query vector database for relevant context from all PDFs"""
    coll = get_collection()
    res = coll.query(
        query_texts=[question],
        n_results=n_results,
        include=["documents", "metadatas"]
    )
    
    if not res["documents"][0]:
        return "No relevant information found."
    
    # Format context with source information
    context_parts = []
    for doc, metadata in zip(res["documents"][0], res["metadatas"][0]):
        source = metadata.get("source", "Unknown").split("/")[-1]  # Get filename only
        context_parts.append(f"[From {source}]\n{doc}")
    
    return "\n\n".join(context_parts)

# from sentence_transformers import SentenceTransformer
# import chromadb
# from chromadb.utils import embedding_functions
# from PyPDF2 import PdfReader
# from functools import lru_cache

# def load_pdf_text(path):
#     text = ""
#     reader = PdfReader(path)
#     for page in reader.pages:
#         text += page.extract_text() + "\n"
#     return text

# def build_vector_db(pdf_path, persist_dir="db/chroma"):
#     client = chromadb.PersistentClient(path=persist_dir)
    
#     # Check if collection already exists
#     try:
#         coll = client.get_collection("periodcare_docs")
#         if coll.count() > 0:
#             print(f"✅ Collection exists with {coll.count()} chunks")
#             return coll
#     except:
#         pass
    
#     coll = client.get_or_create_collection(
#         name="periodcare_docs",
#         embedding_function=embedding_functions.SentenceTransformerEmbeddingFunction(
#             model_name="all-MiniLM-L6-v2"
#         ),
#     )
    
#     text = load_pdf_text(pdf_path)
    
#     # Better chunking with overlap
#     chunk_size = 400
#     overlap = 50
#     chunks = []
#     for i in range(0, len(text), chunk_size - overlap):
#         chunk = text[i:i+chunk_size].strip()
#         if chunk:
#             chunks.append(chunk)
    
#     ids = [f"chunk_{i}" for i in range(len(chunks))]
    
#     # Add in batches to avoid memory issues
#     batch_size = 100
#     for i in range(0, len(chunks), batch_size):
#         batch_chunks = chunks[i:i+batch_size]
#         batch_ids = ids[i:i+batch_size]
#         coll.add(ids=batch_ids, documents=batch_chunks)
    
#     print(f"✅ Added {len(chunks)} chunks to vector DB")
#     return coll

# @lru_cache(maxsize=1)
# def get_collection():
#     client = chromadb.PersistentClient(path="db/chroma")
#     return client.get_collection(
#         name="periodcare_docs",
#         embedding_function=embedding_functions.SentenceTransformerEmbeddingFunction(
#             model_name="all-MiniLM-L6-v2"
#         ),
#     )

# def query_vector_db(question):
#     coll = get_collection()
#     res = coll.query(query_texts=[question], n_results=3)
#     return "\n".join(res["documents"][0])
