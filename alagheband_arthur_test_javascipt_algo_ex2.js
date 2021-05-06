generate_p("Exercice 2");


// Question 1, 2 et 3 : Fonction F21, test de la validité de la table

function verifyNumbers(table_to_verify) {
    // Creation d'une copie de la table pour étude
    var copy_table = Object.assign([], table_to_verify);
    // Tri de la table
    copy_table.sort();
    // Test de la longueur de la table
    if (typeof copy_table == 'object' && copy_table.length == 9) {
        // Test de chaque élément de la table
        for (var i = 0; i < copy_table.length; i++) {
            let valeur = copy_table[i];
            //console.log("typeof valeur");
            //console.log(typeof valeur);
            if (typeof valeur != "number" || valeur < 1 || valeur > 9) {
                console.log("Erreur, pas un number dans l'intervale 1 à 9, False");
                return false;
            }
        }

        // Test de valeurs identiques
        for (var i = 1; i < copy_table.length; i++) {
            if (copy_table[i] == copy_table[i - 1]) {
                console.log("Deux valeurs sont identiques, False");
                return false;
            }
        }

        // Fin des for, éléments ok et aucun doublon trouvé
        // console.log("Aucun doublon trouvé, True");
        return true;

        // Cas ou la table a un problème
    } else {
        console.log("Mauvaise taille : False");
        return false;
    }
}