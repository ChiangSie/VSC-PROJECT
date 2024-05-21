$(function () {

    let currentSize = $('div').css('fontSize')
    alert(currentSize)
    
    $('#shrink').click(function(){
        changeSize('small')
    })
    $('#enlarge').click(function(){
        changeSize('big')
    })

    function changeSize(size){
        if(size == 'small'){
            newSize = currentSize - 2
        }
        else{
            newSize = currentSize +2
        }
    }
})

function action(){
    console.log('Hello')
}
action()