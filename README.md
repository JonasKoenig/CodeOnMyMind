<img src="common/codeonmymind.png" alt="Code On My Mind Icon" width="100px" height="auto">

# Code On My Mind

My name is Jonas and I study Computer Science in Tübingen, Germany. I am creating this repository to keep track of nifty code snippets and techniques I learned. I share this with you, not because something like this has never been done before, but to practice explaining code. Feel free to reuse and modify any code you see here.

## History

The full history of this repository aims to show how this repository developed and which projects were added when.

| Date | Project | Description | Tags |
|:-----|:--------|:------------|:----:|
| 22. Mar 2019 | [Colors](./projects/colors) | Converting color formats in different languages | html, css, js |
| 20. Mar 2019 | [Learn Python](./projects/learn-python) | A beginners guide to python | python |
| 19. Mar 2019 | [LaTeX Cheat Sheet](./projects/latex-cheat-sheet) | Nifty stuff for LaTeX | latex |
| 18. Mar 2019 | [JSON to table](./projects/json-to-table) | Increase readability in JSON | html, js |
| 20. Feb 2019 | [Noise](./projects/noise) | Random vs. Smooth Noise | python |
| 19. Feb 2019 | [Text Analysis](./projects/text-analysis) | TextBlob: Disecting Text into data | python |
| 10. Jan 2019 | [Center-center](./projects/center-center) | Centering divs horizontally and vertically | html, css |
| 17. Sep 2018 | [Rescaling and Lerp](./projects/rescaling-and-lerp) | Linear interpolation between two ranges | processing, math |
| 27. Aug 2018 | [Selections via SVG](./projects/svg-selection) | ‘marching ants’ animation using svg in css | svg, css |

## How I explain code

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

## Contact

Please make use of the [Issues](https://github.com/JonasKoenig/CodeOnMyMind/issues)-Page on GitHub. As I am learning, I am thankful for all typos and bugs you report. If you have any questions or feedback on existing projects or suggestions on future projects, create an issue and I will respond as soon as I can.
