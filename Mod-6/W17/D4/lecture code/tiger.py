from cat import Cat


class Tiger(Cat):
    def __init__(self, color, age, name, teeth):
        super().__init__(color, age, name)
        self.teeth = teeth
        print(self.speak())


    def speak(self):
        if self.name == "Tony":
            return f"{self.name} says 'They're GREAT!!!'"
        else:
            return f"{self.name} says 'RAWRRRRRWWWWW!!!'" 


    
    def __repr__(self):
        return f"< {self._color} Tiger named {self.name} >"


    def __str__(self):
        return f"< {self._color} Tiger named {self.name} >"


    def __len__(self):
        return self.age           



tony = Tiger("orange", 72, "Tony", 30)
tigger = Tiger("orange", 90, "Tigger", 4)
print(tony)
print(len(tony))
# tony.len()


