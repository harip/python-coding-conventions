import os,sys

def testMath(a,b,c):
    z=(a*a)+(b*b)+2*a*b

    if (z>c):
        return c
    elif (z==c):
        return c
    else:
        return z
