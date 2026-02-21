# setup_db.py
"""
Run this ONCE before starting the server to build the vector database.
Usage: python setup_db.py
"""

from rag_utils import build_vector_db_multi
import os


def main():
    all_paths = [
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data1.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data2.json",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data3.txt",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data4.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data5.txt",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data6.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data7.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data8.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data9.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data10.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data11.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data12.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data13.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data14.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data15.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data16.json",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data17.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data18.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data19.txt",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data20.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data21.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data22.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data23.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data24.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data25.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data26.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data27.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data28.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data29.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data30.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data31.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data32.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data33.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data34.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data35.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data36.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data37.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data38.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data39.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data40.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data41.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data42.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data43.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data44.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data45.txt",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data46.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data47.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data49.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data50.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data51.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data52.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data53.json",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data54.txt",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data55.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data56.csv",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data57.json",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data58.json",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data59.json",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data60.json",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data61.json",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data62.json",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data63.json",
        "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/data64.csv",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf1.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf2.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf3.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf4.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf5.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf6.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf7.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf8.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf9.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf10.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf11.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf12.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf13.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf14.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf15.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf16.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf17.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf18.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf19.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf20.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf21.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf22.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf23.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf24.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf25.pdf",   
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf26.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf27.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf28.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf29.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf30.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf31.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf32.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf33.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf34.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf35.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf36.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf37.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf38.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf39.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf40.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf41.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf42.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf43.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf44.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf45.pdf",   
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf46.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf47.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf48.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf49.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf50.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf51.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf52.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf53.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf54.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf55.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf56.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf57.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf58.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf59.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf60.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf61.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf62.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf63.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf64.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf65.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf66.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf67.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf68.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf69.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf70.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf71.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf72.pdf",
        "C:/Users/Desktop/newproject/periodcare/data/pdf/pdf73.pdf",
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
    combined_text_path = "C:/Users/Desktop/newproject/periodcare/data/generatedbyai/combined_text.txt"
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