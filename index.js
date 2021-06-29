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




    let aTag = document.querySelectorAll('.dropdown-item')
    let input = document.querySelector('.form-control')

    aTag.forEach(element => {
        element.addEventListener('click', () => {
            input.classList.remove('d-none')
            input.setAttribute('placeholder', element.innerText)
                //input.classList.add('d-block')
        })
    })


    let row = document.querySelector(".row")
    resp.forEach(ele => {
        let col = document.createElement("div")
        col.classList.add("col-12", "col-md-3", "mb-3", "d-flex")
        col.insertAdjacentHTML('afterbegin', ` <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"> Name:
                    <strong> ${ele.name}
                        </strong>
                </h5>
                <p class="card-text"> User Name:
                    <strong> ${ele.username}
                        </strong>
                </p>
                <p class="card-text"> Email:
                    <strong> ${ ele.email }
                        </strong>
                </p>
                <p class="card-text"> Phone:
                    <strong> ${ ele.phone }
                        </strong>
                </p>
                <p class="card-text"> Website:
                    <strong> ${ ele.website }
                        </strong>
                </p>
                <p class="card-text"> Company Name:
                    <strong> ${ ele.company.name }
                        </strong>
                </p>
            </div>
        </div>`)
        row.appendChild(col)


    });


    let theSearch = document.querySelector(".form-control")
    theSearch.addEventListener("keyup", function() {
        let search = this.value.toLowerCase()
        let allH5 = document.querySelectorAll("h5")
        let cols = document.querySelectorAll(".col-12")

        for (let i of allH5) {
            let item = i.innerHTML.toLowerCase()
            if (item.indexOf(search) == -1) { i.parentElement.parentElement.classList.add("d-none") } else { i.parentElement.parentElement.classList.remove("d-none") }
        }
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
        //let ul = document.querySelector('.list-group')

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

