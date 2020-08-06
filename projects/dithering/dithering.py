import numpy as np
from PIL import Image

# load panda example image
img = Image.open("media/bw_panda.png")

def quantization(img,steps):
    pixels = np.array(img)
    quantized = np.round(pixels/255*(steps-1)) * 255/(steps-1)
    return Image.fromarray(quantized).convert('RGB')

def dithering(img,steps):
    pixels = np.array(img)
    quantized = np.round(pixels/255*(steps-1)) * 255/(steps-1)
    error = pixels - quantized

    # for each y
    #    for each x
    #       oldpixel        := pixel[x][y]
    #       newpixel        := find_closest_palette_color (oldpixel)
    #       pixel[x][y]     := newpixel
    #       quant_error     := oldpixel - newpixel
    #       pixel[x+1][y  ] := pixel[x+1][y  ] + quant_error * 7 / 16
    #       pixel[x-1][y+1] := pixel[x-1][y+1] + quant_error * 3 / 16
    #       pixel[x  ][y+1] := pixel[x  ][y+1] + quant_error * 5 / 16
    #       pixel[x+1][y+1] := pixel[x+1][y+1] + quant_error * 1 / 16

    return Image.fromarray(error).convert('RGB')

# apply to panda example
composition = Image.new('RGB', (4*img.width, img.height))
composition.paste(img, (0, 0))
composition.paste(quantization(img, 2), (1*img.width, 0))
composition.paste(dithering(img, 2), (2*img.width, 0))
composition.save("media/dithering.png", optimize=True)
