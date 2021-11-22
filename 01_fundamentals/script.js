const canvas = document.querySelector(".initial-canvas");
const context = canvas.getContext("2d");

console.log(context);

context.fillStyle = "#ebebeb";
context.lineWidth = 4;

context.beginPath();
context.rect(100, 100, 400, 400);
context.stroke();
context.closePath();

context.beginPath();
context.arc(300, 300, 100, 0, Math.PI * 2);
context.stroke();
context.closePath();

const loopCanvas = document.querySelector(".loop-canvas");
const loopContext = loopCanvas.getContext("2d");

loopContext.lineWidth = 4;

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        const width = 80;
        const height = width;
        const gap = 12;

        loopContext.beginPath();
        loopContext.rect(100 + i * (width + gap), 100 + j * (height + gap), width, height);
        loopContext.stroke();
        loopContext.closePath();

        if (Math.random() > 0.5) {
            continue;
        }

        const innerRectOffset = 8;

        loopContext.beginPath();
        loopContext.rect(
            100 + i * (width + gap) + innerRectOffset,
            100 + j * (height + gap) + innerRectOffset,
            width - innerRectOffset * 2,
            height - innerRectOffset * 2
        );
        loopContext.stroke();
        loopContext.closePath();
    }
}
