let addtodobtn = document.querySelector ('#addtodo');
let todocontainer = document.querySelector('#todocontainer');
let input = document.querySelector('#input')

function todo(){
    let div = document.createElement('div')
    todocontainer.appendChild(div)
    div.classList.add('container-div')
    let paragraph = document.createElement('p')
    paragraph.innerText = input.value;
    if (input.value === paragraph.innerHTML) {
        input.value = ''
    }
    paragraph.classList.add('paragraph-styling')
    div.appendChild(paragraph);
    let btn = document.createElement('p')
    btn.classList.add('button')
    div.appendChild(btn)
    btn.addEventListener('click', function(){
       if (div.classList.contains('container-div')) {
           this.classList.remove('container-div')
           div.innerHTML = ''
       }
    })
    paragraph.addEventListener('click', function(){
        if( paragraph.classList.contains('paragraph-styling')) {
           paragraph.style.color = "green"
        }
    })
}



addtodobtn.addEventListener('click', todo );