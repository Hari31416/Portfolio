import glob, os
import pandas as pd
from style import *

json_files = glob.glob("MyData/*.json")


def info_one(file, i):
    df = pd.read_json(file)
    m, n = df.shape
    cprint(f"Showing {i} of {len(json_files) + 1}", "green")
    cprint(f"File: {file.split(os.path.sep)[-1]}", "header")
    cprint(f"File Size: {os.path.getsize(file)/8/1024:.4f} KB", "red")
    cprint(f"Number of Rows: {m}", "white")
    cprint(f"Number of Columns: {n}", "okblue")
    cprint(f"Columns: {' || '.join(list(df.columns))}", "cyan")
    print("\n")


for i, file in enumerate(json_files[:5]):
    info_one(file, i + 1)
