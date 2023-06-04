//js1------------------------------------------------------------------------
const containerE1 = document.querySelector(".text");

let charindex = 0;

const xyz="FRONTEND DEVLOPER !!";

updatetext();

function updatetext()
{
  charindex++;

containerE1.innerText=  xyz.slice(0,charindex)
console.log(containerE1);


if(charindex === xyz.length)
{
  charindex =0;
}



setTimeout(updatetext , 400);
}

// Js2-----------------------------------------------------------------------


const main=document.getElementById("mainimg");
const heading= document.getElementById("heading");
const content= document.getElementById("content");



let images=[

    {src:"project 1.png", head:"HOSTEL MANAGEMENT WEBSITE" ,content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ullam facere nulla debitis nihil, officia dignissimos consequuntur, ut fugit, laudantium doloremque ex velit quidem itaque."},
    {src:"project 2.png", head:"LOGIN PAGE" ,content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ullam facere nulla debitis nihil, officia dignissimos consequuntur, ut fugit, laudantium doloremque ex velit quidem itaque."},
    {src:"project 3.png", head:"MUSIC PLAYER" ,content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ullam facere nulla debitis nihil, officia dignissimos consequuntur, ut fugit, laudantium doloremque ex velit quidem itaque."},
    {src:"project 4.png", head:"TO DO LIST APP" ,content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ullam facere nulla debitis nihil, officia dignissimos consequuntur, ut fugit, laudantium doloremque ex velit quidem itaque."},
    {src:"project 5.png", head:"COUNTDOWN TIMER" ,content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ullam facere nulla debitis nihil, officia dignissimos consequuntur, ut fugit, laudantium doloremque ex velit quidem itaque."},
    
    // {src:"project 3.png"},
    // {src:"project 4.png"},
    // {src:"project 5.png"},

    

]

let count=0;

function forward(){

    console.log(count);

    if(count===images.length)
    {
        count=0;
    }

main.src=images[count].src;
heading.innerHTML=images[count].head;
content.innerHTML=images[count].content;



count++;
}

function backward(){

    main.src=images[count].src;
    if(count===-1)
    {
        count=images.length;
    }
    console.log(count);
count--;

}


//Js3----------------------------------------------------------------------------




const img=document.getElementById("abc");



let about=[

    {image:"1.png"},
    {image:"2.jpg"},
    {image:"3.jpg"}



]

let cnt=0;
function imgchng1(){

    img.src=about[cnt].image;
cnt=0;
}
function imgchng2(){

    img.src=about[cnt].image;
cnt=1;
}
function imgchng3(){

    img.src=about[cnt].image;
cnt=2;
}


