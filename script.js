const username = document.getElementById("user");
const profile = document.getElementById("profile");
let contacts = [];

function setName() {
    const inputName = document.getElementById("name").value;
    username.textContent = inputName;
}

function setImg() {
    const imgUrl = document.getElementById("profile-img-url").value;
    profile.style.backgroundImage = "url(" + imgUrl + ")";
}

function addContact() {
    const name = document.getElementById("nameInput").value;
    const phone = document.getElementById("telInput").value;

    if (name && phone) {
        contacts.push([name, phone]);
        renderContacts();
    }
}

function renderContacts() {
    const contactList = document.getElementById("contactList");
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const row = `<tr>
                        <td>${index + 1}</td>
                        <td>${contact[0]}</td>
                        <td>${contact[1]}</td>
                    </tr>`;
        contactList.innerHTML += row;
    });
}

function hoverEffect(element) {
    element.style.color = 'blue';
    element.style.textDecoration = 'underline';
}

function removeHover(element) {
    element.style.color = 'black';
    element.style.textDecoration = 'none';
}
