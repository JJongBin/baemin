function pageDown(event, height) {
    event.preventDefault();
    if(nowPage <= 6 && nowPage >= 0) {
        prevPage = nowPage;
        nowPage += 1;
        // console.log(nowPage)
        // console.log("down")
        const move = nowPage * height
        // console.log(move)
        wrap.style.transform = `translate3d(0px, ${-move}px, 0px)`;
        
    }
}

function pageUp(event, height) {
    event.preventDefault();
    if(nowPage <= 7 && nowPage >= 1) {
        prevPage = nowPage;
        nowPage -= 1;
        // console.log(nowPage)
        // console.log("up")
        const move = nowPage * height
        console.log(wrap)
        wrap.style.transform = `translate3d(0px, ${-move}px, 0px)`;

    }
}

function activeSection() {
    wrap.children[prevPage].classList.remove("active");
    wrap.children[nowPage].classList.add("active");
}

const wrap = document.querySelector("#section-wrap");
const page = wrap.children;
let nowPage = 0;
let prevPage = 0;
let check = true;

// console.log(page.length)
// console.log(wrap.children[2]);



window.scrollTo(0, 0)
window.addEventListener('wheel', function(event) {
    if(check === true){
        check = false
        event.preventDefault();
        const height = window.innerHeight
        console.log(event.deltaY)
        // console.dir(event)
    
        if(event.deltaY > 0) {
            pageDown(event, height)
            activeSection()
    
        }else if(event.deltaY < 0) {
            pageUp(event, height)
            activeSection()
        }
        setTimeout(function() {
            check = true;
        }, 500)
    }
},{passive: false});

// console.dir(addEventListener)




