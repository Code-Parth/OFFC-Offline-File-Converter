import os
import sys
from pydub import AudioSegment


def convert_to_wav(input_file, output_folder):
    try:
        audio = AudioSegment.from_file(input_file)
        base_name = os.path.splitext(os.path.basename(input_file))[0]
        output_path = os.path.join(output_folder, f"{base_name}.wav")
        audio.export(output_path, format="wav")
        print(f"Converted {input_file} to WAV.")
    except Exception as e:
        print(f"Error converting {input_file} to WAV: {str(e)}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python convert_to_wav.py input_file output_folder")
        sys.exit(1)

    input_file = sys.argv[1]
    output_folder = sys.argv[2]

    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    convert_to_wav(input_file, output_folder)
