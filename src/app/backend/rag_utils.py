# rag_utils.py
from sentence_transformers import SentenceTransformer
import chromadb
from chromadb.utils import embedding_functions
from PyPDF2 import PdfReader
from functools import lru_cache
import os


def load_pdf_text(path):
    """Extract text from a PDF file."""
    text = ""
    reader = PdfReader(path)
    for page in reader.pages:
        text += page.extract_text() or ""
    return text

def load_text_file(path):
    """Read text from TXT, CSV, or JSON file as plain text."""
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        return f.read()

def build_vector_db(pdf_path, persist_dir="db/chroma"):
    """Build vector database from single PDF - DEPRECATED, use build_vector_db_multi"""
    return build_vector_db_multi([pdf_path], persist_dir)

def build_vector_db_multi(file_paths):
    """
    Build vector database from multiple input files (PDF, TXT, CSV, JSON).
    """
    all_texts = []
    for path in file_paths:
        print(f"📄 Processing {path}...")
        ext = os.path.splitext(path)[1].lower()

        try:
            if ext == ".pdf":
                text = load_pdf_text(path)
            elif ext in [".txt", ".csv", ".json"]:
                text = load_text_file(path)
            else:
                print(f"⚠️ Skipping unsupported file: {path}")
                continue

            if text.strip():
                all_texts.append(text)
            else:
                print(f"⚠️ Empty file skipped: {path}")

        except Exception as e:
            print(f"❌ Error reading {path}: {e}")

    # ✅ Combine all text for embedding/vector creation
    print(f"\n🧠 Total files processed: {len(all_texts)}")
    if not all_texts:
        print("❌ No text extracted. Nothing to build.")
        return

    # ✨ Replace this section with your vector DB logic
    # Example placeholder:
    print("🚀 Building vector database (embedding step here)...")
    # build_embeddings(all_texts)  <-- your actual implementation

    print("✅ Vector database build complete!")
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