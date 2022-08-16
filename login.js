document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document
    .getElementById('email');
    const userEmail = emailField.value;
    const passField =document.getElementById('password');
    const userPass=passField.value;
   if(userEmail==='abba@gmail.com' && userPass==='i love you jaan'){
    console.log('valid user');
    window.location.href='deposite.html';
   }
   else{
    alert(' yor password or email is not correct');

   }
})