import burger from "./burger.jpg"
function menuDisplay(tab){
    const homeHeader = document.createElement('h1');
    homeHeader.textContent="WildBurger Menu";
    tab.appendChild(homeHeader);
    const menu = document.createElement("div");
    menu.classList.add("menuItem");
    tab.appendChild(menu);
    addItem(menu,"burger",burger)
    addItem(menu,"burger",burger)
    addItem(menu,"burger",burger)
    addItem(menu,"burger",burger)
    addItem(menu,"burger",burger)
    addItem(menu,"burger",burger)
    addItem(menu,"burger",burger)
    addItem(menu,"burger",burger)
}
function addItem(menu,name, source){
    const item = document.createElement("div");
    menu.appendChild(item);
    item.textContent=name;
    item.classList.add("item");
    const img = document.createElement("img");
    img.src=source;
    img.classList.add("menuImg");
    item.appendChild(img);
    const btn = document.createElement("button");
    btn.classList.add("itemBtn")
    btn.textContent="Order";
    item.appendChild(btn);
}
export default menuDisplay