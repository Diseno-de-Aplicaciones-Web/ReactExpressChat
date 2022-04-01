const host = "https://web-develop-react-express-chat.herokuapp.com"
const htmlGetUsers = document.querySelector("#getUsers");
const htmlUpdateButton = document.querySelector("#updateButton");

const htmlGetMessages = document.querySelector("#getMessages");
const htmlUpdateBoton = document.querySelector("#updateBoton");

async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getUsers () {
    const users = await get(host+"/users/");
    htmlGetUsers.innerText = JSON.stringify(users);
};

function updateButtonClickHandler() {
    getUsers();
}

htmlUpdateButton.addEventListener("click", updateButtonClickHandler)

// Mi prueba

function authToken(id, secret) {
    // En autenticación Basic, usuario y contraseña se separan con ':'
    const authToken = `${id}:${secret}`;
    // Y se codifican en Base64
    const base64token = btoa(authToken);
    return `Basic ${base64token}`;
}

const miURL = host+"/messages/";
let miToken = authToken(1648811234937, "abc123");

/**
 * GET con autenticación
 */
async function authGet(url, token) {
    const response = await fetch(
        url,
        { 
            headers: {
                Authorization: token
            }
        }
    );
    const data = await response.json();
    return data;
}



async function getMessages () {
    const messages = await get(host+"/messages/");
    htmlGetMessages.innerText = JSON.stringify(messages);
};

function updateBotonClickHandler() {
    getMessages();
}

htmlUpdateBoton.addEventListener("click", updateBotonClickHandler)

authGet(miURL, miToken);