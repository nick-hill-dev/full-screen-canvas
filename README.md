# FullScreenCanvas Library

The FullScreenCanvas library is a lightweight library that simplifies the process of creating and removing one or more full-screen HTML `<canvas />` elements. Each canvas occupies the full width and height of the window area, even if the window is resized.

To use this package in your software:

```bash
npm install @nick-hill-dev/full-screen-canvas
```

Examples are in the `demos` directory. To run them, execute the following commands:

```bash
npm install
npx tsc
npx rollup -c # Creates js file in demos directory, and now you can open those pages in your browser
```

## Adding a Full-Screen Canvas

To add a full-screen canvas element to your web page, simply call the `add` method of the `FullScreenCanvas` class. By default, the canvas will be appended to the document.body element. However, you can optionally pass in a parent element to append the canvas to.

```js
const canvas = FullScreenCanvas.add(); // Appends the new Canvas element to document.body
```

or

```js
const parent = document.getElementById('my-canvas-container');
const canvas = FullScreenCanvas.add(parent);
```

It is also possible to make the canvas fill the whole screen rather than just the browser window, though it is necessary to do so as a result of a user action:

```js
window.onclick = () => {
    FullScreenCanvas.add(document.body, { fullScreen: true });
}
```

## Removing a Full-Screen Canvas

To remove a full-screen canvas element from your web page, simply call the remove method of the FullScreenCanvas class and pass in the canvas element that you wish to remove.

```js
FullScreenCanvas.remove(canvas);
```

## Example

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>FullScreenCanvas Example</title>
</head>
<body>
    <script src="fullScreenCanvas.js"></script>
    <script>
        const canvas = FullScreenCanvas.add();
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    </script>
</body>
</html>
```

## License

The FullScreenCanvas library was written by Nick Hill and is released under the MIT license. See LICENSE for more information.