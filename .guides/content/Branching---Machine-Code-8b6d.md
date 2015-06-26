It is worth mentioning how the machine code works wth branching.

Take a look at the code snippet below. 

![](.guides/img/crunch-branch-code.png)

On the highlighted line, we can see that the `BGT` instruction is located at memory address `1002`.

You can also see that the machine code instruction for `BGT` is `42`.

When the CPU executes this instruction, it knows to jump to memory address `1006` if the `>` flag is set.

The Crunch Assembler has done the magic of working out what the memory address is. It used the `Marker1` label to calculate this address.

