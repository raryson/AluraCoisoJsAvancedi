let submit = document.querySelector('.form')

submit.addEventListener('submit', (event) => {

    event.preventDefault()

    let campos = document.querySelectorAll('.form-control')
    let tableBody = document.querySelector('#tableBody')
    let tr = document.createElement('tr')

    campos.forEach((value, index) => {

      let td = document.createElement('td')
      td.textContent = campos[index].value
      tr.appendChild(td)
    })
    let td = document.createElement('td')
    td.textContent = campos[1].value * campos[2].value
    tr.appendChild(td)

    tableBody.appendChild(tr)
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();



})