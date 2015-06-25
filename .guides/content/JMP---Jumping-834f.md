The JMP instruction is very useful for jumping to a marked location in the code.

Consider the following challenge that is a variation on the last example we looked at.

> If X is greater than `20`, output `1` otherwise output `0`. 
>
>Once the result has been output, output `99`. 

We could of course add `LDA 99` then `OUT` after both sections of our code but this would be inelegant.

Take a look at the code on the left and see how we have solved it.

The `JMP` instruction moves ecxecution to the `Finished` location so it can load `99` into the Accumulator and then output to the display console.

If `X` were to contain a value larger than `20` then it would not need to `JMP` as it can simply move on the the correct instructions.

## Play
Play with the code and make sure you understand what is going on.