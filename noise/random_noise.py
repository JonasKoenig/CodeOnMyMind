import numpy as np

size = 32
np.random.seed(42)

# normalized random noise map
map = np.random.rand(size,size)

# pretty print
shades = ['  ', '░░', '▒▒', '▓▓', '██']
string = ''
for y in range(0,size):
    for x in range(0,size):
        string += shades[int(np.floor(map[y][x]*(len(shades))))]
    string += '\n'

print(string)
