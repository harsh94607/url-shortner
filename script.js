gsap.from(".container",{
    duration:1,
    opacity:0,
    x:-50,
})
gsap.from(".container h1",{
    opacity:0,
    scale: "5",
    duration:2,

})



let btn = document.getElementById("shorten");

btn.addEventListener('click', short);


async function short(){
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const data = await result.json();

    shortURL.value = data.result.short_link2;
}
let newURL = document.getElementById("shorturl");
let coptButton = document.getElementById("copy");

coptButton.onclick = ()=>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}

