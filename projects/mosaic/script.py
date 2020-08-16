from os import listdir
from os.path import isfile, join
from PIL import Image
import numpy as np

# load original image
img = Image.open("media/panda.jpg")

# pixelate original image
grid = 25
smallSize = (round(img.width/grid), round(img.height/grid))
smallImage = img.resize(smallSize, resample=Image.BILINEAR)
pixelate = smallImage.resize(img.size)
pixelate.save("media/pixelate.jpg", optimize=True)

# find images in 'tiles' directory
tilePaths = [join('./media/tiles', file) for file in listdir('./media/tiles') if isfile(join('./media/tiles', file))]

# load images
tileImages = [Image.open(i) for i in tilePaths]

# calculate dominant color of each tile
def getDominantColor(i):
    resize = i.resize((1,1), resample=Image.BILINEAR)
    return np.array(resize)[0,0]

tileColors = [getDominantColor(i) for i in tileImages]

# find closest matching tiles
def getClosestColor(c):
    tileDistances = [np.linalg.norm(np.subtract(t,c)) for t in tileColors]
    return np.argmin(tileDistances)

# place tiles
for x in range(smallImage.width):
    for y in range(smallImage.height):
        color = np.array(smallImage)[y,x]
        index = getClosestColor(color)
        tile = tileImages[index].resize((grid, grid))
        position = ((x*grid), (y*grid))
        pixelate.paste(tile, position)

# save mosaic
pixelate.save("media/mosaic.jpg", optimize=True)
