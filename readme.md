# FullScreenCanvas Library

The FullScreenCanvas library is a lightweight library that simplifies the process of creating and removing one or more full-screen canvas elements. Each canvas occupies the full width and height of the window area, even if the window is resized.

Running `tsc -b` at the root will generate a `fullScreenCanvas.js` file in the `bin` subdirectory.

## Adding a Full-Screen Canvas

To add a full-screen canvas element to your web page, simply call the `add` method of the `FullScreenCanvas` class. By default, the canvas will be appended to the document.body element. However, you can optionally pass in a parent element to append the canvas to.

```js
let canvas = FullScreenCanvas.add(); // Appends the new Canvas element to document.body
```

or

```js
let parent = document.getElementById('my-canvas-container');
let canvas = FullScreenCanvas.add(parent);
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
        let canvas = FullScreenCanvas.add();
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    </script>
</body>
</html>
```

## License

The FullScreenCanvas library is released under the MIT license. See LICENSE for more information.