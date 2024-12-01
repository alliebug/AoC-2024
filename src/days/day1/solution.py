# part 1
from collections import defaultdict


with open("input.txt", "r") as file:
    input = file.readlines()

arr1 = []
arr2 = []
for i in range(len(input)):
    a = input[i].split()
    arr1.append(int(a[0]))
    arr2.append(int(a[1]))

arr1 = sorted(arr1)
arr2 = sorted(arr2)
sum = 0
for i in range(len(arr1)):
    diff = abs(arr1[i] - arr2[i])
    sum += diff

print(sum)

# part 2
with open("input.txt", "r") as file:
    input = file.readlines()

arr = []
d = defaultdict(int)
for i in range(len(input)):
    a = input[i].split()
    arr.append(int(a[0]))
    temp = int(a[1])
    d[temp] += 1

total_score = 0
for i in range(len(arr)):
    score = d.get(arr[i], 0) * arr[i]
    total_score += score
print(total_score)