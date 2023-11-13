
// Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
    // 'use strict'
  // 
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    // Array.from(forms).forEach(form => {
      // form.addEventListener('submit', event => {
        // if (!form.checkValidity()) {
          // event.preventDefault()
          // event.stopPropagation()
        // }
  // 
        // form.classList.add('was-validated')
      // }, false)
    // })
  // })()
// 

  const users = JSON.parse(localStorage.getItem('users'))




  $('.plName').on('input', function(){
      $('.plName').each(function(){
          if($('#validationTooltip01').val().length >= 2 && $('#validationTooltip02').val().length >= 2 ){
              $('.btn1').attr('disabled', false)
          } else {
              $('.btn1').attr('disabled', true)
      
          }
  
      })
  
  
      
  })
  
  // $('#check').click(function(){
      // if($('#name').val().length >= 2 && $('#password').val().length >= 2){
          // $('.btn').attr('disabled', false)
      // } else {
          // $('.btn').attr('disabled', true)
  // 
      // }
  // })
  
  $('form').on('submit', function(event){
       event.preventDefault()
       console.log(users);
      
       let userExist = users.some((user) => user.name == $('#validationTooltip01').val() && user.password == $('#validationTooltip02').val())
      
      if(userExist){
          localStorage.setItem('currentUser', $('#validationTooltip01').val())
          alert('otlicno')
          $('.alert2').css({
            "display": "block",
         })
  
           location.href = 'meinExam.html'
          
      }else{
          alert('Osibka')
          $('.alert1').css({
             "display": "block",
          })
          // localStorage.setItem('currentUser', $('#validationTooltip01').val())
  
  
      }
  })  