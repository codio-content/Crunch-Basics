Crunch has a small set of instructions that manages branching.

## CMP
The main instruction you need is CMP. The instruction can be used in one of 2 ways

- `CMP 20` compare the Accumulator to the literal value 20.
- `CMP X` compare the Accumulator to the value stored in the memory address `X`.

Step through the code on the left until you get to the `CMP # 20` line. Step past the line so the `BGT Marker1` line is highlighted.

## Flags Register
Now look at the middle section below the code. The flags row shows the current comparison flags. Each flag can be white or green. If the flag is green then the flag is true. If it is white it is false.

![](.guides/img/crunch-flags.png)

Currently, the Accumulator contains the value 22. So, when we ask `CMP # 20`, you should be able to see that

- `=` is `false` (`22` is equal to `20` is not true)
- `≠` is `true` (`22` is not equal to `20` is true)
- `<` is `false` (`22` is less than to `20` is not true)
- `≤` is `false` (`22` is less than  or equal to `20` is not true)
- `>` is `true` (`22` is greater than `20` is true)
- `≥` is `false` (`22` is greater than or equal to `20` is true)

## BGT
So having set the flags with the `CMP` instruction, we can now do something useful with them.

Our code needs to display a `1` if the Accumulator is greater than `20`. The way we have to do this in Assembler is to branch (jump) to a location in order to carry out the required instructions.

- `BGT` says "if the greater than flag is set, then branch to a named point in the code".

## BEQ, BNE, BLT, BLE, BGE
These instructions do exactly the same thing but they operate on different flags, so

- `BEQ` branches if the `=` is set
- `BNE` branches if the `≠` is set
- `BLT` branches if the `<` is set
- `BLE` branches if the `≤` is set
- `BGT` branches if the `>` is set
- `BGE` branches if the `≥` is set









