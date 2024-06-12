# GUESSING GAME

# Things we will need...
# 1. random - generate random numbers - x
# 2. user input - x
# 3. iterating - x
# 4. guess tracker - number of guesses - x
# 5. conditionals  - x
# 6. helper function?

from random import randint


def guess(start, end):
    """helper function to handle user guesses"""
    bad_guess = True

    while bad_guess:
        try:
             user_guess = int(input(f"Pick a number from {start} to {end}: "))

        except ValueError:
            print("We need to enter numbers for the guessing game, please try again!")
            continue

        else: 
            if user_guess < start or user_guess > end:
                print(f"Numbers need to between {start} to {end}, not {user_guess}")
                continue
        
        bad_guess = False
        return user_guess



def guessing_game():
    """its the guessing game, duh!"""
    print("Welcome to the guessing game!")
    start = 1
    end = 20
    winning_number = randint(start, end)
    guesses = 5

    while guesses > 0:
        # user_guess = int(input(f"Pick a number from {start} to {end}: "))
        user_guess = guess(start, end)
        guesses -= 1

        if user_guess == winning_number:
            print(f"YOU GUESSED IT!!! The number was {winning_number}. You used {5 - guesses} guesses")
            # play again
            return 

        elif user_guess > winning_number:
            print(f"You guessed to high! Try again!  You have {guesses} guesses left")
        
        else:
            print(f"You guessed to low! Try again!  You have {guesses} guesses left")

    print(f"You have ran out guesses!  Sorry you lose.  The number was {winning_number}")


guessing_game()
