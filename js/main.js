/*SHOW HIDDEN - PASSWORD*/

const showHiddenPass = (inputPass, inputIcon)    => {
    const input = document.getElementById(inputPass),
        iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', () => {
        //troca a password para texto
        if(input.type === 'password'){
            //troca para texto
            input.type = 'text'; 

            //adicionar icon
            iconEye.classList.add('ri-eye-line');

            //remover icon
            iconEye.classList.remove('ri-eye-off-line');

        } else{
            //troca para password
            input.type = 'password';

            //remover icon
            iconEye.classList.remove('ri-eye-line');

             //adicionar icon
            iconEye.classList.add('ri-eye-off-line');
        }
    })

}

showHiddenPass('input-pass', 'input-icon')