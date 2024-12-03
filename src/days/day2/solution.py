## just part 2
## for part 1, just use check

with open("input.txt", "r") as file:
    input = file.readlines()

def check(arr):
    for a in arr:
        safe = True
        for i in range(1, len(arr)-1):
            if ( arr[i] - arr[i-1] > 0 and arr[i+1] - arr[i] < 0) or ( arr[i] - arr[i-1] < 0 and arr[i+1] - arr[i] > 0):
                safe = False
                break
                
            elif abs(arr[i] - arr[i-1]) <1 or abs(arr[i]- arr[i-1]) > 3 or  abs(arr[i]- arr[i+1]) > 3 or abs(arr[i]- arr[i+1]) <1:
                safe = False
                break
    return safe

arr = []
for i in input:
    s = i.split(" ")
    g = []
    for x in s:
        g.append(int(x))
    arr.append(g)
# arr = [[1,8,9,10,11],[9,10,11,12,1], [7, 6, 4, 2, 1],[1,2, 7, 8, 9],[9, 7, 6, 2, 1],[1, 3, 2, 4, 5],[8, 6, 4, 4, 1],[1, 3, 6, 7, 9]]
count=0
for a in arr:
    if check(a):
        count += 1
        # print(a)
        continue
    for i in range(len(a)):
        b = a[:i] + a[i+1:]
        if check(b):
            count += 1
            # print(b)
            break


print(count)