import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

fish = pd.read_csv('fish.csv') # import data

# plt.scatter(fish['fish_length'], fish['fish_weight'], label='fish') # unlabeled plot

basses = fish[fish['fish_label'] == 0]
catfish = fish[fish['fish_label'] == 1]

plt.scatter(basses['fish_length'], basses['fish_weight'], color='orange', marker='o', label='bass')    # bass
plt.scatter(catfish['fish_length'], catfish['fish_weight'], color='blue', marker='x', label='catfish') # catfish
plt.scatter([80], [12], color='red', marker='D', label='new data')                                     # new data

plt.xlabel('Length in cm')
plt.ylabel('Weight in kg')
plt.legend()
plt.show()
