def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

def solution(string):
    res = ""
    for char in string:
        res = char + res
    return res