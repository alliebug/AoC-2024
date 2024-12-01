import sys

word_to_number = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
}

input = [s[:-1] for s in sys.stdin.readlines()]
# input = [
#     'two1nine',
# 'eightwothree',
# 'abcone2threexyz',
# 'xtwone3four',
# '4nineeightseven2',
# 'zoneight234',
# '7pqrstsixteen'
# ]
# print(input)

number_list = []

for word in input:
    w = ''
    num = ''
    for char in word:
        w += char
        if char.isnumeric():
            num += char
            break
        else:
            found = False
            for key in word_to_number:
                if key in w:
                    num += word_to_number[key]
                    found = True
                    break
            if found:
                break
    number_list.append(num)
print(number_list)

number_list_2 = []
for word in input:
    w = ''
    num = ''
    for char in reversed(word):
        w = char + w
        if char.isnumeric():
            num += char
            break
        else:
            found = False
            for key in word_to_number:
                if key in w:
                    num += word_to_number[key]
                    found = True
                    break
            if found:
                break
    number_list_2.append(num)
print(number_list_2)

what = [x[0] + x[1] for x in zip(number_list, number_list_2)]
print(what)
sum = sum(int(a) for a in what)
# cleaned_word_list = [''.join([char for char in word if char.isnumeric()]) for word in number_list]
# print(cleaned_word_list)
# sum = 0
# for word in cleaned_word_list:
#     num = int(word[0] + word[-1])
#     sum += num

print(sum)