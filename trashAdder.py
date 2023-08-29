import random, json

with open('config.json', 'r', encoding='utf-8') as config_file:
    config_data = json.load(config_file)
    
    print(config_data)

filename = config_data["filename"]
trashCharacters = config_data["trashCharacters"]

def trashAdder(text):
    result = []
    for i in range(0, len(text), 2):
        result.append(text[i:i+2])
        if i+2 < len(text):
            result.append(random.choice(trashCharacters))
            
    return ''.join(result)


with open(filename, 'r', encoding='utf-8') as text_file:
    input_text = text_file.read()

    modified_text = trashAdder(input_text)
    print(modified_text)
