import re

with open("input2.txt", "r") as file:
    input = file.read().strip().split('\n\n')


def extract(input_string):
    matches = re.findall(r'[xX][=+](\d+)|[yY][=+](\d+)', input_string)

    # Extract the numbers
    x_value = next((m[0] for m in matches if m[0]), None)
    y_value = next((m[1] for m in matches if m[1]), None)

    # Convert to integers
    x_value = int(x_value) if x_value else None
    y_value = int(y_value) if y_value else None

    return x_value, y_value

def slow_play(game):
    a_x, a_y, b_x, b_y, final_x, final_y = game
    for i in range(1, 101):
        for j in range(1, 101):
            if i * a_x + j * b_x == final_x and i * a_y + j * b_y == final_y:
                return i * 3 + j
    return 0

## does not work
def slow_play_2(game):
    a_x, a_y, b_x, b_y, final_x, final_y = game
    m_x = 10000000000000 + final_x
    m_y = 10000000000000 + final_y
    for i in range(1, 10001):
        for j in range(1, 10001):
            if i * a_x + j * b_x == m_x and i * a_y + j * b_y == m_y:
                return i * 3 + j
    return 0


ans = 0
for i in input:
    game = []
    lines = i.split('\n')
    for l in lines:
        if 'button a:' in l.lower():
            a_x, a_y = extract(l)
            game += [a_x, a_y]
        elif 'button b:' in l.lower():
            b_x, b_y = extract(l)
            game += [b_x, b_y]
        else:
            final_x, final_y = extract(l)
            game += [final_x, final_y]
    temp = slow_play_2(game)
    ans += temp

print(ans)
        
        



