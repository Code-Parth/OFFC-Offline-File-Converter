import os
import sys
from pydub import AudioSegment


def convert_to_mp3(input_file, output_folder):
    try:
        audio = AudioSegment.from_file(input_file)
        base_name = os.path.splitext(os.path.basename(input_file))[0]
        output_path = os.path.join(output_folder, f"{base_name}.mp3")
        audio.export(output_path, format="mp3")
        print(f"Converted {input_file} to MP3.")
    except Exception as e:
        print(f"Error converting {input_file} to MP3: {str(e)}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python convert_to_mp3.py input_file output_folder")
        sys.exit(1)

    input_file = sys.argv[1]
    output_folder = sys.argv[2]

    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    convert_to_mp3(input_file, output_folder)
