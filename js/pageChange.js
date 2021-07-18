function pageDown(event, height) {
    event.preventDefault();
    if(nowPage <= 6 && nowPage >= 0) {
        nowPage += 1;
        console.log(nowPage)
        // console.log("down")
        const move = nowPage * height
        // console.log(move)
        wrap.style.transform = `translate3d(0px, ${-move}px, 0px)`;
        
    }
}

function pageUp(event, height) {
    event.preventDefault();
    if(nowPage <= 7 && nowPage >= 1) {
        nowPage -= 1;
        console.log(nowPage)
        // console.log("up")
        const move = nowPage * height
        // console.log(move)
        wrap.style.transform = `translate3d(0px, ${-move}px, 0px)`;

    }
}



const wrap = document.querySelector("#section-wrap");
const page = wrap.children;
let nowPage = 0;
let check = true;

// console.log(page.length)
// console.log(wrap)


window.scrollTo(0, 0)
window.addEventListener('wheel', function(event) {
    if(check === true){
        check = false
        event.preventDefault();
        const height = window.innerHeight
        // console.log(event)
        // console.dir(event)
    
        if(event.deltaY > 0) {
            pageDown(event, height)
            
    
        }else if(event.deltaY < 0) {
            pageUp(event, height)
    
        }
        setTimeout(function() {
            check = true;
        }, 400)
    }
},{passive: false});

// console.dir(addEventListener)




