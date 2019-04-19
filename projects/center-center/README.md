[⭠ Back to main page](https://github.com/JonasKoenig/CodeOnMyMind) &nbsp;
[⭳ Download](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2FJonasKoenig%2FCodeOnMyMind%2Ftree%2Fmaster%2Fprojects%2Fcenter-center)

# Centering DIV Elements

In this code example I build a work-out clock. At some point I wanted to center the clock both horizontally and vertically.

<img src="center-center.gif" alt="GIF showing the centered clock">

One approach is to create a container div around the content we want to center.

```html
<div class="container">
  <!-- This content will be centered -->
</div>
```

The following CSS snippet sets the horizontal align of the container's children to center. For this to actually matter the container element requires the full width of the page. As for vertical alignment - we set the position to be absolute. The position can now be set via the top attribute. Instead of choosing an offset in 'pt', the '50%' will always center the div.

```css
.container {
  text-align: center;  /* horizontal align */
  width: 100%;         /* horizontal stretch*/

  position: absolute;  /* vertical align */
  top: 50%;            /* vertical align */
}
```
