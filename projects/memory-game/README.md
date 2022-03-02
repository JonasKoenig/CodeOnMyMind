[⬅️ Back to main page](https://github.com/JonasKoenig/CodeOnMyMind) &nbsp;
[💾 Download](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2FJonasKoenig%2FCodeOnMyMind%2Ftree%2Fmaster%2Fprojects%2Fmemory-game) &nbsp;
[▶️ Demo](https://jonaskoenig.github.io/CodeOnMyMind/projects/memory-game/)

# Memory Game

This project is a simple memory game I made for a friend. I decided to do it in JavaScript and CSS, because I did not know which machine this game was going to run on - and everyone has Browser to display HTML.

![Memory Game Demonstration](./memory-game.gif)

## How to play

1. [Download](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2FJonasKoenig%2FCodeOnMyMind%2Ftree%2Fmaster%2Fprojects%2Fmemory-game) the code
2. Open the `index.html` file in your browser

## How to change the images

1. Copy your images into the images folder
2. Open `index.html` in a text editor
3. Look for the script-tag in the head element

```html
<script type="text/javascript">
  var cardsArray = [{
    'id': 1,
    'img': 'images/da-vinci.jpeg'
  }, {
    'id': 1,
    'img': 'images/da-vinci2.jpeg'
  }, ...
  ];
</script>
```

Images with the same `id`-value will be a match. Insert the names of your images like so: `'images/da-vinci.jpeg'` and they will be loaded if you refresh the `index.html` file in your browser.


## How I made it work

Before I even started I looked for implementations of others for this game. Using other peoples code cut my development time by at least a half. I was able to completely skip the game logic and the project was more about engineering the _feel_ and content of the game. See [this link](https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/) for the original project.

One requirement was that the two matching cards show different images, that are somehow connected. Augmenting the code to accommodate two different images was the only change I made to the original JavaScript.

The game is very heavy on CSS-transitions which aim to convey a feeling of real physical cards. The zoom effect of selected cards is achieved using transitions of transforms. For example: rotate and enlarge in 0.4 seconds.

```css
.zoom {
  transition: transform .4s;
  transform: rotateY(180deg) scale(2);
}
```
