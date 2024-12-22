with open("input.txt", "r") as file:
    content = file.read()
    input = content.splitlines()

count = 0

for i in range(len(input)):
    count += input[i].count('XMAS') + input[i].count('SAMX')


print(count)