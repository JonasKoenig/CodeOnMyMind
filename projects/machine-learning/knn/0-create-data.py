import numpy as np
import matplotlib.pyplot as plt
import csv

# Create data about fish

np.random.seed(42)
sample_size = 50

bass_lengths = np.random.normal(55, 15, sample_size)                                  # mean: 55.0cm
bass_weights = bass_lengths/10 + np.random.normal(2, 2, sample_size)                  # mean:  7.5kg

catfish_lengths = np.random.normal(80, 15, sample_size)                               # mean: 80.0cm
catfish_weights = catfish_lengths/10 + np.random.normal(7, 2, sample_size)            # mean: 15.0kg

fish_lengths = np.concatenate((bass_lengths, catfish_lengths))
fish_weights = np.concatenate((bass_weights, catfish_weights))
fish_labels  = np.concatenate((np.repeat(0, sample_size), np.repeat(1, sample_size))) # 0 = bass, 1 = catfish

# Create a CSV File from the data (random order)

indices = np.arange(100)
np.random.shuffle(indices)
csvData = zip(fish_lengths[indices], fish_weights[indices], fish_labels[indices])

with open('fish.csv', 'w', encoding='utf-8') as csvFile:
    writer = csv.writer(csvFile)
    writer.writerow(('fish_length', 'fish_weight', 'fish_label'))
    writer.writerows(csvData)
csvFile.close()

print('Created fish.csv file.')
