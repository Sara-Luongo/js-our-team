'use strict';
const contenitoreCard = document.querySelector('.card-container');


let containerHtml = ''

for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    const tempContainerHtml = ` 
        <div class="card">
        <div class="card-img-text">
         <img src="${member.img}" alt="${member.name}">
            
            <div class"text">
             <h3>${member.name}</h3>
             <p>${member.role}</p>
             <p>${member.email}</p>
            </div>
         </div>
        </div>
    `
    containerHtml += tempContainerHtml
}

contenitoreCard.innerHTML = containerHtml