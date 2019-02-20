import random
import numpy as np


size = 32
random.seed(42)

# normalized random noise map
map = np.array([random.random() for x in range(size**2)]).reshape((size,size))


# pretty print
shades = ['  ', '░░', '▒▒', '▓▓', '██']
string = ''
for y in range(0,size):
    for x in range(0,size):
        string += shades[int(np.floor(map[y][x]*(len(shades))))]
    string += '\n'

print(string)
