
  function registerUser() {
    const username = document.getElementById('regusername').value;
    const password = document.getElementById('regpassword').value;


  if (localStorage.getItem(username) !== null) {
      alert('Username is already taken. Please choose another.');
      return false; 
  }
    localStorage.setItem(username, password);
    alert('Registration successful!');
    return true
  }

  
  function loginUser() {
    const username = document.getElementById('logusername').value;
    const password = document.getElementById('logpassword').value;

    const storedPassword = localStorage.getItem(username);


    if (!storedPassword || storedPassword !== password) {
      alert('Invalid username or password. Please try again.');
      return false;
      
    } else {
      alert('Login successful!');
    }}


  

  // function clearall() {
  //   document.getElementById("loginForm").reset();
  //   document.getElementById("passwordDisplay").innerText = ''+password; 
  // }
  