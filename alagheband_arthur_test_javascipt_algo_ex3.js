generate_p("Exercice 3")

// Préambule
// Affichage des résultats
function generate_error(message, lieu) {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // creating all cells
    var row = document.createElement("tr");

    // Here the message
    var cellHead = document.createElement("td");
    var cellHeadText = document.createTextNode(message);

    cellHead.appendChild(cellHeadText);
    row.appendChild(cellHead);

    // Here every element from lieu
    for (var j = 0; j < lieu.length; j++) {
        var cell = document.createElement("td");
        var valeur = lieu[j];
        var cellText = document.createTextNode(valeur);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "3");
}

// Question 1 : Fonction F31, appel multiple de F21 pour chaque ligne

// Fonctions

// Vérifie chaque ligne de la matrice
function verifyTable(table_to_verify) {
    var verif = true;
    for (var i = 0; i < table_to_verify.length; i++) {
        if (!verifyNumbers(table_to_verify[i])) {
            j = i + 1;
            verif = false;

            generate_error("Erreur " + checking + " " + j + " : ", table_to_verify[i]);

            console.log("Erreur " + checking + " " + j);
            console.log("Ligne en question : " + table_to_verify[i]);
        }
    }
    if (verif) {
        generate_p("Aucune erreur sur "+checking);

        //console.log("Aucune erreur sur " + checking);
    }
}

// Traitement
var checking = "ligne";
generate_p("Traitement "+checking);
verifyTable(to_verify_str);

// Question 2 : Fonction F32, appel multiple de F21 pour chaque colonne

// Fonctions

// Transpose la matrice
function transposeArray(table_to_transpose) {
    var transposed_array = [];
    for (var i = 0; i < table_to_transpose.length; i++) {
        transposed_array.push([]);
    };

    for (var i = 0; i < table_to_transpose.length; i++) {
        for (var j = 0; j < table_to_transpose[0].length; j++) {
            transposed_array[j].push(table_to_transpose[i][j]);
        };
    };

    return transposed_array;
}


// Traitement

generate_p("Affichage du sudoku transposé")
var inverted_table = transposeArray(to_verify_str);
generate_table(inverted_table);

checking = "colonne";
generate_p("Traitement "+checking);
verifyTable(inverted_table);


// Question 3 : Fonction F33, appel multiple de F21 pour chaque carré

// Fonctions

// Crée une matrice dont chaque ligne correspond à une zone du sudoku
function squareZones(three_three) {

    var nine_nine = new Array;

    for (var pos_x = 0; pos_x < 9; pos_x = pos_x + 3) {
        for (var pos_y = 0; pos_y < 9; pos_y = pos_y + 3) {
            var one_nine = new Array;
            for (var i = pos_x; i < 3 + pos_x; i++) {
                for (var j = pos_y; j < 3 + pos_y; j++) {
                    one_nine.push(three_three[i][j]);
                }
            }
            nine_nine.push(one_nine);
        }
    }

    return nine_nine;
}

// Traitement

generate_p("Affichage du sudoku avec les zones")
var square_zones_table = squareZones(to_verify_str);
generate_table(square_zones_table);

checking = "carré";
generate_p("Traitement "+checking);


verifyTable(square_zones_table);