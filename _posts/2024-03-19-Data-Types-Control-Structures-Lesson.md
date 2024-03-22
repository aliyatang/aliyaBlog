---
layout: post
title: Data Types and Control Structures Lesson
type: ccc
week: 25
categories: ['AP Test Prep', 'Java', 'Tri 3']
tags: ['Notebook', 'FRQ', 'Java']
---

# Data Types and Control Structures Lesson 
*By Luna and Tanisha and Rachit* 

Find link to notebook in Slack coding channel and follow along. WGET to have easy access to these materials (WGET not required for the lesson itself)

# If, Else, While

We will be going over the units 3 and 4 (specifically 3.2, 3.3, 3.4, 4.1) these topics. These have somewhat of a significant weighting on the AP test so it is essential you know this information.

### Unit 3 College Board > Boolean Expressions and if Statements 

### ★ If Statements

Sometimes we want the code to perform an action only if a certain condition is met, while other condition will result into differnt actions. This requires us to us a conditional statement. This usually consists of conditional statement headers with the condition in it and the body should include the code that is run if the conditional statment is true.

**Essential Knowledge:** 
- conditional statements interrupt the sequential execution of statements
- If statements affect the flow of control by executing different statements based on the value of a Boolean expression
- A one-way selection (if statement) is written when there is a set of statements to execute under a certain condition. 

<img width="794" alt="Screenshot 2024-03-12 at 10 35 13 PM" src="https://github.com/lunaiwa/student-template/assets/111661543/ee87fbb6-7536-4551-b165-211bb494fc8e">

- The simplest conditional statement is an `if` statement, these are also called one way selection. 
- An if statement only works if the condition is met and true when the code runs. Here is a simple example of an `if` statment. 


```java
public class Statement {
    public static void main(String[] args) {
        int x = 10;

        if (x > 5) {
            System.out.println("x is greater than 5");
        }
    }
}
Statement.main(null)
```

    x is greater than 5


### ★ If-Else Statements AKA two way selection

Imagine you have a decision to make. You say, "If it's sunny, I'll go outside. Otherwise, I'll stay inside." This is the if statment. It checks a condition (like if it's sunny), and if that condition is true, it does something (like going outside). But if it's not sunny? You still want to make a decision. That's where the `else` statement comes in.


```java
public class Weather {
    public static void main(String[] args) {
        String weather = "sunny";

        if (weather.equals("sunny")) {
            System.out.println("I'll go outside");
        } else {
            System.out.println("I'll stay inside");
        }
    }
}
Weather.main(null)
```

    I'll go outside


### ★ Else-If Statements 

Imagine you have to make a series of decisions, but each decision depends on the outcome of the previous ones. You have different conditions to check, and you want to do something specific based on each condition. This is where `else if` statements come in.

Here's how it works:

- You start with an `if` statement, where you check the first condition.
- If the first condition is not met (it's false), you move to the next `else if` statement. Here, you check a different condition.
- If the second condition is not met, you move to the next `else if` statement, and so on.
- This continues until you find a condition that is true. When you find that true condition, the corresponding code block runs, and the rest of the `else if` blocks are skipped.
- If none of the conditions are true, the code inside the `else` block runs.

`else if` statements allow us to handle multiple conditions in a sequence until we find the appropriate one that is true.


```java
public class Numbers {
    public static void main(String[] args) {
        int x = 10;

        if (x > 0) {
            System.out.println("x is positive");
        } else if (x < 0) {
            System.out.println("x is negative");
        } else {
            System.out.println("x is zero");
        }
    }
}
Numbers.main(null)
```

    x is positive


### Unit 4 College Board > Iteration

### ★ While Loops

The `while` loop is a fundamental concept in programming. It allows you to repeat a block of code as long as a certain condition is true. 

**Anatomy of a While Loop:**
1. **Code before loop**: You can have some code executed before entering the loop.
2. **Condition**: The loop checks a condition. As long as this condition is true, the loop continues running.
3. **Code inside the loop**: If the condition is true, the code inside the loop is executed.
4. **Code after the loop**: Once the condition becomes false, the loop exits, and you can have some code executed after the loop.



```java
public class While {
    public static void main(String[] args) {
        int count = 0;
        //run as long as count is less than 5
        while (count < 5) {
            System.out.println("Count : " + count);
            count++;
        }
        System.out.println("DONE");
    }
}
While.main(null)
```

    Count : 0
    Count : 1
    Count : 2
    Count : 3
    Count : 4
    DONE


**Possible Issues with Loops:**

**Loop Condition Always True**: If the loop condition is always true, the loop runs indefinitely, causing what's called an "infinite loop". This can crash a program and should be avoided.

**Loop Condition Always False**: If the loop condition is always false, the loop never runs, which can lead to inefficiencies.


```java
public class True {
    public static void main(String[] args) {
        int count = 0;
        //this loop will keep running
        while (true) {
            System.out.println("Count : " + count);
            count++;
        }
        System.out.println("DONE");
    }
}
True.main(null)
```


```java
public class False {
    public static void main(String[] args) {
        int count = 0;
        //this loop will never run
        while (false) {
            System.out.println("Count" : + count);
            count++; 
        }
        System.out.println("DONE");
    }
}
False.main(null)
```

**Types:**
1. **Fixed Number of Repetitions**: Use an integer to count the number of repetitions. The loop runs a specific number of times.
2. **Variable Number of Repetitions Using A Sentinel**: Use a special input value (sentinel) to determine when to stop the loop.
3. **Variable Number of Repetitions Using A Flag**: Use a boolean flag to determine when to stop the loop.

**Break and Continue Statements:**
- **Break Statement**: Immediately exits the loop, regardless of the loop condition.
- **Continue Statement**: Skips the current iteration of the loop and continues with the next iteration.


```java
public class Break {
    public static void main(String[] args) {
        int count = 0;
        //will run until count = 5
        while (true) {
            System.out.println("Count : " + count);
            count++; 

            if (count == 5) {
                //when reaching 5 it exits the loop
                break;
            }
        }
        System.out.println("DONE");
    }
}
Break.main(null)
```

    Count : 0
    Count : 1
    Count : 2
    Count : 3
    Count : 4
    DONE



```java
public class Continue {
    public static void main(String[] args) {
        int count = 0;
        //will run until count = 5 but skips 3
        while (count < 5) {
            count++;

            if (count == 3) {
                //skip when count = 3
                continue;
            }

            System.out.println("Count : " + count);
        }
        System.out.println("DONE");
    }
}
Continue.main(null)
```

    Count : 1
    Count : 2
    Count : 4
    Count : 5
    DONE


**Try-Catch Statements and Exception Handling:**
- Used to handle errors gracefully during program execution.
- `try` block attempts to run code that might throw an exception.
- `catch` block handles exceptions that occur within the `try` block.
- Ensures that the program doesn't crash unexpectedly.

**Algorithms Using While Loops:**
- While loops are used in various algorithms to perform repetitive tasks efficiently.

# FRQ - Calendar

**1. The APCalendar class contains methods used to calculate information about a calender. You will write two methods of the class.**


```java
/** Returns true if year is a leap year and false otherwise */
private static boolean isLeapYear(int year)
{ /* implementation not shown */}

/** Returns the number of leap years between year1 and year2, inclusive.
 * Precondition: 0 <= year1 <= year2
 */
public static int numberOfLeapYears(int year1, int year2)
{ /* to be implemented in part (a) */}

/** Returns the valuse representing the day of the week for the first day of year.
 * where 0 denotes Sunday. 1 denotes Monday.. and 6 denotes Saturday.
 */
private static int firstDayOfYear(int year)
{ /* implementation not shown */}
```

Any method that shows implementation not shown is a red flag and is somthing that will be used at some point !!!


```java
/** Returns n where month, day, and year specify the nth day of the year
 * returns 1 for January 1(month = 1, day =1) of any year
 * Precondition: the date represented by month, day, year is a valid date
 */
private static int dayOfYear(int month, int day, int year)
{ /* implementation not shown */}

/** Returns the valuse representing the day of the week for the given date
 * (month, day, year)  where 0 denotes Sunday, 1 denotes Monday.. and 6 denotes Saturday
 * Precondition: The date represented by month, day, year is a valid date
 */
public static int dayOfWeek(int month, int day, int year)
{ /* to be implemented in part (b)*/}

// There may be instance variables, constructors, and other methods not shown
```

Helper method called day of year, if I pass a month a day in a year it will tell us what numerica day of the year that day is.
EX: January 2 2021 > 2 day of the year

Day of week method, pass in a month a day and year and it tells what specific week it was by returning the same numeric valuse that we had before 0 is sunday and 1 is monday ect. all the way up to six saturday. 

In the comment "there may be instance variables, contructors, and other methods not shown" we can assue that everything is contructed approprietly and everything is where it is supposed to be

**(a) Write the static method numberOfLeapYears, which returns the number of leap years between year1 and year2, inclusive >> in order to calculate this value, a helper method is provided for you**
- isLeapYear(year) returns true if year is a leap year and flase otherwise.

**Complete method numebrOfLeapYears below. You must use isLeapYear appropriatley to recive full credit**


```java
/** Returns the number of leap years between year1 and year2, inclusive.
 * Precondition: 0 <= year 1 <= year 2
 */
public static int numberOfLeapYears(int year1, int year2)
```


Anythings that is prewriten we have to keep the same ! Another key thing is the weird text font. Telling us a specific static method there is a numberOfLeapYears that we absolutly have to use, returns number of leap years between year1 and year2, those are locked in and we can't change them. Part of the required part of this is using already provided methods and how to use things that are already there and call them so we are writing our code effeciently as possible.

**Grading Rubric: Return the number of leap years in a range**
- +1 > initializes a numeric variable
- +1 > Loops through each necessary year in the range
- +1 > Calls isLeapYear on some valid year in the range
- +1 > Updates count based on result of calling isLeapYear
- +1 > Returns count of leap years

**Keep in Mind**
- Every question is worth 9 points and part a is worth 5 of those 9 points. We have to make sure we are counting somthing so we need to initialize a counter with some numeric variable and set it equal to 0 to start.
- Looping through each necessary year in the range, they gave us yar 1 and year 2 we have to make sure we look at ever year in between including those two
- We have to call isLeapYear on some valid year in the range
- Have to update the count based on the result of calling isLeapYear, if returns true we update the counter and if false we don't
- return the count of leap years

occationally some questions have question specific penalties and this one is that if you use this. to call a static method there is a one point penalty

instance methods > relate to the instance of a class
Static method > assigned to the class, aren't assigned to specific instance

Purpose of this. is to reference the current object as the object when you call an instance method. If you are calling a static method you can't use this. becuase you can't reference a static method to a specific object and thats the purpose of what this dot does. Would avoid unless you are really comfterable knowing how to use it approprietly when writing methods and calling other methods in the class. 

**Sample Solution**

Example solution for number of leap years

- initialize a variable to count
- iterate through all of the years from year 1 to and including year 2
- appropriatley call is leap year on a specific year on that range 
- inclement our counter based on result of leap year and we need to return the count

(reference the scoring sheet for part a to also see if this example fulfills the rubric)


```java
public static int numberOfLeapYears (int year1, int year2)
{
    int count = 0;
    for (int y = year1; y <= year2; y++)
    {
        if (isLeapYear(y))
        {
            count++;
        }
    }
    return count;
}
```

**Common Mistakes:**
- Ignoring the problem constraints: overlook constraints mentioned in the problem statement, such as input limits or requirements regarding time or space complexity. ignoring these constraints can result in inefficient or incorrect solutions.
- Confusion between assignment (=) and equality (==) operators: using assignment instead of equality in conditional statements can lead to unintended consequences. this mistake is particularly common when writing conditions in if statements.
