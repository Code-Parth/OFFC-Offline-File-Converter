from PIL import Image
import os
import sys


def convert_to_jpg(input_files, output_folder):
    for input_path in input_files:
        try:
            with Image.open(input_path) as img:
                base_name = os.path.splitext(os.path.basename(input_path))[0]
                output_path = os.path.join(output_folder, f"{base_name}.jpg")
                img.save(output_path, 'jpeg')
                print(f"Converted {input_path} to JPG.")
        except Exception as e:
            print(f"Error converting {input_path} to JPG: {str(e)}")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python convert_to_jpg.py input_file_or_folder output_folder")
        sys.exit(1)

    input_files = sys.argv[1:-1]
    output_folder = sys.argv[-1]

    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    convert_to_jpg(input_files, output_folder)
