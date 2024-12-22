with open("input.txt", "r") as file:
    content = file.read()
    input = content.splitlines()

    rules = []
    pages = []

    for i in range(len(input)):
        if '|' in input[i]:
            temp = input[i].split('|')
            rules.append(temp)
        elif ',' in input[i]:
            temp = input[i].split(',')
            pages.append(temp)
    
    for i in range(len(pages)):
        for j in range(len(pages[i])):
            for x in rules:
                if pages[i][j]