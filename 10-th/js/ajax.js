//main 
const URL = 'https://usersdogs.dmytrominochkin.cloud/dogs';
const Src = 'https://usersdogs.dmytrominochkin.cloud';

let body = $('body').get(0);

let a = 0;
          // ajax
          $.ajax(URL,{
            success: function(data){

        data.forEach(element => {
            main.insertAdjacentHTML("beforebegin", 
            `<div class="grid open_modal" onclick="display(this)"  value="${a}">
            <img src="${Src}${element.dogImage}" alt="dog">
            <div class="textAling">
            <h2>${element.title}</h2>
            <p>${element.sex}</p>
            </div>
            </div>`);
            a++;

            
        });
    }
});
 

function display(elm) {
   
    a = elm.getAttribute('value');
       
      $.ajax(URL,{
        success: function(data){
  
    $('#link')[0].src = Src + data[a].dogImage;
        $('#name')[0].innerHTML = data[a].title;
        $('#sex')[0].innerHTML = data[a].sex;
        $('#age')[0].innerHTML = data[a].age;
        $('#description')[0].innerHTML = data[a].description; 

    modal.classList.add('modal_vis'); 
    body.classList.add('body_block'); 

    }
});
}
    

$('#close_modal').click(function() {  
  modal.classList.remove('modal_vis');
  body.classList.remove('body_block'); 
});
