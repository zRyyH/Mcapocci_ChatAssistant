import uuid
import traceback

def write(path, data):
    with open(path, 'w') as FileW:
        FileW.write(data)
        FileW.close()
        return True

def read(path):
    with open(path, 'r') as FileR:
        data = FileR.read()
        FileR.close()
        return data

def save_img(request, key):
    try:
        imgId = str(uuid.uuid4())
        file = request.files[key]
        file.save(f'/var/www/html/src/{imgId}.png')
        return imgId
    except:
        traceback.print_exc()
        return False