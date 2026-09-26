# year is leap year or not

year=1900
if year%4==0:
    print("leap year1")

elif(year%100==0):
    print("leap year2")

elif(year%400==0):
    print("leap yr3")

else:
    print("normal yr")





# alternate method of leap year 
year=2025
if year%4==0 or year%100==0 or year%400==0:
    print("leap year1")

else:
    print("normal yr")
