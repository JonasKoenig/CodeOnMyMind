import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
from sklearn import neighbors

fish = pd.read_csv('fish.csv') # import data

# normalize data to range {0,...,1}
raw_lengths = np.interp(fish.values[:,0], (fish.values[:,0].min(), fish.values[:,0].max()), (0, 1))
raw_weights = np.interp(fish.values[:,1], (fish.values[:,1].min(), fish.values[:,1].max()), (0, 1))
normalized_data = np.array(list(zip(raw_lengths, raw_weights)))

# split into training and test data set
training_data, test_data   = normalized_data[:80], normalized_data[80:]
training_labels, test_labels = fish['fish_label'][:80], fish['fish_label'][80:]

classifier = neighbors.KNeighborsClassifier(n_neighbors=8) # define kNN classifier with k=8
classifier.fit(training_data, training_labels)             # train classifier using training data


# plot decision boundary
xx, yy = np.meshgrid(np.arange(-.1, 1.1, .005), np.arange(-.1, 1.1, .005)) # create mesh
Z = classifier.predict(np.c_[xx.ravel(), yy.ravel()]) # predict every point in the mesh
Z = Z.reshape(xx.shape)

plt.pcolormesh(xx, yy, Z, cmap=ListedColormap(['navajowhite', 'lightskyblue']))


# plot training points
basses = training_data[training_labels == 0]
catfish = training_data[training_labels == 1]

plt.scatter(basses[:,0], basses[:,1], color='orange', marker='o', label='bass')    # bass
plt.scatter(catfish[:,0], catfish[:,1], color='blue', marker='x', label='catfish') # catfish

plt.xlabel('Length (normalized)')
plt.ylabel('Weight (normalized)')
plt.show()
