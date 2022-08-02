import sys
from PIL import Image

img = Image.open('tux.png')

#size = 192, 512, 180, 16, 32
size = [32]
for i in range(1):
    img_resize = img.resize((size[i], size[i]))

    dotIdx = sys.argv[1].rfind('.')
    targetStr = str(size[i]) + '_' + sys.argv[1][:dotIdx] + '.bmp'
    print(targetStr)
    img_resize.save(targetStr)

