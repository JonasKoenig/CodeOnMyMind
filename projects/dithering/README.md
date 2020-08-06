<!-- Header -->
[⬅️ Back to main page](https://github.com/JonasKoenig/CodeOnMyMind) &nbsp;
[💾 Download](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2FJonasKoenig%2FCodeOnMyMind%2Ftree%2Fmaster%2Fprojects%2Fdithering)

# Dithering

🚧 work in progress 🚧



[Wikipedia](https://en.wikipedia.org/wiki/Floyd%E2%80%93Steinberg_dithering) describes the algorithm as pseudo code:

```
for each y from top to bottom do
    for each x from left to right do
        oldpixel := pixel[x][y]
        newpixel := find_closest_palette_color(oldpixel)
        pixel[x][y] := newpixel
        quant_error := oldpixel - newpixel
        pixel[x + 1][y    ] := pixel[x + 1][y    ] + quant_error × 7 / 16
        pixel[x - 1][y + 1] := pixel[x - 1][y + 1] + quant_error × 3 / 16
        pixel[x    ][y + 1] := pixel[x    ][y + 1] + quant_error × 5 / 16
        pixel[x + 1][y + 1] := pixel[x + 1][y + 1] + quant_error × 1 / 16
```
