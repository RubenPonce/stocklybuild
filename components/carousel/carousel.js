
class Carousel {
    constructor(tabs, images) {
        this.tabs = tabs;
        this.images = images;

        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.selectTab();
            });
            tab.addEventListener('mouseenter', (event) => this.mouseOverFeatureLink(event));
            tab.addEventListener('mouseleave', (event) => this.mouseOutFeatureLink(event));
        });
    }

    selectTab() {
        this.tabs.forEach(tab => {
            tab.parentNode.classList.remove('active-link');
        });
        
        event.target.parentNode.classList.add('active-link');
        this.selectImage();
    }

    selectImage() {
        const tabIdentifier = event.target.parentNode.dataset.tab;
        
        this.images.forEach(image => {
            image.classList.remove('active-photo');
            if(image.dataset.tab == tabIdentifier){
                image.classList.add('active-photo');
                TweenMax.from(image, 2, { opacity: '0' });
            }
        });
    }

    mouseOverFeatureLink(event) {
        let targetedLink = event.target;
        TweenMax.to(targetedLink, 0.3, { color: '#5AE5DD' });
    }
    
    mouseOutFeatureLink(event) {
        let targetedLink = event.target;
        TweenMax.to(targetedLink, 0.2, { color: '#F9F9F9' });
    }
}

const featureTabs = document.querySelectorAll('.features li h4');
const featureImages = document.querySelectorAll('.image-carousel img');

new Carousel(featureTabs, featureImages);