using System;

namespace Ability
{
    class Program
    {
        static void Main(string[] args)
        {
            int num;
            for (num = 1; num < 100; num++)
            {
                var result = (num % 5 == 0 && num % 3 == 0) ? "FizzBuzz" : (num % 3 == 0) ? "Fizz" : (num % 5 == 0) ? "Buzz" : num.ToString();
                Console.WriteLine(result);

            }

            Console.Write("\n--------------------------------------------------\n");


            Console.WriteLine("\n\nNow MinMax problem\n\n");

            int[] arr = new int[100];
            int i, n;

    

            Console.Write("Input the number of elements to be stored in the array :");
            n = Convert.ToInt32(Console.ReadLine());

            Console.Write("Input {0} elements in the array :\n", n);
            for (i = 0; i < n; i++)
            {
                Console.Write("element - {0} : ", i);
                arr[i] = Convert.ToInt32(Console.ReadLine());
            }

            MinMax(arr, n);

            
        
        }

        static void MinMax(int[] arr, int n)
        {
            
            int max = arr[0];
            int min = arr[0];
            for (int i = 1; i < n; i++)
            {
                if (arr[i] > max)
                {
                    max = arr[i];
                }
                if (arr[i] < min)
                {
                    min = arr[i];
                }
            }
            Console.Write("\nMaximum element = {0}\n", max);
            Console.Write("Minimum element = {0}\n", min);
        }
    }
}
