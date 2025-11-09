# setup_db.py
"""
Run this ONCE before starting the server to build the vector database.
Usage: python setup_db.py
"""

from rag_utils import build_vector_db_multi
import os

def main():
    # List all PDFs to include
    pdf_paths = [
        "data/PeriodCare.pdf",
        "data/PeriodRepairManual.pdf"
    ]
    
    # Check if all PDFs exist
    missing_files = []
    for pdf_path in pdf_paths:
        if not os.path.exists(pdf_path):
            missing_files.append(pdf_path)
    
    if missing_files:
        print(f"❌ Error: Missing PDF files:")
        for file in missing_files:
            print(f"   - {file}")
        print(f"\n   Please ensure all PDFs exist in the correct location")
        return
    
    print("🚀 Building vector database from multiple sources...")
    print(f"   Sources: {len(pdf_paths)} PDFs")
    for pdf in pdf_paths:
        print(f"   - {pdf}")
    print(f"\n   This may take 2-3 minutes...\n")
    
    build_vector_db_multi(pdf_paths)
    
    print("\n✅ Setup complete! You can now start the server with:")
    print("   uvicorn main:app --reload")

if __name__ == "__main__":
    main()