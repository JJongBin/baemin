const contents = [
    ["main_text_01@2x.png", "main_01@2x.jpeg"], 
    ["main_text_02@2x.png", "main_02@2x.jpeg"],
    ["main_text_03@2x.png", "main_03@2x.jpeg"],
    ["main_text_04@2x.png", "main_04@2x.jpeg"],
    ["main_text_05@2x.png", "main_05@2x.jpeg"],
]

const chosencontent = contents[Math.floor(Math.random() * contents.length)];
const textcontent = document.createElement("img");
textcontent.src = `./img/${chosencontent[0]}`;
const bgcontent = `url("./img/${chosencontent[1]}")`;


const text = document.querySelector("#text-main");
const bg = document.querySelector("#section-first");
text.appendChild(textcontent)
bg.style.backgroundImage = bgcontent

// appendChild - 요소의 맨 마지막에 추가
// prepend - 요소의 맨 처음에 추가