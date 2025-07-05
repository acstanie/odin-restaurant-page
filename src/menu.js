function createMenu() {
    const menuContent = document.createElement('div');
    menuContent.classList.toggle('menu-content');

    function createItem(className, title, imgLink, ingredients) {
        const item = document.createElement('div');
        item.classList.toggle(className);

        const itemTitle = document.createElement('h1');
        itemTitle.textContent = title;

        const itemImg = document.createElement('img');
        itemImg.setAttribute('src', imgLink);
        itemImg.setAttribute('alt', `Image of ${title}`);
        itemImg.setAttribute('width', '400px');

        const itemIngredients = document.createElement('h4');
        itemIngredients.innerHTML = ingredients;

        item.append(itemTitle, itemImg, itemIngredients);

        return item;
    }

    let item1Title = `Japanese-Style Triple-Seared Steak`;
    let item1Img = `https://www.allrecipes.com/thmb/HrmDkl298nTntHX5H8tS6c7lYr8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8659468_Japanese-Style-Triple-Seared-Steak_John-Mitzewich_4x3-4bfc6f3d0702462181905dc0cb7e2c85.jpg`;
    let item1Ingredients = `<em>Filet Mignon &middot; Avocado Oil &middot; Japanese Whiskey &middot; Soy Sauce</em>`;
    const item1 = createItem('item-1', item1Title, item1Img, item1Ingredients);

    let item2Title = `Okonomiyaki-Inspired Crispy Rice`;
    let item2Img = `https://www.allrecipes.com/thmb/J_7humUYS8WHOvNQ9Vnv_fOROaU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8788921-Okonomiyaki-Crispy-Rice-3x4-210-1c0455b25fd54534988b142053a21fa5.jpg`;
    let item2Ingredients = `<em>White Rice &middot; Bacon &middot; Green Cabbage &middot; 
        Aonori (Seaweed Flakes) &middot; Bonito Flakes &middot; Kewpie mayonnaise &middot; Soy Sauce</em>`;
    const item2 = createItem('item-2', item2Title, item2Img, item2Ingredients);

    let item3Title = `Beef Miso Ramen`;
    let item3Img = `https://www.allrecipes.com/thmb/_7xd4kS366bm0oHubdEb6r3jXjo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9020363-860f0064b2054217a473ed81737e2483.jpg`;
    let item3Ingredients = `<em>Beek Sirlon Steak &middot; Coconut Oil &middot; Ramen Noodles &middot; Miso Paste</em>`;
    const item3 = createItem('item-3', item3Title, item3Img, item3Ingredients);

    let item4Title = `Chicken Katsu`;
    let item4Img = `https://www.allrecipes.com/thmb/1jrl7HNw9CDqa7594oVDXn4fQZg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/image-2000-1-ed10b562f0a34901b18e8f931f0782ef.jpg`;
    let item4Ingredients = `<em>Boneless Chicken &middot; Eggs &middot; Panko Bread &middot; All Purpose Flour`;
    const item4 = createItem('item-4', item4Title, item4Img, item4Ingredients);

    let item5Title = `Oyakodon (Japanese Chicken and Egg Rice Bowl)`;
    let item5Img = `https://www.allrecipes.com/thmb/jqIbef6OL9JY8H34QtHUs4c6tv8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3963616-oyakodon-japanese-chicken-and-egg-rice-bowl-iYing-4x3-1-60750fbc4fd94b5b9fa0eb3902d13bee.jpg`;
    let item5Ingredients = `<em>Boneless Chicken Thighs &middot; Olive Oil &middot; Dashi Stock &middot; 
        DAshi Powder &middot; Mirin &middot; Brown Sugar &middot; White Rice</em>`;
    const item5 = createItem('item-5', item5Title, item5Img, item5Ingredients);

    menuContent.append(item1, item2, item3, item4, item5);

    function getMenuPage() {
        return menuContent
    }

    return { getMenuPage };
}

export { createMenu };