function pageDown(height) {
    if(nowPage <= 6 && nowPage >= 0) {
        nowPage += 1;
        // console.log(nowPage)
        // console.log("down")
        const move = nowPage * height
        // console.log(move)
        wrap.style.transform = `translate3d(0px, ${-move}px, 0px)`;
        
    }
}

function pageUp(height) {
    if(nowPage <= 7 && nowPage >= 1) {
        nowPage -= 1;
        // console.log(nowPage)
        // console.log("up")
        const move = nowPage * height
        // console.log(move)
        wrap.style.transform = `translate3d(0px, ${-move}px, 0px)`;

    }
}

function wheelPage(event) {
    event.preventDefault();
    const height = window.innerHeight
    // console.log(event)
    // console.dir(event)

    if(event.deltaY > 0) {
        
        pageDown(height)
        

    }else if(event.deltaY < 0) {
        pageUp(height)
    }
}



const wrap = document.querySelector("#section-wrap");
const page = wrap.children;
let nowPage = 0;


// console.log(page.length)
// console.log(wrap)





// window.onwheel = wheelPage

window.addEventListener('wheel', function(event) {
    event.preventDefault();
    const height = window.innerHeight
    console.log(event)
    console.dir(event)

    if(event.deltaY > 0) {
        pageDown(height)
        

    }else if(event.deltaY < 0) {
        pageUp(height)

    }
});

// console.dir(addEventListener)




