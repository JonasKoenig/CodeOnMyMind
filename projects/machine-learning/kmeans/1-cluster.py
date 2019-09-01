import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

np.random.seed(0)
data = pd.read_csv('animals.csv') # import data

k = 3

# normalize data to range {0,...,1}
raw_weights = np.interp(data.values[:,0], (data.values[:,0].min(), data.values[:,0].max()), (0, 1))
raw_heights = np.interp(data.values[:,1], (data.values[:,1].min(), data.values[:,1].max()), (0, 1))
normalized_data = np.array(list(zip(raw_weights, raw_heights)))

def assignData(centers, x):
    distances = [sum((c - x)**2) for c in centers]
    return np.argmin(distances)

def adjustCenter(assignments, i):
    members = normalized_data[assignments == i]
    return np.mean(members[:,0]), np.mean(members[:,1])

def KMeans(X, k):
    iterations = 0
    centers = np.zeros((k,2))
    newCenters = X[np.random.randint(len(X), size=k)] # initial random centers from data

    while(np.any(centers != newCenters)): # continue if centers changed
        centers = newCenters
        assignments = np.array([assignData(centers, x) for x in X]) # determine assignments
        newCenters = [adjustCenter(assignments, i) for i in range(k)] # adjust centers
        iterations += 1


    assignments = np.array([assignData(centers, x) for x in X])
    print('K-Means terminated after ' + str(iterations) + ' iterations.')
    return assignments, centers

# execute k-means algorithm
assignments, centers = KMeans(normalized_data, k)

# plot result
for i in range(k):
    plt.scatter(normalized_data[assignments == i,0], normalized_data[assignments == i,1], marker='o', label='cluster '+str(i+1))
plt.scatter([c[0] for c in centers], [c[1] for c in centers], marker='+', s=50, color='black', label='centers')
plt.xlabel('Normalized Weight')
plt.ylabel('Normalized Height')
plt.legend()
plt.show()
