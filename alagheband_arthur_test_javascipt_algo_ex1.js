// Fonction de génération de message HTML
function generate_p(message){
    var body = document.getElementsByTagName("body")[0];
    var paragraphe = document.createElement('p');
    var texte = document.createTextNode(message);
    paragraphe.appendChild(texte);
    body.appendChild(paragraphe);
}

generate_p("Exercice 1");

// La matrice avec laquelle on travaille
var array_number = new Array(9);
array_number[0] = "4 9 5 2 7 3 6 8 1"
array_number[1] = "6 1 3 9 4 8 7 5 2"
array_number[2] = "8 2 7 5 6 1 4 3 9"
array_number[3] = "7 6 1 8 2 4 5 9 3"
array_number[4] = "9 5 8 6 3 7 2 1 4"
array_number[5] = "2 3 4 1 5 9 8 6 7"
array_number[6] = "1 7 9 4 8 5 3 2 6"
array_number[7] = "3 8 2 7 9 6 1 4 5"
array_number[8] = "5 4 6 3 1 2 9 7 8"


// Question 1 : Création de la table 
// Question 2 : Fonction F11, lecture de la table 1D et transformation en 2D 

// Transforme une table 1D en 2D
function oneDimToTwoDim(table_one_dim) {

    // creation of the table
    let table_two_dim = new Array(9);
    // loop spliting every string into 1D table
    for (let i = 0; i < table_one_dim.length; i++) {
        // filing of the table with generated 1D table
        table_two_dim[i] = (table_one_dim[i].split(' '));
    }
    return table_two_dim;
}

// Transforme une table de String en Number
function stringToNumber(table_string) {
    for (var i = 0; i < table_string.length; i++) {
        for (var j = 0; j < table_string[0].length; j++) {
            table_string[i][j] = parseInt(table_string[i][j]);
            //console.log(typeof table_string[i][j]);
        }
    }
    return table_string;
}

// Traitement : la table 1D avec des String devient 2D avec des Numbers

var to_verify = oneDimToTwoDim(array_number);
var to_verify_str = stringToNumber(to_verify);

// Question 3 : Fonction F12, affichage de la table 2D en HTML

function generate_table(table_source) {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // creating all cells
    for (var i = 0; i < table_source.length; i++) {
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < table_source[0].length; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            var valeur = table_source[i][j];
            //console.log("typeof valeur");
            //console.log(typeof valeur);
            var cellText = document.createTextNode(valeur);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "3");
}


// On affiche notre table
generate_p("Affichage du sudoku");

generate_table(to_verify_str);