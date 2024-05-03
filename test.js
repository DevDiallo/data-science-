
// Attendre que la page soit chargée
window.onload = function() {
    // Sélectionner les éléments nécessaires
    const form = document.getElementById('formulaire');
    const displayedNumberElement = document.getElementById('fsolde');
    const montantElement = document.getElementById('fMontant');
    const sommeBtn = document.getElementById('somme');
    const soustractionBtn = document.getElementById('soustraction');
    
    // Attacher la fonction de rappel `addition` au bouton "Déposer"
    sommeBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire
        addition(event, displayedNumberElement, montantElement);
    });

    // Attacher la fonction de rappel `soustraction` au bouton "Retirer"
    soustractionBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire
        soustraction(event, displayedNumberElement, montantElement);
    });
}

// Fonction de dépôt
function addition(event, displayedNumberElement, montantElement) {
    // Récupérer la valeur saisie par l'utilisateur
    const userNumber = parseFloat(montantElement.value);
    
    // Vérifier que la valeur saisie est un nombre valide
    if (isNaN(userNumber) || userNumber <= 0) {
        alert("Veuillez entrer un montant valide.");
        return;
    }
    
    // Effectuer l'opération d'ajout
    const sum = parseFloat(displayedNumberElement.value) + userNumber;
    
    // Mettre à jour la valeur de `fsolde` dans l'input
    displayedNumberElement.value = sum.toFixed(2); // Arrondi à 2 décimales
    
    // Mettre à jour le solde affiché
    displayedNumberElement.innerHTML = `Votre solde : ${sum.toFixed(2)}`;
    displayedNumberElement.style.visibility='visible';
}

// Fonction de retrait
function soustraction(event, displayedNumberElement, montantElement) {
    // Récupérer la valeur saisie par l'utilisateur
    const userNumber = parseFloat(montantElement.value);
    
    // Vérifier que la valeur saisie est un nombre valide
    if (isNaN(userNumber) || userNumber <= 0) {
        alert("Veuillez entrer un montant valide.");
        return;
    }
    
    // Récupérer le solde actuel
    const currentBalance = parseFloat(displayedNumberElement.value);
    
    // Vérifier si le retrait est possible
    if (currentBalance < userNumber) {
        alert("Solde insuffisant.");
        return;
    }
    
    // Effectuer l'opération de retrait
    const newBalance = currentBalance - userNumber;
    
    // Mettre à jour la valeur de `fsolde` dans l'input
    displayedNumberElement.value = newBalance.toFixed(2); // Arrondi à 2 décimales
    
    // Mettre à jour le solde affiché
    displayedNumberElement.innerHTML = `Votre solde : ${newBalance.toFixed(2)}`;
    displayedNumberElement.style.visibility='visible';
}
document.getElementById('conexion').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche la navigation par défaut
    console.log('Lien cliqué !');
});

