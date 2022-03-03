const filter = document.getElementById('filter')
const result = document.getElementById('result')

listItems = [];

getData();

result.innerHTML = '';

filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    
    const { results } = await res.json()

    console.log(results)

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
        <img src='${user.picture.large}' alt='${user.name.first}>
        <div class='user-info'>
        <h4 class='title'> ${user.name.first} ${user.name.last}</h4>
        <p class='para'> ${user.location.city} , ${user.location.coutry}</p>
        </div>`
        
        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}