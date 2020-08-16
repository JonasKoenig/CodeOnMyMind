import numpy as np
from PIL import Image

img = Image.open("media/bw_panda.png")

def find_closest_palette_color(color, steps):
    closest = np.round(color/255*(steps-1)) * 255/(steps-1)
    return np.clip(closest, 0, 255)

def quantization(img,steps):
    pixels = np.array(img)
    quantized = find_closest_palette_color(pixels, steps)
    return Image.fromarray(quantized).convert('RGB')

def dithering(img,steps):
    pixels = np.array(img)
    quantized = find_closest_palette_color(pixels, steps)
    error = pixels - quantized

    dithering = pixels + np.roll(error,1,0)*7/16 + np.roll(error,1,1)*5/16
    dithering = find_closest_palette_color(dithering, steps)


    return Image.fromarray(dithering).convert('RGB')


dithering(img, 3).save("media/dithering.png", optimize=True)
