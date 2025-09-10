// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
// Your code goes here ...
const threeContacts = contacts.splice(0, 3);
const firstContacts = threeContacts[0];
const secondContacts = threeContacts[1];
const thirdContacts = threeContacts[2];
const firstRow  = document.createElement("tr");
firstRow.innerHTML =
`<td>
    <img src="${firstContacts.pictureUrl}" />
  </td>
  <td> ${firstContacts.name} </td>
  <td> ${firstContacts.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>`;

  tableBody.appendChild(firstRow);


const secondRow  = document.createElement("tr");
secondRow.innerHTML =
`<td>
    <img src="${secondContacts.pictureUrl}" />
  </td>
  <td> ${secondContacts.name} </td>
  <td> ${secondContacts.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>`;

  tableBody.appendChild(secondRow);


const thirdRow  = document.createElement("tr");
thirdRow.innerHTML =
`<td>
    <img src="${thirdContacts.pictureUrl}" />
  </td>
  <td> ${thirdContacts.name} </td>
  <td> ${thirdContacts.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>`;

  tableBody.appendChild(thirdRow);
 

  // ITERATION 2 - Delete Buttons
  const btn_delete= document.querySelectorAll('.btn-delete');

  btn_delete.forEach(button => {button.addEventListener("click",(event)=>{const row=event.target.closest('tr');
    row.remove();})
    
  });
  

  // Your code goes here ...
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
const btn_like = document.querySelectorAll('.btn-like');
  

btn_like.forEach(button => {button.addEventListener("click",(event)=>{const btn=event.target.closest(".btn-like");btn.classList.toggle("selected");})})



  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener("click",()=>{const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);})

  tableBody.addEventListener("click", (event) => {
  
  const delBtn = event.target.closest(".btn-delete");
  if (delBtn) {
    delBtn.closest("tr").remove();
    return; 
  }

  const likeBtn = event.target.closest(".btn-like");
  if (likeBtn) {
    likeBtn.classList.toggle("selected");
  }
});


