import b from './b'
let app = document.querySelector("#app"),
    p = document.createElement('p'),
    img = document.createElement('img');

export default () => {
    app.innerHTML = "";
    p.innerHTML = b;
    img.src = "./static/image/black.png";
    app.appendChild(p)
    app.appendChild(img)
}
