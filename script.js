var table=[
    {
      idnumero: '7584635',
      nombre: 'Mario',
      apellido: 'Perez',
      fecha: '03/07/1992',
      direccion: 'Calle 8 #34-10',
      telefono: '3098976545',
      correo: 'Mariop07@hotmail.com',
      edad:'30'
    },
    {
        idnumero: '8944953',
        nombre: 'Silvia',
        apellido: 'Ortiz',
        fecha: '01/01/2000',
        direccion: 'Calle 45 #78-22',
        telefono: '3157654378',
        correo: 'Silvia0101@hotmail.com',
        edad:'23'
      },
      {
        idnumero: '1900983',
        nombre: 'Frank',
        apellido: 'Pino',
        fecha: '12/09/1990',
        direccion: 'Calle 12 #90-2',
        telefono: '3789076545',
        correo: 'Franko90@hotmail.com',
        edad:'32'
      }
];

let tablecontent = document.getElementById('registro-usuarios')

function listar(){
    
    let list = "";
    for (let i = 0; i < table.length; i++) {
        
        list+= `<tr><th scope="row">${table[i].idnumero}</td><td>${table[i].nombre}</td><td>${table[i].apellido}</td><td>${table[i].fecha}</td><td>${table[i].direccion}</td><td>${table[i].telefono}</td><td>${table[i].correo}</td><td>${table[i].edad}</td></tr>`
    }
    tablecontent.innerHTML=list;
}

function enviar(){
    let idnumero=document.getElementById('idnumero').value;
    let nombre=document.getElementById('nombre').value;
    let apellido=document.getElementById('apellido').value;
    let fecha=document.getElementById('fecha').value;
    let direccion=document.getElementById('direccion').value;
    let telefono=document.getElementById('telefono').value;
    let correo=document.getElementById('correo').value;
    let edad=document.getElementById('edad').value;

    if(!idnumero || !nombre || !apellido || !correo){
        alert("Rellene los campos obligatorios")
        return
    }else {
        for(let i = 0; i < table.length; i++){
            if(parseInt(table[i].idnumero) === parseInt(idnumero)){
                alert("ID ya registrada")
                return
            }
        }
        tablecontent.innerHTML += `<tr><th scope="row">${idnumero}</td><td>${nombre}</td><td>${apellido}</td><td>${fecha}</td><td>${direccion}</td><td>${telefono}</td><td>${correo}</td><td>${edad}</td></tr>`
        let nuevo ={idnumero:idnumero, nombre:nombre, apellido:apellido, fecha:fecha, direccion:direccion, telefono:telefono, correo:correo, edad:edad}
        table.push(nuevo);
    }
        
    
}











































/*(() => {
    'use strict'
  
    
    const forms = document.querySelectorAll('.needs-validation')
  
    
    Array.from(forms).forEach(form => {
      form.addEventListener('enviar', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  */
