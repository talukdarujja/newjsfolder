A=[[0,0,0],[0,0,0],[0,0,0]]
B=[[0,0,0],[0,0,0],[0,0,0]]
C=[[0,0,0],[0,0,0],[0,0,0]]

for i in range(3):
    for j in range(3):
        A[i][j]=int(input("enter the elements of A:"))

for i in range(3):
    for j in range(3):
        B[i][j]=int(input("enter the elements of B:"))

for i in range(3):   #no of rows in A
    for j in range(3):   #no of columns in B
        for k in range(3):   #no of rows in B
            C[i][j]+=A[i][k]*A[k][j]

for r in C:
    print(r)



    