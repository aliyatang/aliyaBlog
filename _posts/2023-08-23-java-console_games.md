---
layout: post
title: Console Games - RPS, Higher Lower, Tic-Tac-Toe
description: Console games that show elements from College Board's Units
courses: {'csa': {'week': 2}}
categories: ['Games', 'Java', 'Tri 1']
type: hacks
tags: ['Game', 'Java']
---

# Console Games - RPS, Higher Lower, Tic-Tac-Toe
Console games that show elements from College Board's Units

## Hacks
> To start the year, I want you to consider a simple Java console game or improve on the games listed.
- Make RPS, Tic-Tack-Toe, and Higher Lower into different objects.  Answer why you think this is important?: You can isolate the games from each other: each game object can have its own set of rules, logic, and methods. This makes it easier to maintain and change, because if you edit one game, it won't affect another.
- Simplify logic, particularly T-T-T.  What could you do to make this more simple? Java has HashMap (like Python Dictionary), Arrays (fixed size), ArraLists (Dynamic Size): 2D array to represent board - initialization to make empty board, update board, clear board, etc, player class for x and o, function to make a move, check win, check draw, and main game loop.
- Run the menu using recursion versus while loop.


```java
import java.util.Random;
import java.util.Scanner;

public class RPSGame {
    public static void main(String[] args) {
        System.out.println("Welcome to Rock Paper Scissors!");
        System.out.println("Enter 'r' for rock, 'p' for paper, or 's' for scissors:");

        Scanner scanner = new Scanner(System.in);
        String userChoice = scanner.nextLine().toLowerCase();
        scanner.close();

        Random random = new Random();
        int computerChoice = random.nextInt(3); // 0 for rock, 1 for paper, 2 for scissors

        String[] choices = {"rock", "paper", "scissors"};
        String userSelected = choices[userChoice.equals("r") ? 0 : userChoice.equals("p") ? 1 : 2];
        String computerSelected = choices[computerChoice];

        System.out.println("You chose " + userSelected);
        System.out.println("The computer chose " + computerSelected);

        if (userChoice.equals("r")) {
            if (computerChoice == 1) {
                System.out.println("You lose!");
            } else if (computerChoice == 2) {
                System.out.println("You win!");
            } else {
                System.out.println("It's a tie!");
            }
        } else if (userChoice.equals("p")) {
            if (computerChoice == 1) {
                System.out.println("It's a tie!");
            } else if (computerChoice == 2) {
                System.out.println("You lose!");
            } else {
                System.out.println("You win!");
            }
        } else if (userChoice.equals("s")) {
            if (computerChoice == 1) {
                System.out.println("You win!");
            } else if (computerChoice == 2) {
                System.out.println("It's a tie!");
            } else {
                System.out.println("You lose!");
            }
        } else {
            System.out.println("Invalid input, try again.");
        }
    }
}
```


```java
RPSGame.main(null)
```

    Welcome to Rock Paper Scissors!
    Enter 'r' for rock, 'p' for paper, or 's' for scissors:
    p
    You chose paper
    The computer chose scissors
    You lose!



```java
import java.util.Random;
import java.util.Scanner;

public class HigherLowerGame {
    public static void main(String[] args) {
        System.out.println("Welcome to Higher or Lower!");
        System.out.println("I'm thinking of a number between 1 and 8.");
        System.out.println("You have three guesses to get it right.");

        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int answer = random.nextInt(8) + 1;

        for (int remainingGuesses = 3; remainingGuesses > 0; remainingGuesses--) {
            System.out.print("Enter your guess: ");
            int userGuess = scanner.nextInt();

            if (userGuess == answer) {
                System.out.println("Congratulations, you guessed it right!");
                break;
            } else if (userGuess > answer) {
                System.out.println("The number is lower.");
            } else {
                System.out.println("The number is higher.");
            }

            if (remainingGuesses > 1) {
                System.out.println("You have " + (remainingGuesses - 1) + " guesses remaining.");
            } else {
                System.out.println("You have no more guesses. The number was " + answer + ".");
            }
        }

        System.out.println("Thanks for playing!");
        scanner.close();
    }
}
```


```java
HigherLowerGame.main(null)
```

    Welcome to Higher or Lower!
    I'm thinking of a number between 1 and 8.
    You have three guesses to get it right.
    Enter your guess: 4
    The number is lower.
    You have 2 guesses remaining.
    Enter your guess: 2
    The number is higher.
    You have 1 guesses remaining.
    Enter your guess: 3
    Congratulations, you guessed it right!
    Thanks for playing!



```java
import java.util.Random;
import java.util.Scanner;

public class TicTacToeGame {
    private static final int BOARD_SIZE = 3;
    private static final char EMPTY = ' ';
    private static char[][] board = new char[BOARD_SIZE][BOARD_SIZE];
    private static char currentPlayer = 'X';

    public static void main(String[] args) {
        initializeBoard();
        playGame();
    }

    private static void initializeBoard() {
        for (int row = 0; row < BOARD_SIZE; row++) {
            for (int col = 0; col < BOARD_SIZE; col++) {
                board[row][col] = EMPTY;
            }
        }
    }

    private static void printBoard() {
        System.out.println("-------------");
        for (int row = 0; row < BOARD_SIZE; row++) {
            System.out.print("| ");
            for (int col = 0; col < BOARD_SIZE; col++) {
                System.out.print(board[row][col] + " | ");
            }
            System.out.println("\n-------------");
        }
    }

    private static boolean isBoardFull() {
        for (int row = 0; row < BOARD_SIZE; row++) {
            for (int col = 0; col < BOARD_SIZE; col++) {
                if (board[row][col] == EMPTY) {
                    return false;
                }
            }
        }
        return true;
    }

    private static boolean makeMove(int row, int col) {
        if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE || board[row][col] != EMPTY) {
            return false;
        }
        board[row][col] = currentPlayer;
        return true;
    }

    private static boolean checkWin(char player) {
    // Check rows
    for (int row = 0; row < BOARD_SIZE; row++) {
        if (board[row][0] == player && board[row][1] == player && board[row][2] == player) {
            return true;
        }
    }

    // Check columns
    for (int col = 0; col < BOARD_SIZE; col++) {
        if (board[0][col] == player && board[1][col] == player && board[2][col] == player) {
            return true;
        }
    }

    // Check diagonals
    if ((board[0][0] == player && board[1][1] == player && board[2][2] == player) ||
        (board[0][2] == player && board[1][1] == player && board[2][0] == player)) {
        return true;
    }

    return false;
}


    private static void playGame() {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        boolean againstComputer = false;

        System.out.println("Welcome to Tic-Tac-Toe!");
        System.out.println("Do you want to play against a friend (1) or the computer (2)?");
        int choice = scanner.nextInt();

        if (choice == 2) {
            againstComputer = true;
        }

        while (true) {
            System.out.println("Current board:");
            printBoard();
            System.out.println("Player " + currentPlayer + ", enter row (0-2) and column (0-2) separated by space: ");

            int row;
            int col;

            if (againstComputer && currentPlayer == 'O') {
                row = random.nextInt(3);
                col = random.nextInt(3);
            } else {
                row = scanner.nextInt();
                col = scanner.nextInt();
            }

            if (makeMove(row, col)) {
                if (checkWin(currentPlayer)) {
                    System.out.println("Player " + currentPlayer + " wins!");
                    break;
                } else if (isBoardFull()) {
                    System.out.println("It's a tie!");
                    break;
                } else {
                    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
                }
            } else {
                System.out.println("Invalid move. Try again.");
            }
        }
        scanner.close();
    }
}
```


```java
TicTacToeGame.main(null)
```

    Welcome to Tic-Tac-Toe!
    Do you want to play against a friend (1) or the computer (2)?
    2
    Current board:
    -------------
    |   |   |   | 
    -------------
    |   |   |   | 
    -------------
    |   |   |   | 
    -------------
    Player X, enter row (0-2) and column (0-2) separated by space: 
    0 0
    Current board:
    -------------
    | X |   |   | 
    -------------
    |   |   |   | 
    -------------
    |   |   |   | 
    -------------
    Player O, enter row (0-2) and column (0-2) separated by space: 
    Current board:
    -------------
    | X |   | O | 
    -------------
    |   |   |   | 
    -------------
    |   |   |   | 
    -------------
    Player X, enter row (0-2) and column (0-2) separated by space: 
    2 2
    Current board:
    -------------
    | X |   | O | 
    -------------
    |   |   |   | 
    -------------
    |   |   | X | 
    -------------
    Player O, enter row (0-2) and column (0-2) separated by space: 
    Invalid move. Try again.
    Current board:
    -------------
    | X |   | O | 
    -------------
    |   |   |   | 
    -------------
    |   |   | X | 
    -------------
    Player O, enter row (0-2) and column (0-2) separated by space: 
    Current board:
    -------------
    | X | O | O | 
    -------------
    |   |   |   | 
    -------------
    |   |   | X | 
    -------------
    Player X, enter row (0-2) and column (0-2) separated by space: 
    2 0
    Current board:
    -------------
    | X | O | O | 
    -------------
    |   |   |   | 
    -------------
    | X |   | X | 
    -------------
    Player O, enter row (0-2) and column (0-2) separated by space: 
    Current board:
    -------------
    | X | O | O | 
    -------------
    |   |   |   | 
    -------------
    | X | O | X | 
    -------------
    Player X, enter row (0-2) and column (0-2) separated by space: 
    1 0
    Player X wins!

