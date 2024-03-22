---
layout: post
title: Workshop FRQ 1 Hacks
type: ccc
week: 25
categories: ['AP Test Prep', 'Java', 'Tri 3']
tags: ['Notebook', 'FRQ', 'Java']
---

## Question 1 Hacks
### Part 1


```java
public class Person {
    String name;
    int age;
    int height;
    String job;

    public Person(String name, int age, int height, String job) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.job = job;
    }
}

public static void main(String[] args) {
    Person person1 = new Person("Carl", 25, 165, "Construction Worker");
    Person person2 = new Person("Adam", 29, 160, "Truck Driver");
    Person person3 = person1;
    int number = 16;
    System.out.println(number);
}
main(null);
```

Answer the following questions based on the code above:
1. What kind of types are person1 and person2?

Answer: Reference Types since they are objects. They are instances of Person class

2. Do person1 and person3 point to the same value in memory?

Answer: Yes, since person3 is assigned person1

3. Is the integer “number” stored in the heap or in the stack?

Answer: Stack, since it is primitive type

4. Is the value that “person1” points to stored in the heap or in the stack?

Answer: Heap, since it is object

### Part 2
Question 1: Primitive Types vs Reference Types (Unit 1)

Situation: You are developing a banking application where you need to represent customer information. You have decided to use both primitive types and reference types for this purpose.

(a) Define primitive types and reference types in Java. Provide examples of each.
- primitive types store actual values, exactly one value of its declared type at a time. value initialized (0 or false). for example, byte, short, int, long, float, double, char, and boolean
- reference types store loaction of object in computer's memory, work with reference of an object not the actual object. for example class, interface, and array

(b) Explain the differences between primitive types and reference types in terms of memory allocation and usage in Java programs.
- primitive types are allocated space directly on stack, memory for short term variables. the stack memory is last in, first out, efficient but not much size 
- reference types are allocated memory in the heap, large for memory for dynamic allocation. object is placed into heap, and reference to that object is put in the stack. the variable in the stack references the object in the heap. this is less efficient than just directly accessing the stack like with primitive types. 

(c) Code:
You have a method calculateInterest that takes a primitive double type representing the principal amount and a reference type Customer representing the customer information. Write the method signature and the method implementation. Include comments to explain your code.


```java
public class Customer{
    private String name;
    private double interestRate; // interest rate info for customer\

    // constructor
    public Customer(String name, double interestRate){
        this.name = name;
        this.interestRate = interestRate;
    }

    // getters
    public String getName() {
        return name;
    }
    public double getInterestRate() {
        return interestRate;
    }
}
public class InterestCalculator{
    // method
    public static double calculateInterest(double principal, Customer customer) { // method takes primitive double type and customer reference type
        // interest rate from customer info
        double interestRate = customer.getInterestRate();

        // calculate and return interest
        double interest = principal*interestRate;
        return interest;
    }

    // main method for test
    public static void main(String[] args){
        // create customer object
        Customer customer = new Customer("Aliya", 0.088); //8.8% interest rate

        // calculate interest
        double principal = 1000;
        double interest = calculateInterest(principal, customer);

        System.out.println("Interest: $" + interest);
    }
}
InterestCalculator.main(null);
```

    Interest: $88.0


# Question 3 Hacks
Situation: You are developing a student management system where you need to store and analyze the grades of students in a class.

(a) Define an arrayList in Java. Explain its significance and usefulness in programming.
- ArrayList is a resizeable array. normal array has fixed length, while ArrayList is more flexiblle. it is created with initial size that enlarges as the size is exceeded, and can shrink when objects are removed. 

(b) Code: You need to implement a method `calculateAverageGrade` that takes an arrayList `grades` of integers representing student grades and returns the average of all the elements in the arrayList. Write the method signature and the method implementation. Include comments to explain your code.


```java
import java.util.ArrayList;

public class AverageGrade{
    public static double calculateAverageGrade(ArrayList<Integer> grades){
        // initalize sum for avg
        double sum = 0;
        
        // add all elements for sum
        for (Integer i: grades){
            sum += i;
        }
        // avg is sum divided by num of elements
        double avg = sum/grades.size();
        return avg;
    }
    // main method for testing
    public static void main(String[] args){
        // create arraylist 
        ArrayList<Integer> grades = new ArrayList<Integer>();
        grades.add(88);
        grades.add(92);
        grades.add(74);
        grades.add(80);
        
        double avgGrade = calculateAverageGrade(grades);
        System.out.println("Average grade: "+ avgGrade);
    }
}
AverageGrade.main(null);
```

    Average grade: 83.5


# Question 4 Hacks
## Scientific Calculator

Situation: You are developing a scientific calculator application where users need to perform various mathematical operations.

(a) Discuss the purpose and utility of the Math class in Java
 programming. Provide examples of at least three methods provided by the Math class and explain their usage.
- Math class is convenient way of doing math operations, it can do basic arithmetic, trig, rounding, aboslute value, and generate random numbers. 

Examples of math class methods: 
1. Math.sqrt(double x) returns square root of given value x
2. Math.abs(int x) returns absolute value given integer x
3. Math.min(int x, int y) returns smaller of two integer x and y

(b) Code:
You need to implement a method `calculateSquareRoot` that takes a `double` number as input and returns its square root using the Math class. Write the method signature and the method implementation. Include comments to explain your code.


```java
public class SquareRoot{
    // method 
    public static double calculateSquareRoot(double number){ // takes double num
        // return square root
        return Math.sqrt(number);
    }

    // main method for testing
    public static void main(String[] args){
        double num = 37.5;
        double sqrtValue = calculateSquareRoot(num);
        
        System.out.println("Square root: " + sqrtValue);
    }
}
SquareRoot.main(null);
```

    Square root: 6.123724356957945

