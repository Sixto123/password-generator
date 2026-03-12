/*Generador de contraseñas */
function generatePassword(){

    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    
    let password = "";
    
    for(let i = 0; i < 12; i++){
    password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    document.getElementById("password").value = password;
    
}

/*Funcion de copiar*/
function copyPassword(){

    let passwordField = document.getElementById("password");
    
    passwordField.select();
    passwordField.setSelectionRange(0,999);
    
    navigator.clipboard.writeText(passwordField.value);
    
    alert("Contraseña copiada");
    
}