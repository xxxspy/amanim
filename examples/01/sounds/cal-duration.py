
from pathlib import Path
from tinytag import TinyTag
import pandas as pd

here = Path(__file__).parent
data = []
for f in here.iterdir():
    if(f.suffix == '.mp3'):
        name = f.stem
        tag = TinyTag.get(f)
        data.append([name, len(name), tag.duration])
pd.DataFrame(data).to_excel(str(here/'infos.xlsx'))
    