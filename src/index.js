import './style.css';
import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createContact } from './contact.js';

function buildPage() {
    const content = document.querySelector('#content');
    const contentChild = content.children;
    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const contactBtn = document.querySelector('#contact');

    const getContentChild = () => contentChild[0];
    const getHomeBtn = () => homeBtn;
    const getMenuBtn = () => menuBtn;
    const getContactBtn = () => contactBtn;


    return { content, getContentChild, getHomeBtn, getMenuBtn, getContactBtn };
} 

const pageContent = buildPage();
const homePage = createHome();
const menuPage = createMenu();
const contactPage = createContact()

pageContent.content.appendChild(homePage.getHomePage());

pageContent.getHomeBtn().addEventListener('click', (e) => {
    if (pageContent.getContentChild().getAttribute('class') === 'home-content') {
        return;
    }
    if (pageContent.getContentChild().getAttribute('class') === 'menu-content') {
        pageContent.content.removeChild(menuPage.getMenuPage());
        pageContent.content.appendChild(homePage.getHomePage());
    }
    if (pageContent.getContentChild().getAttribute('class') === 'contact-content') {
        pageContent.content.removeChild(contactPage.getContactPage());
        pageContent.content.appendChild(homePage.getHomePage());
    }
});

pageContent.getMenuBtn().addEventListener('click', (e) => {
    if (pageContent.getContentChild().getAttribute('class') === 'menu-content') {
        return;
    }
    if (pageContent.getContentChild().getAttribute('class') === 'home-content') {
        pageContent.content.removeChild(homePage.getHomePage());
        pageContent.content.appendChild(menuPage.getMenuPage());
    }
    if (pageContent.getContentChild().getAttribute('class') === 'contact-content') {
        pageContent.content.removeChild(contactPage.getContactPage());
        pageContent.content.appendChild(menuPage.getMenuPage());
    }
});

pageContent.getContactBtn().addEventListener('click', (e) => {
    if (pageContent.getContentChild().getAttribute('class') === 'contact-content') {
        return;
    }
    if (pageContent.getContentChild().getAttribute('class') === 'home-content') {
        pageContent.content.removeChild(homePage.getHomePage());
        pageContent.content.appendChild(contactPage.getContactPage());
    }
    if (pageContent.getContentChild().getAttribute('class') === 'menu-content') {
        pageContent.content.removeChild(menuPage.getMenuPage());
        pageContent.content.appendChild(contactPage.getContactPage());
    }
});
