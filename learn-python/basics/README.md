# Learn Python: Basics

Just in case you missed the installation guide - [here](..) it is again. See solutions.py for all solutions for the following lessons.

- [Lesson 01](#lesson-01): Hello World
- [Lesson 02](#lesson-02): Variables
- [Lesson 03](#lesson-03): If-Statements
- [Lesson 04](#lesson-04): Functions

## Lesson 01

**Task:** Write `print("Hello World!")` to your script file and save. If you now execute your script on the command line, it should say 'Hello World!'.

`print()` is a build in function that writes its arguments (in the parenthesis) to the command line. The argument in this case is `"Hello World!"`.

If everything worked out, clear the script file or create a new one for the next lesson.

[Back to top &#8679;](#learn-python)

## Lesson 02

Variables are a way of storing values. Python, in contrast to other programming languages, does not require a key word to declare variables.

```python
myVariable = "some stored value"
print(myVariable)
```

**Task:** Create two variable and set them to numbers. Print their sum.

<details>
<summary><b>Solution</b></summary>

```python
x = 1
y = 41
print(x+y)
```
Result: `42`

</details>

[Back to top &#8679;](#learn-python)

## Lesson 03

If-Statements can be used to execute code depending on the value of a variable. The following snippet compares x to zero and prints "x is positive" if it is larger or equal.

```python
x = 42
if (x >= 0):
    print("x is positive")
```

The indentation of the print function is important. Python uses indentation to determine which commands belong to which.

<details>
<summary><b>Larger Example</b></summary>

```python
x = 42
if (x == 1):
    print("Print this if x is equal to one")

print("No indentation - print this no matter what")
```

</details>

**Task:** Create an if-statement that prints a message, if `x` is equal to 1.

<details>
<summary><b>Solution</b></summary>

```python
x = 1
if (x == 1):
    print("x is equal to one")
```
Result: `x is equal to one`

</details>

[Back to top &#8679;](#learn-python)

## Lesson 04

We can define functions to make a piece of code reusable. Functions can have arguments in parenthesis (here: `x`) and can return a value. (_Note_ that the code following `#` is a comment and will not be executed)

```python
# function definition
def determineSign(x):
  if (x >= 0):
    return "x is positive"
  else:
    return "x is negative"

# function call
print(determineSign(-1))
print(determineSign(42))
```

**Task:** Define and call a function `add(x,y)` that returns the sum of its arguments.

<details>
<summary><b>Solution</b></summary>

```python
def add(x,y):
  return x+y

print(add(2,5))
```
Result: `7`

</details>

[Back to top &#8679;](#learn-python)
