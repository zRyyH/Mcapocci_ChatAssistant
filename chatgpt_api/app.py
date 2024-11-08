from functions.io_funcs import write, read, save_img
from modules.gpt import ChatGPT
from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import time

Chats = {}

app = Flask(__name__)
CORS(app)

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
        
            # "placeholderColor": json_body['placeholderColor'],
            # "sendButtonColor": json_body['sendButtonColor'],
            # "chatButtonColor": json_body['chatButtonColor'],
            # "chatColor": json_body['chatColor'],
            # "inputColor": json_body['inputColor'],
            # "headerColor": json_body['headerColor'],
            # "homeBackgroundColor": json_body['homeBackgroundColor'],
            # "fontHomeColor": json_body['fontHomeColor'],
            # "fontChatColor": json_body['fontChatColor'],
            # "messageAssistentColor": json_body['messageAssistentColor'],
            # "messageUserColor": json_body['messageUserColor'],
            # "messageTextUserColor": json_body['messageTextUserColor'],
            # "messageTextAssistentColor": json_body['messageTextAssistentColor'],
            # "homeTextNameSize": json_body['homeTextNameSize'],
            # "homeImgLogoSize": json_body['homeLogoSize'],
            # "homeTextSubtitle1Size": json_body['homeSubtitle1Size'],
            # "homeTextSubtitle2Size": json_body['homeSubtitle2Size'],
            # "homeTextInstagram": json_body['homeTextInstagram'],
            # "chatTextNameSize": json_body['chatTextNameSize'],
            # "chatTextSubtitleSize": json_body['chatTextSubtitleSize'],
            # "chatInputSize": json_body['chatInputSize']
        
        json_file = json.dumps(data, indent=4)
        
        if write(path='./configs/settings.json', data=json_file):
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
        save_img(request, 'background')
        save_img(request, 'perfil')
        
        return jsonify({"message": "Imagem salva!"}), 200
    else:
        return jsonify({"error": "Nenhuma imagem enviada!"}), 400
    
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=20000)