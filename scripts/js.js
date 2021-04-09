// скрыть начальный экран
let listOfTasks = [];
let idCounter = 0;


if(localStorage.getItem('tasks').length > 2) {
    listOfTasks = JSON.parse(localStorage.getItem('tasks'))
    idCounter = JSON.parse(localStorage.getItem('id'))
    $('.main__empty-screen').hide();  
}

$('.main__add-btn').on('click', function() {
        
    $('.main__empty-screen').hide();  

    $('.main__form-create').show();

    $('.main').css({'heigth': '100%'})
})

// создание новых тасков
$('.main__add-task').on('click', function() {

    let valueOfTextarea = $('.main__task-input').val();

    let now = new Date();
    let task = {
        id: idCounter,
        name: valueOfTextarea,
        age: now.toISOString(),
      }

    $('.main__empty-screen').hide(); 
    
    listOfTasks.push(task);
   
    console.log(listOfTasks)

    let t =  new Date(listOfTasks[0].age)
    console.log(t.toLocaleString('en-US', { month: 'long' }));

    createBlock(task)
    localStorage.setItem('tasks', JSON.stringify(listOfTasks))
    localStorage.setItem('id', idCounter)
    idCounter++
})


// пометить выполненым 
let checkbox = $('input[type="checkbox"]')

$(document).on('click', '.main__task-checkbox', function() {
    $(this).closest('.main__task-in-progress').remove();
    let idCheck = $(this).attr('id')
    let i =  listOfTasks.findIndex(e => e.id == idCheck)
    listOfTasks.splice(i, 1)
    console.log(i)
    localStorage.setItem('tasks', JSON.stringify(listOfTasks))
    localStorage.setItem('id', idCounter)

    if(listOfTasks.length == 0) $('.main__empty-screen').show();  
});



// кнопка cancel
$('.main__cancel').on('click', function() {
    $('.main__form-create').hide();
})
console.log(listOfTasks);

function createList() {
    listOfTasks.forEach(e => {
        createBlock(e)
    })
}

createList()

function createBlock(e) {
    $('.main__new-tasks').append(
        `<li class="main__task-in-progress">
              <label class='main__task-name'>
                <input type="checkbox" class="main__task-checkbox" name="taskName" id='${e.id}'>
                ${e.name}
              <label>
        </li>`)
}