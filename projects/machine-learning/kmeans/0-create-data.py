import numpy as np
import matplotlib.pyplot as plt
import csv

# Create data with three distinct groups

np.random.seed(42)
sample_size = 30

heights_1 = np.random.normal(150, 10, sample_size)
weights_1 = heights_1 + 1800 + np.random.normal(0, 200, sample_size)

heights_2 = np.random.normal(200, 10, sample_size)
weights_2 = heights_2 +  800 + np.random.normal(0, 200, sample_size)

heights_3 = np.random.normal(200, 10, sample_size)
weights_3 = heights_3 + 3500 + np.random.normal(0, 300, sample_size)

all_heigths = np.concatenate((heights_1, heights_2, heights_3))
all_weights = np.concatenate((weights_1, weights_2, weights_3))

plt.scatter(all_weights, all_heigths, color='grey', marker='o', label='animals')
plt.xlabel('Weight in kg')
plt.ylabel('Height in cm')
plt.legend()
plt.show()

# Create a CSV File from the data (random order)

indices = np.arange(90)
np.random.shuffle(indices)
csvData = zip(all_weights[indices], all_heigths[indices])

with open('animals.csv', 'w', encoding='utf-8') as csvFile:
    writer = csv.writer(csvFile)
    writer.writerow(('weight', 'height'))
    writer.writerows(csvData)
csvFile.close()

print('Created animals.csv file.')
