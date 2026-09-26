# prime nos from 1 to N
n=100
sum=0
isprime=True
for i in range(1,n):
    if(n%i==0):
        isprime=False
        break
    if(isprime==True):
        sum+=i
print(sum)