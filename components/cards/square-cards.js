
class SquareCardGenerator {
    constructor(cardData) {
        // core card data
        this.cardData = cardData;
        this.imgSrc = this.cardData.imgSrc;
        this.title = this.cardData.title;
        this.subTitle = this.cardData.subTitle;

        // supplementary card data
        this.linkText = this.cardData.linkText;
        this.linkLocation = this.cardData.linkLocation;

        // parent div and class
        this.cardContainer = document.createElement('div');
        this.cardContainer.classList.add('card');

        // construct the card
        this.constructImage();
        this.constructTitle();
        this.constructSubTitle();
        this.constructLink();
    }

    constructImage() {
        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'image-container');

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

    constructSubTitle() {
        const subTitle = document.createElement('p');
        subTitle.textContent = this.subTitle;
        this.cardContainer.append(subTitle);
    }

    constructLink() {
        if (this.linkText) {
            const link = document.createElement('a');
            link.textContent = this.linkText;
            link.href = this.linkLocation;
            this.cardContainer.append(link);
        }
    }
}

if (document.title == 'Σtockly') {

    const benefitsCard = [
        {
            imgSrc: 'img/benefits/user-accounts.png',
            title: 'User Accounts',
            subTitle: 'Register your account in a matter of seconds',
        },
        {
            imgSrc: 'img/benefits/stock_summaries.png',
            title: 'Stock Summaries',
            subTitle: 'Actionable summaries of your favorite stocks',
        },
        {
            imgSrc: 'img/benefits/stock-charts.png',
            title: 'Stock Charts',
            subTitle: 'See stock trajectory projections at a glance.',
        },
        {
            imgSrc: 'img/benefits/stock-thresholds.png',
            title: 'Stock Thresholds',
            subTitle: 'Make key decisions when stocks reach certain thresholds',
        },
        {
            imgSrc: 'img/benefits/leaderboard-page.png',
            title: 'Leaderboard Page',
            subTitle: 'Rank your stocks by preference and performance',
        },
        {
            imgSrc: 'img/benefits/sentiment-analysis.png',
            title: 'Sentiment Analysis',
            subTitle: 'Use our sentiment tool to predict stock prices',
        }, 
    ]

    const benefitsContainer = document.querySelector('.card-container');

    benefitsCard.forEach(benefit => {
        // create in this line
        let newBenefit = new SquareCardGenerator(benefit);
        benefitsContainer.append(newBenefit.cardContainer);
        // append in this line
    });
}

if (document.title == 'About') {

    const teamCard = [
        {
            imgSrc: 'img/team/kai-lovingfoss.png',
            title: 'Kai Lovingfoss',
            subTitle: 'Team Lead',
            linkText: 'Github',
            linkLocation: 'https://github.com/tryingtokeepup',
        },
        {
            imgSrc: 'img/team/isaac-aderogba.png',
            title: 'Isaac Aderogba',
            subTitle: 'UI Engineer',
            linkText: 'Github',
            linkLocation: 'https://github.com/IsaacAderogba',
        },
        {
            imgSrc: 'img/team/william-vanorder.png',
            title: 'William VanOrder',
            subTitle: 'UI Engineer',
            linkText: 'Github',
            linkLocation: 'https://github.com/wvanorder',
        },
        {
            imgSrc: 'img/team/reed-james.png',
            title: 'Reed James',
            subTitle: 'UI Engineer',
            linkText: 'Github',
            linkLocation: 'https://github.com/coffeelabor',
        },
        {
            imgSrc: 'img/team/jonathan-taylor.png',
            title: 'Jonathan Taylor',
            subTitle: 'Front-End Engineer',
            linkText: 'Github',
            linkLocation: 'https://github.com/jonyonson',
        },
        {
            imgSrc: 'img/team/ruben-ponce.png',
            title: 'Ruben Ponce',
            subTitle: 'Front-End Engineer',
            linkText: 'Github',
            linkLocation: 'https://github.com/RubenPonce',
        },
        {
            imgSrc: 'img/team/william-connatser.png',
            title: 'William Connatser',
            subTitle: 'Back-End Engineer',
            linkText: 'Github',
            linkLocation: 'https://github.com/WilliamConnatser',
        },
        {
            imgSrc: 'img/team/victor-ruiz.png',
            title: 'Victor Ruiz',
            subTitle: 'iOS Engineer',
            linkText: 'Github',
            linkLocation: 'https://github.com/vicxruiz',
        },
        {
            imgSrc: 'img/team/chris-louie.png',
            title: 'Chris Louise',
            subTitle: 'Data Scientist',
            linkText: 'Github',
            linkLocation: 'https://github.com/Ruwai',
        },
        {
            imgSrc: 'img/team/derek-shing.png',
            title: 'Derek Shing',
            subTitle: 'Data Scientist',
            linkText: 'Github',
            linkLocation: 'https://github.com/derek-shing',
        },

    ]

    const teamContainer = document.querySelector('.card-container');

    teamCard.forEach(member => {
        let newMember = new SquareCardGenerator(member);
        teamContainer.append(newMember.cardContainer);
    });
}
