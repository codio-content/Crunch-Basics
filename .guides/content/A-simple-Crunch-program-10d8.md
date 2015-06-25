## Assembly Language
Crunch code is a very simple type of *Assembly Language*. This is a programming language that uses instructions (mnemonics) that are text representations of the actual instructions used by the CPU itself.

## Machine Code
Machine code is the numeric instruction code that the CPU uses. Each text mnemonic is represented by a number.

## Example
Take a look at the code below. This shows a very simple Crunch program. You can see both the source code mnemonics (INP, STA, OUT, END, DAT) and the machine code instructions (20, 10, 21, 60, 80).

![](.guides/img/i-1.png)

### Memory Addresses for Instructions
Each instruction lives in a memory address. In our example, the memory address space starts at `1000` and goes to `1003`. If we had more instructions, the program would use more memory space to store those instructions.

Let's explore what instructions are stored in memory

| Address | Instruction Code | Explanation |
| :- | :- | :- |
| 1000 | 20 | 20 is the machine code for the INP instruction, which prompts for a number to be input by the user |
| 1001 | 10 | 10 is the instruction STA, which stores the Accumulator (explained in a moment) at the memory address 2000.|
| 1002 | 21 | 21 is the machine code for the OUT instruction, which outputs the value contained in the Accumulator to the output console at the bottom of the screen. |
| 1003 | 60 | 60 is the machine code for the END instruction, which terminates the program. |

### Memory Addresses for Data
Data is stored in memory addresses also. In Crunch, the addresses reserved for data start at `2000`. This keeps the data separate from the instructions.

You can see that we have used one memory location called `myDataVariable`.

This is located at address location `2000`. The value in the `Ref` column contains the value that it currently stores, which is initially `0`.
