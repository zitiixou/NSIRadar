function changerLeTheme () {
  //On construit une liste de couleur
  const couleurs = ['#4e54c8','#003AFF','#FF00C5','#008B90', '#06B41B', '#C89400']

  //On genere un indice de couleur au hasard
  const randomNumber = Math.floor(Math.random() * 6)

  console.log(couleurs[randomNumber])
  //On applique les couleur au element
  localStorage.setItem("couleur", couleurs[randomNumber]);

  //On recharge la page
  window.location.reload()
}

//Au chargement de la page on recupere la couleur et on l'applique aux elements
window.addEventListener("load", ()=> {
  const fond = document.getElementById('Fond--Div')
  const bouttons = document.getElementById('carte--A')

  couleurActuel = localStorage.getItem('couleur')
  fond.style.backgroundColor = couleurActuel
  bouttons.style.backgroundColor = couleurActuel
});

// Quand l'utilisateur valide le QCM on verifie si ses réponses sont bonnes
function validerQCM () {
  //On recupere les reponses de l'utilisateur
    QCM = document.querySelectorAll('.questionnaire--Div')
    
    const Q1 = document.querySelectorAll('input[name=q1]');
    let R1 = [];
      
    Q1.forEach(function(option) {
        if (option.checked) {
          R1.push( option.value);
        }
    });

    //On recupere la reponse de lutilisateur
    const Q2 = document.querySelectorAll('input[name=q2]');
    let R2 = '';
      
    Q2.forEach(function(option) {
        if (option.checked) {
          R2 = option.value;
        }
    });

    //On recupere la reponse de lutilisateur
    const Q3 = document.querySelectorAll('input[name=q3]');
    let R3 = '';
      
    Q3.forEach(function(option) {
        if (option.checked) {
          R3 = option.value;
        }
      });
      
    //Si tout est bon alors on desaffiche le QCM et on affiche la page de coordonees
    if (JSON.stringify(R1) === JSON.stringify(["30", "50"]) && R2 === "10" && R3 === "1") {
        QCM[0].style.display = 'none'
        QCM[1].style.display = 'flex'
        document.getElementById('form--Div').style.width = '500px'
        document.getElementById('form--Div').style.height = '400px'

    } else {
      //Si les reponses sont fausses alors on envoie un message a l'utilisateur
      alert('Relis-toi')
    }
}