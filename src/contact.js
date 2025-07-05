function createContact() {
    const contactContent = document.createElement('div');
    contactContent.classList.toggle('contact-content');
    
    const time = document.createElement('h1');
    time.textContent = `Opening Hours`;
    const openHours = document.createElement('ul');
    openHours.innerHTML = `<li><strong>Sunday & Holidays:</strong> Closed</li>
        <li><strong>Monday:</strong> 12pm to 11pm</li>
        <li><strong>Tuesday:</strong> 12pm to 11pm</li>
        <li><strong>Wednesday:</strong> 12pm to 11pm</li>
        <li><strong>Thursday:</strong> 12pm to 11pm</li>
        <li><strong>Friday:</strong> 12pm to 11pm</li>
        <li><strong>Saturday:</strong> 12pm to 11pm</li>`;

    const locationTitle = document.createElement('h1');
    locationTitle.textContent = `Location`;
    const location = document.createElement('p');
    location.innerHTML = `8045 Reichel Walks,</br> 85457 Madalyn Trafficway,</br> South Buck,
        </br> Alaska.</br>28724.`

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = `Contact`;
    const contact = document.createElement('ul');
    contact.innerHTML = `<li><strong>Email:</strong> sakurahouse@gmail.com</li>
        <li><strong>Phone:</strong> 123 524 123</li>`;


    contactContent.append(time, openHours, locationTitle, location, contactTitle, contact);

    const getContactPage = () => contactContent;

    return { getContactPage }
}

export { createContact };