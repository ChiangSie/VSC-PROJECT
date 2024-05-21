function doFirst(){
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    // 格線
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
    // =====

    let pic = new Image()
    pic.src = '../../images/cityscape.jpg'
    pic.addEventListener('load', function(){
        context.drawImage(pic, 0, 0, canvas.width, canvas.height);
    })
    
}
window.addEventListener('load', doFirst)