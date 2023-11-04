---
toc: True
comments: True
layout: post
title: Unit 1 Data Types
description: Lesson on the College Board Unit 1 Data Types
week: 7
type: ccc
categories: ['AP Test Prep', 'Java', 'Lesson', 'Tri 1']
---

Java is used around the world to create applications and is one of the most popular coding languages. The reason Java is so popular is because of it's security and versatility provided by it's Object Oriented nature.

Student Teachers: Colin, Haoxuan, 

# 1.1 Basics

```
public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}
```

# 1.2 Variables and Data Types

## Variables

A Variable is a name given to a memory location that is holding the specified value. Here are some naming practices:

- Use camel case. likeThis.
- Don't start with a number.
- Spaces are not allowed.
- No reserved characters, like $, @, and &

***Java is a strongly typed language so you always need to declare the type of the variable.*** Variables can also be declared on their own or in the same line as when they are given a value:



```java
int primitive5;
primitive4 = 1;

//Or...
int primitive6 = 1;
```

What are the greatest values integers and doubles can store?

## Primitive Data

Primitive data determines ***the size and type of information***. Primitive types are the most simple type of variable. They are simply store a short amount of raw data, and are not associated with another class.

Here are the different primitive types:
- byte: An 8-bit signed two's complement integer.
- short: A 16-bit signed two's complement integer.
- int: A 32-bit signed two's complement integer.
- long: A 64-bit signed two's complement integer.
- float: A single-precision 32-bit IEEE 754 floating point.
- double: A double-precision 64-bit IEEE 754 floating point.
- boolean: Stores either true or false.
- char: Stores a single character.

For this class you need to know:


```java
boolean primitive3 = true; //Stores a true of false binary value
int primitive1 = 0; //Whole number
double primitive2 = 1.1; //Decimal values. Floating point numbers.
char primitive4 = 'a'; //Single character

// Integer overflow
int i = Integer.MAX_VALUE;
System.out.println(++i);
```

    -2147483648


| Data Type | Size (bits) |
|-----------|-------------|
| boolean   | 8           |
| int       | 32          |
| double    | 64          |
| char      | 16          |


```java
public class GreatestValue {
    public static void main(String[] args) {
        System.out.println(Integer.MAX_VALUE);
        System.out.println(Integer.MIN_VALUE);
        System.out.println(Double.MAX_VALUE);
        System.out.println(Double.MIN_VALUE);
    }
}
GreatestValue.main(null);
```

    2147483647
    -2147483648
    1.7976931348623157E308
    4.9E-324


## Reference Types
Some data types, like String, start with a capital letter. This is because they are not primiative, but are refrence types. They are called this because they refrence an object.
> "A reference type is a code object that is not stored directly where it is created, but that acts as a kind of pointer to a value stored elsewhere."




```java
int integer = 7120; //"int" starts with a lowercase
String string = "abc"; //"String" starts with an uppercase, because it is an object and not a primitive type
```

## All Reference Types Reference Objects: String Example

String is the most common reference type. Here is an example of how a String type is really just referencing an object.


```java
public class WorseString {
    private char[] charArray;

    public WorseString(String inputString) {
        this.charArray = inputString.toCharArray();
    }

    public String getChars() {
        return new String(this.charArray);
    }

    @Override
    public String toString() {
        return getChars();
    }
}
```


```java
WorseString string = new WorseString("Hello, World!");
System.out.println(string);
```

    Hello, World!


Therefore, these two things are the same:


```java
String string = "abc";
String string = new String("abc");
```

## Literal vs String literal

- Literal: Source code representation of a fixed value --- 3
- String Literal: In double quotes, a String --- "3"

# 1.3 Expressions and Assignment Statements

Calculations and evaluating arithmetic statements is important when coding to create algorithms and other code. Make sure you are doing arithmetic statements with int or double values and not String literals

## Operators

| Operator | Example Equation | Output | Use |
|----------|------------------|--------|------------|
| +        | 5 + 3            | 8      | Add numbers together. |
| -        | 5 - 3            | 2      | Subtract one number from another. |
| *        | 5 * 3            | 15     | Multiply numbers together. |
| /        | 5 / 3            | 1      | Divide one integer by another... answer is integer |
| /        | 5 / 3.0          | 1.67   | Divide one integer by a double... answer is double |
| %        | 5 % 3            | 2      | Find the remainder of a division operation. |


> Tip: In the AP subset, you only have to worry about operations with int values. However, it's good to know how to use arithmetic statements with doubles and other types. 

If you do an operation with two ints or doubles, it returns the respective type. If you mix types, Java returns the one with more bits, a double in this case.

## Modulus

Modulus gets the remainder if you were to divide two numbers. One common use is to find odd/even numbers. 

- 5 % 2 = 1
- 100 % 10 = 0

You try: 

- 8 % 3 = 2
- 4 % 1 = 0

Modulus joins multiplication and division in the order of operations

## Assignment Operator

= is called the assignment operator because it is used to assign a value to a variable. It is the last in the order of operations.

## Casting
Casting is converting one type of variable to another
ex: double to int


```java
public class Casting {
    public static void main(String[] args) {
        double castTest = 3.2;
        System.out.println((int) castTest);
        // no rounding when double to int, will cut off at the decimal (TRUNCATES)
        castTest = 3.7;
        System.out.println((int) castTest);
        System.out.println((int) (castTest+0.5));

        int castTest2 = 3;
        System.out.println(castTest2/2);
        System.out.println(castTest2/2.0);
    }
}
Casting.main(null);
```

    3
    3
    4
    1
    1.5


What will this output?

castTest2 = 7;

System.out.println(castTest2/3); -> 2

castTest3 = 1.6;

System.out.println((int) (castTest3+0.5)); -> 2


## Wrapper Classes

For many operations in Java, you need to have a class. Some examples are:
- **ArrayLists or HashMaps**
- If you require nullability (meaning the value could be null)
- Generics
- Methods that require objects as input

To accomplish this, we use a wrapper class. A wrapper class is essentially a class which 'wraps' the primitive type and makes it into an object rather than a primitive.

What is a downside of using wrapper classes? Why not always use them?

<spoiler>Increased memory usage (collegeboard says), but it's very insignificant in modern computers that it's not relevant</spoiler> 


```java
//This code fails, trying to create ArrayList with primitive type
ArrayList ArrayList = new ArrayList<int>();
```


    |   ArrayList ArrayList = new ArrayList<int>();

    unexpected type

      required: reference

      found:    int

    



```java
//This code works, with reference type
ArrayList ArrayList = new ArrayList<Integer>();
```


```java
public class Wrappers {
    Integer ageWrapper = 17;
    int age = Integer.parseInt("17");
    String gpaString = "3.9";
    double gpaDouble = Double.parseDouble(gpaString);

    public static void main(String[] args) {
        Wrappers wrapper = new Wrappers();
        System.out.println(wrapper.ageWrapper);
        System.out.println(wrapper.age);
        System.out.println(wrapper.gpaDouble);
    }
}
Wrappers.main(null);
```

    17
    17
    3.9


How do you complete this output so that it outputs an integer
String grade = "95";

int grade = Integer.parseInt("95")


How do you complete this output so that it outputs a double?
String grade = "95.5";

double grade = Double.parseDouble("95.5");

## Enums
What are they?
<spoiler>Enums are a type of data, which allows a variable to be a predetermined set of values</spoiler>

Uses
* Examples: days of the week

Things you can do with Enums
* ordinal
* switch
* for loops


```java
import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Calculations();
    }
    
    public static void performIntegerCalculations() {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter the first integer: \n");
        int num1 = scanner.nextInt();
        System.out.print("Enter the second integer: \n");
        int num2 = scanner.nextInt();
        
        System.out.println("Select operation:\n");
        System.out.println("1. Addition\n");
        System.out.println("2. Subtraction\n");
        System.out.println("3. Multiplication\n");
        int operation = scanner.nextInt();
        
        int result = 0;
        switch (operation) {
            case 1:
                result = num1 + num2;
                break;
            case 2:
                result = num1 - num2;
                break;
            case 3:
                result = num1 * num2;
                break;
            default:
                System.out.println("Invalid operation choice");
                break;
        }
        
        System.out.println("Result: " + result);
        
        scanner.close();
    }
    
    public static void performDoubleCalculations() {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter the first double: ");
        double num1 = scanner.nextDouble();
        System.out.print("Enter the second double: ");
        double num2 = scanner.nextDouble();
        
        System.out.println("Select operation:");
        System.out.println("1. Addition");
        System.out.println("2. Subtraction");
        System.out.println("3. Multiplication");
        int operation = scanner.nextInt();
        
        double result = 0.0;
        switch (operation) {
            case 1:
                result = num1 + num2;
                break;
            case 2:
                result = num1 - num2;
                break;
            case 3:
                result = num1 * num2;
                break;
            default:
                System.out.println("Invalid operation choice.");
                break;
        }
        
        System.out.println("Result: " + result);
        
        scanner.close();
    }
}
Calculator.main(null);
```


```java
public class EnumTest { 
    enum Units {
    PRIMITVE_DATA_TYPES,
    CLASSES,
    BOOLEAN,
    ITERATION,
    WRITING_CLASSES,
    ARRAY,
    ARRAY_LIST,
    TWO_DIMENSIONAL_ARRAY,
    INHERITANCE,
    RECURSION;
}
public static void main(String[] args) { 
  System.out.println("What is the third unit in AP CSA? Answer: " + Units.BOOLEAN);
  Units classUnit = Units.CLASSES;
  System.out.println("What is the unit is Classes in AP CSA? Answer: " + (classUnit.ordinal() + 1));
  Units selectedUnit = Units.ARRAY_LIST;

  switch(selectedUnit) {
    case PRIMITVE_DATA_TYPES:
      System.out.println("The selected unit is: primitive data types");
      break;
    case BOOLEAN:
       System.out.println("The selected unit is: boolean");
      break;
    case CLASSES:
      System.out.println("The selected unit is: classes");
      break;
    case ITERATION:
      System.out.println("The selected unit is: iteration");
      break;
    case WRITING_CLASSES:
      System.out.println("The selected unit is: writing classes");
      break;
    case ARRAY:
      System.out.println("The selected unit is: array");
      break;
    case ARRAY_LIST:
      System.out.println("The selected unit is: array list");
      break;
    case TWO_DIMENSIONAL_ARRAY:
      System.out.println("The selected unit is: 2d array");
      break;
    case INHERITANCE:
      System.out.println("The selected unit is: inheritance");
      break;
    case RECURSION:
      System.out.println("The selected unit is: recursion");
      break;
  }
  for (Units allUnits: Units.values()) {
    System.out.println(allUnits);
  }
} 
}
EnumTest.main(null);
```

    What is the third unit in AP CSA? Answer: BOOLEAN
    What is the unit is Classes in AP CSA? Answer: 2
    The selected unit is: array list
    PRIMITVE_DATA_TYPES
    CLASSES
    BOOLEAN
    ITERATION
    WRITING_CLASSES
    ARRAY
    ARRAY_LIST
    TWO_DIMENSIONAL_ARRAY
    INHERITANCE
    RECURSION


# Homework

All of your homework is on this [form](https://forms.gle/M6FgxZwX1AnWdZmL9). (Link is https://forms.gle/M6FgxZwX1AnWdZmL9)


```java
public class EnumTest { 
    enum Days {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY;
}
public static void main(String[] args) { 
  Days DayOfWeek= Days.TUESDAY;

  switch(DayOfWeek) {
    case TUESDAY:
       System.out.println("Today is Tuesday!");
      break;
  }
} 
}
EnumTest.main(null);
```

    Today is Tuesday!



```java
import java.util.Scanner;

public class Calculator{
    public static void Calculate(){
        Scanner scanner = new Scanner(System.in);

        //user input first int
        System.out.println("Enter first INTEGER: ");
        int int1 = scanner.nextInt();
        System.out.println(int1+"\n");
        //user input second int
        System.out.println("Enter second INTEGER: ");
        int int2 = scanner.nextInt();
        System.out.println(int2+"\n");

        //choose operation
        System.out.println("Choose an operator:\n1. Addition\n2. Subtraction\n3. Multiplication ");
        int operator = scanner.nextInt();
        System.out.println(operator);

        //initialize ans
        int ans=0;
        //conditions
        switch (operator) {
            case 1:
                ans = int1 + int2;
                break;
            case 2:
                ans = int1 - int2;
                break;
            case 3:
                ans = int1 * int2;
                break;
            default:
                System.out.println("Invalid operation choice");
                break;
        }
        
        System.out.println("\nAnswer: " + ans);
    }
    public static void main(String[] args) { 
        Calculate();
    }
} 

Calculator.main(null)

```

    Enter first INTEGER: 
    3
    
    Enter second INTEGER: 
    5
    
    Choose an operator:
    1. Addition
    2. Subtraction
    3. Multiplication 
    3
    
    Answer: 15

