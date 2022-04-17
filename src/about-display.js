function aboutDisplay(tab){
    const homeHeader = document.createElement('h1');
    homeHeader.textContent="About WildBurger";
    tab.appendChild(homeHeader);
    const aboutText = document.createElement('p');
    aboutText.classList.add("pageText");
    aboutText.textContent="we are Wildest Burger Restaurant to ever exist, we guarantee you after tasting our food you'll never be satisfied with any other food in the world."
    tab.appendChild(aboutText);
    const contact = document.createElement("div");
    contact.classList.add("contacts");
    contact.style.marginTop="100px";
    tab.appendChild(contact);
    const twitter = document.createElement("div");
    twitter.textContent="Twitter:";
    const twittext = document.createElement("p");
    twittext.textContent="@WildBurger";
    contact.appendChild(twitter)
    twitter.appendChild(twittext)
    const insta = document.createElement("div");
    insta.textContent="instagram:";
    const instatext = document.createElement("p");
    instatext.textContent="@Wild_Burger";
    contact.appendChild(insta);
    insta.appendChild(instatext);
    const location = document.createElement("div");
    const locat = document.createElement("p");

}

export default aboutDisplay