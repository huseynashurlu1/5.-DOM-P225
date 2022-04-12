
// let tag = document.getElementById("demo");
// tag.innerText = "<del>WELCOME</del>";

// let box = document.getElementsByClassName('box')
// console.log(box);

// let p = document.getElementsByTagName('p')[2]
// console.log(p);

// // innerHTML - innerText
// // getAttribute / setAAttribute / attribute


// function Change() {
//     let photo = document.getElementById('photo');
//     // let src = photo.getAttribute('src');
//     photo.setAttribute('src','https://media.istockphoto.com/photos/programming-source-code-abstract-background-picture-id1047259374?k=20&m=1047259374&s=612x612&w=0&h=pt3XbBvrmiYgoYmVzsaUeXtV8vw_jJI9Ly8P7AL6Qig=')
//     console.log(src);
// }

// function Change() {
//     let input = document.getElementById('input');
//     let icon = document.getElementById('icon');
//     let type = input.type;
//     console.log(type)

//     if(type === "password") {
//         input.setAttribute('type','text')
//         icon.className = "fa-solid fa-eye-slash"
//     }
//     else{
//         input.setAttribute('type','password');
//         icon.className = "fa-solid fa-eye";

//     }
// }

// // createElement

// let h1 = document.createElement('h1');
// h1.setAttribute('id','userName')

// // createTextNode
// let text = document.createTextNode("GROUP P225");

// // appendChild

// h1.appendChild(text);
// console.log(h1);
// document.body.appendChild(h1);


// console.log(document.getElementById('p225').nextElementSibling);


// function AddUser() {
//     let value = document.getElementById('user-input').value;
//     let ul = document.getElementById('list');
//     let li = document.createElement('li');
//     li.innerHTML = value;
//     ul.appendChild(li);
// }

// querySelector / querySelectorAll


// function Color() {
//     let p = document.querySelectorAll('.first');
//     console.log(p)
//     // p.style.color = 'red';
// }


// addEventListener =>

// let btn = document.getElementById('btn1');

// btn.addEventListener('click',function(e){
//     console.log(e.target.nextElementSibling);
// })

// EventBubbling / Event Capturing
// useCapture
// stopPropagation

// let x = document.querySelector('.X');
// let y = document.querySelector('.Y');
// let z = document.querySelector('.Z');


// x.addEventListener('click',function(e){
//     e.stopPropagation();
//     alert("X");
// })

// y.addEventListener('click',function(e){
//     e.stopPropagation();
//     alert("Y");
// })

// z.addEventListener('click',function(e){
//     e.stopPropagation();
//     alert("Z");
// })


// function Click() {
//     document.body.style.backgroundColor = 'red';
// }


// function Enter() {
//     document.getElementById('first').style.borderRadius = "100%";
// }

// function Leave() {
//     document.getElementById('first').style.borderRadius = "0%";
// }

// window.oncontextmenu = function(e) {
//     e.preventDefault();
// }

// function Add(){
//     let div = document.getElementById('demo');

//     if(div.classList.contains('active')) {
//         div.classList.remove('active')
//     }
//     else{
//         div.classList.add('active')
//     }
// }

// function Remove(){
//     let div = document.getElementById('demo');

//     div.classList.remove('active')
// }


// function Change(e) {
//     let select = document.getElementById('select');
//     let span = document.getElementById('course');

//     console.log()
// }


// document.getElementById('select').addEventListener('change',function(event){
//     let value = event.target.value;
//     document.getElementById('course').innerHTML = value
// })


function Add() {
    let div = document.createElement('div');
    div.setAttribute('class','box');
    
    div.style.padding = "30px 0"
    div.style.textAlign = "center";
    div.style.border = "3px dashed red";
    div.style.width = "30%";
    div.addEventListener('click',(e)=>console.log(e))

    let value = document.getElementById('input').value;
    let h3 = document.createElement('h3');
    h3.innerHTML = value;
    div.appendChild(h3);

    let row = document.getElementById('list');
    row.appendChild(div)

    let x = document.getElementById('list').children;
    
    
}





// for(let i=0;i<box.length;i++) {
//     box[i].addEventListener('click',function(e){
//         console.log("salam");
//     })
// }


