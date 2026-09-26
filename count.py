# count digits
n="145679874"
count=0
for i in range(len(n)):
    count+=1
print(count)

# sum of digits
n=145
sum=0
while(n>0):
    digits=n%10  #5,4,1
    sum=sum+digits  #5,9,10
    n=n//10
print(sum)