//menubutton//
        let menubutton = document.getElementById('menu-button');
        let navmenusecond = document.getElementById('nav-menu-second');
        menubutton.addEventListener('click',function(){
            if(navmenusecond.classList.contains('active')){
                navmenusecond.classList.remove('active');
                menubutton.classList.remove('cross');
            }else{
                navmenusecond.classList.add('active');
                menubutton.classList.add('cross');
            }
        })