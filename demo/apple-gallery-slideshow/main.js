/*
    思路：

*/
let $liButtons = $('#buttonWrapper > li')
let $slides = $('#slides')
let $liImages = $slides.children('li')
let current = 0;
console.log($liImages.length)
let distance = 920
let node;
makeFakeSlides()
// $slides.css({transform:'translateX('+ (-distance) +'px)'})
bindEvents()

/* setInterval(function(){
    // bindEvents()
    goToSlide(current+1,$liButtons[current+1])
    // console.log('current',current)
},2000) */

let timer = setInterval(function(){
    goToSlide(current+1)
},2000)
$('main').on('mouseenter',function(){
    clearInterval(timer)
}).on('mouseleave',function(){
    timer = setInterval(function(){
        goToSlide(current+1)
    },2000)
})


function makeFakeSlides(){
    let $firstCopy = $liImages.eq(0).clone(true)
    let $lastCopy = $liImages.eq($liImages.length-1).clone(true)

    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}
function bindEvents(){
    $('#buttonWrapper').on('click','li',function(e){
        let $liButton = $(e.currentTarget)
        let index = $liButton.index()
        goToSlide(index,$liButton)  
    })
}
// ,node
function goToSlide(index,node){
    if(index > $liButtons.length-1){
        //当实参大于最后一个索引
        index = 0
    }else if(index < 0){
        //当实参小于第一个索引
        index = $liButtons.length - 1
    }
    if(current === $liButtons.length-1 && index === 0){
        //最后一张到第一张
        $slides.css({transform:`translateX(${-($liButtons.length+1)*distance}px)`})
            .one('transitionend',function(){
                $slides.hide().offset()
                $slides.css({transform:`translateX(${-(index+1)*distance}px)`}).show()
            })
    }else if(current === 0 && index === $liButtons.length-1){
        //第一张到最后一张
        $slides.css({transform:`translateX(0px)`})
            .one('transitionend',function(){
                $slides.hide().offset()
                $slides.css({transform:`translateX(${-(index+1)*distance}px)`}).show()
            })
    }else{
        $slides.css({transform:`translateX(${-(index+1)*distance}px)`})

    }
    current = index
    node.addClass('active').siblings().removeClass('active')
}
