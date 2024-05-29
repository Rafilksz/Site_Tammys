import os
from PIL import Image

def convert_png_to_webp(src_folder, dest_folder):
    # Verifica se a pasta de destino existe, se não, cria
    if not os.path.exists(dest_folder):
        os.makedirs(dest_folder)
    
    # Itera sobre todos os arquivos na pasta de origem
    for filename in os.listdir(src_folder):
        if filename.endswith(".png"):
            # Caminho completo do arquivo de origem
            img_path = os.path.join(src_folder, filename)
            
            # Abre a imagem PNG
            with Image.open(img_path) as img:
                # Define o caminho de destino com a extensão .webp
                base_name = os.path.splitext(filename)[0]
                webp_path = os.path.join(dest_folder, base_name + ".webp")
                
                # Salva a imagem em formato WebP
                img.save(webp_path, "WEBP", quality=80)
                print(f'Convertido: {filename} -> {base_name}.webp')

# Diretórios de origem e destino
src_folder = r"c:\Users\Thaisa\Documents\Site_Tammys\assets\lib\Album_2"
dest_folder = r"c:\Users\Thaisa\Documents\Site_Tammys\assets\lib\Album_2\webp"

# Chama a função para converter as imagens
convert_png_to_webp(src_folder, dest_folder)