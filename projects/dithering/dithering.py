import numpy as np
from PIL import Image

img = Image.open("media/bw_panda.png")

def find_closest_palette_color(color, steps):
    closest = np.round(color/255*(steps-1)) * 255/(steps-1)
    return np.clip(closest, 0, 255)

def quantization(img,steps):
    pixels = np.array(img)
    quantized = np.round(pixels/255*(steps-1)) * 255/(steps-1)
    return Image.fromarray(quantized).convert('RGB')

def dithering(img,steps):
    pixels = np.array(img)

    for y in range(1,img.width-1):
        for x in range(0,img.height-1):
            oldpixel = pixels[x][y]
            newpixel = find_closest_palette_color(oldpixel, steps)
            pixels[x][y] = newpixel
            quant_error = oldpixel - newpixel
            pixels[x+1][y  ] += quant_error * 7 / 16
            pixels[x-1][y+1] += quant_error * 3 / 16
            pixels[x  ][y+1] += quant_error * 5 / 16
            pixels[x+1][y+1] += quant_error * 1 / 16

    return Image.fromarray(pixels).convert('RGB')

dithering(img, 2).save("media/dithering.png", optimize=True)
