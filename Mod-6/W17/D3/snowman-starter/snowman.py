import os
from random import choice
from logo import logo 
from stages import snowman



def get_game_word():
    f = open("words.txt", "r")
    words = [ word.rstrip() for word in f]
    return choice(words)



def printer(snowman, chances, display, guesses, error=None):
    if error:
        print(error)
    print(snowman[chances])
    print((" ".join(display)))
    if guesses:
        print(f"You have guessed: {guesses}")   



def play_snowman():
    os.system("clear")
    print(logo)
    print('Welcome to Snowman!')
    print("♫♬ DO YOU WANT TO MELT A SNOWMAN!!! ♬♫")
    print("Guess the word before the snowman melts!")
    game_word = get_game_word()
    display = ["_" for _ in range(len(game_word))]
    chances = 0
    guesses = set()
    printer(snowman, chances, display, guesses)
    # print(snowman[0])
    # print((" ".join(display)))    


    play = True
    while play:
        guess = input("Guess a letter: ").lower()
        os.system("clear")


        if guess in guesses:
            error = f"You already guessed {guess.upper()}, try again no penalty"
            printer(snowman, chances, display, guesses, error)
            # print(snowman[chances])
            # print((" ".join(display)))
            # print(f"You have guessed: {guesses}")   
            continue

        if guess not in "abcdefghijklmnopqrstuvwxyz":
            error = "You can only guess letters, try again no penalty"
            printer(snowman, chances, display, guesses, error)
            # print(snowman[chances])
            # print((" ".join(display)))
            # print(f"You have guessed: {guesses}")   
            continue 

        guesses.add(guess)

        for index, letter in enumerate(game_word):
            if letter == guess:
                display[index] = letter.upper()


        if guess not in game_word:
            chances += 1
            print(f"Sorry {guess.upper()} is not in the game word...")
            if chances == 6:
                os.system("clear")
                print(snowman[-1])
                play = False
                print(f"You lose! The word was {game_word.upper()}. POOR FROSTY...💧")
                return

        # print(snowman[chances])
        # print((" ".join(display)))
        # print(f"You have guessed: {guesses}")   
        printer(snowman, chances, display, guesses)

        if "_" not in display:
            play = False
            print(f"{game_word.upper()} was the word! YOU WIN!  FROSTY LIVES!!!")
            return

            




play_snowman()
