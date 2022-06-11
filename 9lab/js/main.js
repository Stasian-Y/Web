const URL = 'https://usersdogs.dmytrominochkin.cloud/dogs';
const baseSrc = 'https://usersdogs.dmytrominochkin.cloud';
const xhr = new XMLHttpRequest();
let close_modal = document.getElementById('close_modal');
let body = document.getElementsByTagName('body')[0];

let a = 0;

fetch(URL)
.then(result => result.json())
.then(dogs => {

        dogs.forEach(element => {
            
            main.insertAdjacentHTML("beforebegin", 
            `<div class="grid open_modal" onclick="display(this)"  value="${a}">
            <img src="${baseSrc}${element.dogImage}" alt="dog">
            <div class="textAling">
            <h2>${element.title}</h2>
            <p>${element.sex}</p>
            </div>
            </div>`);
            a++;

            
        });    
})
.catch(err => console.error(err));
    



function display(elm) {
   
     a = elm.getAttribute('value');

    
    fetch(URL)
    .then(result => result.json())
    .then(dogs => {
    
    dogs.forEach(element => {
                
        document.getElementById("link").src = baseSrc + dogs[a].dogImage;
        document.getElementById("name").innerHTML = dogs[a].title;
        document.getElementById("sex").innerHTML = dogs[a].sex;
        document.getElementById("age").innerHTML = dogs[a].age;
        document.getElementById("description").innerHTML = dogs[a].description;
        
    
    modal.classList.add('modal_vis'); 
    body.classList.add('body_block'); 

        }); 

    })
    .catch(err => console.error(err));

    

  }



close_modal.onclick = function() {  
    modal.classList.remove('modal_vis');
    body.classList.remove('body_block'); 
};