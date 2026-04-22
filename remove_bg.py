from PIL import Image

def remove_white_bg(input_path, output_path, tolerance=220):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # Check if pixel is close to white
        if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
            # Change all white (also shades of whites)
            # pixels to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print("Background removed successfully")

remove_white_bg("images/logo-original.jpeg", "images/logo-transparent.png")
