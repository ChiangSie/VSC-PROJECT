    // scrolling 0.9
    
    document.addEventListener('DOMContentLoaded', function() {
        const Elements = document.querySelectorAll('.scrolling90');
    
    function handleScroll() {
        Elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
    
            if (elementTop < windowHeight * 0.9) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    });
    


    // scrolling 0.8
    
    document.addEventListener('DOMContentLoaded', function() {
        const Elements = document.querySelectorAll('.scrolling80');
    
    function handleScroll() {
        Elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
    
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    });





    // scrolling 0.75

        document.addEventListener('DOMContentLoaded', function() {
        const Elements = document.querySelectorAll('.scrolling75');

    function handleScroll() {
        Elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.75) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    });



    // scrolling 0.7

    document.addEventListener('DOMContentLoaded', function() {
        const Elements = document.querySelectorAll('.scrolling70');

    function handleScroll() {
        Elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.7) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    });





    // scrolling 0.6

    document.addEventListener('DOMContentLoaded', function() {
        const Elements = document.querySelectorAll('.scrolling60');

    function handleScroll() {
        Elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.6) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    });




    // scrolling 0.5

    document.addEventListener('DOMContentLoaded', function() {
        const Elements = document.querySelectorAll('.scrolling50');

    function handleScroll() {
        Elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.5) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    });