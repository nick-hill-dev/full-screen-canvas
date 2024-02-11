export class FullScreenCanvas {

    private static canvases: Array<{
        canvas: HTMLCanvasElement,
        resizeHandler: (ev: UIEvent) => void;
    }> = [];

    public static add(parent: HTMLElement = document.body, options?: { fullScreen?: boolean }): HTMLCanvasElement {

        let canvas = document.createElement('canvas');
        parent.appendChild(canvas);

        FullScreenCanvas.resizeHandler(canvas);

        let newManager = {
            canvas: canvas,
            resizeHandler: (ev: UIEvent) => FullScreenCanvas.resizeHandler(canvas)
        };

        window.addEventListener('resize', newManager.resizeHandler, false);

        if (options?.fullScreen === true) {
            canvas.requestFullscreen();
        }
        
        return canvas;
    }

    public static remove(canvas: HTMLCanvasElement) {
        canvas.parentElement!.removeChild(canvas);
        let manager = this.canvases.find(c => c.canvas === canvas);
        if (manager) {
            window.removeEventListener('resize', manager.resizeHandler, false);
            let index = this.canvases.indexOf(manager);
            this.canvases.splice(index, 1);
        }
    }

    private static resizeHandler(canvas: HTMLCanvasElement) {
        canvas.style.position = 'absolute';
        canvas.style.overflow = 'hidden';
        canvas.style.left = '0';
        canvas.style.top = '0';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

}