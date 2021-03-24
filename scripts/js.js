// скрыть начальный экран
let isScreenEmpty = true;
let m = [];
let idCounter = 0;

if(localStorage.getItem('tasks') != null) {
    m = JSON.parse(localStorage.getItem('tasks'))
    idCounter = JSON.parse(localStorage.getItem('id'))
    $('.main__empty-screen').hide();  
}

if(isScreenEmpty === true) {
    $('.main__add-btn').on('click', function() {
        
        $('.main__empty-screen').hide();  
    
        $('.main__form-create').show();
    
        $('.main').css({'heigth': '100%'})
    })

    isScreenEmpty = false;
}

// создание новых тасков
$('.main__add-task').on('click', function() {

    let valueOfTextarea = $('.main__task-input').val();

    let now = new Date();
    let task = {
        id:idCounter,
        name: valueOfTextarea,
        age: now.toISOString(),
      }

    m.push(task);
   
    console.log(m)

    let t =  new Date(m[0].age)
    console.log(t.toLocaleString('en-US', { month: 'long' }));

    createBlock(task)
    localStorage.setItem('tasks', JSON.stringify(m))
    localStorage.setItem('id', idCounter)
    idCounter++
})


// пометить выполненым 
let checkbox = $('input[type="checkbox"]')

$(document).on('click', '.main__task-checkbox', function() {
    $(this).closest('.main__task-in-progress').remove();
    let idCheck = $(this).attr('id')
    let i =  m.findIndex(e => e.id == idCheck)
    m.splice(i, 1)
    console.log(i)
    localStorage.setItem('tasks', JSON.stringify(m))
    localStorage.setItem('id', idCounter)
});



// кнопка cancel
$('.main__cancel').on('click', function() {
    $('.main__form-create').hide();

localStorage.clear()
})
console.log(m);

function createList() {
    m.forEach(e => {
        let task = e.name
        let dateTask = e.age

        createBlock(e)
    })
}

createList()

function createBlock(e) {
    $('.main__new-tasks').append(`<li class="main__task-in-progress">
              <label class='main__task-name'>
              <input type="checkbox" class="main__task-checkbox" name="taskName" id='${e.id}'>
              ${e.name}
              <label>
          </li>`)
}