import pandas as pd
import os

path = os.path.dirname(__file__)
csv  = os.path.join(path, 'owid-co2-data.csv')
data = pd.read_csv(csv)

# remove unnecessary columns
columnsOfInterest = ['year', 'country', 'iso_code', 'co2', 'co2_per_capita', 'share_global_co2']
data = data.filter(columnsOfInterest)
data.rename(columns = {'share_global_co2' : 'co2_global_share'}, inplace=True)

# compile continent data
continentNames = ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America']
continents = data[data['country'].isin(continentNames)]
continents.pop('iso_code')
continents.rename(columns = {'country' : 'continent'}, inplace=True)
continents.to_csv(os.path.join(path, 'co2-continents.csv'))

# compile country data
countries = data[(data['iso_code'].notnull()) & (data['country'] != 'World')]
countries.to_csv(os.path.join(path, 'co2-countries.csv'))