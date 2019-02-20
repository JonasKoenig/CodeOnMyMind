# Experimenting with Noise

In this code snippet I created noise maps in python. Every `(x,y)` coordinate will be assigned a random greyscale value. These noise maps can be used as height maps, to distribute ressources or as textures in video games.

## Random Noise

Random noise is random :) The values for each coordinate are completely independent. This is easy to implement:

```python
map = np.array([random.random() for x in range(size**2)]).reshape((size,size))
```

In a square of dimensions `size * size` random values are assigned. I then printed the noise map with unicode shades to make the result easier to comprehend.

```python
shades = ['  ', '░░', '▒▒', '▓▓', '██']
string = ''
for y in range(0,size):
    for x in range(0,size):
        string += shades[int(np.floor(map[y][x]*(len(shades))))]
    string += '\n'

print(string)
```

This yields a very coarse noise map:

```
▓▓  ░░░░▓▓▓▓██  ▒▒  ░░▒▒    ▓▓▒▒░░▒▒██  ██▓▓░░  ██░░    ██▓▓██▓▓
▒▒██░░▒▒██▓▓██▒▒▓▓  ░░░░  ░░  ░░▓▓░░░░░░░░██▓▓▓▓  ▓▓  ░░██▓▓▒▒▓▓
██▓▓░░  ░░░░░░████░░▓▓░░██▒▒░░░░▒▒░░▒▒██░░░░██▒▒      ▓▓▓▓▒▒  ░░
██▒▒████  ▓▓▓▓▒▒░░▓▓  ▒▒▒▒████░░▒▒  ████░░▓▓▓▓  ▓▓▒▒▓▓▒▒  ░░  ██
████░░  ████  ▒▒  ▓▓▓▓  ▒▒▒▒░░██▒▒░░▒▒▓▓░░░░██▓▓▒▒▒▒  ░░░░▒▒░░░░
  ▓▓░░████  ░░▓▓░░  ██▒▒▒▒▓▓██    ▒▒▒▒▒▒▓▓▓▓██  ▒▒░░██░░  ▒▒▒▒░░
░░██▒▒██▒▒  ██████████  ▒▒░░▒▒  ░░██░░▓▓▒▒▒▒████▒▒▓▓  ░░██▒▒▒▒▓▓
  ▒▒▒▒██  ██    ▒▒▓▓░░  ██░░▒▒▓▓▒▒▒▒▒▒██░░▓▓░░░░▓▓░░░░▓▓  ▒▒████
  ░░░░██████░░  ██▓▓▓▓██▓▓  ██░░▓▓██      ▒▒░░▓▓▓▓░░▓▓░░▒▒████
▒▒░░  ▓▓▓▓░░▓▓▒▒▒▒    ████▒▒██▒▒    ░░██▓▓████░░░░  ▓▓██▒▒▓▓  ██
████████  ▓▓░░████████░░▓▓  ████░░██▒▒░░▓▓░░    ░░████░░▓▓░░██▒▒
██  ██  ██░░  ▒▒▓▓░░▓▓▒▒░░▒▒░░▓▓  ██▒▒▓▓▓▓▓▓░░  ▓▓░░░░██▓▓░░░░▒▒
▒▒░░  ▒▒██▓▓██▓▓░░▒▒  ░░▒▒▒▒▓▓▒▒▒▒░░▒▒██▓▓    ▒▒▓▓░░██▓▓▓▓░░
░░▒▒██  ▒▒▓▓  ▓▓▒▒░░▓▓  ▓▓▓▓  ▒▒  ██▒▒  ░░██▒▒██▓▓██▒▒████▓▓▓▓▒▒
██▒▒██▓▓▒▒░░░░▓▓▓▓▒▒▓▓░░  ░░░░░░▒▒  ░░▓▓▓▓  ▒▒▒▒▒▒░░▒▒██▒▒▓▓██▓▓
░░  ░░▓▓████▒▒▓▓▒▒▓▓░░░░▒▒  ░░▓▓▒▒  ▒▒  ▓▓  ░░▒▒  ▓▓  ▒▒  ░░░░░░
▓▓░░▓▓██░░    ▒▒██░░▓▓▓▓▓▓▓▓██        ▓▓▒▒░░▓▓▓▓  ▓▓▓▓  ████
░░▓▓██░░▓▓  ▓▓▓▓  ▓▓██▓▓  ██▓▓░░▒▒░░▒▒░░████  ██▓▓██▓▓▒▒▓▓██░░██
▒▒▒▒▒▒▓▓░░████  ██░░▒▒▓▓░░  ██  ░░▓▓░░██▓▓░░  ██  ▓▓▒▒▓▓▓▓▓▓▒▒▓▓
  ░░▓▓░░▒▒▒▒▒▒▒▒▓▓░░▓▓░░░░      ▒▒▓▓  ░░▒▒▓▓██▒▒░░    ░░    ▒▒░░
██▒▒▓▓  ██▒▒██▒▒▒▒▒▒    ██▒▒██▒▒  ▓▓    ▒▒░░██  ▓▓▓▓▓▓░░▒▒▒▒▒▒██
██░░▓▓▓▓▓▓██░░░░▓▓        ▒▒▒▒░░░░▓▓▓▓▒▒▓▓██▓▓▓▓▓▓██▒▒▒▒▓▓████
  ░░▓▓▒▒░░  ▓▓▓▓██▒▒▒▒    ▒▒░░░░  ████▒▒████▓▓░░  ▓▓▒▒▓▓██  ▒▒▓▓
▒▒  ░░░░▓▓██░░▓▓░░████▒▒▒▒░░░░██▒▒▒▒██▓▓▒▒▒▒  ░░▓▓▓▓▓▓░░▒▒██▒▒▓▓
  ██▓▓░░  ▒▒▒▒  ████▒▒  ██▒▒▓▓▒▒░░████░░▒▒░░██▒▒████░░▓▓▒▒██▒▒██
░░░░▒▒██▒▒  ▒▒░░▒▒▒▒▒▒░░  ▓▓▒▒░░▓▓  ▓▓▓▓██░░▓▓████▒▒  ▒▒▒▒████▒▒
▒▒▒▒▓▓▒▒▓▓  ▒▒██░░▓▓▓▓██████░░░░▓▓▓▓██    ▓▓████▓▓▒▒  ▓▓██▒▒▓▓██
  ▓▓░░░░  ▒▒▒▒▓▓    ██▓▓░░██  ▒▒░░░░  ████▓▓  ▒▒░░▒▒▓▓▒▒░░██  ░░
▒▒░░▒▒▒▒██░░██▓▓░░▒▒▓▓▓▓  ▓▓▒▒██░░▓▓▓▓░░▓▓▓▓▓▓▓▓▓▓██▓▓██▓▓░░▒▒▒▒
▓▓  ░░▓▓    ▒▒██▒▒████░░██▒▒██▓▓░░  ██  ████▓▓██████░░▓▓  ▒▒▒▒▓▓
▓▓▒▒████  ░░  ██▒▒██░░  ████░░▒▒  ██░░▒▒  ██  ▒▒▓▓▓▓██▒▒▓▓  ▒▒
▒▒▒▒██  ░░▒▒████  ▓▓▒▒██░░░░    ██▒▒▓▓▓▓▒▒  ▓▓░░  ▒▒  ▓▓░░░░██░░
```


## Level-of-Detail Noise

Sometimes noise needs to be smoother. For example, if the noise map is used as a height map, random noise would result in a blocky map with lots of inaccessible columns. In an attempt to create a smoother noise map I developed an approach where smaller random noise maps are scaled up and added on top of each other. Idea:

#### Level 0
```
initial random noise map:
▒▒▓▓▓▓░░▓▓▒▒▒▒
  ░░▒▒░░▒▒░░▓▓▓▓
░░▓▓  ▓▓▓▓  ▒▒▒▒
▓▓  ▒▒▓▓▒▒░░  ▓▓
░░▓▓  ▓▓▓▓▓▓  ░░
  ▓▓░░▓▓░░▓▓▓▓
▒▒▓▓▒▒░░░░▓▓  ▒▒
▒▒▒▒  ▒▒▓▓░░░░▓▓
```

#### Level 1
```
new random noise map:    upscaled version:    aggregate:
████    ██  ████        ████    ██  ████
██    ████  ██          ██    ████  ██
  ██████    ██            ██████    ██
      ██████                  ██████
██  ████████            ██  ████████
    ██  ██  ████            ██  ██  ████
██  ████  ██            ██  ████  ██
████  ██  ██  ██        ████  ██  ██  ██







████  ██  ██  ██
```
