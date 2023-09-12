import os
from tkinter import *

def submit():
    name = entry.get()
    if not name:
        root.destroy()
        return
    print(f"Hello, {name}!")
    entry.delete(0, END)
    create_component(name)
    
    

def search_src():
    global src_path
    base_dir = os.path.dirname(os.path.abspath(__file__))
    if "src" in os.listdir(base_dir):
        print("Found 'src' folder in the script directory!")
        src_path = os.path.join(base_dir, "src")
        if "components" in os.listdir(src_path):
            print("Found 'components' folder in the 'src' directory!")
        else:
            print("'components' folder not found in the 'src' directory. Creating 'components' folder...")
            os.mkdir(os.path.join(src_path, "components"))
            print("'components' folder created successfully!")
        open_window()
    else:
        print("'src' folder not found in the script directory.")

def create_component(name):
    name_capitalized = name.capitalize()
    component_path = os.path.join(src_path, "components", name_capitalized)
    os.mkdir(component_path)
    with open(os.path.join(component_path, f"{name_capitalized}.jsx"), "w") as f:
        f.write(f"import './{name}.scss';\n")
        f.write(f"\n\n")
        f.write(f"const {name_capitalized} = () => {{\n")
        f.write(f"    return (\n")
        f.write(f"    )\n")
        f.write(f"}}\n")
        f.write(f"\n\n")
        f.write(f"export default {name_capitalized};\n")
        name_lowercase = name[0].lower() + name[1:]
    open(os.path.join(component_path, f"{name_lowercase}.scss"), "w").close()

def open_window():
    global root, entry
    root = Tk()
    root.title("Enter your name")

    frame = Frame(root, padx=20)
    frame.pack()

    entry = Entry(frame, width=30)
    entry.pack()
    entry.focus_set()

    submit_button = Button(frame, text="Submit", command=submit)
    submit_button.pack()

    root.bind("<Return>", lambda event: submit())

    root.mainloop()

search_src()
