import openai
import json

openai.api_key = "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"

class ChatGPT:
    def __init__(self):
        self.messages = []
        self.set_configs()
        
        
    def set_msg(self, role, msg):
        self.messages.append({"role": role, "content": msg})
        
        
    def read(self, arquivo):
        with open(arquivo, 'r') as FileR:
            conteudo = FileR.read()
            FileR.close()
            return conteudo
        
        
    def set_configs(self):
        json_file = json.loads(self.read('./configs/settings.json'))
        gpt_config = json_file['gptConfig']
        self.set_msg('system', gpt_config)
            
        
    def gpt(self, msg_user):
        self.set_msg('user', msg_user)
        
        response = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=self.messages,
            temperature=0.5
        )
        
        msg_assistent = response['choices'][0]['message']['content']
        self.set_msg('assistant', msg_assistent)
        
        return msg_assistent