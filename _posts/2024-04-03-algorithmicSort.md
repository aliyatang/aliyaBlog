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

# Comparable and compareTo Research
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

## All Sorts - Bubble, Selection, Insertion, Merge, Quick


```java
import java.util.ArrayList;
import java.util.Collections;

public class algorithmicSort {
    private ArrayList<Person> personList;

    // constructor to initialize personList
    public algorithmicSort(ArrayList<Person> personList) {
        this.personList = personList;
    }

    // bubble sort
    public void bubble() {
        int n = personList.size();
        // iterate through each pair of elements in list
        for (int i = 0; i < n - 1; i++)
            for (int j = 0; j < n - i - 1; j++)
                // compare each pair then...
                if (personList.get(j).compareTo(personList.get(j + 1)) > 0)
                    // ... swap if in wrong order
                    Collections.swap(personList, j, j + 1);
    }

    // selection sort
    public void selection() {
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

    // insertion sort
    public void insertion() {
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

    // merge sort
    public void merge() {
        mergeSort(personList);
    }

    private void mergeSort(ArrayList<Person> personList) {
        if (personList.size() > 1) {
            int mid = personList.size() / 2;
            // split list into 2
            ArrayList<Person> leftHalf = new ArrayList<>(personList.subList(0, mid));
            ArrayList<Person> rightHalf = new ArrayList<>(personList.subList(mid, personList.size()));

            // sort each half recursively
            mergeSort(leftHalf);
            mergeSort(rightHalf);

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

    // quick sort
    // public quick sort method for recursive
    public void quick() {
        quickSortHelper(0, personList.size() - 1);
    }

    // recursive quicksort method
    private void quickSortHelper(int low, int high) {
        if (low < high) {
            // partition list and get pivot index
            int pi = partition(low, high);
            // quicksort the partitions
            quickSortHelper(low, pi - 1);
            quickSortHelper(pi + 1, high);
        }
    }

    // partition the list around the pivot
    private int partition(int low, int high) {
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

    // timer for sorts
    public static long timeExecution(Runnable sortMethod) {
        long startTime = System.currentTimeMillis();
        sortMethod.run();
        long endTime = System.currentTimeMillis();
        return endTime - startTime; // return time elapsed in milliseconds
    }

    // main method for test
    public static void main(String[] args) {
        // create list of Person objects
        ArrayList<Person> personList = Person.createList();

        // unsorted
        System.out.println("unsorted list:");
        for (Person person : personList) {
            System.out.println(person.getName() + " - rate: " + person.getRating());
        }

        algorithmicSort sorter = new algorithmicSort(personList);

        // list of sorting methods and their names
        String[] sortNames = {"bubble", "selection", "insertion", "merge", "quick"};
        Runnable[] sortMethods = {
            sorter::bubble,
            sorter::selection,
            sorter::insertion,
            sorter::merge,
            sorter::quick
        };

        // timing each sort
        long[] sortTimes = new long[sortNames.length];
        for (int i = 0; i < sortNames.length; i++) {
            // reset personList to unsorted state for each sort
            personList = Person.createList();
            sorter.personList = personList;
            sortTimes[i] = timeExecution(sortMethods[i]);
        }

        // sorted list
        /*
        System.out.println("sorted list:");
        for (Person person : personList) {
            System.out.println(person.getName() + " - rate: " + person.getRating());
        }
        */

        // times for each sort
        System.out.println("\nelapsed times to sort:");
        for (int i = 0; i < sortNames.length; i++) {
            System.out.println(sortNames[i] + " sort: " + sortTimes[i] + " ms");
        }
    }
}
algorithmicSort.main(null);
```

    unsorted list:
    Luna - rate: 3
    Finn - rate: 4
    Justin - rate: 2
    Emma - rate: 6
    Aliya - rate: 5
    Theo - rate: 1
    Grace - rate: 7
    Pranavi - rate: 10
    Vivian - rate: 8
    Shivansh - rate: 12
    Rayhan - rate: 9
    
    elapsed times to sort:
    bubble sort: 0 ms
    selection sort: 0 ms
    insertion sort: 1 ms
    merge sort: 0 ms
    quick sort: 4 ms


# LinkedList Research
- LinkedList is linear data structure made up of sequence of elements called nodes. 
- Each node contains data element and reference to next node in the sequence (last node usually points to null, indicates end of list)

## LinkedList vs. Array
- LinkedList NOT fixed size and elements aren't in contiguous memory locations. Each element/node is actually containing a pointer to next in sequence.
- Efficient insertion and deletion anywhere in the list

## Downsides
- Arrays allow direct acces to any element using index, but LinkedList reqruie sequential traversal from beginning or end to access specific element
- More memory to store pointers/references to next node, along with actual data


```java
public class LinkedList {

    class Node {
        int data;
        Node next;

        public Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    private Node head = null;

    public void addNode(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    public void clear() {
        head = null;
    }

    public void selectionSort() {
        Node current = head;
        while (current != null) {
            Node index = current.next;
            Node min = current;
            while (index != null) {
                if (index.data < min.data) {
                    min = index;
                }
                index = index.next;
            }
            int temp = current.data;
            current.data = min.data;
            min.data = temp;
            current = current.next;
        }
    }

    public void bubbleSort() {
        Node end = null;
        while (end != head) {
            Node current = head;
            Node next = head.next;
            while (next != end) {
                if (current.data > next.data) {
                    int temp = current.data;
                    current.data = next.data;
                    next.data = temp;
                }
                current = next;
                next = next.next;
            }
            end = current;
        }
    }

    public void insertionSort() {
        Node sorted = null;
        Node current = head;
        while (current != null) {
            Node next = current.next;
            if (sorted == null || sorted.data >= current.data) {
                current.next = sorted;
                sorted = current;
            } else {
                Node temp = sorted;
                while (temp.next != null && temp.next.data < current.data) {
                    temp = temp.next;
                }
                current.next = temp.next;
                temp.next = current;
            }
            current = next;
        }
        head = sorted;
    }

    public void mergeSort() {
        head = mergeSort(head);
    }

    private Node mergeSort(Node node) {
        if (node == null || node.next == null) {
            return node;
        }
        Node middle = getMiddle(node);
        Node nextOfMiddle = middle.next;
        middle.next = null;
        Node left = mergeSort(node);
        Node right = mergeSort(nextOfMiddle);
        return merge(left, right);
    }

    private Node merge(Node left, Node right) {
        Node result;
        if (left == null) {
            return right;
        }
        if (right == null) {
            return left;
        }
        if (left.data <= right.data) {
            result = left;
            result.next = merge(left.next, right);
        } else {
            result = right;
            result.next = merge(left, right.next);
        }
        return result;
    }

    private Node getMiddle(Node node) {
        if (node == null) {
            return node;
        }
        Node slow = node;
        Node fast = node.next;
        while (fast != null) {
            fast = fast.next;
            if (fast != null) {
                slow = slow.next;
                fast = fast.next;
            }
        }
        return slow;
    }

    private Node getTail(Node node) {
        while (node != null && node.next != null) {
            node = node.next;
        }
        return node;
    }

    public void display() {
        Node current = head;
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }

    public void resetList() {
        clear();
        addNode(8);
        addNode(39);
        addNode(7);
        addNode(43);
        addNode(5);
        addNode(91);
        addNode(12);
        addNode(2);
        addNode(86);
        addNode(33);
        addNode(7);
    }

    // timer for sorts
    public static long timeExecution(Runnable sortMethod) {
        long startTime = System.currentTimeMillis();
        sortMethod.run();
        long endTime = System.currentTimeMillis();
        return endTime - startTime; // return time elapsed in milliseconds
    }

    public static void main(String[] args) {
        LinkedList sList = new LinkedList();
        String[] sortNames = {"selection", "bubble", "insertion", "merge"};
        Runnable[] sortMethods = new Runnable[]{
            sList::selectionSort,
            sList::bubbleSort,
            sList::insertionSort,
            sList::mergeSort
        };
        long[] sortTimes = new long[sortNames.length];
        
        // display unsorted list
        sList.resetList();
        System.out.println("unsorted list:");
        sList.display();

        for (int i = 0; i < sortNames.length; i++) {
            sList.resetList();
            sortTimes[i] = timeExecution(sortMethods[i]);
        }

        System.out.println("\nelapsed times to sort:");
        for (int i = 0; i < sortNames.length; i++) {
            System.out.println(sortNames[i] + " sort: " + sortTimes[i] + " ms");
        }
    }
}
LinkedList.main(null);
```

    unsorted list:
    8 39 7 43 5 91 12 2 86 33 7 
    
    elapsed times to sort:
    selection sort: 0 ms
    bubble sort: 0 ms
    insertion sort: 0 ms
    merge sort: 0 ms

