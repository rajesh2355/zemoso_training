/**
 * Problem Statement
 * 5. Alice and Bob are playing a game on a sequence a1,a2,…,an of length n. They move in turns and Alice moves first.
 * In the turn of each player, he or she should select an integer and remove it from the sequence. The game ends when there is no integer left in the sequence.
 * Alice wins if the sum of her selected integers is even; otherwise, Bob wins.
 * Your task is to determine who will win the game, if both players play optimally.
 * 
 * Example Test case 
 * Input 4 1 2 3 4
 * Output : Bob
 */
import java.util.*;
import java.io.*;

class Rajesh {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int even = 0, odd = 0;
        for (int i = 0; i < n; ++i) {
            int x = sc.nextInt();
            if (x % 2 == 0)
                even += 1;
            else
                odd += 1;
        }
        if (odd % 4 == 2)
            System.out.println("Bob");
        else if (odd % 4 == 3)
            System.out.println("Alice");
        else if (odd % 4 == 0)
            System.out.println("Alice");
        else if (even % 2 == 1)
            System.out.println("Alice");
        else
            System.out.println("Bob");
            sc.close();
    }
}