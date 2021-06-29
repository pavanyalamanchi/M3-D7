window.onload = function() {
    loadFunc()
}

const loadFunc = async() => {
    let respData = await fetch('https://jsonplaceholder.typicode.com/users')
    let resp = await respData.json()
    console.log(resp)
    let ul = document.querySelector('.list-group')

    resp.forEach(element => {
        //console.log(element)
        let li = document.createElement('li')
        li.classList.add('list-group-item')
        li.innerText += element.name
        ul.appendChild(li)
    })

    let dropDown = document.querySelector('.dropdown')
    let div = document.createElement('div')
    div.classList.add('dropdown-menu')

    div.innerHTML = `<a class="dropdown-item" href="#">Name</a>
                     <a class="dropdown-item" href="#">username</a>
                     <a class="dropdown-item" href="#">email</a>`

    dropDown.appendChild(div)


    let aTag = document.querySelectorAll('.dropdown-item')
    let input = document.querySelector('.form-control')

    aTag.forEach(element => {
        element.addEventListener('click', () => {
            input.classList.remove('d-none')
            input.setAttribute('placeholder', element.innerText)
                //input.classList.add('d-block')
        })
    })

    let inputTag = document.querySelector('input').value
    let pTag = document.createElement('p')
    div.appendChild(pTag)

    const result = resp.filter(user => {
        if (inputTag === user.name) {
            pTag.innerText = user
        }
    })



}