# common elements in two arrays
arr=[1,6,7,9,8]
arr1=[1,2,9,7,10]
common=[]
for i in range(len(arr)):
    if arr[i] in arr1:
        common.append(arr[i])
print(common)