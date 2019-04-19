- [Back to main page](https://github.com/JonasKoenig/CodeOnMyMind)

# How I explain code

Here are a few lessons I learned so far. I will update this as I go.

<details>
<summary>READMEs</summary>

I create a README file for every project in this repository. It is prominently displayed beneath all files and aims to document what the project is about. Markdown has a compact syntax and covers everything I need so far.

</details>

<details>
<summary>What instead of why</summary>

To convey the idea behind a piece of code it is more important to explain _what_ it does in terms of the problem, we are trying to solve. Therefore _why_ the syntax acts the way it does should come second.

</details>

<details>
<summary>Provide context</summary>

In an effort to appeal to a wider audience, I decided to write a short intro for every project. Explaining _what_ I do is the point of this repository. Explaining _why_ I do it is what makes it worth your while. I find that providing a little context goes a long way.

</details>

<details>
<summary>Dissecting parts</summary>

One interesting way of notating a function is to take it apart:

```python
              np.random                           # load random module
              np.random.randint(0, 2, size=(a,a)) # random values 0 or 1 on a grid of size a times a
random_grid = np.random.randint(0, 2, size=(a,a)) # give it a name
```

I will try to incorporate this into my explanations.

</details>
