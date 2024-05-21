function doFirst(){
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    context.font='bold 50px Tahoma';
    
    // context.textBaseline='top | hanging | middle | alphabetic(by default) | ideographic | bottom';
    context.textBaseline='alphabetic';
    
    // 第一個字
    context.strokeText('google', 100, 100);

    // 輔助線
    context.moveTo(100, 100);
    context.lineTo(280, 100);
    context.strokeStyle='red';
    context.stroke();
        
    context.arc(100, 100, 10, 0, 2 * Math.PI);
    context.stroke();  
    
    // 第二個字: 加上陰影
    context.shadowColor='red';
    context.shadowOffsetX=5;
    context.shadowOffsetY=5;
    context.shadowBlur=5;   
    
    context.fillText('google', 100, 200);

    // 第三個字
    context.fillText('google', 100, 300);
    // 第四個字
    context.fillText('google', 100, 400);
}
window.addEventListener('load', doFirst)