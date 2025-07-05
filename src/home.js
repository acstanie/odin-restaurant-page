function createHome() {
    const homeContent = document.createElement('div');
    homeContent.classList.toggle('home-content');

    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Sakura House';

    const heroImg = document.createElement('img');
    heroImg.setAttribute('src', 'https://images.pexels.com/photos/343870/pexels-photo-343870.jpeg');
    heroImg.setAttribute('alt', 'Hero Image')
    heroImg.setAttribute('width', '500px');

    const heroTextHeader = document.createElement('h3');
    heroTextHeader.textContent = 'Who are we?';

    const heroText = document.createElement('p');
    heroText.textContent = `Sakura House is a dinning experience that offers to its customers 
        various Japanese cusine options to satitate their every single culinary desire. With that
        in mind, the restaurant has a vast menu of delectable foods, that are prepared from the 
        freshest of produce available and by the hands of skilled chefs who possess a passion to 
        deliver the most delicious and high quality foods. `
    
    homeContent.append(heroTitle, heroImg, heroTextHeader, heroText);

    function getHomePage() {
        return homeContent;
    }
    
    return { getHomePage };
}

export { createHome };