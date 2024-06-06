def create_id(base, number):
    idx = base

    x = number
    digits = 0
    while (x != 0):
        x //= 10
        digits += 1
    while digits != 4:
        idx += "0"
        digits += 1

    idx += str(number)

    return idx
