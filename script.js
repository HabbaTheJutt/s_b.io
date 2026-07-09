const yes = document.getElementById("yes");
const no = document.getElementById("no");
const main = document.getElementById("main");

async function notifyMe() {
    try {
        await fetch("https://ntfy.sh/salmabirthdayinv125", {
            method: "POST",
            body: "She pressed YES! ❤️"
        });
    } catch (err) {
        console.error(err);
    }
}

yes.addEventListener("click", () => {

    notifyMe();

    main.innerHTML = `
        <h1 style="font-size:70px;">💖</h1>
        <h2>Thank you and see you soon birthday girl 💕 SEE YOU AT 6 </h2>
    `;

    // rest of your code...
});

function moveButton(){

const padding = 15;

const width = no.offsetWidth;
const height = no.offsetHeight;

const maxX = window.innerWidth - width - padding;
const maxY = window.innerHeight - height - padding;

const x = Math.random()*maxX;
const y = Math.random()*maxY;

no.style.left = x+"px";
no.style.top = y+"px";

}

moveButton();

no.addEventListener("mouseenter",moveButton);
no.addEventListener("click",moveButton);

no.addEventListener("touchstart",(e)=>{
e.preventDefault();
moveButton();
});

yes.addEventListener("click",()=>{

main.innerHTML=`
<h1 style="font-size:70px;">💖</h1>
<h2>Thank you and see you soon birthday girl 💕</h2>
`;

for(let i=0;i<150;i++){

setTimeout(createHeart,i*35);

if(i<70){
setTimeout(createImage,i*70);
}

}

});

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(),7000);
}

function createImage(){

    const img = document.createElement("img");

    img.src = "girl.png";

    img.className = "rain-image";

    img.style.left = Math.random() * window.innerWidth + "px";

    img.style.animationDuration = (4 + Math.random() * 3) + "s";

    img.style.transform =
        `rotate(${Math.random()*360}deg)`;

    document.body.appendChild(img);

    setTimeout(() => img.remove(),8000);
}

window.addEventListener("resize",moveButton);