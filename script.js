let container = document.querySelector('.left_container')
let get_inp = document.querySelector('#inp_area')
 btn1 = document.querySelector('.btn1')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let input_datas_value = document.querySelector('.right_container')

//!Creating element

function data_addon() {
      // para.innerText = get_inp.value
        // parent_div.append(para)
        parent_div = document.createElement('div')
        parent_div.setAttribute('class', 'datas')
        parent_div.innerHTML = `
        <p class='text_value'>${get_inp.value}</p>
        <p class='action'>
            <span><button class="btn btn1 btn-primary" onclick="edit_value(this)" >Edit</button></span>
            <span><button class="btn btn2 btn-primary" onclick="delete_value(this)" >Delete</button></span>
        </p>
        `
        // console.log(parent_div);
        input_datas_value.append(parent_div)
}

function save_localstorage() {
    var data = document.querySelectorAll('.text_value')
    for (i = 0; i < data.length; i++) {
        localStorage.setItem(i, data[i].innerText)
    }
} 
    
function delete_localstorage() {
    //  let local_storage_val=Object.keys(localStorage)
    for (let i of Object.keys(localStorage)) {
         localStorage.removeItem(i)
    }
    save_localstorage()
}    



btn3.addEventListener('click', () => {

    if (get_inp.value == '') {
        alert('Give Input')
    } else {
        data_addon(get_inp.value)
        save_localstorage()
    }
    get_inp.value = ''
})

function edit_value(val) {
    let data = val.parentElement.parentElement.previousElementSibling.innerText
    get_inp.value = data
    delete_value(val)
}

function delete_value(val) {

    if (confirm('Do you Want to Delete this Item')) {
        let btn_remove = val.parentElement.parentElement.previousElementSibling.remove()
        let data_remove = val.parentElement.parentElement.remove()
        delete_localstorage()
    }
}

// `Save File in local Storage`
btn4.addEventListener('click', (val) => {

    if (confirm('Do you Want to Delete all the Item')) {
        btn1 = document.querySelectorAll('.btn1')
        for (let i of btn1) {
            i.parentElement.parentElement.previousElementSibling.remove()
            i.parentElement.parentElement.remove()
        }

        for (let i of Object.keys(localStorage)) {
            localStorage.removeItem(i)
        }
    }
    
})


// `Retrive data from localStorage`

window.onload = function () {
    parent_div = document.createElement('div')
    parent_div.setAttribute('class', 'datas')
    value_obj = Object.keys(localStorage).sort()
    console.log(value_obj);
    for (let i of value_obj) {
        parent_div = document.createElement('div')
        parent_div.setAttribute('class', 'datas')
    parent_div.innerHTML = `
    <p class='text_value'>${localStorage[i]}</p>
    <p class='action'>
        <span><button class="btn btn1 btn-primary" onclick="edit_value(this)" >Edit</button></span>
        <span><button class="btn btn2 btn-primary" onclick="delete_value(this)" >Delete</button></span>
    </p>
    `   
    input_datas_value.append(parent_div)
}
    }


