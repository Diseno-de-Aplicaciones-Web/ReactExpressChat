export const host = "https://web-develop-react-express-chat.herokuapp.com";

// {String} url - Url, {String} name - Name user, {String} password - Password user, {Number} id - Id user
// Un token de acceso es un string aleatorio que identifica a un usuario, (la app utiliza para realizar llamadas a la API)

// Token - para crear autorización, se pasa nombre de usuario y password, y genera autorización 
export function authToken(name, password) {
    // En autenticación Basic, usuario y contraseña se separan con ':'
    const authToken = `${name}:${password}`;
    // Y se codifican en Base64
    const base64Token = btoa(authToken);
    console.log(base64Token);
    return `Basic ${base64Token}`;
}

export async function authGet(url, id, password) {
    const response = await fetch(
        url,
        {
            headers: {
                // te autoriza, da token autorizado 
                Authorization: authToken(id, password)
            }
        });
    const data = await response.json();
    console.log(data);
    return data;

}
/**
 * Get the messages of the backend.
 * Take the data and transform it in string,
 * then print in the window the data.
 */

export async function getMessages(idUser, passUser, yourUseState) {
    // coge los mensajes actualizados para verlos en pantalla
    const message = await authGet(host + '/messages/', idUser, passUser);
    yourUseState(JSON.stringify(message));
}