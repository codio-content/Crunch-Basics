We now come to another important concept we need to master.

Branching is used to deal with *conditional statements* like "if x is greater than 20, output 1 to the screen, otherwise output 2".

In a conventional programming language we might have the following code

```
if X > 20
	print 1
else
	print 0
```

In Assembler we have to deal with low level instructions, so we don't have the luxury of an if statement. Instead we have to think like this
```
    Load X into the Accumulator
    Compare the Accumulator to 20 
    Branch if Greater Than to "Marker1"
    Print 0
    Finished
:Marker1
    Print 1
    Finished
```

On the next page, we'll see how we turn this into Crunch code. 

