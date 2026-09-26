# find missing no in a sequence of nos in an array
arr=[1,2,3,4,6,7]
n=7
expected=n*(n+1)//2
actual=sum(arr)
missing=expected-actual
print(missing)
print(actual)
