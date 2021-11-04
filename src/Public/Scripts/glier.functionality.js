new Glider(document.querySelector('.glider'), {
    slidesToShow: 3, //'auto',
    slidesToScroll: 1,
    draggable: true,
    scrollLock: false,
    rewind: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3
            }
        }
    ]
})