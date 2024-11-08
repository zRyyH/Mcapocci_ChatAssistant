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

def save_img(request, path):
    try:
        file = request.files[path]
        file.save(f'/var/www/html/src/{path}.png')
        return True
    except:
        return False