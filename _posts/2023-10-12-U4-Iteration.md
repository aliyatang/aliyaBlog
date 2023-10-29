---
comments: True
layout: post
title: Unit 4 Iteration
description: Lesson on the College Board Unit 4 Iteration
courses: {'csa': {'week': 8}}
type: hacks
categories: ['AP Test Prep', 'Java']
---

# 4.2 - for Loops
## for Loops
- Iterative statement that checks for condition
- Repeatedly execute a a block of code as long as the condition is met
- Condition specifies amount of times



# for Loops vs. while Loops
- while Loops: use when number of iterations is unknown
- for Loops: use when number of iterations is known


```java
int count = 1;
while (count <= 5) {
    System.out.println(count);
    count++;
}
```

    1
    2
    3
    4
    5



```java
for (int count = 1; count <= 5; count++) {
    System.out.println(count);
}
```

    1
    2
    3
    4
    5


## Syntax
- Three parts in for loop header: variable initialization, Boolean (conditional) expression, and increment/decrement statement


```java
for (int i = 0; i < numTimesToRepeat; i++) { 
    // whatever to repeat here
}
```

Question: Which part is which? (In reference to above)

- variable initialization:
- Boolean (conditional) expression:
- variable can be used in the code block for other various reasons besides specifying how many times the loop will repeat
- Boolean (conditional) expression and increment/decrement statement together determine how many times the loop will repeat

Other syntax for increment/decrement statement:

|Operator | Example | Same As |
|----|--------|-----------|
| ++ |  i ++  | i = i + 1 |
| -- |  i --  | i = i - 1 |
| += | i += y | i = i + y |
| -= | i -= y | i = i - y |
| *= | i *= y | i = i * y |
| /= | i /= y | i = i / y |
| %= | i %= y | i = i % y |


```java
// play around with this 
for (int i = 0; i < 4; i++) { 
    System.out.println(i);
}
```

## Popcorn Hacks
- Calculate and print the sum of all even numbers from 1 to a given positive integer 'n' (user input n)


```java
// CODE CODE CODE HERE
// No need to finish code now, just share ideas
```


```java
// SOLUTION
import java.util.Scanner;

public class evenNumSum {
    public static void main(String[] args) {
        // Scanner object for user input
        Scanner scanner = new Scanner(System.in);

        // user enter positive integer
        System.out.print("Enter a positive integer (n): ");
        int n = scanner.nextInt();
        System.out.println(n);

        // initialize sum to store
        int sum = 0;

        // for loop 1 to n
        for (int i = 1; i <= n; i++) { // note the <= since start at 1
            // check if n is even
            if (i % 2 == 0) {
                // if even, add to sum
                sum += i;
            }
        }

        // print sum
        System.out.println("\nSum of even numbers from 1 to " + n + " is: " + sum);
    }
}
evenNumSum.main(null)
```

    Enter a positive integer (n): 10
    
    Sum of even numbers from 1 to 10 is: 30




## Java for-each Loop
- for-each loop used to iterate through elements of arrays and collections (e.g. ArrayList)
- AKA enhanced for loop
### Syntax


```java
for (dataType item : array) {
    // whatever here
}
```

- array: array/collection
- item: variable each item of array/collection assigned is assigned to
- dataType - array/collection data type


```java
int[] numbers = {1, 7, -9, 4, 89};
for (int num: numbers) {
    System.out.println(num);
}
```

    1
    7
    -9
    4
    89

