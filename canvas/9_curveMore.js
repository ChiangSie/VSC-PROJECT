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
    
    context.font='30px Consolas';        
    context.fillText('arcTo()', 50, 100);
    context.fillText('quadraticCurveTo()', 550, 100);
    context.fillText('bezierCurveTo()', 50, 500); 
    
    // ==============================   
    // 左上角: arcTo()
    context.beginPath();

    context.strokeStyle='red';
    context.lineWidth=5; 

    context.moveTo(150, 250);
    context.arcTo(250, 100, 350, 300, 100); 
    context.stroke();

        // 輔助線
        context.strokeStyle='blue';
        context.lineWidth=1; 
    
        context.beginPath();
        context.moveTo(150, 250);
        context.lineTo(250, 100);
        context.lineTo(350, 300);
        context.stroke();
    // ==============================       
    // 右上角: quadraticCurveTo()
    context.beginPath();

    context.strokeStyle='red';
    context.lineWidth=5;

    context.moveTo(650, 250);
    // context.quadraticCurveTo(750, 100, 850, 300);
    context.quadraticCurveTo(800, 0, 850, 300); // 改變控制點
    context.stroke();
        // 輔助線
        context.strokeStyle='blue';
        context.lineWidth=1; 
    
        context.beginPath();
        context.moveTo(650, 250);

        // context.lineTo(750, 100);
        context.lineTo(800, 0);

        context.lineTo(850, 300);
        context.stroke();
    // ==============================
    // 左下角: bezierCurveTo()
    context.beginPath();

    context.strokeStyle='red';
    context.lineWidth=5;

    context.moveTo(150, 650);
    // context.bezierCurveTo(225, 500, 350, 450, 400, 700);

    // 改變控制點以及終點
    context.bezierCurveTo(225, 350, 250, 800, 350, 550);

    context.stroke();

        // 輔助線
        context.strokeStyle='blue';
        context.lineWidth=1; 

        context.beginPath();
        context.moveTo(150, 650);

        // context.lineTo(225, 500);
        // context.lineTo(350, 450);

        // 改變控制點
        context.lineTo(225, 350);
        context.lineTo(250, 800);

        // context.lineTo(400, 700);
        context.lineTo(350, 550);
        context.stroke();
    
    
   

    // 右下角
}
window.addEventListener('load', doFirst)