<!-- Header -->
[⬅️ Back to main page](https://github.com/JonasKoenig/CodeOnMyMind) &nbsp;
[💾 Download](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2FJonasKoenig%2FCodeOnMyMind%2Ftree%2Fmaster%2Fprojects%2FHaskell-notes)

# Notes on Haskell

🚧 work in progress

Haskell is a programming language, that relies on the functional programming paradigm. I will explain the core concept and introduce the syntax.

## Functional Programming

- Others are not dysfunctional :)

- focus more on the what than the how

- statically typed

- lazy evaluation

- I find it most helpful to define functional programming by thinking about differences to imperative programming

|                   | Functional                        | Imperative                    |
|:------------------|:----------------------------------|:------------------------------|
| Basic Idea        | data transformations, stateless   | workflow, track state changes |
| Primary Construct | functions                         | instances of classes          |
| Flow Control      | functions, composition, recursion | loops, statement sequences    |
| Execution         | reduction, evaluation             | in-order, top-down            |
| Underlying Theory | λ-calculus                        | Turing Machines               |


## Basic Syntax

One important step, when I learn a new programming language, is getting used to the syntax. This holds especially true, if the new language has a fundamentally different flavor than the previous ones. In the next few paragraphs I will introduce basic constructs in Haskell. I will also upload Haskell files (.hs) of all examples.

<details open>
  <summary><b>1. Hello Haskell!</b></summary>

  When executing a Haskell file, the `main` function is called. We define it to print the String `"Hello Haskell!"`.

  ```Haskell
main = print "Hello Haskell!"
  ```

  Note, there are no parentheses or semicolons to indicate functions or line endings.

</details>

<details>
  <summary><b>2. Functions</b></summary>

  Functions are Haskell's bread and butter. This particular function `f` takes one value `x` and returns it's successor.

  ```Haskell
f :: Integer -> Integer    -- define the function's type
f x = x+1                  -- define what it does

main = print (f 41)        -- apply the function => 42
  ```

  A space `⎵` means 'apply', as seen in `f 41`. Two hyphens `--` start a one line comment, which can provide additional information about your function.

  _Function Composition_ means applying multiple functions in a row. Functions associate to the left, meaning `g f x` is the same as `(g f) x`. That will probably be confusing at first.

  ```Haskell
f :: Integer -> Integer    -- first function
f x = x+1                  -- f(x) = x+1

g :: Integer -> Integer    -- second function
g x = 2*x                  -- g(x) = 2x

main = do
  print (g (f 20))         -- "()" defines explicit order
  print (g $ f 20)         -- "$" will take evaluate everything on the right first
  print $ g $ f 20         -- "print" is just another function
  print $ g f 20           -- ⚠️ Error: Beware of how functions associate
  ```

</details>

<details>
  <summary><b>3. Types</b></summary>

  Haskell is statically typed. That means every type is known at compile time. If you do not provide a type for your functions, Haskell can deduce it (_type inference_).

  | Type      | Description    | Examples          |
  |:----------|:---------------|:------------------|
  | `Int`     | 64-Bit integer | `0`, `(-1)`, `42` |
  | `Integer` | arbitrary length integer | `factorial 50` |
  | `Float`   | decimal numbers with single precision | `0.001337` |
  | `Double`  | decimal numbers with double precision | `0.00000000001337` |
  | `Bool`    | Boolean | `True`, `False` |
  | `Char`    | character | `'a'`, `'z'`, `'A'` |
  | `(...)`   | _n_-tuple with _n_ values| `('a',1)` is of type `(Char,Int)`  |
  | `[...]`   | homogenous list | `[1,2,3]` is of type `[Int]`, strings are `[Char]` |
  | `a`       | type variable (polymorphism) | can mean different things for different function calls |
  | ...       | [learn more](http://www.learnyouahaskell.com/types-and-typeclasses) | |

  Functions can manipulate data of a specific type. Their type is denoted by `... -> ...`. A function of type `[Integer] -> Integer` converts a list of integers to a single integer, for example.  

</details>

<details>
  <summary><b>4. Currying</b></summary>

  _to do_

</details>


## Noteworthy References

- [Haskell.org](https://www.Haskell.org/): Official site with interactive introduction
- [Hoogle](https://hoogle.Haskell.org/): Search Haskell functions by type
