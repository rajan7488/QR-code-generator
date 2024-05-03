let inp=document.querySelector("#qr-input");
let btn=document.querySelector("#qr-btn");
let img=document.querySelector("#qr-img");

btn.addEventListener("click", ()=>{
    const inpvalue=inp.value;
    if(!inpvalue){
        alert("Please enter valid url!");
        return;
    }
    else{
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example${inpvalue}`;
    }
})