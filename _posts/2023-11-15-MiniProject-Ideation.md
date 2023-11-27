---
layout: post
title: Mini Project Ideation
description: Mini Project Ideation Plan
week: 17
type: collab
categories: [Tri 2]
tags: [Markdown, Blog, Project]
---

## Team Members
- Vivian Ni
- Aliya Tang
- Kevin Du

## Project
- Name is undecided but we decided to center our features around a common theme of art.
- Plan is to utilize 4 different types of fibonacci and 4 different sorting types. 
- Sorts include bubble, insertion, selection, and merge.
- **Plan for abstraction and inheritance**
    - we will have some features have the option to choose the sort type since we don't want the project to have repetitive features but we want to use all sorting algorithms
    - perhaps we will add a time box on each feature page showing the time of each sort based on the algorithm used
    - there will be a main sorting class and sub classes within that extend the from the main class. 
![abstraction](/assets/img/abstraction.png){: img width="600" height="600" alt="abstraction"}


### Feature 1: Artwork Popularity
- A dynamic and engaging art platform where users can actively change the gallery with a personal vote. This feature will incorporate a "Like/Dislike" system for each art piece, providing visitors with the power to influence the popularity of artworks on the page. As users interact with the collection, their votes contribute get sent to the backend sorting algorithm that recalibrates the display order, showcasing the most liked pieces at the forefront while pushing less favored works to the bottom. This creates a dynamic digital gallery experience that reflects the tastes and preferences of its audience.
- We plan on using Bubble Sort for this. In the context of ranking artworks by popularity, Bubble Sort can be effective. It tends to bring the most popular items (or 'bubbles') to the top quickly. While not the most efficient algorithm for large datasets, it is relatively easy to implement and suits situations where the ranking of artworks is frequently updated based on visitor interactions.
![feature1diagram](/assets/img/feature1diagram.png){: img width="600" height="450" alt="feature1diagram"}

### Feature 2: Artist Showcase
- Showcasing artists based on a specific criterion (e.g., alphabetical order of names, age, years in the field).
- We plan on using Selection Sort for this. In the context of showcasing artists, Selection Sort can be used to select the artist with the desired criterion and place them in the appropriate position. This process is then repeated for the remaining artists. Selection Sort is straightforward and can be suitable for smaller artist showcases, providing a clear and organized display for visitors.
- Can utilize the same API as feature 1 but with more columns of data or use a new API focused on the artist info. Go though the data base, find the largest number (years, age), and order in descending order based on that.
- ![selectionsort](/assets/img/selectionsort.png){: img width="450" height="600" alt="selectionsort" }
![feature2design](/assets/img/feature2diagram.png){: img width="550" height="450" alt="feature2design"}

### Feature 3: Fibonacci Art
- this feature will incorporate the Fibonacci requirement of the project. Users will input a number which will be the "nth" value of the fibonacci sequence. We will create 4 Fibonacci algorithms using teacher code as a guide as well as inheritance in Java. The user will be able to visualize artwork being created by the 4 different fibonacci types on the frontend. We also will show the time it took to create each artwork based on the type of fibonacci algorithm used.
- ![feature3fibonacci](/assets/img/feature3fibonacci.png){: img width="450" height="600" alt="feature3fibonacci"}










