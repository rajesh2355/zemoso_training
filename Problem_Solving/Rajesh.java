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