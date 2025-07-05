import './style.css';
import { createHome } from './home';

function buildPage() {
    const content = document.querySelector('#content')

    return { content }
}

const pageContent = buildPage();
const homePage = createHome();

pageContent.content.appendChild(homePage.getHomePage());