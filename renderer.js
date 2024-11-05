document.getElementById('addUserBtn').addEventListener('click', () => {
    document.getElementById('userForm').style.display = 'block';
  });
  
  document.getElementById('submitUser').addEventListener('click', () => {
    const name = document.getElementById('userName').value;
    const age = document.getElementById('userAge').value;
  
    if (name && age) {
      const table = document.getElementById('usersTable');
      const newRow = table.insertRow();
      newRow.insertCell(0).innerText = name;
      newRow.insertCell(1).innerText = age;
  
      document.getElementById('userForm').style.display = 'none';
      document.getElementById('userName').value = '';
      document.getElementById('userAge').value = '';
    }
  });
  