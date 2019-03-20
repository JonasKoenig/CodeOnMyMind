import numpy as np

size = 32
np.random.seed(42)

# normalized random noise map
map = np.random.rand(size,size)

# scales an array up along vertical and horizontal axis
def scale_up(array, factor):
    vertical_axis = np.repeat(array, factor, axis=1)
    both_axes = np.repeat(vertical_axis, factor, axis=0)
    return both_axes

# add noise with different levels of detail
level = 0

while 2**level < size:
    a = int(size/2**level)
    random_grid = np.random.randint(0, 1+1, size=(a,a))
    map += scale_up(random_grid, 2**level)
    level += 1

# normalize noise map
map /= level+1

# pretty print
shades = ['  ', '░░', '▒▒', '▓▓', '██']
string = ''
for y in range(0,size):
    for x in range(0,size):
        string += shades[int(np.floor(map[y][x]*(len(shades))))]
    string += '\n'

print(string)
