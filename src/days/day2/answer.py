import sys
import re


def parse_string(input_string):
    # Split the input string by ':'
    games = input_string.split(':')
    game_num = int(games[0].split()[-1])

    result_dict = {}

    for game in games[1].split(';'):
        # Extract color information
        # print(f'game: {game}')

        # Split the colors information into individual color-count pairs
        color_pairs = [pair.strip().split() for pair in game.split(',')]
        # print(f'color_pairs: {color_pairs}')

        # Create a list of dictionaries for the current game
        game_d = {}
        for count, color in color_pairs:
            if game_d.get(color):
                game_d[color] += int(count)
            else: 
                game_d[color] = int(count)
        # game_d = {color: int(count) for count, color in color_pairs}

        # Add the game list to the result dictionary
        result_dict.setdefault(game_num, []).append(game_d)

    return result_dict


input = [s[:-1] for s in sys.stdin.readlines()]
# input = ['Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
# 'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
# 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
# 'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
# 'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green]']
sum = 0
for line in input:
    parsed = parse_string(line)
    # print(parsed)
    (k, v), = parsed.items()

    # BAD = False
    RED = 0
    BLUE = 0
    GREEN = 0
    for game in v:
        for color, num in game.items():
            # print(color, num)
            # if (color == 'red' and num > 12) or (color == 'blue' and num > 14) or (color == 'green' and num > 13):
            #     BAD = True
            #     break
            if color == 'red':
                RED = max(RED, num)
            if color == 'blue':
                BLUE = max(BLUE, num)
            if color == 'green':
                GREEN = max(GREEN, num)
    res = RED*BLUE*GREEN
    sum+=res

        

    # if not BAD:
    #     # print(parsed)
    #     sum+=k

print(sum)