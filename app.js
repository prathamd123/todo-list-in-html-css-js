let inp = document.querySelector("#inp");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText = inp.value;

    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.classList.add("del");

    li.appendChild(btn);

    ul.appendChild(li);
    
    console.log(inp.value);
    inp.value = "";
});

// let delBtns = document.querySelectorAll(".del");

// for (del of delBtns){
//     del.addEventListener("click",function(){
//         console.log("element deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

ul.addEventListener("click", function(event){
    event.preventDefault();
    // console.log(event.target);
    // console.dir(event.target.nodeName);
    // console.log("button clicked");
    if(event.target.nodeName == "BUTTON"){
        console.log("delete element");
        let  li = event.target.parentElement;
        console.log(li);
        li.remove();
    }
   
})
