---
layout: post
title: Inheritance in APCSA (Unit 9)
type: ccc
week: 26
categories: ['AP Test Prep', 'Java', 'Tri 3']
tags: ['Notebook', 'FRQ', 'Java']
---

# Free Response Questions

## Question 1 - Pojos and Access Control:
Situation: The school librarian wants to create a program that stores all of the books within the library in a database and is used to manage their inventory of books available to the students. You decided to put your amazing code skills to work and help out the librarian!

a. Describe the key differences between the private and public access controllers and how it affects a POJO

b. Identify a scenario when you would use the private vs. public access controllers that isn't the one given in the scenario above

c. Create a Book class that represents the following attributes about a book: title, author, date published, person holding the book and make sure that the objects are using a POJO, the proper getters and setters and are secure from any other modifications that the program makes later to the objects



```java

```

## Question 2 - Writing Classes:

(a) Describe the different features needed to create a class and what their purpose is.

(b) Code:

Create a Java class BankAccount to represent a simple bank account. This class should have the following attributes:
- accountHolder (String): The name of the account holder.
balance (double): The current balance in the account.
Implement the following mutator (setter) methods for the BankAccount class:
- setAccountHolder(String name): Sets the name of the account holder.
- deposit(double amount): Deposits a given amount into the account.
- withdraw(double amount): Withdraws a given amount from the account, but only if the withdrawal amount is less than or equal to the current balance.
Ensure that the balance is never negative.


```java

```

## Question 3 - Instantiation of a Class

(a) Explain how a constructor works, including when it runs and what generally is done within a constructor.

(b) Create an example of an overloaded constructor within a class. You must use at least three variables. Include the correct initialization of variables and correct headers for the constructor. Then, run the constructor at least twice with different variables and demonstrate that these two objects called different constructors. 


```java

```

## Question 4 - Wrapper Classes:

(a) Provide a brief summary of what a wrapper class is and provide a small code block showing a basic example of a wrapper class.

(b) Create a Java wrapper class called Temperature to represent temperatures in Celsius. Your Temperature class should have the following features:

Fields:

A private double field to store the temperature value in Celsius.


Constructor:

A constructor that takes a double value representing the temperature in Celsius and initializes the field.


Methods:

getTemperature(): A method that returns the temperature value in Celsius.
setTemperature(double value): A method that sets a new temperature value in Celsius.
toFahrenheit(): A method that converts the temperature from Celsius to Fahrenheit and returns the result as a double value. 


```java

```

## Question 5 - Inheritence:

Situation: You are developing a program to manage a zoo, where various types of animals are kept in different enclosures. To streamline your code, you decide to use inheritance to model the relationships between different types of animals and their behaviors.

(a) Explain the concept of inheritance in Java. Provide an example scenario where inheritance is useful.

(b) Code:

You need to implement a Java class hierarchy to represent different types of animals in the zoo. Create a superclass Animal with basic attributes and methods common to all animals, and at least three subclasses representing specific types of animals with additional attributes and methods. Include comments to explain your code, specifically how inheritance is used.



```java
public class Animal {

}

public class Panther extends Animal {

}

public class Dolphin extends Animal {

}

public class Parrot extends Animal {
    
}
```
