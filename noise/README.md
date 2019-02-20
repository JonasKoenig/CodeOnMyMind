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

![random noise map](./noise-maps/random_noise_32x32.PNG)


## Level-of-Detail Noise

Sometimes noise needs to be smoother. For example, if the noise map is used as a height map, random noise would result in a blocky map with lots of inaccessible columns. In an attempt to create a smoother noise map I developed an approach where smaller random noise maps are scaled up and added on top of each other. Here is the idea applied to a smaller example:

#### Level 0
initial random noise map:
![initial random noise map of small example](./noise-maps/lod-noise_8x8_initial.PNG)


#### Level 1 (new noise map, upscaling does not do anything yet)
```
[1 1 0 0 1 0 1 1]   [1 1 0 0 1 0 1 1]
[1 0 0 1 1 0 1 0]   [1 0 0 1 1 0 1 0]
[0 1 1 1 0 0 1 0]   [0 1 1 1 0 0 1 0]
[0 0 0 1 1 1 0 0]   [0 0 0 1 1 1 0 0]
[1 0 1 1 1 1 0 0]   [1 0 1 1 1 1 0 0]
[0 0 1 0 1 0 1 1]   [0 0 1 0 1 0 1 1]
[1 0 1 1 0 1 0 0]   [1 0 1 1 0 1 0 0]
[1 1 0 1 0 1 0 1]   [1 1 0 1 0 1 0 1]
```

#### Level 2 (noise map with upscaled version)
```
[0 0 1 1]   [0 0 0 0 1 1 1 1]
[0 0 1 1]   [0 0 0 0 1 1 1 1]
[1 1 0 0]   [0 0 0 0 1 1 1 1]
[0 0 0 1]   [0 0 0 0 1 1 1 1]
            [1 1 1 1 0 0 0 0]
            [1 1 1 1 0 0 0 0]
            [0 0 0 0 0 0 1 1]
            [0 0 0 0 0 0 1 1]
```


#### Level 3 (last level of datail)
```
[1 1]   [1 1 1 1 1 1 1 1]
[0 1]   [1 1 1 1 1 1 1 1]
        [1 1 1 1 1 1 1 1]
        [1 1 1 1 1 1 1 1]
        [0 0 0 0 1 1 1 1]
        [0 0 0 0 1 1 1 1]
        [0 0 0 0 1 1 1 1]
        [0 0 0 0 1 1 1 1]
```

#### Aggregate
Summing everything up and normalizing by dividing by the number of levels will result in this smoothed noise map:

![final noise map of small example](./noise-maps/lod-noise_8x8_final.PNG)

Again in 32x32 for comparison:

![random noise map](./noise-maps/lod_noise_32x32.PNG)

There are still some visible grid patterns, but it is much smoother than Random Noise. Feel free to play around with the two python scripts. I think python allowed for compact and elegant syntax in this project.


## Outlook
In most game engines I have seen use Perlin Noise. This is a much more sophisticated method of generating smooth noise. I might try to implement it in the future.
