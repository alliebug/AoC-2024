import sys

input = [s[:-1] for s in sys.stdin.readlines()]
# input = [
#     'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
# 'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
# 'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
# 'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
# 'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
# 'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11'
# ]
d={}
for idx, line in enumerate(input):
    temp = line.split(": ")[-1].split("|")
    winning = temp[0].split(" ")
    elf = temp[1].split(" ")
    print(elf)
    count = 0
    for x in elf:
        if x in winning and x != "":
            count +=1
    print(f'count: {count}')
    if count > 0:
        copies = d.get(idx+1, 0) +1
        print(f'copies: {copies}')
        for i in range(count):
            temp_num = idx + i + 2
            d[temp_num] = d.get(temp_num,0) + 1*copies
            print(d)
print(sum(d.values())+len(input))

# print(sum)
