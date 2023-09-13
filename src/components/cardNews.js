class cardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "cardLeft");

    const autor = document.createElement("span");
    autor.textContent = "by " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("newsContent");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "cardRight");

    const newsImg = document.createElement("img");
    newsImg.src = this.getAttribute("photo") || "assets/image/default.jpg";
    newsImg.alt = "photo-noticia";
    cardRight.appendChild(newsImg);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

.card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    margin-bottom: 2rem;
    margin: auto;
}

.cardLeft {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding-left: 10px;
}

.cardLeft > span {
    font-weight: bold;
    background-color: rgba(128, 128, 128, 0.268);
    width: fit-content;
    padding: .4rem;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px; 
}

.cardLeft > h1 {
    margin-top: 10px;
    font-size: 25px;
}
.cardLeft >  a {
    text-decoration: none !important ;
    color: black;
}

.cardLeft > p {
    margin-top: 15px;
    color: rgb(95, 95, 95);
}

.cardRight img {
    width: 100%;
}
    `;

    return style;
  }
}

customElements.define("card-news", cardNews);
