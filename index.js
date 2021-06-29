window.onload = function() {
    loadFunc()
    names()
    address()
    sort()
}

const loadFunc = async() => {
        let respData = await fetch('https://jsonplaceholder.typicode.com/users')
        let resp = await respData.json()
        console.log(resp)

        let ul = document.querySelector('.list-group')
        let h2 = document.createElement('h2')
        h2.innerText = 'Users'
        ul.appendChild(h2)
        resp.forEach(element => {
            //console.log(element)
            let li = document.createElement('li')
            li.classList.add('list-group-item')
            li.innerText += element.username
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




    }
    // Question 3
const names = async() => {
    let respData = await fetch('https://jsonplaceholder.typicode.com/users')
    let resp = await respData.json()
    console.log(resp)

    let ul2 = document.querySelector('.list-group')
    let h2_1 = document.createElement('h2')
    h2_1.innerText = 'Names'
    ul2.appendChild(h2_1)
    resp.forEach(element => {
        //console.log(element)
        let li = document.createElement('li')
        li.classList.add('list-group-item')
        li.innerText += element.name
        ul2.appendChild(li)
    })
}

// Question 4
const address = async() => {
        let respData = await fetch('https://jsonplaceholder.typicode.com/users')
        let resp = await respData.json()
        console.log(resp)

        let ul3 = document.querySelector('.list-group')
        let h2_2 = document.createElement('h2')
        h2_2.innerText = 'Address'
        ul3.appendChild(h2_2)

        resp.forEach(element => {
            //console.log(`${element.address.street}, ${element.address.suite}, ${element.address.city} (${element.address.zipcode})`)
            let li = document.createElement('li')
            li.classList.add('list-group-item')
            li.innerText += `${element.address.street}, ${element.address.suite}, ${element.address.city} (${element.address.zipcode})`
            ul3.appendChild(li)
        })
    }
    //Question 5
const sort = async() => {
    let respData = await fetch('https://jsonplaceholder.typicode.com/users')
    let resp = await respData.json()
    console.log(resp)

    let ul4 = document.querySelector('.list-group')

    let sortArray = []
    let sortButton = document.querySelector('.sort-button')
    sortButton.addEventListener('click', function() {
        let h2_3 = document.createElement('h2')
        h2_3.innerText = 'Sorted Users'
        ul4.appendChild(h2_3)
        resp.forEach(element => {
            sortArray.push(element.name)
        })

        sortArray = sortArray.sort()
        for (let i = 0; i < resp.length; i++) {
            let li = document.createElement('li')
            li.classList.add('list-group-item')
            li.innerText = sortArray[i]
            ul4.appendChild(li)
        }
    })

}