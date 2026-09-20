n=int(input("enter the total number of elements:"))
arr=[]
for i in range(n):
    x=int(input("enter the elements:"))
    arr.append(x)
print(arr)

key=int(input("enter the target value:"))
found=False
low=0
high=n-1
while low<=high:
    mid=(low+high)//2
    if arr[mid]==key:
        print("element found at index",mid)
        found=True
        break
    elif key>arr[mid]:
        low=mid+1
    else:
        high=mid-1

if(found==False):
    print("element not found")