import numpy as np
from PIL import Image

# load sea gull image
img = Image.open("media/gull.jpg")

# finds closest match in reduced palette
def quantize(color, n):
    color = np.round(color/255*(n-1)) * 255/(n-1)
    return np.clip(color, 0, 255)

# reduce color palette to 'n' grey values
def quantization(n):
    pixels = np.array(img)
    quantized = quantize(pixels, n)
    return Image.fromarray(quantized).convert('RGB')

# color reduction using dithering
def dithering(n):
    pixels = np.array(img)

    for y in range(1,img.width-1):
        for x in range(0,img.height-1):
            oldpixel = pixels[x][y]
            newpixel = quantize(oldpixel, n)
            pixels[x][y] = newpixel
            quant_error = oldpixel - newpixel
            pixels[x+1][y  ] += quant_error * 7 / 16
            pixels[x-1][y+1] += quant_error * 3 / 16
            pixels[x  ][y+1] += quant_error * 5 / 16
            pixels[x+1][y+1] += quant_error * 1 / 16

    return Image.fromarray(pixels).convert('RGB')

# save quantization of sea gull
q = Image.new('RGB', (img.width * 3, img.height))
q.paste(img, (0, 0))
q.paste(quantization(2), (img.width * 1, 0))
q.paste(quantization(5), (img.width * 2, 0))
q.save("media/quantization.jpg", optimze=True)

# save dithering of sea gull
d = Image.new('RGB', (img.width * 3, img.height))
d.paste(img, (0, 0))
d.paste(dithering(2), (img.width * 1, 0))
d.paste(dithering(5), (img.width * 2, 0))
d.save("media/dithering.jpg", optimze=True)
