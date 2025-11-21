const display = document.getElementById('display');

// Ajoute une valeur à l'écran
function appendValue(val) {
    display.value += val;
}

// Efface entièrement l'écran
function clearDisplay() {
    display.value = '';
}

// Supprime le dernier caractère (optionnel mais utile)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calcule le résultat
function calculate() {
    try {
        // Vérifie que l’expression contient seulement chiffres et opérateurs
        if (/^[0-9+\-*/(). ]+$/.test(display.value)) {
            display.value = eval(display.value);
        } else {
            display.value = 'Erreur';
        }
    } catch {
        display.value = 'Erreur';
    }
}
