import sys

input = [s[:-1] for s in sys.stdin.readlines()]
print(input)
time = input[0].split(": ")[-1].split()
distance = input[1].split(": ")[-1].split()

print(time)
print(distance)
res = 1
for idx, i in enumerate(time):
    count = 0
    for n in range(int(i)):
        travelable_distance = (int(i) - n) * n
        if travelable_distance > int(distance[idx]):
            count+=1
    print(count)
    res = res * count
print(res)