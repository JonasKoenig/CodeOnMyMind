# Learn Python

- [Lesson 01](#lesson-01)
- [Lesson 02](#lesson-02)
- [Lesson 03](#lesson-03)
- [Lesson 04](#lesson-04)


<details>
  <summary>Installation</summary>

  In my opinion Python is a great language for both beginners and veterans. It has a very easy syntax resulting in a steep learning curve. Shorthands allow more experienced programmers to write elegant code using only a few lines of code.

  Beware of the two Python versions. Python 2.7 is still used, but support for it will stop in early 2020. Therefore this tutorial will use Python 3.

  1. First will need to get Python 3. This [Installation Guide](https://realpython.com/installing-python/) should lead you through the process.

  2. I recommend using [Atom](https://atom.io/) instead of a plain text editor. It provides syntax highlighting to indicate the functionality of a piece of code.

  3. Once we have created a Python script _script.py_ we have to execute it on the command line. [This article](https://www.pythoncentral.io/execute-python-script-file-shell/) shows you how. After you navigated to the correct directory - on Windows this should look like:

  ```
  C:\...\learn-python> python script.py
  ```

  Linux and Mac users will see something like:

  ```
  user@ubuntu:~/.../learn-python$ python script
  ```

  Alternatively you can use an [Online Interpreter](https://www.onlinegdb.com/online_python_compiler) to run the code. This way you do not need to install anything, but code might run slower.

  If you made it through the installation process, the cumbersome part is behind you and we can get started :)

</details>

## Lesson 01

Write `print("Hello World!")` to your script file and save. If you now execute your script on the command line, it should say 'Hello World!'.

`print()` is a build in function that writes its arguments (in the parenthesis) to the command line. The argument in this case is `"Hello World!"`.

If everything worked out, clear the script file or create a new one for the next lesson.

[Back to top](#learn-python)

## Lesson 02

Variables are a way of storing values. Python, in contrast to other programming languages, does not require a key word to declare variables.

```python
myVariable = "some stored value"
print(myVariable)
```

Create two variable and set them to numbers. Print their sum.

<details>
<summary>Solution</summary>
  
```python
x = 1
y = 41
print(x+y)
```
result: `42`
</details>

[Back to top](#learn-python)

## Lesson 03

If-Statements can be used to execute code depending on the value of a variable. The following snippet compares x to zero and prints "x is positive" if it is larger or equal.

```python
x = 42
if (x >= 0):
    print("x is positive")
```

The indentation of the print function is important. Python uses indentation to determine which commands belong to which.

<details>
<summary>Larger Example</summary>
  
```python
x = 42
if (x == 1):
    print("Print this if x is equal to one")

print("No indentation - print this no matter what")
```
</details>

<details>
<summary>Solution</summary>
  
```python
x = 1
if (x == 1):
    print("x is equal to one")
```
result: `x is equal to one`
</details>

[Back to top](#learn-python)

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

Define and call a function `add (x,y)` that returns the sum of its arguments.

<details>
<summary>Solution</summary>
  
```python
def add(x,y):
  return x+y

print(add(2,5))
```
result: `7`
</details>

[Back to top](#learn-python)
