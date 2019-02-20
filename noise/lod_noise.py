import random
import numpy as np

def pretty_print(map, size):
    shades = ['  ', '░░', '▒▒', '▓▓', '██']
    string = ''
    for y in range(0,size):
        for x in range(0,size):
            string += shades[int(np.floor(map[y][x]*(len(shades)-1)))]
        string += '\n'
    print(string)

size = 8
random.seed(26)
random.seed(17)

# normalized random noise map
map = np.array([random.random() for x in range(size**2)]).reshape((size,size))

# scales an array up along vertical and horizontal axis
def scale_up(array, factor):
    vertical_axis = np.repeat(array, factor, axis=1)
    both_axes = np.repeat(vertical_axis, factor, axis=0)
    return both_axes

# add noise with different levels of detail
level = 0

while 2**level < size/4:
    a = int(size/2**level)
    random_grid = np.array([random.choice((0,1)) for x in range(a**2)]).reshape((a,a))
    pretty_print(random_grid, a)
    pretty_print(scale_up(random_grid ,2**level), size)
    map += scale_up(random_grid ,2**level)
    level += 1









# raw noise map with values between 0 and level
#print(map)

# normalize noise map
map = map/(level+1)
#print(map)

pretty_print(map, size)
