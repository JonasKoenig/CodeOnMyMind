from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
from pandas.plotting import register_matplotlib_converters
register_matplotlib_converters()

first_day = '2016-05-01'
last_day  = '2017-05-01'
df        = pd.read_csv('weather.csv', parse_dates=['Date'])
df['Day'] = range(0,len(df))
filtered  = df[df['Date'].between(first_day,last_day)]
# print(df)

# plotting
c = ['sandybrown','dodgerblue']
m = ['x','.']
plot = sns.lmplot(data=df, x='TMin', y='TMax', hue='Rain', palette=c ,markers=m, fit_reg=False)
# plot.set(xlim=(first_day,last_day))

plt.ylabel('Temperature (in °F)')
plt.show()
