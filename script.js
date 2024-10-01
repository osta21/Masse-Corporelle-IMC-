// script.js
function calculerIMC() {
    const poids = document.getElementById('poids').value;
    const taille = document.getElementById('taille').value / 100; // convertir cm en m
    const dateNaissance = new Date(document.getElementById('dateNaissance').value);

    if (poids && taille && dateNaissance) {
        const age = calculAge(dateNaissance);
        const imc = (poids / (taille * taille)).toFixed(2);
        
        if (age < 19) {
            afficherResultatEnfant(imc, age);
        } else {
            afficherResultatAdulte(imc);
        }
    } else {
        alert("Veuillez remplir tous les champs");
    }
}

function calculAge(dateNaissance) {
    const aujourdhui = new Date();
    let age = aujourdhui.getFullYear() - dateNaissance.getFullYear();
    const mois = aujourdhui.getMonth() - dateNaissance.getMonth();
    if (mois < 0 || (mois === 0 && aujourdhui.getDate() < dateNaissance.getDate())) {
        age--;
    }
    return age;
}

function afficherResultatEnfant(imc, age) {
    const resultatDiv = document.getElementById('resultat');

    // Logique simple pour l'exemple
    let evaluation;
    if (age <= 2) {
        if (imc < 14) {
            evaluation = "Sous la norme";
        } else if (imc <= 18) {
            evaluation = "Normale";
        } else {
            evaluation = "Au-dessus de la norme";
        }
    } else if (age <= 5) {
        if (imc < 13) {
            evaluation = "Sous la norme";
        } else if (imc <= 17) {
            evaluation = "Normale";
        } else {
            evaluation = "Au-dessus de la norme";
        }
    } else if (age <= 10) {
        if (imc < 14) {
            evaluation = "Sous la norme";
        } else if (imc <= 19) {
            evaluation = "Normale";
        } else {
            evaluation = "Au-dessus de la norme";
        }
    } else {
        if (imc < 16) {
            evaluation = "Sous la norme";
        } else if (imc <= 22) {
            evaluation = "Normale";
        } else {
            evaluation = "Au-dessus de la norme";
        }
    }
    
    resultatDiv.innerHTML = `IMC pour un enfant de ${age} ans: ${imc}. Évaluation: ${evaluation}`;
}

function afficherResultatAdulte(imc) {
    const resultatDiv = document.getElementById('resultat');

    let evaluation;
    if (imc < 18.5) {
        evaluation = "Maigreur";
    } else if (imc >= 18.5 && imc < 25) {
        evaluation = "Corpulence normale";
    } else if (imc >= 25 && imc < 30) {
        evaluation = "Surpoids";
    } else {
        evaluation = "Obésité";
    }
    
    resultatDiv.innerHTML = `Votre IMC est de ${imc}. Évaluation: ${evaluation}`;
}