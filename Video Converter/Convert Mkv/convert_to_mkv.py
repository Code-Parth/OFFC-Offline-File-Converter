import os
import sys
import ffmpeg


def convert_to_mkv(input_file, output_folder):
    output_file = os.path.join(output_folder, os.path.splitext(
        os.path.basename(input_file))[0] + ".mkv")
    ffmpeg.input(input_file).output(output_file).run(overwrite_output=True)
    print(f"Converted {input_file} to MKV.")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python convert_to_mkv.py input_file output_folder")
        sys.exit(1)

    input_file = sys.argv[1]
    output_folder = sys.argv[2]

    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    convert_to_mkv(input_file, output_folder)
