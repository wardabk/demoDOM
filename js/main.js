/************dom methods */
const listItems = [
    "Les éléments HTML comme objets",
    "Les propriétés de tous les éléments HTML",
    "Les méthodes pour accéder à tous les éléments HTML",
    "Les événements pour tous les éléments HTML",
];

const clicOne = document.getElementById('showNext');
const ul = document.getElementById('list');
let currentIndex = 0;
clicOne.addEventListener('click', function() {
       if (currentIndex < listItems.length) {
        const li = document.createElement('li');
        li.textContent = listItems[currentIndex];
       ul.appendChild(li);
        currentIndex++;
    }
});
  
/***************dom document*********** */
document.getElementById("addBtn").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value.trim();
    const surname = document.getElementById("surnameInput").value.trim();
    const age = document.getElementById("ageInput").value.trim();

    if (name && surname && age) {
        const infoList = document.getElementById("infoList");

        // Créer un nouvel élément d'information
        const infoItem = document.createElement("div");
        infoItem.classList.add("info");
        infoItem.innerHTML = `
            <span>${name} ${surname}, ${age} ans</span>
            <span class="edit">Modifier</span>
            <span class="delete">Supprimer</span>
        `;

        // Ajouter un gestionnaire d'événement pour modifier les informations
        infoItem.querySelector(".edit").addEventListener("click", function() {
            const newName = prompt("Nouveau nom:", name);
            const newSurname = prompt("Nouveau prénom:", surname);
            const newAge = prompt("Nouvel âge:", age);
            
            if (newName && newSurname && newAge) {
                infoItem.firstChild.textContent = `${newName} ${newSurname}, ${newAge} ans`;
            }
        });

        // Ajouter un gestionnaire d'événement pour supprimer l'information
        infoItem.querySelector(".delete").addEventListener("click", function() {
            infoList.removeChild(infoItem);
        });

        // Ajouter l'élément à la liste
        infoList.appendChild(infoItem);
        
        // Réinitialiser les champs de saisie
        document.getElementById("nameInput").value = "";
        document.getElementById("surnameInput").value = "";
        document.getElementById("ageInput").value = "";
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});

/*********************dom elements *******/
 // Fonction pour afficher le texte entré
 function afficherMetier() {
    const metier = document.getElementById('metierDesire').value.trim();
    let text;
    if (metier === "") {
      text = "Remplir le champs!.";
    } else {
      text = `vous souhaitez dévenir, ${metier} !`;
    }
    document.getElementById('work').textContent = text;
  
  }

  //****************dom html*********** */
      // Fonction pour changer le texte de l'élément demoText
      function changeText() {
        document.getElementById("demoText").textContent = "Formation Developpement Web Mobile FullStack !";
    }

    // Fonction pour ajouter un nouvel élément
    function addElement() {
        const newElement = document.createElement("p");
        newElement.textContent = "Nous faisons des demos dans le javascript";
        document.getElementById("outputArea").appendChild(newElement);
    }

    // Fonction pour supprimer l'élément demoText
    function removeElement() {
        const outputArea = document.getElementById("outputArea");
            // Vérifie s'il y a des éléments enfants dans outputArea
            if (outputArea.lastChild) {
                outputArea.removeChild(outputArea.lastChild);
            }
        
    }
     /****************dom forms**************** */
    function checkGrade() {
        let grade = document.getElementById("moyenne").value.trim();
        let result = document.getElementById("result");
    
        result.textContent =""; // Clear previous result

        // Vérifier si le champ est vide
        if (grade === "") {
          result.textContent = "Veuillez entrer une valeur.";
          return; 
        }
        // Validate Grade
        if (isNaN(grade) || grade < 0 || grade > 20) {
            result.textContent = "entrer une valeur compris entre 0 et 20"; return ; // Prevent form submission
        }
    
        // Determine Admission Status
        if (grade < 10) {
            result.textContent = "Redoublant !";
        } else {
            result.textContent = "admis !";
        }
                  
    }
    /*****************dom css***************/

    document.getElementById("textStyle").style.fontWeight='bold';     

  /*****************dom animation*************/
    function animate() {
        const box = document.getElementById('box');
        let pos = 0; 
        function frame() {
            if (pos >= 500) { 
                clearInterval(id); 
            } else {
                pos++; 
                box.style.left = pos + 'px'; 
            }
        }
        const id = setInterval(frame, 10);
    }
    // Démarre l'animation au clic
    document.getElementById('btnAnim').addEventListener('click', animate);

    /************dom Events */
      function upperCase() {
        const x = document.getElementById("fname");
        x.value = x.value.toUpperCase();
      }

      function mOver(obj) {
        obj.innerHTML = "Au revoir !"
      }
      
      function mOut(obj) {
        obj.innerHTML = "Bonjour !"
      }  

      function mUp(obj) {
        obj.style.backgroundColor="blue";
        obj.innerHTML="Thank You";
      }
     /******dom addeventListener******/
      document.getElementById("myBtn").addEventListener("click", function() {
        alert("It's saturday! Enjoy learning Javascript");
      });

      var x = document.getElementById("myBtn");
       x.addEventListener("mouseover", myFirstFunction);
       x.addEventListener("mouseout", mySecondFunction);

       function myFirstFunction() {
  document.getElementById("comment").innerHTML += "Moused over!<br>";
    }

        function mySecondFunction() {
  document.getElementById("comment").innerHTML += "Moused out!<br>";
     }

     //***********dom navigation ********* */
     document.getElementById("navigate-btn").addEventListener("click", function() {
        const firstText = document.getElementById("first-paragraph");
        const secondText = document.getElementById("second-paragraph");
        const thirdText = document.getElementById("third-paragraph");
        
        // Naviguer dans le DOM
        const parentOfFirst = firstText.parentNode; // Récupère le parent
        const nextOfFirst = firstText.nextElementSibling; // Récupère l'élément suivant
        const previousOfSecond = secondText.previousElementSibling; // Élément précédent
        const firstChildOfParent = parentOfFirst.firstElementChild; // Premier enfant du parent
        const lastChildOfParent = parentOfFirst.lastElementChild; // Dernier enfant du parent
        
        // Afficher les résultats
        document.getElementById("navput").innerHTML = `
          <p>Parent du premier texte: ${parentOfFirst.tagName}</p>
          <p>Élément suivant du premier texte: ${nextOfFirst.tagName}</p>
          <p>Élément précédent du deuxième texte: ${previousOfSecond.tagName}</p>
          <p>Premier enfant du parent: ${firstChildOfParent.tagName}</p>
          <p>Dernier enfant du parent: ${lastChildOfParent.tagName}</p>
        `;
    });

    /********************dom nodes******** */
    const p1=document.getElementById('para1').innerHTML="salut, c'est le premier texte";
    const p2=document.getElementById('para2').innerHTML="maintenant, c'est le deuxième texte";
    function deleteFun() {
      document.getElementById("para2").remove();
      }
       /****************dom collections */
       const myList = document.getElementsByClassName('list');

       document.getElementById("listName").innerHTML = "Le deuxième nom est : " + myList[1].innerHTML;
       
       function colorList() {
        for (let i = 0; i < myList.length; i++) {
          myList[i].style.color = "red";
        }
      }

      /************************* */
      function convertToUppercase() {
      const nodeList = document.getElementsByClassName('list-item');
       
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = nodeList[i].innerHTML.toUpperCase();
        }
    }
    /*************** */
    