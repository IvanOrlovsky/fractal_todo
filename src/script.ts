
const canvas = <HTMLCanvasElement> document.getElementById('fractal');

function drawRect() {
    if (!canvas.getContext) {
        alert('Тег canvas не поддерживается вашим браузером.')
    }

    const ctx = <CanvasRenderingContext2D> canvas.getContext('2d');
    
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 55, 50);
    

}
drawRect();