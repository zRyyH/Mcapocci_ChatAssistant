from flask import Flask, jsonify, request
from flask_cors import CORS
from gpt import ChatGPT
import time

Chats = {}

app = Flask(__name__)
CORS(app)

@app.route('/get_gpt', methods=['POST'])
def get_gpt():
    json_body = request.get_json()
    print(json_body)
    
    user_input = json_body['user_input']
    user_id = json_body['user_id']
    
    if user_id in Chats.keys():
        Assistent = Chats[user_id]['assistent']
    else:
        Assistent = ChatGPT()
        Chats.update({user_id: {'assistent': Assistent, 'time': time.time()}})
        
    result = Assistent.gpt(user_input)
    return result, 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=15000)