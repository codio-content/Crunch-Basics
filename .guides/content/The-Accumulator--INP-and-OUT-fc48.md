An important concept that you need the grasp when dealing with Assembly language is the *Accumulator*.

|||definition
In a computer's central processing unit (CPU), an accumulator is a register in which intermediate arithmetic and logic results are stored.
|||

What this really means is that a CPU is incredibly simple, almost stupid! In Crunch, the CPU is only able to work with one value, stored in the Accumulator. 

## Our Example
In our example on the left our program adds 2 numbers together. Let's follow what is going on, step by step . Press the 'Step' button once to start executing the program.

The first `INP` instruction prompts the user to enter a number which is then stored in the Accumulator. Press the 'Step' button and input a value of '2'. Alongside the Accumulator you can see the stack which shows the current instruction. The `STA` instruction is show because the `INP` instruction is finished executing. 
 
![](.guides/img/io/1.png)

In order to work with another value, the Accumulator has to be saved to a named memory location or `DAT` with the `STA` instruction. Press the 'Step' button to store the Accumulator value in `X`.

After executing `STA X` the Accumulator value of '2' has been stored in the named memory location `X` at memory address `2000`. 

![](.guides/img/io/2.png)

Press the 'Step' button again and input a value of '9' for the second `INP` prompt. Do you see how the previous Accumulator value of '2' has been replaced with the new input value of '9'?  

![](.guides/img/io/3.png)

`ADD X` instructs the CPU to ADD the value stored in the named memory location `X` at memory address `2000`, to the value stored in the Accumulator resulting in a total of '11'. Press the 'Step' button to execute the `ADD` instruction.

![](.guides/img/io/4.png)

The `OUT` instruction tells the CPU to output the value stored in the Accumulator with some additional text `Sum is`.  Press the 'Step' button to output the Accumulator.

Lastly the `END` instruction tells the CPU to stop executing the program. Press the 'Step' button to execute the `END` instruction and end the program.

Note: A program's `DAT` commands are automatically moved to the bottom of your program.

## Simple but Fast!

What makes CPUs amazing is that fact that it can do these very basic actions unbelievably quickly. Billions of times a second. Suddenly they are rather smart!

We're now ready to do some challenges!
