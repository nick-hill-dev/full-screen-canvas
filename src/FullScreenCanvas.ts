class FullScreenCanvas {

    public static add(parent: HTMLElement = document.body): HTMLCanvasElement {

        let canvas = document.createElement('canvas');
        parent.appendChild(canvas);

        let resizeHandler = function () {
            canvas.style.position = 'absolute';
            canvas.style.overflow = 'hidden';
            canvas.style.left = '0';
            canvas.style.top = '0';
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeHandler();

        window.addEventListener('resize', () => {
            resizeHandler();
        }, false);

        return canvas;

    }

    public static remove(canvas: HTMLCanvasElement) {
        canvas.parentElement.removeChild(canvas);
    }

}