import numpy as np
import pandas as pd
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

prediction = classifier.predict([[80, 12]])
print('Prediction for example point: '+str(prediction))    # kNN correctly predicts catfish

score = classifier.score(test_data, test_labels)           # Test accuracy on test data is 95%
print('Accuracy in classifying test data: '+str(score*100)+'%')
