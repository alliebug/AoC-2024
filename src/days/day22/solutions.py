with open("input.txt", "r") as file:
    content = file.read()
    input = content.splitlines()

def mix_and_prune(num, secret):
    res = num ^ secret
    res = res % 16777216
    return res

# input = [1, 10, 100, 2024]
res = 0
for i in input:
    i = int(i)
    secret = i
    for k in range(2000):
        i *= 64
        i = mix_and_prune(i, secret)
        secret = i
        i = i // 32
        i = mix_and_prune(i, secret)
        secret = i
        i *= 2048
        i = mix_and_prune(i, secret)
        secret = i
    # print(i)
    res += i

print(res)
