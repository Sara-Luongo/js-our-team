'use strict';
const contenitoreCard = document.querySelector('.card-container');


let containerHtml = ''

for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    const tempContainerHtml = ` 
        <div id="card">
            <div class="card-img">
                    <img src="${member.img}" alt="${member.name}">
            </div>
            <div class="info">
                    <h3>${member.name}</h3>
                    <p>${member.role}</p>
                    <p>${member.email}</p>
            </div>
        </div>
    `
    containerHtml += tempContainerHtml
}

contenitoreCard.innerHTML = containerHtml