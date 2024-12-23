import re
from fractions import Fraction

def inverse_matrix(matrix):
    """
    Calculates the inverse of a square matrix using Gauss-Jordan elimination.
    Handles big integers using the Fraction class.
    """

    n = len(matrix)
    if n != len(matrix[0]):
        raise ValueError("Matrix must be square")

    # Create an augmented matrix with the identity matrix on the right
    augmented_matrix = [row + [int(i == j) for j in range(n)] for i, row in enumerate(matrix)]

    # Apply Gauss-Jordan elimination
    for i in range(n):
        # Find the pivot element
        pivot_row = i
        for j in range(i + 1, n):
            if abs(augmented_matrix[j][i]) > abs(augmented_matrix[pivot_row][i]):
                pivot_row = j

        # Swap rows if necessary
        if pivot_row != i:
            augmented_matrix[i], augmented_matrix[pivot_row] = augmented_matrix[pivot_row], augmented_matrix[i]

        # Make the pivot element 1
        pivot = augmented_matrix[i][i]
        if pivot == 0:
            raise ValueError("Matrix is singular")

        for j in range(2 * n):
            augmented_matrix[i][j] = Fraction(augmented_matrix[i][j], pivot)

        # Eliminate other elements in the column
        for j in range(n):
            if j != i:
                factor = augmented_matrix[j][i]
                for k in range(2 * n):
                    augmented_matrix[j][k] -= factor * augmented_matrix[i][k]

    # Extract the inverse matrix
    inverse = [row[n:] for row in augmented_matrix]

    return inverse

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

# i * a_x + j * b_x == final_x
# i * a_y + j * b_y == final_y
#
# A x = b
# where A = |a_x b_x|
#           |a_y b_y|
#
#  x= |i|    b = |final_x|
#     |j|        |final_y|
#
# x = A^-1 b
## does not work
def play(game):
    a_x, a_y, b_x, b_y, final_x, final_y = game
    m_x = 10000000000000 + final_x
    m_y = 10000000000000 + final_y
    m_x = final_x
    m_y = final_y
    A = [[a_x, b_x], [a_y, b_y]]
    A_inv = inverse_matrix(A)
    print(A_inv)
    b = [[m_x], [m_y]]
    x = [A_inv[0][0] * b[0] + A_inv[0][1] * b[1], A_inv[1][0] * b[0] + A_inv[1][1] * b[1]]
    ans = 3* x[0] + x[1]
    # print(ans)
    if ans != int(ans):
        return 0
    ans = int(ans)
    print(f'{x=}, {ans=}')
    return int(ans)


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
    temp = play(game)
    ans += temp

print(ans)
        
        



