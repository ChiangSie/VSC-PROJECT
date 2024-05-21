function doFirst(){
    let canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')

    // 格線
    context.beginPath();

    let gap = 50
    let range = (canvas.width > canvas.height) ? canvas.width / gap : canvas.height / gap

    for(let i = 0; i <= range; i++){
        let interval = i * gap

        // 水平線
        context.moveTo(           0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);        

        // 垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
    }
    context.strokeStyle='rgba(0,0,0,0.3)';    
    context.stroke();
    // =============

    // 四分之一線
    context.beginPath();
    
    context.moveTo(           0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);

    context.moveTo(canvas.width / 2,             0);
    context.lineTo(canvas.width / 2, canvas.height);

    context.strokeStyle='rgba(0,0,0,0.7)';    
    context.stroke();
    // =============    
    
    context.strokeStyle='red';
    context.lineWidth=5;  

    // 左上角
    context.beginPath();
    
    context.arc(250, 200, 150, 0, Math.PI, true);
    context.stroke();

    // 右上角
    context.beginPath();

    // context.arc(750, 200, 150, 0, Math.PI, false);
    context.arc(750, 200, 150, 0, Math.PI);
    context.stroke();
    
    // 左下角
    context.beginPath();

    let radius = 150

    context.translate(250, 600);    // 將 (250, 600) 變成 (0, 0)
    
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.stroke();

    context.translate(-250, -600);

    // 右下角
}
window.addEventListener('load', doFirst)