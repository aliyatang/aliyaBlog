---
layout: post
title: Algorithmic Sort
type: ccc
week: 26
categories: ['AP Test Prep', 'Java', 'Tri 3']
tags: ['Notebook', 'FRQ', 'Java', 'Sort']
---

# Sorting Dance
Sorting the Algorithmic Dance for our performance of bachelors and ratings. People are sorted in order from least to greatest based on their given ratings. 

# Comparable and compareTo
Comparing "Person" objects based on numeric "rating" with the compareTo method:

- comparing this.rating and other.rating: result of this.rating - other.rating is negative, positive, or 0. 
- negative indicates that "this" comes before "other" when sorted
- positive indicates that "other" comes before "this" when sorted
- equal indicates they are equal in terms of sorting

With compareTo, "Person" objects can be automatically sorted with any of the standard sorting algorithms that use comparisions 

Comparable interface, for objects of same type - defines the compareTo method, to compare current objects with another objects of same type. 


```java
import java.util.ArrayList;
import java.util.Collections;

// Person class impelements Comparable
public class Person implements Comparable<Person>{
    private String name;
    private int rating;

    public Person(String name, int rating){
        this.name = name;
        this.rating = rating;
    }

    //getters
    public String getName(){
        return name;
    }

    public int getRating (){
        return rating;
    }

    // compareTo method
    @Override
    public int compareTo(Person other) {
        return Integer.compare(this.rating, other.rating);
    }

    public static ArrayList<Person> createList() {
        Person p1 = new Person("Theo", 1);
        Person p2 = new Person("Justin", 2);
        Person p3 = new Person("Luna", 3);
        Person p4 = new Person("Finn", 4);
        Person p5 = new Person("Aliya", 5);
        Person p6 = new Person("Emma", 6);
        Person p7 = new Person("Grace", 7);
        Person p9 = new Person("Vivian", 8);
        Person p10 = new Person("Rayhan", 9);
        Person p11 = new Person("Pranavi", 10);
        Person p12 = new Person("Shivansh", 12);

        ArrayList<Person> personList = new ArrayList<>();
        personList.add(p1);
        personList.add(p2);
        personList.add(p3);
        personList.add(p4);
        personList.add(p5);
        personList.add(p6);
        personList.add(p7);
        personList.add(p9);
        personList.add(p10);
        personList.add(p11);
        personList.add(p12);

        Collections.shuffle(personList);
        
        return personList;
    }
}
```


```java
// timer for sorts
public class TimerUtility {
    // method for timing sorts
    public static long timeExecution(Runnable sortMethod) {
        long startTime = System.currentTimeMillis();
        sortMethod.run();
        long endTime = System.currentTimeMillis();
        return endTime - startTime; // return time elapsed in milliseconds
    }
}
```

## All Sorts - Bubble, Selection, Insertion, Merge, Quick


```java
public class algorithmicSort {
    // bubble
    public static void bubble(ArrayList<Person> personList) {
        int n = personList.size();
        // iterate through each pair of elements in list
        for (int i = 0; i < n - 1; i++)
            for (int j = 0; j < n - i - 1; j++)
                // compare each pair then...
                if (personList.get(j).compareTo(personList.get(j + 1)) > 0)
                    // ... swap if in wrong order
                    Collections.swap(personList, j, j + 1);
    }

    // selection
    public static void selection(ArrayList<Person> personList) {
        int n = personList.size();
        // moving boundary line of unsorted array
        for (int i = 0; i < n - 1; i++) {
            // find min element of unsorted
            int min_idx = i;
            for (int j = i + 1; j < n; j++)
                if (personList.get(j).compareTo(personList.get(min_idx)) < 0)
                    min_idx = j;
            // swap found min element with first element
            Collections.swap(personList, min_idx, i);
        }
    }

    // insertion
    public static void insertion(ArrayList<Person> personList) {
        int n = personList.size();
        for (int i = 1; i < n; i++) {
            // start from second element and go to end
            Person key = personList.get(i);
            int j = i - 1;
            // move elements greater than key to one forward
            while (j >= 0 && personList.get(j).compareTo(key) > 0) {
                personList.set(j + 1, personList.get(j));
                j--;
            }
            personList.set(j + 1, key);
        }
    }

    // merge
    public static void merge(ArrayList<Person> personList) {
        if (personList.size() > 1) {
            int mid = personList.size() / 2;
            // split list into 2
            ArrayList<Person> leftHalf = new ArrayList<>(personList.subList(0, mid));
            ArrayList<Person> rightHalf = new ArrayList<>(personList.subList(mid, personList.size()));

            // sort each half recursively
            merge(leftHalf);
            merge(rightHalf);

            // merge sorted halves back in og personList
            int i = 0, j = 0, k = 0;
            while (i < leftHalf.size() && j < rightHalf.size()) {
                if (leftHalf.get(i).compareTo(rightHalf.get(j)) <= 0) {
                    personList.set(k, leftHalf.get(i));
                    i++;
                } else {
                    personList.set(k, rightHalf.get(j));
                    j++;
                }
                k++;
            }

            // copy remaining elements of left and right half (if any left)
            while (i < leftHalf.size()) {
                personList.set(k++, leftHalf.get(i++));
            }
            while (j < rightHalf.size()) {
                personList.set(k++, rightHalf.get(j++));
            }
        }
    }
    
    // quick
    // public quick sort method for recursive
    public static void quick(ArrayList<Person> personList) {
        quickSortHelper(personList, 0, personList.size() - 1);
    }

    // recursive quicksort method
    private static void quickSortHelper(ArrayList<Person> personList, int low, int high) {
        if (low < high) {
            // partition list and get pivot index
            int pi = partition(personList, low, high);
            // quicksor the partitions
            quickSortHelper(personList, low, pi - 1);
            quickSortHelper(personList, pi + 1, high);
        }
    }

    // partition the list around the pivot
    private static int partition(ArrayList<Person> personList, int low, int high) {
        Person pivot = personList.get(high);
        int i = (low - 1);

        // rearrange elements around pivot
        for (int j = low; j < high; j++) {
            if (personList.get(j).compareTo(pivot) <= 0) {
                i++;
                Collections.swap(personList, i, j);
            }
        }
        // put pivot in right position
        Collections.swap(personList, i + 1, high);
        return i + 1;
    }
    
    // main method for test
    public static void main(String[] args) {
        // create list of Person objects
        ArrayList<Person> personList = Person.createList();
    
        // unsorted
        System.out.println("Unsorted list:");
        for (Person person : personList) {
            System.out.println(person.getName()+ " - Rate: " + person.getRating());
        }
    
         // timing each sort
        long bubbleTime = TimerUtility.timeExecution(() -> bubble(personList));
        long selectionTime = TimerUtility.timeExecution(() -> selection(personList));
        long insertionTime = TimerUtility.timeExecution(() -> insertion(personList));
        long mergeTime = TimerUtility.timeExecution(() -> merge(personList));
        long quickTime = TimerUtility.timeExecution(() -> quick(personList));
    
        // sorted list
        /*
        System.out.println("Sorted List:");
        for (Person person : personList) {
            System.out.println(person.getName()+ " - Rate: " + person.getRating());
        }
        */
    
        // times for each sort
        System.out.println("\nElapsed times to sort:");
        System.out.println("Bubble sort: " + bubbleTime + " ms");
        System.out.println("Selection sort: " + selectionTime + " ms");
        System.out.println("Insertion sort: " + insertionTime + " ms");
        System.out.println("Merge sort: " + mergeTime + " ms");
        System.out.println("Quick sort: " + quickTime + " ms");
    }
}
algorithmicSort.main(null);
```

    Unsorted list:
    Pranavi - Rate: 10
    Rayhan - Rate: 9
    Justin - Rate: 2
    Grace - Rate: 7
    Shivansh - Rate: 12
    Theo - Rate: 1
    Aliya - Rate: 5
    Finn - Rate: 4
    Emma - Rate: 6
    Luna - Rate: 3
    Vivian - Rate: 8
    
    Elapsed times in ms:
    Bubble sort: 0
    Selection sort: 0
    Insertion sort: 0
    Merge sort: 14
    Quick sort: 15

