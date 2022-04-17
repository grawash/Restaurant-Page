const content = document.querySelector(".content")
function create(){
const header = document.createElement("h1");
header.textContent="Restaurant Menu";
content.appendChild(header);
}

export default create