function homeDisplay(tab){
    const homeHeader = document.createElement('h1');
    homeHeader.textContent="Welcome To WildBurger";
    tab.appendChild(homeHeader);
    const homeText = document.createElement('p');
    homeText.classList.add("pageText")
    homeText.textContent="Best and Wildest Burgers you can eat !";
    tab.appendChild(homeText);
    const menuBtn = document.createElement("button");
    menuBtn.textContent="Order Now";
    menuBtn.classList.add("menuBtn");
    tab.appendChild(menuBtn);
}

export default homeDisplay