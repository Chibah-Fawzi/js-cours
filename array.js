var ma_liste = ["Omar", "said", "hmed", "salima"];

ma_liste[2] = "Houria"; // Changer un élement de la liste

ma_liste.push("Sofiane"); // Ajouter un élement à la fin de la liste
ma_liste.unshift("Mokhtar"); // Ajouter un élement au début de la liste

ma_liste.pop(); // Retirer un élement à la fin de la liste
ma_liste.shift(); // Retirer un élement au début de la liste

const months = ["Jan", "March", "April", "June"];
months.splice(1, 2, "Feb"); // Permet d'ajouter ou de retirer des élements au milieu

console.log(ma_liste);
