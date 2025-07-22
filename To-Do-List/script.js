let userValue=document.querySelector('#input-box');
let listContainer= document.querySelector('.list-container');
function addToDoList(){
    if( userValue.value ==""){
     alert('Please write your list.')
    }
    else{ 
    let addNewList=document.createElement('li');
    addNewList.textContent=userValue.value;
    listContainer.appendChild(addNewList);
    let span=document.createElement('span');
    span.innerHTML= '&times';
    addNewList.appendChild(span);
    userValue.value='';
    } 
    saveData();
}
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName==="LI"){ 
        e.target.classList.toggle('checked');
        }
        saveData();
    
},false);
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function showTasks(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showTasks();
