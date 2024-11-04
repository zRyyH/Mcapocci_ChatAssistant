import openai
import glob

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
        arquivos_txt = glob.glob("*.txt")
        for arquivo in arquivos_txt:
            self.set_msg('system', self.read(arquivo))
            
        
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