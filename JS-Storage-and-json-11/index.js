const user = [
    {
        name: "this",
        email: "this@gmail.com"
    },
    {
        name: "this2",
        email: "this2@gmail.com"
    }
]
const convertedData = JSON.stringify(user);
localStorage.setItem('user', convertedData)


const tbody = document.getElementsByTagName('tbody')[0];
const userData = localStorage.getItem('user')
const actualForm = JSON.parse(userData);
actualForm.map((user) => {
    const row = document.createElement('tr');
    tbody.appendChild(row)
    const username = document.createElement('td');
    const userEmail = document.createElement('td');
    username.textContent = user.name;
    userEmail.textContent = user.email;
    row.append(username, userEmail)
})