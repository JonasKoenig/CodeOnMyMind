import pandas as pd
import os

path = os.path.dirname(__file__)
csv  = os.path.join(path, 'owid-co2-data.csv')
data = pd.read_csv(csv)

continents = data[data['iso_code'].isnull()]
countries  = data[data['iso_code'].notnull()]

print(continents['country'].unique())
