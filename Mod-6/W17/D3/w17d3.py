# TUPLES
# tuple1 = ("red", 'blue')
# print(tuple1)
# tuple1 += 'green', "orange"
# print(tuple1)


# # EMPTY TUPLE
# tuple2 = ()
# tuple3 = tuple()

# # SINGLETON TUPLE
# tuple3 = (1,)
# tuple4 = 1,

# print(tuple1[::-1])


# for color in tuple1:
#     print(color)

# DAYS = ("mon", "tues", "wed", 'thurs', "fri")

# sorted_days = sorted(DAYS)
# print(tuple(sorted_days))


# def sum_and_average(lst):
#     """returns the sum and average of a provided list"""
#     list_sum = sum(lst)
#     list_avg = list_sum / len(lst)
#     return (list_sum, list_avg) 


# # print(sum_and_average([1, 2, 3, 4, 5]))
# sum_val, avg_val = sum_and_average([1, 2, 3, 4, 5])
# print(sum_val, avg_val)


# def summer(num1, num2, num3=15, *args):
#     """function that will sum anything we throw at it"""
#     total = sum([num1, num2, num3])
#     print(args)
#     for arg in args:
#         total += arg

#     return total


# print(summer(5, 10, 20, 25, 30, 35))

# def compare(val):
#     return val[1]


# def index_sort(tuple_list):
#     sorted_list = sorted(tuple_list, key=compare, reverse=True) # lambda tup: tup[1]
#     return sorted_list


# print(index_sort([(1, 2, 3), (6, 8, 9), (0, 5, 0), (2, 0, 4)])) #> [(2, 0, 4), (1, 2, 3), (0, 5, 0), (6, 8, 9)]
# print(index_sort([(9, 55, 11), (7, 14, 5), (32, 41, 12), (8, 5, 2)])) #> [(8, 5, 2), (7, 14, 5), (32, 41, 12), (9, 55, 11)]
# print(index_sort([(0, 9, 1), (4, 3, 0), (6, 5, 14), (64, 32, 28)])) #> [(4, 3, 0), (6, 5, 14), (0, 9, 1), (64, 32, 28)]


# RANGES

# some_range = range(10, -1, -1)
# print(some_range)
# print(tuple(some_range))


# for index in some_range:
#     print(index)

# lunches = ['wings', 'pizza', 'salad', 'chicken parm sandwachj', 'BLT Wrap']

# print(tuple(enumerate(lunches)))

# for index, food in enumerate(lunches, 1):
#     print(index, food )

# def recur_factorial(num):
#     if num == 1:
#         return num
    
#     else: 
#         return num * recur_factorial(num - 1)


# def factorial(num):
#     total = 1
#     for index in range(1, num + 1):
#         total *= index

#     return total


# print(factorial(1))     #> 1
# print(factorial(8))     #> 40320

# def can_nest(list1, list2):
#     list1_min = min(list1)
#     list1_max = max(list1)
#     list2_min = min(list2)
#     list2_max = max(list2)
#     return list1_min > list2_min and list1_max < list2_max


# print(can_nest([1, 2, 3, 4], [0, 6]))  #> True
# print(can_nest([3, 1], [4, 0]))        #> True
# print(can_nest([9, 9, 8], [8, 9]))     #> False
# print(can_nest([1, 2, 3, 4], [2, 3]))  #> False
# print(factorial(12))    #> 479001600

# DICTIONARY

# meals = {
#     "breakfast": "eggs",
#     "elevensies": "bagel",
#     "lunch": "wings",
#     "dinner": "roast beef",
#     4: "meals",
#     True: "even more meals",
# }

# print(meals)
# print(meals[4])
# print(meals["elevensies"])

# print(meals.get("breakfasst", "no key for you!"))

# if meals.get("second breakfast") is None:
#     meals["second breakfast"] = "apple"
#     print(meals)
# else:
#     print("Key already exists!")

# if "second breakfast" in meals:
#     # meals["second breakfast"] = "apple"
#     print("found it")
# else:
#     print("Key already exists!")

meals = {
    "breakfast": "eggs",
    "elevensies": "bagel",
    "lunch": "wings",
    "dinner": "roast beef",
    4: "meals",
    True: "even more meals",
}

# meals["supper"] = "turkey"
# print(meals)
# meals["lunch"] = "taters"
# print(meals) 
# del meals[True]
# print(meals) 
# meals.update({"afternoon tea": "earl gray", "dessert": "apple pie"})
# print(meals)

# print(meals.keys())
# print(meals.values())
# print(meals.items())

# for key in meals.keys():
#     print(key)

# for key, value in meals.items():
#     print(key, value)


# def summer(num1, num2, num3=15, *args, **kwargs):
#     """function that will sum anything we throw at it"""
#     total = sum([num1, num2, num3])
#     print(args)
#     for arg in args:
#         total += arg

#     print(kwargs)
#     for kwarg in kwargs.values():
#         total += kwarg

#     return total


# print(summer(5, 10, 20, 25, 30, 35, num7=40, num8=45))

# lst1 = ['a', 'b', 'c']
# lst2 = [1, 2, 3]
# lst3 = [*lst1, *lst2]
# print(lst3)

# dict1 = {
#     "breakfast": "eggs",
#     "lunch": "leftover beef and broccoli",
#     "dinner": "wings"
# }

# dict2 = {**dict1}

# print(dict2)



# def merge_lists(lst1, lst2):
#     return_dict = {}

#     for index, value in enumerate(lst1):
#         return_dict[value] = lst2[index]

#     return return_dict



# def merge_lists2(lst1, lst2):
#     merged_list = []

#     for index in range(len(lst2)):
#         merged_tuple = (lst1[index], lst2[index])
#         merged_list.append(merged_tuple)

#     print(merged_list)
#     return dict(merged_list)

# def merge_lists3(lst1, lst2):
#     dict_maker = zip(lst1, lst2)
#     print(dict_maker)
#     # print(list(dict_maker))
#     return dict(dict_maker)




# lst1 = ('a', 'b', 'c')
# lst2 = (1, 2, 3)
# merged_dict = merge_lists3(lst1, lst2)
# print(merged_dict)      # { 'a': 1, 'b': 2 }


# SETS
# empty set
# not_a_set = {}
# empty_set = set()

# set_for_reals = {1, "hello"}
# ones = {1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5 }
# print(ones)

# list78 = [1, 2, 2, 2, 3, 3, 3, 4, 5, 5, 6, 6, 6, 7]

# # print(list(set(list78)))

# print(set("hello"))
# # print(ones[2])

# for val in ones:
#     print(val)


# print( 3 in ones)

# my_set = {1, 2, 3, 4}
# my_set.add("a")
# print(my_set)
# my_set.update({5, 6})
# print(my_set)
# my_set.remove(3)
# print(my_set)
# print(len(my_set))


a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}
# UNION
# print(a | b)
# print( a.union(b))

# INTERSECTION
# print( a & b )
# print(a.intersection(b))

# DIFFERENCE
# print(a - b)
# print(b - a)
# print(a.difference(b))

# SYMETRIC DIFFERENCE
# print( a ^ b)
# print(a.symmetric_difference(b))


# BUILT IN FUNCTIONS
# names = ["JAMES", "julie", "Ana", "Ria"]

# def compare(name):
#     return name.upper()

# sorted_names = sorted(names, key=lambda name: name.upper(), reverse=True)
# print(sorted_names)

# All/ANY
# test = ['', False, "B"]
# test2 = [1, 2, 3]
# test3 = {}

# # print(all(test))
# # print(all(test2))
# # print(all(test3))
# # ALL IS HAPPY WHEN NOTHING INSIDE IS FALSE

# print(any(test))
# print(any(test2))
# print(any(test3))
# ANY IS HAPPY WHEN AT LEAST 1 THING IS TRUTHY

# FILTER
# scores = [90, 86, 75, 91, 62, 99, 88, 90]
# only_as = filter(lambda score: score >= 90, scores)
# print(only_as)
# scores_tuple = tuple(only_as)
# print(list(scores_tuple))

# MAP
# def get_grade(num):
#     """helper function to map through grades converting 
#     numerical values to letter grades"""
#     if (num >= 90):
#         return "A"
#     elif (num <90 and num >= 80):
#         return "B"
#     elif (num < 80 and num >= 70):
#         return "C"
#     elif (num < 70 and num >= 60):
#         return "D"
#     else:
#         return "F"

# scores = [90, 86, 75, 91, 62, 99, 88, 90]
# only_as_letters = map(get_grade, scores)
# print(only_as_letters)
# print(list(only_as_letters))

# ZIP
# scores = [90, 86, 75, 91, 62, 99, 88, 90]
# grades = ["A", "B", "C", "A", "D", "A", "B", "A", 'B', 'Q']
# combined = zip(grades, scores)
# print(combined)
# print(list(combined))




# phones = [
#     {
#         "brand": "Apple",
#         "model": "iPhone 13 Pro",
#         "cost": 929,
#         "color": "alpine green"
#     },
#     {
#         "brand": "Samsung",
#         "model": "Galaxy S22+",
#         "cost": 999,
#         "color": "black"
#     },
#     {
#         "brand": "Google",
#         "model": "Pixel 6",
#         "cost": 599,
#         "color": "kinda coral"
#     },
#     {
#         "brand": "Apple",
#         "model": "iPhone 13 Pro",
#         "cost": 929,
#         "color": "gold"
#     },
#     {
#         "brand": "Google",
#         "model": "Pixel 6",
#         "cost": 599,
#         "color": "stormy black"
#     }
# ]


# def get_unique_models(phone_list):
#     just_models = map(lambda phone: phone['model'], phone_list)
#     print(list(set(just_models)))

# get_unique_models(phones)


# UNREADABLE LAMBDA
# def get_unique_models(phone_list):
#     seen = []
#     return filter(lambda phone: seen.append(phone['model']) is None if phone['model'] not in seen else False, phone_list)
    

#     # so what is going on here in the filter method???
#     # think of the lambda statement being written like this...
#     if phone['model'] not in seen:
#         return seen.append(phone['model']) is None
#     else:
#         return False
#     #
    # Because this is a callback in a filter, it needs to return True or False
    # to determine if the value gets added to our filtered list
    #
    # In the else, we return False, makes sense...
    # The append method does not have a return, but we know that if a
    # function does not have a set return value, it returns None!
    # So we check if the return value is None, which will evaluate to true!


# COMPREHENSIONS
# my_list = [1, "2", True, 'Five', None]
# my_list_copy = [item for item in my_list]
# print(my_list_copy)
# my_list_copy_2 = [*my_list]
# print(my_list_copy_2)

nums = [-4, 1, 4, 67, 156, 512]

# mapped_nums = [num * 2 for num in nums]
# print(mapped_nums)
# grades = ["A", "B", "C", "A", "D", "A", "B", "A", 'B', 'Q']
# mapped_graded = [grade.lower() for grade in grades]
# print(mapped_graded)

# scores = [90, 86, 75, 91, 62, 99, 88, 90]
# filtered_scores = [score for score in scores if score >= 90]
# print(filtered_scores)
# mapped_filtered_grades = [ score * 2 for score in scores if score >= 90 ]
# print(mapped_filtered_grades)

# DICTIONARYT COMPRESHENSIONS

num_dictionary = {num: num**2 for num in range(6)}
print(num_dictionary)


breaks = {
    "lunch": 2,
    "afternoon": 6,
    "EOD": 7
}

daylight_saving = { key: value + 1 for key, value in breaks.items() }
print(daylight_saving)