$('.owl-carousel').owlCarousel({
    loop:true, /*ao chegar no final recomeça as capas*/
    margin:10,
    nav:false, /*<> botões de navegação*/
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:8
        }
    }
})