train_data, train_labels =
test_data, test_labels =

fig = plt.figure()
color = ['orange' if l == 1 else 'blue' for l in train_labels]
plt.scatter(train_data[:, 0], train_data[:, 1], c=color)
plt.xlim([-1, 7])
plt.ylim([-4, 6])
plt.show()

def getNeighbors(test, k):
    differences = np.array(train_data - test)**2                      # squared differences between coordinates
    distances   = np.sqrt(np.sum(differences, axis=1))                # distances between test point and training set
    return np.argsort(distances)[:k]                                  # sort by distance. return first k indices

def majorityVote(neighbors):
    occurrences = np.bincount(train_labels[neighbors])                # number of occurences for each label
    return np.argmax(occurrences)                                     # return most frequent label

def knnClassify(train_data, train_labels, test_data, k=1):
    pred_labels = []
    for test in test_data:                                            # loop through test_data
        neighbors = getNeighbors(test, k)                             # get neighbors for one test point
        pred_labels.append(majorityVote(neighbors))                   # append its majority to result
    return np.array(pred_labels)


fig = plt.figure()
color = ['orange' if l == 1 else 'blue' for l in pred_labels]
plt.scatter(test_data[:, 0], test_data[:, 1], c=color)
plt.xlim([-1, 7])
plt.ylim([-4, 6])
plt.show()


correct_preds = np.array([test_data[i] for i in range(len(test_data)) if test_labels[i] == pred_labels[i]])
false_preds   = np.array([test_data[i] for i in range(len(test_data)) if test_labels[i] != pred_labels[i]])

fig = plt.figure()
plt.scatter(correct_preds[:, 0], correct_preds[:, 1], c='black')
plt.scatter(false_preds[:, 0], false_preds[:, 1], c='red')
plt.xlim([-1, 7])
plt.ylim([-4, 6])
plt.show()
