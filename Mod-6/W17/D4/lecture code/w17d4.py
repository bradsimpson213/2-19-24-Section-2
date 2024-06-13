# IMPORTING


# import random
# random.choice([1, 2, 3, 4])
# random.randint(1,10)


# from random import choice, randint as pickyInt

# choice([2, 3, 4])
# pickyInt(1, 5)

# from helpers import nums, add2, add4
# from helpers2 import add6, add8

# from helpers import nums, add2, add4, add6, add8, add10
# from random import choice, choices, randint, randflaot, sample


# print(nums)

# print(add2(2))
# print(add4(2))
# print(add6(2))
# print(add8(2))


# DECORATORS
# from datetime import datetime 



# def timer(func):
#     """ decorator defineition for timing the 
#     wrapped function"""
#     def wrapper(*args, **kwargs):
#         start_time = datetime.now()
#         val = func(*args, **kwargs)
#         print(val)
#         end_time = datetime.now()
#         time_elapsed = end_time - start_time
#         return time_elapsed

#     return wrapper


# @timer
# def say_hi(name="you"):
#     return f"Hello there {name}!"

# @timer
# def say_bye():
#     return "Have a nice day!"

# timed_hi = timer(say_hi)
# print(timed_hi())
# print(say_hi("Brad"))
# print(say_bye())
# print(say_hi())

# @timer
# def do_stuff(num):
#     counter = 1
#     for val in range(num):
#         counter += 1
#     return counter

# # print(do_stuff(100_00))
# # print(do_stuff(1_000_00))
# # print(do_stuff(100_000_000))
# print(do_stuff(1_000_000_000))


# John's chained decorator# Write your function here.
# def power_of_two(func):
#     def inner(*args, **kwargs):
#         x = func(*args, **kwargs)
#         return x * x
#     return inner

# def multiply_by_three(func):
#     def inner(*args, **kwargs):
#         x = func(*args, **kwargs)
#         return x * 3
#     return inner


# @multiply_by_three
# @power_of_two
# def num(a, b):
#     return a + b


# print(num(5, 2))  #> 441  7 => 49 => 147  
#                        # 7 => 21 => 441
# print(num(8, 2))  #> 900
# print(num(4, 9))  #> 1521



# def chain_decorator(func):
#     @power_of_two
#     @multiply_by_three
#     def inner(*args, **kwargs):
#         x = func(*args, **kwargs)
#         return x
#     return inner


# @chain_decorator
# def num(a, b):
#     return a + b

# Regular Polygon
# Implement a class called RegularPolygon with the following:

# 1. A constructor method that initializes two instance properties: the number
#    of sides for the polygon and the length of each side. If the number of
#    sides is less than 3, raise an Exception with the message "A polygon must
#    have at least 3 sides."

# 2. A class variable called type set to an inital value of "Polygon"

# 3. An instance method called identify_polygon that identifies the type of a
#    polygon based on its number of sides. This method should set the type class
#    variable for this instance to the identified type based on the logic in the
#    starter repl.

# 4. A class method called polygon_factory that is a factory function for
#    creating instances of the class. This method should take a list of tuples
#    as an argument, where each tuple contains the (num_sides, length) for each
#    RegularPolygon instance to be created. The method should return a list of
#    all the class instances created.
 
# 5. A static method called get_perimeter that calculates and returns the
#    perimeter of a polygon. This method should take an instance of the
#    `RegularPolygon` class and return the calculated perimeter. (The perimeter
#    of a regular polygon is the product of the number of sides multiplied by
#    the length of each side.)

class RegularPolygon:
    type = "Polygon"
    def __init__(self, num_sides, length):
        if num_sides < 3:
            raise Exception("A polygon must have at least 3 sides.")
        self.num_sides = num_sides
        self.length = length

    
    def identify_polygon(self):
        identifier_dict = {
            3: "Triangle",
            4: "Quadrilateral",
            5: "Pentagon",
            6: "Hexagon",
            7: "Heptagon",
            8: "Octagon",
            9: "Nonagon",
            10: "Decagon"
        }
        try:
            self.type = identifier_dict[self.num_sides]

        except KeyError:
            self.type = f"Polygon with {self.num_sides} sides"

    @classmethod
    def polygon_factory(cls, new_polygons):
        return [cls(num_sides, length) for num_sides, length in new_polygons]
        
    @staticmethod
    def get_perimeter(polygon):
        return polygon.num_sides * polygon.length


pentagon = RegularPolygon(5, 5)
octagon = RegularPolygon(8, 10)
dodecagon = RegularPolygon(12, 1)
perimeter = dodecagon.num_sides * dodecagon.length

print(f"{pentagon.num_sides} sides of length {pentagon.length}") # 5 sides of length 5
print(f"{octagon.num_sides} sides of length {octagon.length}") # 8 sides of length 10
print(f"{dodecagon.num_sides} sides of length {dodecagon.length}") # 12 sides of length 1

pentagon.identify_polygon()
octagon.identify_polygon()
dodecagon.identify_polygon()

print(pentagon.type) # Pentagon
print(octagon.type) # Octagon
print(dodecagon.type) # Polygon with 12 sides

print(RegularPolygon.get_perimeter(pentagon)) # 25
print(RegularPolygon.get_perimeter(octagon)) # 80
print(RegularPolygon.get_perimeter(dodecagon)) # 12

print(RegularPolygon.polygon_factory([(5, 5), (3, 2), (8, 10)])) # prints a list of 3 RegularPolygon objects

not_a_polygon = RegularPolygon(2, 5) # Exception: A polygon must have at least 3 sides.






