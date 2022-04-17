const content = document.querySelector(".content")
function create(){
    createHeader();
    createTab();
    createFooter();
}
function createHeader(){
    //header
    const header = document.createElement("div");
    header.classList.add("header");
    content.appendChild(header);
    //header text
    const headerText= document.createElement("h1");
    headerText.textContent="Restaurant WildBurger";
    header.appendChild(headerText);
    //header button section
    const buttons = document.createElement("div");
    buttons.classList.add("buttonSection");
    header.appendChild(buttons);
    //buttons
    const home = document.createElement("button");
    home.textContent="Home";
    home.classList.add("buttons")
    home.classList.add("home")
    const menu = document.createElement("button");
    menu.textContent="Menu";
    menu.classList.add("buttons")
    menu.classList.add("menu")
    const about = document.createElement("button");
    about.textContent="About";
    about.classList.add("buttons")
    about.classList.add("about")

    buttons.appendChild(home);
    buttons.appendChild(menu);
    buttons.appendChild(about);
}
function createTab(){
    const tab = document.createElement('div');
    tab.classList.add('page');
    content.appendChild(tab);
    
}

function createFooter(){
    const footer = document.createElement('div');
    footer.classList.add("footer");
    content.appendChild(footer);
    const footerText = document.createElement('p');
    footerText.classList.add("footerText");
    footerText.textContent="copyright Ⓒ The grawash Project 2022";
    footer.appendChild(footerText);
}

export default create