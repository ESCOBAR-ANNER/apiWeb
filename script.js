document.addEventListener('DOMContentLoaded', () => {
    const loadDataButton = document.getElementById('loadDataButton');
    const dataCountInput = document.getElementById('dataCount');
    const userList = document.getElementById('userList');

    loadDataButton.addEventListener('click', () => {
        const dataCount = parseInt(dataCountInput.value);
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(users => {
                userList.innerHTML = '';
                users.slice(0, dataCount).forEach(user => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <strong>Nombre:</strong> ${user.name}<br>
                        <strong>Usuario:</strong> ${user.username}<br>
                        <strong>Email:</strong> ${user.email}<br>
                        <strong>Dirección:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}<br>
                        <strong>Teléfono:</strong> ${user.phone}<br>
                        <strong>Sitio web:</strong> <a href="${user.website}" target="_blank">${user.website}</a><br>
                        <strong>Compañía:</strong> ${user.company.name}<br>
                        <strong>Frases:</strong> ${user.company.catchPhrase}<br>
                        <strong>BS:</strong> ${user.company.bs}<br>
                    `;
                    userList.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Error al cargar datos:', error);
            });
    });
});
