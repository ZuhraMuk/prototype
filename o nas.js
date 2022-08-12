const sliderLine = document.querySelector(".slider-line");
prevButton = document.querySelector(".button-prev");
nextButton = document.querySelector(".button-next");
dots = document.querySelectorAll(".dot");

let position = 0;
    dotIndex = 0;

    //functions

    const nextSlide = () =>{
        if (position<(dots.length-1)*650){
            position += 650
            dotIndex++
        }else {
            position = 0;
            dotIndex = 0
        }
        sliderLine.style.left = -position + 'px'
        thisSlide(dotIndex)
    }

    const prevSlide = () =>{
        if (position> 0){
            position -= 650
            dotIndex--
        }else {
            position = (dots.length-1)*650;
            dotIndex = (dots.length-1)
        }
        sliderLine.style.left = -position + 'px'
        thisSlide(dotIndex)
    }

    const thisSlide = (index) =>{
        for (let dot of dots){
            dot.classList.remove('active') 
        }
        dots[index].classList.add('active')
    }

    //eventlistener

    nextButton.addEventListener('click', nextSlide)
    prevButton.addEventListener('click', prevSlide)

    dots.forEach((dot, index) =>{
        dot.addEventListener('click', () => {
            position = 650 * index
            sliderLine.style.left = -position + 'px'
            dotIndex = index
            thisSlide(dotIndex)
        })
    })

    //setinterval

    setInterval(() =>{
        nextSlide()
    }, 5000)