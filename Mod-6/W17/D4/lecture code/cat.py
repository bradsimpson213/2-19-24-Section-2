
class Cat:
    breed = "American Short Hair"
    def __init__(self, color, age, name="Kitty"):
        self._color = color
        self._age = age
        self._name = name
        # self.breed = "Fesity Cat Ninja 🥷🏻"
        # print(f"You just created a cat named {self.name}")
        # print(self.speak())


    @property
    def name(self):
        return self._name


    @name.setter 
    def name(self, new_name):
        if len(new_name) > 15:
            print("Thats too long of a name for a cat!")
        else:
            self._name = new_name


    @property
    def age(self):
        return self._age

    @age.setter 
    def age(self, new_age):
        if new_age > 38:
            print("Thats too old an age for a cat!")
        elif new_age < 0:
            print("Cats can't have negative ages...")
        else:
            self._age = new_age


    def speak(self):
        return f"{self.name} says 'Meow!'"


    @classmethod
    def cat_factory(cls, cats):
        new_cats = [cls(color, age, name) for color, age, name in cats]
        # print(new_cats)
        # print([cat.speak() for cat in new_cats])
        return new_cats

    
    @staticmethod
    def feed_me():
        for _ in range(5):
            print("Meowwww?!?!")



    def __repr__(self):
        return f"< {self._color} Cat named {self.name} >"


    def __str__(self):
        return f"< {self._color} Cat named {self.name} >"



make_cats = Cat.cat_factory([("black", 7, "Blue"),("tuxedo", 7, "Patch"),("gray", 13, "Mimi")])
blue, patch, mimi = make_cats
print(blue)
# blue = Cat('black', 7, 'Blue')
# patch = Cat('tuxedo', 7, 'Patch')
# print(blue.name)
# blue.name = "Red rasberry is a long name..."
# print(blue.name)
# blue.name = "Blueberry"
# print(blue.name)
# print(patch.age)
# patch.age = 40
# patch.age = -2
# patch.age = 8
# print(patch.age)
# print(blue.speak())
# print(blue.breed)
# print(patch.breed)
# print(Cat.breed)
# Cat.breed = "American Long Hair"
# blue.breed = "Feisty Cat Ninja 🥷🏻"
# print(blue.breed)
# print(patch.breed)
# print(Cat.breed)
# print(blue.breed)
# print(patch.feed_me())
# print(Cat.feed_me())
