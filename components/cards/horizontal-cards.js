
class HorizontalCardGenerator {
    constructor(cardData) {
        this.cardData = cardData;

        this.link = this.cardData.link;
        this.imgSrc = this.cardData.imgSrc;
        this.imgDarkSrc = this.cardData.imgDarkSrc;
        this.title = this.cardData.title;
        this.paragraph = this.cardData.paragraph;

        // initial card setup
        this.linkContainer = document.createElement('a');
        this.linkContainer.href = this.link;

        this.cardContainer = document.createElement('div');
        this.cardContainer.classList.add('card');

        this.cardContainer.addEventListener('mouseenter', (event) => this.mouseOverCard(event));
        this.cardContainer.addEventListener('mouseleave', (event) => this.mouseOutCard(event));

        this.linkContainer.append(this.cardContainer);

        this.constructImage();
        this.constructText();
    }

    constructImage() {
        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'work-benefits-image');
        imageContainer.style.position = 'relative';

        const imageDark = document.createElement('img');
        imageDark.src = this.imgDarkSrc;
        imageDark.alt = this.title;
        imageDark.style.position = 'absolute';
        imageContainer.append(imageDark);

        const image = document.createElement('img');
        image.src = this.imgSrc;
        image.alt = this.title;
        image.style.position = 'absolute';
        imageContainer.append(image);

        this.cardContainer.append(imageContainer);
    }

    constructText() {
        this.textContainer = document.createElement('div');
        this.textContainer.setAttribute('class', 'work-benefits-text');

        this.constructTitle();
        this.constructParagraph();

        this.cardContainer.append(this.textContainer);
    }

    constructTitle() {
        const title = document.createElement('h3');
        title.textContent = this.title;
        this.textContainer.append(title);
    }

    constructParagraph() {
        const paragraph = document.createElement('p');
        paragraph.textContent = this.paragraph;
        this.textContainer.append(paragraph);
    }

    mouseOverCard(event) {
        let targetedCard = event.target;
        TweenMax.to(targetedCard, 0.3, {position: 'relative', top: '-3px', 
        boxShadow: '0 7px 4px -4px #777', mozBoxShadow: '0 7px 4px -4px #777', webkitBoxShadow: '0 7px 4px -4px #777'});
        
        let darkImage = event.target.children[0].children[0];
        let lightImage = event.target.children[0].children[1]

        TweenMax.to(lightImage, 0.3, {opacity: 0});
        TweenMax.from(darkImage, 0.3, {opacity: 0});
    }

    mouseOutCard(event) {
        let targetedCard = event.target;
        TweenMax.to(targetedCard, 0.3, {top: '3px', boxShadow: 'none;', mozBoxShadow: 'none', webkitBoxShadow: 'none'});
        TweenMax.to(targetedCard, {delay: 0.3, position: 'static'});

        let darkImage = event.target.children[0].children[0];
        let lightImage = event.target.children[0].children[1]

        TweenMax.to(lightImage, 0.3, {opacity: 1});
        TweenMax.to(darkImage, 0.3, {opacity: 1});
    }
}

if (document.title == 'About') {
    const workBenefitCards = [
        {
            link: '#',
            imgSrc: 'img/work-benefits/life-at-stockly.png',
            imgDarkSrc: 'img/work-benefits/life-at-stockly-dark.png',
            title: 'Life at Σtockly →',
            paragraph: "We’re building a place where we can be happy, productive, and do meaningful work."
        },
        {
            link: '#',
            imgSrc: 'img/work-benefits/operate-globally.png',
            imgDarkSrc: 'img/work-benefits/operate-globally-dark.png',
            title: 'How We Work →',
            paragraph: "We're remote-first, spanning from Europe to the United States."
        }
    ]

    const workBenefitsContainer = document.querySelector('#work-benefits-wrapper');

    workBenefitCards.forEach(workBenefit => {
        let newWorkBenefit = new HorizontalCardGenerator(workBenefit);
        workBenefitsContainer.append(newWorkBenefit.linkContainer);
    });
}

