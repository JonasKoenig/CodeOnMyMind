import numpy as np
import matplotlib.pyplot as plt

np.random.seed(42)

n = 50

bass_xs = np.random.normal(55, 15, n)
bass_ys = bass_xs/10 + np.random.normal(2, 2, n)

catfish_xs = np.random.normal(80, 15, n)
catfish_ys = catfish_xs/10 + np.random.normal(7, 2, n)

fig = plt.figure()

# unlabeled plot
# plt.scatter(np.append(bass_xs, catfish_xs), np.append(bass_ys, catfish_ys), color='blue', marker='o', label='fish')

# labeled plot
plt.scatter(bass_xs, bass_ys, color='orange', marker='o', label='bass')
plt.scatter(catfish_xs, catfish_ys, color='blue', marker='x', label='catfish')

# unlabeled new data
plt.scatter([80], [12], color='red', marker='D', label='unlabeled')

plt.xlabel('Length in cm')
plt.ylabel('Weight in kg')
plt.legend()
plt.show()
