import pandas as pd
import os

path = os.path.dirname(__file__)

# read/clean co2 data
co2_csv = os.path.join(path, 'owid-co2-data.csv')
co2 = pd.read_csv(co2_csv)
co2 = co2[co2['year'] == 2020]

# read country capital locations
locations_csv = os.path.join(path, 'capitals.csv')
locations = pd.read_csv(locations_csv)

# compile continent data
continentNames = ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America']
continents = co2[co2['country'].isin(continentNames)]
continents.rename(columns = {'country' : 'continent', 'share_global_co2' : 'co2_global_share'}, inplace=True)
continentCols = ['year', 'continent', 'lat', 'lng', 'co2', 'co2_per_capita', 'co2_global_share']
continents = continents.filter(continentCols)
continents.to_csv(os.path.join(path, 'co2-continents.csv'))

# compile country data
co2_countries = co2[(co2['iso_code'].notnull()) & (co2['country'] != 'World')]
countries = co2_countries.merge(locations, how='inner', left_on='country', right_on='CountryName', validate='m:1')
countries.rename(columns = {'CapitalName' : 'capital', 'share_global_co2' : 'co2_global_share', 'CapitalLatitude' : 'lat', 'CapitalLongitude': 'lng'}, inplace=True)
countryCols = ['year', 'country', 'iso_code', 'capital', 'lat', 'lng', 'co2', 'co2_per_capita', 'co2_global_share']
countries = countries.filter(countryCols)
countries.to_csv(os.path.join(path, 'co2-countries.csv'))