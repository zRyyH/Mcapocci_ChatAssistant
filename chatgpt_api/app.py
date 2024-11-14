from functions.io_funcs import write, read, save_img
from modules.gpt import ChatGPT
from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import time

Chats = {}

app = Flask(__name__)
CORS(app)

def updateSettings(data):
    json_file = json.loads(read('./configs/settings.json'))
    json_file.update(data)
    json_file = json.dumps(json_file, indent=4)
    write(path='./configs/settings.json', data=json_file)

@app.route('/get_gpt', methods=['POST'])
def get_gpt():
    json_body = request.get_json()
    
    user_input = json_body['user_input']
    user_id = json_body['user_id']
    
    if user_id in Chats.keys():
        Assistent = Chats[user_id]['assistent']
    else:
        Assistent = ChatGPT()
        Chats.update({user_id: {'assistent': Assistent, 'time': time.time()}})
        
    result = Assistent.gpt(user_input)
    return result, 200

@app.route('/set_configs', methods=['POST'])
def set_config():
    try:
        json_body = request.get_json()
        
        data = {
            "gptConfig": json_body['gptConfig'],
            "name": json_body['name'],
            "email": json_body['email'],
            "whatsapp": json_body['whatsapp'],
            "instagram": json_body['instagram'],
            "homeSubtitle1": json_body['homeSubtitle1'],
            "homeSubtitle2": json_body['homeSubtitle2'],
            "chatSubtitle": json_body['chatSubtitle'],
            "chatInputPlaceholder": json_body['chatInputPlaceholder'],
        }
        
        updateSettings(data)
        return jsonify({"message": "Configurações salvas!"}), 200

    except:
        return jsonify({"error": "Configurações não salvas!"}), 400
    
@app.route('/configs', methods=['GET'])
def configs():
    return json.loads(read('./configs/settings.json')), 200

@app.route('/upload_img', methods=['POST'])
def upload_img():
    isPerfil = 'perfil' in request.files
    isBackground = 'background' in request.files
    
    if isPerfil or isBackground:
        perfilId = save_img(request, key='perfil')
        backgroundId = save_img(request, key='background')
        
        updateSettings({'perfil': perfilId})
        updateSettings({'background': backgroundId})
        
        return jsonify({"message": "Imagem salva!"}), 200
    else:
        return jsonify({"error": "Nenhuma imagem enviada!"}), 400
        
if __name__ == '__main__':
    app.run(port=2000)