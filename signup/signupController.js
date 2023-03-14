import { createUser } from "./signup.js";

export function signupController(signupElement) {
    signupElement.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('Formulario enviado con éxito');

        const emailElement = signupElement.querySelector('#username');
        const passwordElement = signupElement.querySelector('#password');
        const passwordConfirmElement = signupElement.querySelector('#passwordConfirm');

        if (isEmailValid(emailElement.value) &&
            isPasswordValid(passwordElement.value, passwordConfirmElement.value)) {
            try {
                await createUser(emailElement.value, passwordElement.value)
                alert('Usuario creado correctamente')
            } catch (error) {
                alert(error.message)
            }
        }
    })

    function isEmailValid(email) {
        const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (!mailRegExp.test(email)) {
            alert('El email no es correcto');
            return false
        }

        return true
    }

    function isPasswordValid(password, passwordConfirmation) {
        if (password !== passwordConfirmation) {
            alert('Las contraseñas no coinciden');
            return false
        }

        return true
    }
}