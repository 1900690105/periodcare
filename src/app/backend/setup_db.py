# setup_db.py
"""
Run this ONCE before starting the server to build the vector database.
Usage: python setup_db.py
"""

from rag_utils import build_vector_db_multi
import os


def main():
    all_paths = [
        
        "C:/Users/Desktop/periodcare/data/generatedbyai/data1.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data2.json",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data3.txt",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data4.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data5.txt",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data6.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data7.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data8.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data9.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data10.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data11.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data12.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data13.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data14.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data15.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data16.json",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data17.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data18.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data19.txt",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data20.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data21.csv",
        "C:/Users/Desktop/periodcare/data/generatedbyai/data22.csv",
        
        "C:/Users/Desktop/periodcare/data/pdf/pdf1.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf2.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf3.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf4.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf5.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf6.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf7.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf8.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf9.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf10.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf11.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf12.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf13.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf14.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf15.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf16.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf17.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf18.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf19.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf20.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf21.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf22.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf23.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf24.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf25.pdf",   
        "C:/Users/Desktop/periodcare/data/pdf/pdf26.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf27.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf28.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf29.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf30.pdf",
        "C:/Users/Desktop/periodcare/data/pdf/pdf31.pdf",

    
    ]

    # ✅ Separate PDFs and text-like files
    pdf_paths = [p for p in all_paths if p.lower().endswith(".pdf")]
    text_paths = [p for p in all_paths if not p.lower().endswith(".pdf")]

    # Check if all exist
    missing_files = [p for p in all_paths if not os.path.exists(p)]
    if missing_files:
        print("❌ Error: Missing files:")
        for file in missing_files:
            print(f"   - {file}")
        return

    print("🚀 Building vector database from multiple sources...")
    print(f"   PDFs: {len(pdf_paths)} | Text/CSV/JSON: {len(text_paths)}")

    # Convert all text-based files into a single text blob for processing
    combined_text_path = "C:/Users/Desktop/periodcare/data/generatedbyai/combined_text.txt"
    with open(combined_text_path, "w", encoding="utf-8") as out:
        for file in text_paths:
            with open(file, "r", encoding="utf-8", errors="ignore") as f:
                out.write(f"\n\n--- FILE: " + os.path.basename(file) + " ---\n")
                out.write(f.read())

    # Combine both PDFs and the merged text file
    final_inputs = pdf_paths + [combined_text_path]
    build_vector_db_multi(final_inputs)

    print("\n✅ Setup complete! You can now start the server with:")
    print("   uvicorn main:app --reload")

if __name__ == "__main__":
    main()