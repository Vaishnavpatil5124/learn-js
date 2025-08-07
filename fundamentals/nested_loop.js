/** nested loop */
for(let i=1;i<=10;i++){
    console.log(`this table is of ${i}`)
    for(let j=1;j<=10;j++){
        let temp=i*j;
        console.log(`${i} * ${j} is equal to ${temp}`)
    }
}

/** output
 * this table is of 1
1 * 1 is equal to 1
1 * 2 is equal to 2
1 * 3 is equal to 3
1 * 4 is equal to 4
1 * 5 is equal to 5
1 * 6 is equal to 6
1 * 7 is equal to 7
1 * 8 is equal to 8
1 * 9 is equal to 9
1 * 10 is equal to 10
this table is of 2
2 * 1 is equal to 2
2 * 2 is equal to 4
2 * 3 is equal to 6
2 * 4 is equal to 8
2 * 5 is equal to 10
2 * 6 is equal to 12
2 * 7 is equal to 14
2 * 8 is equal to 16
2 * 9 is equal to 18
2 * 10 is equal to 20
this table is of 3
3 * 1 is equal to 3
3 * 2 is equal to 6
3 * 3 is equal to 9
3 * 4 is equal to 12
3 * 5 is equal to 15
3 * 6 is equal to 18
3 * 7 is equal to 21
3 * 8 is equal to 24
3 * 9 is equal to 27
3 * 10 is equal to 30
this table is of 4
4 * 1 is equal to 4
4 * 2 is equal to 8
4 * 3 is equal to 12
4 * 4 is equal to 16
4 * 5 is equal to 20
4 * 6 is equal to 24
4 * 7 is equal to 28
4 * 8 is equal to 32
4 * 9 is equal to 36
4 * 10 is equal to 40
this table is of 5
5 * 1 is equal to 5
5 * 2 is equal to 10
5 * 3 is equal to 15
5 * 4 is equal to 20
5 * 5 is equal to 25
5 * 6 is equal to 30
5 * 7 is equal to 35
5 * 8 is equal to 40
5 * 9 is equal to 45
5 * 10 is equal to 50
this table is of 6
6 * 1 is equal to 6
6 * 2 is equal to 12
6 * 3 is equal to 18
6 * 4 is equal to 24
6 * 5 is equal to 30
6 * 6 is equal to 36
6 * 7 is equal to 42
6 * 8 is equal to 48
6 * 9 is equal to 54
6 * 10 is equal to 60
this table is of 7
7 * 1 is equal to 7
7 * 2 is equal to 14
7 * 3 is equal to 21
7 * 4 is equal to 28
7 * 5 is equal to 35
7 * 6 is equal to 42
7 * 7 is equal to 49
7 * 8 is equal to 56
7 * 9 is equal to 63
7 * 10 is equal to 70
this table is of 8
8 * 1 is equal to 8
8 * 2 is equal to 16
8 * 3 is equal to 24
8 * 4 is equal to 32
8 * 5 is equal to 40
8 * 6 is equal to 48
8 * 7 is equal to 56
8 * 8 is equal to 64
8 * 9 is equal to 72
8 * 10 is equal to 80
this table is of 9
9 * 1 is equal to 9
9 * 2 is equal to 18
9 * 3 is equal to 27
9 * 4 is equal to 36
9 * 5 is equal to 45
9 * 6 is equal to 54
9 * 7 is equal to 63
9 * 8 is equal to 72
9 * 9 is equal to 81
9 * 10 is equal to 90
this table is of 10
10 * 1 is equal to 10
10 * 2 is equal to 20
10 * 3 is equal to 30
10 * 4 is equal to 40
10 * 5 is equal to 50
10 * 6 is equal to 60
10 * 7 is equal to 70
10 * 8 is equal to 80
10 * 9 is equal to 90
10 * 10 is equal to 100
 */