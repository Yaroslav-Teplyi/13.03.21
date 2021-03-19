$('.main__add-btn').on('click', function() {
    // скрыть начальный экран
    $('.main__empty-screen').hide();  

    $('.main__form-create').show();
})

$('.main__add-task').on('click', function() {

    let valueOfTextarea = $('.main__task-input').val();

    $('.main__new-tasks').append(`<li class="main__task-in-progress">
              <label>
              <input type="checkbox" class="main__task-checkbox" name="taskName" >
              ${valueOfTextarea}
              <label>
          </li>`)
})
  



let checkbox = $('input[type="checkbox"]')

$(document).on('click', '.main__task-checkbox', function() {
    $(this).closest('.main__task-in-progress').remove();
});
