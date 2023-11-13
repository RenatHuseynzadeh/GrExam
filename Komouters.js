




let users = JSON.parse(localStorage.getItem('users'))
const currentUser = localStorage.getItem('currentUser')



let todos = users.find(user => user.name === currentUser).todos


let edit = false


function updateSite(){
    $('tbody').html('')

    for(let todo of todos){
        $('tbody').html($('tbody').html() + `
        <tr>
            <td>${todo.id}</td>
            <td>${todo.mark}</td>
            <td><img src='${todo.img}' class='compImg' /></td>
            <td>${todo.prise}</td>
            <td>
               <button id='${todo.id}D' class='btn btn-danger' >Delete</button>
               <button id='${todo.id}E' class='btn btn-info' >Edit</button>
            </td>
        </tr>`)
    
    }
}

$('#img').on('input', function(){
    $('#modalImg').attr('src', $(this).val())
})

updateSite()

$('#addTodo').click(function(){
    $('.my-modal').attr('class', 'my-modal active')
})


$('#close').click(function(){
    $('input').val(''),
    $('#img').val('')
    $('.my-modal').removeClass('active')
})

$('#save-todo').click(function(){
    
    if(!edit){
        let newTodo = {
            id: Date.now(),
            mark: $('#mark').val(),
            img: $('#img').val(),
            prise: $('#prise').val(),
            tesvir: $('#tesvir').val(),

    
        }
    
        todos.push(newTodo)
    
        users.find(user => user.name === currentUser).todos = todos
    
        localStorage.setItem('users', JSON.stringify(users))
        updateSite()
         $('.my-modal').removeClass('active')
         $('input').val(''),
        $('#img').val('')
    } else {
        edit = false
        const index = todos.findIndex(todo => todo.id + 'E' === id)
        todos[index] = {
            id: todos[index].id,
            mark: $('#mark').val(),
            img: $('#img').val(),
            prise: $('#prise').val(),
            tesvir: $('#tesvir').val(),


        }


        users.find(user => user.name === currentUser).todos = todos
    
        localStorage.setItem('users', JSON.stringify(users))
        updateSite()

        $('.my-modal').removeClass('active')
         $('input').val(''),
        $('#img').val('')

    }
    

})



let id

$('.todos').click(function(e){
    if(e.target.innerHTML === 'Delete'){
    let a = confirm('Tocno???')
    if(a){
    id = e.target.id
    todos = todos.filter(todo => todo.id + 'D' !== id)

    users.find(user => user.name === currentUser).todos = todos

    localStorage.setItem('users', JSON.stringify(users))
    updateSite()
    }
    } else if(e.target.innerHTML === 'Edit'){
        edit = true
        id = e.target.id
    $('.my-modal').attr('class', 'my-modal active')


        const currentTodo = todos.find(todo => todo.id + 'E' === id)

        $('#mark').val(currentTodo.mark)
        $('#img').val(currentTodo.img)
    }

})



