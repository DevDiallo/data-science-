document.addEventListener('DOMContentLoaded', function() {
    // Récupération du formulaire
    const form = document.querySelector('form');

    // Ajout de l'écouteur d'événement sur le formulaire
    form.addEventListener('submit', handleSubmit);

    // Fonction pour gérer la soumission du formulaire
    function handleSubmit(event) {
        // Empêcher la soumission par défaut du formulaire
        event.preventDefault();

        // Récupération des données du formulaire
        const formData = new FormData(form);
        // Conversion des données en un objet simple
        const data = Object.fromEntries(formData);
        // Conversion de l'objet en JSON
        const jsonData = JSON.stringify(data);

        // Envoi de la requête fetch
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: jsonData,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(result => console.log(result))
        .catch(err => console.error(err));
    }

});
