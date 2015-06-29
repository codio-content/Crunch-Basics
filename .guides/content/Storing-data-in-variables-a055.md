In most programs you will need to store data somewhere and retrieve it later. 

Crunch's `DAT` instruction allows you create a named memory location to do this. 

To illustrate this, let's look at some code you might use in a text based programming language.

```javascript
X = 10
Y = X * 2
```

We could actually manage this just using the Acucmulator but take a look at the code on the left to show how you can store data using the `DAT` instruction.

Because Crunch's `MUL` instruction does not allow you to multiply by a literal number, we need to get the number to multiply by from a memory location (`Factor` in the code).

## DAT instructions get pushed to the bottom
When you do the next challenge you will notice that when you create a DAT instruction, it gets pushed to the bottom of the program. This is deliberate and is done to help you see how variables are stored in a different memory space to instructions.

## Ste through the code
When you step through the code you will see how the memory addresses for `DAT` variables start at `2000`, whereas logic instructions start at `1000`.
