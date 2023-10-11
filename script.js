const DescBtn = document.getElementById("desBtn");
const IncBtn = document.getElementById("incBtn");
const RstBtn = document.getElementById("rst");
const Disval = document.getElementById("display");

DescBtn.addEventListener("click",()=>{
    const val = Number(display.innerText);
    if(val > 0){
        Disval.innerText = val-1;
    }else{
        alert("Invalid Value");
    }
});

IncBtn.addEventListener("click",()=>{
    const val = Number(Disval.innerText);
    if(val >= 10){
        alert("10+ Value Not allowed");
    }else{
       Disval.innerText = val +1;
    }
});

RstBtn.addEventListener("click", () =>{
    display.innerText = 0;
});