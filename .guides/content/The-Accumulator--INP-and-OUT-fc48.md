An important concept that you need the grasp when dealing with Assembly language is the *Accumulator*.

|||definition
In a computer's central processing unit (CPU), an accumulator is a register in which intermediate arithmetic and logic results are stored.
|||

What this really means is that a CPU is incredibly simple, almost stupid!

In Crunch, the CPU is only able to work with one single value and this value is stored in the Accumulator. If you want to do something with another value, you have to first store it to a memory location and then later load it back.

What makes CPUs amazing is that fact that it can do these very basic actions unbelievably quickly. Billions of times a second. Suddenly they are rather smart!

## Our Example
In our example on the left our program adds 2 numbers together. Let's follow what is going on, step by step. Press the 'Step' button and see these steps executing in Crunch.

1. `INP` : the user is prompted to enter a number. This number is stored automatically in the Accumulator.
1. `STA` : whatever is currently in the Accumulator (the number you entered) is stored to the memory location X (`2000`).
1. `INP` : the user is prompted to enter another number. We don't need to store this to a memory location.
1. `ADD X` : the CPU adds the value stored at the `X` memory location to the value currently stored in the Accumulator.
1. `OUT Sum is` : this outputs the Accumulator value to the console at the bottom of the screen. `Sum is` is just a piece of helper text to give the output value some context.
1. `END` : this tells the CPU to stop executing the program.

## Debug Mode
Make sure you now step through the code so you can see exactly what is happening.

We're now ready to do some challenges!



