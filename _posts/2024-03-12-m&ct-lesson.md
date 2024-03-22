---
layout: post
title: Method's & Control Structures Lesson, focus on 2D Array Subtopic
description: Covering 2D Array Iteration
type: ccc
week: 25
categories: ['AP Test Prep', 'Java', 'Tri 3']
tags: ['Notebook', 'FRQ', 'Java']
---

# FRQ 2012 4

A grayscale image is represented by a 2-dimensional rectangular array of pixels (picture elements). A pixel is an
integer value that represents a shade of gray. In this question, pixel values can be in the range from 0 through
255, inclusive. A black pixel is represented by 0, and a white pixel is represented by 255.

The declaration of the `GrayImage` class is shown below. You will write two unrelated methods of the
`GrayImage` class.


```java
public class GrayImage{
    public static final int BLACK = 0;
    public static final int WHITE = 255;
    
    /** The 2-dimensional representation of this image. Guaranteed not to be null.
    * All values in the array are within the range [BLACK, WHITE], inclusive.
    */
    private int[][] pixelValues;
    
    /** @return the total number of white pixels in this image.
    * Postcondition: this image has not been changed.
    */
    public int countWhitePixels()
    { /* to be implemented in part (a) */ }
    
    /** Processes this image in row-major order and decreases the value of each pixel at
    * position (row, col) by the value of the pixel at position (row + 2, col + 2) if it exists.
    * Resulting values that would be less than BLACK are replaced by BLACK.
    * Pixels for which there is no pixel at position (row + 2, col + 2) are unchanged.
    */
    public void processImage()
    { /* to be implemented in part (b) */ }
}
```

(a) Write the method countWhitePixels that returns the number of pixels in the image that contain the value WHITE. For example, assume that pixelValues contains the following image.

||0|1|2|3|4|
|-|-|-|-|-|-|
|0| 255 | 184 | 178 | 84 | 129 |
|1| 84 | 255 | 255 | 130 | 84 |
|2| 78 | 255 | 0 | 0 | 78 |
|3| 84 | 130 | 255 | 130 | 84 |

A call to countWhitePixels method would return 5 because there are 5 entries that have the value WHITE.

Write the method `processImage` that modifies the image by changing the values in the instance variable `pixelValues` according to the following description. The pixels in the image are processed one at a time in row-major order. Row-major order processes the first row in the array from left to right and then processes the second row from left to right, continuing until all rows are processed from left to right. The first index of `pixelValues` represents the row number, and the second index represents the column number.

The pixel value at position (row, col) is decreased by the value at position (row + 2, col + 2) if such a position exists. If the result of the subtraction is less than the value `BLACK`, the pixel is assigned the value of `BLACK`. The values of the pixels for which there is no pixel at position (row + 2, col + 2) remain unchanged. You may assume that all the original values in the array are within the range `[BLACK, WHITE]`, inclusive.

The following diagram shows the contents of the instance variable `pixelValues` before and after a call to `processImage`. The values shown in boldface represent the pixels that could be modified in a grayscale image with 4 rows and 5 columns.

#### Before call to processImage

||0|1|2|3|4|
|-|-|-|-|-|-|
|0| 221 | 184 | 178 | 84 | 135 |
|1| 84 | 255 | 255 | 130 | 84 |
|2| 78 | 255 | 0 | 0 | 78 |
|3| 84 | 130 | 255 | 130 | 84 |

#### After call to processImage

||0|1|2|3|4|
|-|-|-|-|-|-|
|0| 221 | 184 | 100 | 84 | 129 |
|1| 0 | 125 | 171 | 130 | 84 |
|2| 78 | 255 | 0 | 0 | 78 |
|3| 84 | 130 | 255 | 130 | 84 |


```java
public class GrayImage {
    public static final int BLACK = 0;
    public static final int WHITE = 255;

    private int[][] pixelValues;

    public GrayImage(int[][] pixelValues) {
        this.pixelValues = pixelValues;
    }


    public int countWhitePixels() {
        int whitePixelCount = 0;
        for (int[] row : this.pixelValues) { // iterating through the columns and rows
            for (int pv : row) {
                if (pv == this.WHITE) { // if pixel is white, increment the count
                    whitePixelCount++;
                }
            }
        }
        return whitePixelCount;
    }

    public void processImage() {
        // Loop through each pixel, excluding the last 2 rows and columns
        for (int row = 0; row < this.pixelValues.length - 2; row++) { 
            for (int col = 0; col < this.pixelValues[0].length - 2; col++) {
                // Subtract pixel value from the corresponding pixel 2 rows and 2 columns away
                this.pixelValues[row][col] -= this.pixelValues[row + 2][col + 2];
                // If the result is less than black, set it to black
                if (this.pixelValues[row][col] < BLACK) {
                    this.pixelValues[row][col] = BLACK;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[][] pixels = {
            {255, 0, 235, 0, 218},
            {17, 255, 186, 0, 255},
            {255, 0, 87, 255, 0},
            {0, 75, 255, 128, 255},
            {255, 38, 0, 0, 206}
        };
        
        GrayImage image = new GrayImage(pixels);

        System.out.println("White pixels before processing: " + image.countWhitePixels());

        image.processImage();

        System.out.println("White pixels after processing: " + image.countWhitePixels());
    }
}
GrayImage.main(null)
```

    White pixels before processing: 8
    White pixels after processing: 6



```java
public class Matrix {
    private final int[][] matrix;

    // store matrix
    public Matrix(int[][] matrix) {
        this.matrix = matrix;
    }

    // nest for loops to format output of a matrix
    public String toString() {
        // construct output of matrix using for loops
        // outer loop for row
        StringBuilder output = new StringBuilder();
        for (int[] row : matrix) {
            // inner loop for column
            for (int cell : row) {
                output.append((cell==-1) ? " " : String.format("%x",cell)).append(" ");
            }
            output.append("\n"); // new line
        }
        return output.toString();
    }

    // print it backwards matrix
    public String reverse() {
        // outer loop starting at end row
        StringBuilder output = new StringBuilder();
        for (int i = matrix.length;  0 < i; i--) {
            // inner loop for column
            for (int j =  matrix[i-1].length; 0 < j; j--) {
                output.append((matrix[i-1][j-1]==-1) ? " " : String.format("%x",matrix[i-1][j-1])).append(" ");
            }
            output.append("\n"); // new line
        }
        return output.toString();
    }

    // declare and initialize a matrix for a keypad
    static int[][] keypad() {
        return new int[][]{ { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 }, {-1, 0, -1} };
    }

    // declare and initialize a random length arrays
    static int[][] numbers() {
        return new int[][]{ { 0, 1 },
                { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 },
                { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 } };
    }

    // tester method for matrix formatting
    public static void main(String[] args) {
        Matrix m0 = new Matrix(keypad());
        System.out.println("Keypad:");
        System.out.println(m0);
        System.out.println(m0.reverse());


        Matrix m1 = new Matrix(numbers());
        System.out.println("Numbers Systems:");
        System.out.println(m1);
        System.out.println(m1.reverse());

    }
}
Matrix.main(null);
```

    Keypad:
    1 2 3 
    4 5 6 
    7 8 9 
      0   
    
      0   
    9 8 7 
    6 5 4 
    3 2 1 
    
    Numbers Systems:
    0 1 
    0 1 2 3 4 5 6 7 8 9 
    0 1 2 3 4 5 6 7 8 9 a b c d e f 
    
    f e d c b a 9 8 7 6 5 4 3 2 1 0 
    9 8 7 6 5 4 3 2 1 0 
    1 0 
    


1. **`toString()` Method**:
   ```java
   public String toString() {
       StringBuilder output = new StringBuilder();
       for (int[] row : matrix) {
           for (int cell : row) {
               output.append((cell == -1) ? " " : String.format("%x", cell)).append(" ");
           }
           output.append("\n");
       }
       return output.toString();
   }
   ```
   - It uses nested enhanced `for` loops to iterate over each cell in the matrix.
   - Formats each cell's value in hexadecimal format (if not `-1`) and appends it to the `output` `StringBuilder`.
   - Appends a newline character after each row.

2. **`reverse()` Method**:
   ```java
   public String reverse() {
       StringBuilder output = new StringBuilder();
       for (int i = matrix.length; 0 < i; i--) {
           for (int j = matrix[i - 1].length; 0 < j; j--) {
               output.append((matrix[i - 1][j - 1] == -1) ? " " : String.format("%x", matrix[i - 1][j - 1])).append(" ");
           }
           output.append("\n");
       }
       return output.toString();
   }
   ```
   - It iterates over each cell in the matrix in reverse order using traditional `for` loops.
   - Similar to `toString()`, it formats each cell's value and appends it to the `output` `StringBuilder`.
   - Appends a newline character after each row.

3. **Static Methods for Matrix Initialization**:
   ```java
   static int[][] keypad() {
       return new int[][]{
            {1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {-1, 0, -1}
        };
   }

   static int[][] numbers() {
       return new int[][]{
            {0, 1}, {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15}
        };
   }
   ```
   - These methods initialize specific types of matrices (keypad and number systems) and return them.

# Common Mistakes and Errors

- Remember, Arrays are immutable, and ArrayLists are mutable. As a result, be careful about how data is changed in an Array vs. ArrayList
- `Array.length` is the length method, not `Array.length()` (however this is not deducted on the test)
- Same thing with notation such as `arr[i]` and `arr.get(i)`
- 
- IndexOutofBoundsError
  - Array.length -1 is the last index, and going over bounds
- ConcurrentModificationError
  - Occurs you are modifying a 2D array in more than one thread, through more than one 

These can be hard to spot, but below is an example:


```java
import java.util.ArrayList;
import java.util.List;

public class ConcurrentModificationExample {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();

        // Add some elements to the list
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);

        // Iterate over the list and try to remove an element within the loop
        for (Integer number : numbers) {
            System.out.println(number);
            // Concurrent modification
            numbers.remove(number);
        }
    }
}

ConcurrentModificationExample.main();
```

# Common Tips

For **Methods & Control Structures** questions, here are the steps we recommend:

- Write a quick list of M&CT you know to remind yourself:
    - Void methods
    - Non-void methods
        - Most of the time, all methods are already defined, you just have to write them
    - For loops
    - While loops
    - Conditional statements
    - Nested loops
    - Nested conditionals
    - Switch/case
        - I wouldn't count on using this
- Map out your code using basic diagrams as pseudo code
    - As you go, check off M&CT off of your list whenever you use them
        - Remember that they can be used more than once
    - Try going into a bit more detail when you start applying the M&CT to your pseudo code
- Write your code out (yes, it is in pen)
    - Remember to have a mental debugger
        - If you need practice, do the debugging event lesson again and play around with different breakpoints, errors, etc.

For M&CT questions that involve **2D Arrays**, here are the steps we recommend:

- Establish what the question is asking:
    - Almost always, the question requires you to iterate through the list.
    - Then, either search for something, count up elements, or manipulate certain elements that you parse through.
- Use the steps from methods & control structures to map out (with pseudo-code) exactly what you're going to do with the 2D array.
    - Remember to always keep a mental debugger active
    - If you're not sure about a certain line of code, it's the perfect opportunity to literally add a breakpoint in your code.
    - Treat breakpoints in your code as a "mark for review" symbol. 

