import os
import sys
import subprocess


def convert_to_m4a(input_file, output_folder):
    try:
        output_file = os.path.join(output_folder, os.path.splitext(
            os.path.basename(input_file))[0] + ".m4a")
        subprocess.run(["ffmpeg", "-i", input_file, "-c:a","aac", output_file], check=True)
        print(f"Converted {input_file} to M4A.")
    except subprocess.CalledProcessError as e:
        print(f"Error converting {input_file} to M4A: {e}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python convert_to_m4a.py input_file output_folder")
        sys.exit(1)

    input_file = sys.argv[1]
    output_folder = sys.argv[2]

    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    convert_to_m4a(input_file, output_folder)
