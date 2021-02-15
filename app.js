class datosUser {
    constructor(name, email, psw, tlf, cantprods){
        this.name = name;
        this.email = email;
        this.psw = psw;
        this.tlf = tlf;
        this.cantprods = cantprods;
    }
}
class UI{
    addDatos(datosUserBar){
        const userList = document.getElementById('datos-user');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="userlist">
                <div="card-body" class="userInfo">
                    <h2>Usuario:</h2>
                    <strong>Nombre:</strong> ${datosUserBar.name} 
                    <strong>Email:</strong> ${datosUserBar.email} 
                    <strong>Contraseña:</strong> ${datosUserBar.psw} 
                    <strong>Telefono:</strong> ${datosUserBar.tlf} 
                    <strong>Sixpacks:</strong> ${datosUserBar.cantprods} 
                </div>
            </div>
        `;
        userList.appendChild(element);
    }
    resetForm(){
        document.getElementById('form-bar-miguelon').reset;
    }
    deleteDatos(){

    }
    showMessage(){

    }
}
///Dom events

document.getElementById('form-bar-miguelon').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const psw = document.getElementById('psw').value;
    const tlf = document.getElementById('tlf').value;
    const cantprods = document.getElementById('cantprods').value;

    const datosUserBar = new datosUser(name, email, psw, tlf, cantprods);
    const ui = new UI();
    ui.addDatos(datosUserBar);
    ui.resetForm();
})

