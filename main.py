import openai
import json
import traceback


def assitant_ia(conversation):
    try:
        key = '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'
        openai.api_key = key

        # Recuperar el asistente existente
        assistant = openai.Assistant.retrieve('asst_aSgtUCZHu15hapA25flRDKsP')
        #print(f"Assistant retrieved: {assistant}")  # Debugging print to check the assistant details

        # Verificar que el asistente se haya recuperado correctamente
        if not assistant:
            raise ValueError("No se pudo recuperar el asistente con el ID proporcionado.")

        # Para ilustrar, aquí se añaden las instrucciones del asistente a la conversación
        assistant_instructions = {
            "role": "system",
            "content": assistant.instructions
        }
        conversation.insert(0, assistant_instructions)

        # Llamar a la API de OpenAI para obtener la respuesta utilizando el asistente existente
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=conversation,
            stream=True
        )

        respuesta = ""
        for chunk in response:
            choices = chunk.choices
            if choices and len(choices) > 0:
                delta = choices[0].delta
                content = getattr(delta, 'content', None)
                if content is not None:
                    respuesta += content
            else:
                print(f"No choices in chunk: {chunk}")

        return respuesta

    except Exception as e:
        traceback.print_exc()
        return json.dumps({"content": "Hubo un problema procesando tu solicitud."})


def main():
    conversation = []
    while True:
        user_input = input("Tú: ")
        if user_input.lower() in ["exit", "salir", "quit"]:
            break

        conversation.append({"role": "user", "content": user_input})
        response = assitant_ia(conversation)
        print(f"asistente: {response}")
        conversation.append({"role": "assistant", "content": response})


if __name__ == "__main__":
    main()