#include <stdio.h>
int main() {
    // int n=10;
    // int sum=0;
    // for(int i=0;i<=n;i++) {
    //     if(i%2!=0) {
    //         sum+=i;
    //     }
    // }
    // printf("sum=%d",sum);

    int n=2015;
    long long cube=0;   //int cannot store the very big value,so output will come in negative,use long long instead.
    for(int i=1000;i<=n;i++) {
        cube=1LL*i*i*i;
        printf("cube=%lld",cube);
        if(cube%2==0) {
            printf("\nparity=even\n");
        } else {
            printf("\nparity=odd\n");
        }
    }
    return 0;
}