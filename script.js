const submitBtn=document.querySelector(".input button");
const remove =document.querySelector(".remove");
const completed =document.querySelector(".completed");
console.log(submitBtn);
// console.log(remove);
console.log(completed);
const input =document.querySelector(".input input");
console.log(input);

submitBtn.addEventListener("click",()=>{
    inputvalue();
    remove.addEventListener("click",()=>{
        console.log("hellow");
    })
});

const inputvalue =()=>{
    if(input.value == "")
    {
        alert("Please enter the to-do List:");
    }
    else{
        const  listmenu =document.querySelector(".list");
        const list =document.createElement("div");
        list.classList.add("list-item");
        list.innerHTML=`
        <h3>${input.value}</h3>
        <button class="remove">Remove</button>
        <button class="completed">Completed</button>`;
        
    //    console.log(remove);
       listmenu.append(list);
    //    console.log(listmenu);
       
    }
    input.value="";
    // action();
}

// const action=()=>{
//     remove.addEventListener("click",()=>{
//         console.log("hellow");
//     })
// }



