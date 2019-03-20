# Learn Python: Loops

- [Lesson 01](#lesson-01): For-Loops
- [Lesson 02](#lesson-02): Arrays
- [Lesson 03](#lesson-03): Foreach-Loops
- [Lesson 04](#lesson-04): While-Loops

## Lesson 01

Loops execute the same code multiple times. Using loops might save you some programming work and make your code shorter. The for-loop

```python
for i in range(1,6):
    print("I printed this " + str(i) + " out of 5 times")
```

The for-loop counts up a counter (`i`) in each pass. The counter counts from the first value of the range to the second (exclusive). One can use the counter variable `i` in the loop body. _Note:_ Since `i` is an integer, we need to convert it into a string (text object).

**Task:** Print a message three times using a for-loop.

<details>
<summary><b>Solution</b></summary>

```python
for i in range(0,3):
    print("Don't repeat yourself.")
```
Result: `Don't repeat yourself. Don't repeat yourself. Don't repeat yourself.`

</details>

[Back to top &#8679;](#learn-python)

## Lesson 02

Arrays are basically a list of objects of the same type.

```python
names = ["Anakin Skywalker", "Obi-Wan Kenobi", "Yoda"]
print(names[0] + " is my favorite Star Wars character.")
```

We can access specific values of an array via square brackets. Beware! _We start counting at 0._ We determine the length of an array with the `len()` function

**Task:** Print all character names using a for-loop.

<details>
<summary><b>Solution</b></summary>

```python
names = ["Anakin Skywalker", "Obi-Wan Kenobi", "Yoda"]
for i in range(0, len(names)):
    print(names[i] + " is a Star Wars character.")
```
Result: `Anakin Skywalker is a Star Wars character. Obi-Wan Kenobi is a Star Wars character. Yoda is a Star Wars character.`

</details>

[Back to top &#8679;](#learn-python)

## Lesson 03

When working with arrays, we often want to loop through an entire array. A more convenient way is a variation of the for-loop - a foreach-loop. The syntax is practically the same, but instead of a counter variable, we use every object itself.

```python
names = ["Anakin Skywalker", "Obi-Wan Kenobi", "Yoda"]
for name in names:
    print(name + " is a Star Wars character.")
```

**Task:** Create an array of numbers. Calculate the sum of all numbers using a foreach-loop.

<details>
<summary><b>Solution</b></summary>

```python
numbers = [4, 9, 17, 20, 21, 42, 200, 1024]
sum = 0
for number in numbers:
    sum = sum + number

print(sum)
```
Result: `1337`

</details>

[Back to top &#8679;](#learn-python)

## Lesson 04

Another kind of loop is the while-loop. It works similar to an if-statement, but it checks the statement before each pass.

```python
i = 0
while i < 12:
    print(i)
```

_Note:_ The example above will keep printing `0` forever (or until your laptops battery dies).

**Task:** Fix the example to only print the numbers from 1 to 12.

<details>
<summary><b>Solution</b></summary>

```python
i = 0
while i < 12:
    i = i + 1
    print(i)
```
Result: `1 2 3 4 5 6 7 8 9 10 11 12`

</details>

[Back to top &#8679;](#learn-python)
