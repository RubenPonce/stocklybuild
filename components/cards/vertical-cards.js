
class VerticalCardGenerator {
    constructor(cardData) {
        this.cardData = cardData;

        this.symbol = cardData.symbol;
        this.imgSrc = cardData.imgSrc;
        this.title = cardData.title;
        this.paragraph = cardData.paragraph;

        // parent div and class
        this.cardContainer = document.createElement('div');
        this.cardContainer.classList.add('card');

        // construct the card
        this.constructSymbol();
        this.constructImage();
        this.constructTitle();
        this.constructParagraph();
    }

    constructSymbol() {
        const symbolContainer = document.createElement('div');
        symbolContainer.setAttribute('class', 'symbol-mark');

        const symbol = document.createElement('p');
        symbol.setAttribute('class', 'symbol');
        symbol.textContent = this.symbol;

        symbolContainer.append(symbol);

        this.cardContainer.append(symbolContainer);
    }

    constructImage() {
        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'value-image');

        const image = document.createElement('img');
        image.src = this.imgSrc;
        image.alt = this.title;
        imageContainer.append(image);

        this.cardContainer.append(imageContainer);
    }

    constructTitle() {
        const title = document.createElement('h4');
        title.textContent = this.title;
        this.cardContainer.append(title);
    }

    constructParagraph() {
        const paragraph = document.createElement('p');
        paragraph.textContent = this.paragraph;
        this.cardContainer.append(paragraph);
    }
}

if (document.title == 'About') {
    const valueCards = [
        {
            symbol: '✔',
            imgSrc: 'img/values/solutions-focused.png',
            title: 'Solutions-Focused',
            paragraph: "We don't dwell on problems; we strive to find solutions. We believe that the many issues surrounding stock trading can be fixed."
        },
        {
            symbol: '✔',
            imgSrc: 'img/values/dedicated-mission.png',
            title: 'Dedicated Mission',
            paragraph: "We provide the tools, know-how and support to move fast, be pioneering, and not break things."
        },
        {
            symbol: '✔',
            imgSrc: 'img/values/privacy-first.png',
            title: 'Privacy First',
            paragraph: "Σtockly was built on these principles from the ground up. We exercise complete transparency and privacy with your data."
        },
    ]

    const valuesContainer = document.querySelector('#values-container');

    valueCards.forEach(value => {
        let newValue = new VerticalCardGenerator(value);
        valuesContainer.append(newValue.cardContainer);
    });

}