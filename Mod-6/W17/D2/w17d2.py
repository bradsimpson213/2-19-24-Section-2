# BOOLEANS

# caffeine = True
# print(caffeine)


# print("1" == 1)

# XOR 
# print(True ^ True)
# print(True ^ False)
# print(False ^ False)
# print(False ^ True)

# print(True and True)
# print(True or False)
# print(False and False)
# print(not True)

# def breakfast(food):
#     """take in a food arguement and judge your break choices"""

#     if food == 'waffles':
#         print(f"{food.upper()} is an excellend breakfast choice!")

#     elif food == 'pancakes':
#         print(f"{food.title()} is a good choice too!")

#     elif food == "oatmeal":
#         print(f"{food} is edible i guess? 🤷")

#     else:
#         print(f"{food.title()} is okay, but not waffles!")


# breakfast("waffles")
# breakfast("pancakes")
# breakfast("oatmeal")
# breakfast("bagel")



# XOR 
# Write your function, here.
# def xor(val1, val2):
#     return val1 ^ val2


# # print(xor(False, False))   #>  False
# # print(xor(True, False))   #>  True
# # print(xor(True, True)) #>  False
# print(xor(5, 3))  #> 6
# # # print(xor(8, 4))  #> 12
# # # print(xor(2, 2))  #> 0
# # # print(xor(1, 2))  #> 3
# # # print(xor(4, 4))  #> 0
# print(bin(True))
# print(bin(False))
# print(bin(5))
# print(bin(3))

# 0b101
# 0b011
# 0b110
# print(bin(6))

# STRINGS

# my_string = "my pizza's"
# my_second_string = 'tacos'

# my_multi_line_string = '''this is 
# a multi line string
# all preserved 
# in the multi
# line'''

# print(my_multi_line_string)
# print(len(my_multi_line_string))

# lunch = 'sandwich'

# print(f"Today i am having a {lunch + 's'} for lunch!")
# print("pizza" + " is yummy!")
# print("pizza " * 3)

# food = 'waffle'
# print(food[1])
# print(food[-1])
# # print(food[start:stop:step])
# print(food[1:4])
# print(food[:4])
# print(food[1:5:2])
# print(food[::-1])

# def save_the_world_from_evil():
#     print("world saved!")

# print(food.index("af"))
# print(food.index("f"))
# print(food.find('g'))
# 
# save_the_world_from_evil()

# print(food.count('f'))
# print(food.split(' '))
# print(list(food)) # split on every character

# lunches = ['wings', 'pizza', "tacos"]
# print(", ".join(lunches))


# # Write your function, here.

# def is_palindrome(string):
#     reversed_string = string[::-1]
#     # print(reversed_string)
#     return string == reversed_string
  


# print(is_palindrome("kayak")) # True
# print(is_palindrome("app"))  # False
# print(is_palindrome("racecar")) # True
# print(is_palindrome("valid")) # False




# Problem 7 - Recursive String
# Write your function, here.
# def recursive_string(string):
#     if len(string) == 0:
#         return string

#     return recursive_string(string[1:]) + string[0]

# #                             #ivic     + c
# #                             #vic + i
# #                             #ic + v
# #                             #c   + i
# #                             #     

# print(recursive_string("civic")) # civic
# print(recursive_string("refer")) # refer
# print(recursive_string("string")) # gnirts
# print(recursive_string("avocado")) # odacova
# print(recursive_string("application")) # noitacilppa



# NUMBERS
my_int = 12_345
my_bit_int = 1_000_000_000
my_float = 23.45
# print(str(my_int))
# print(str(my_float))

# print(10 / 2)
# print(10 // 3)
# print(10 % 3)

# print(True == 1)
# print(False == 0)
# print(True is 1)
# print(False is 0)
# a = None
# b = "pizza"
# c = None
# d = 4
# e = True
# f = False
# g = 1

import os
import time


# def recursive_countdown(num):
#     if num <= 0:
#         os.system('clear')
#         print("Happy New Year!")
#         return

#     else:
#         os.system('clear')
#         print(num)
#         # time.sleep(1)
#         recursive_countdown(num - 1)


# recursive_countdown(5) #> 5 4 3 2 1



# def first_before_second(string, first, second):
#     return string.rindex(first) < string.index(second)

# print(first_before_second("a rabbit jumps joyfully", "a", "j"))
# #> True
# # Every instance of "a" occurs before every instance of "j".

# print(first_before_second("knaves knew about waterfalls", "k", "w"))
# #> True

# print(first_before_second("happy birthday", "a", "y"))
# #> False
# # The "a" in "birthday" occurs after the "y" in "happy".

# print(first_before_second("precarious kangaroos", "k", "a"))
# # > False


# STATEMENTS
# index = "banana"

# INDEX = 0
# INDEX = "banana"

# index = 0 

# while index < 5:
#     if index == 3:
#         print('We found a 3!')

#     else: 
#         print("Not a 3")

#     index += 1


# while True:
#     if index < 4:
#         index += 1
#         print("still lopping")
#         continue

#     print("The end of the loop is here...")
#     break


foods = ['wings', 'pizza', 'mac n cheese', "salad"]

# for food in foods:
#     print(food)


# for letter in "waffle":
#     print(letter)

# print("waffle" in foods)
# print("pizza" in foods)


# RANGE
# print(list(range(10)))
# # range(start, stop, step)

# for index in range(len(foods)):
#     print(index, foods[index])


# from random import randint
# import os
# from time import sleep

# count = 99

# while count < 1000:
#     os.system("clear")
#     print(f"♫ {count} little bugs iin our code...♫")
#     sleep(2.5)
#     print(f"♫ {count} pesky little bugs...♫")
#     sleep(2.5)
#     print("♫ take one down and patch it around...♫")
#     sleep(2.5)
#     new_bugs = randint(1, 100)
#     count += new_bugs
#     print(f"♫ {count} little bugs in our code! ♫")
#     sleep(2.5)


# TRY/EXCEPT

# num = 0
# # print(5/num)


# try:
#     print("In the try block")
#     print(5/num)

# except ZeroDivisionError:
#     print("we can not divide by zero!")

# except TypeError:
#     print("we can not do math with strings")


# else:
#     print("Only going to see me if the try block was successful")

# finally:
#     print("You are always going to see me print")


# raise Exception("This was an error!")

def seq_of_numbers(seq):
    pass



print(seq_of_numbers("1211"))
# This is "one 1, one 2, two 1s"
# Prints "11,12,21"
# 111221

print(seq_of_numbers("111221"))
# This is "three 1s, two 2s, and one 1"
# Prints "31,22,11"

print(seq_of_numbers("31131211131221"))
# This is "one 3, two 1s, one 3, one 1, one 2, three 1s,
#    one 3, one 1, two 2s, and one 1"
# Prints "13,21,13,11,12,31,13,11,22,11"