const canvasSketch = require("canvas-sketch");

const settings = {
    dimensions: [1920, 1920],
};

const sketch = () => {
    return ({ context, width: globalWidth, height: globalHeight }) => {
        context.fillStyle = "black";
        context.fillRect(0, 0, globalWidth, globalHeight);

        context.lineWidth = 0.004 * globalWidth;
        context.strokeStyle = "white";

        const matrixSize = 5;
        const width = globalWidth * 0.1;
        const height = width;
        const gap = globalWidth * 0.03;
        const initialOffset = (globalWidth - (matrixSize - 1) * (gap) - matrixSize * width) / 2;
        const innerRectOffset = width * 0.1;

        for (let i = 0; i < matrixSize; i++) {
            for (let j = 0; j < matrixSize; j++) {
                const x = initialOffset + i * (width + gap);
                const y = initialOffset + j * (height + gap);

                context.beginPath();
                context.rect(x, y, width, height);
                context.stroke();
                context.closePath();

                if (Math.random() > 0.5) {
                    continue;
                }

                let innerX = initialOffset + i * (width + gap) + innerRectOffset;
                let innerY = initialOffset + j * (height + gap) + innerRectOffset;

                context.beginPath();
                context.rect(innerX, innerY, width - innerRectOffset * 2, height - innerRectOffset * 2);
                context.stroke();
                context.closePath();
            }
        }
    };
};

canvasSketch(sketch, settings);
