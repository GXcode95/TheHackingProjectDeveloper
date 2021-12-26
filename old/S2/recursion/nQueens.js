/**
//$     A B C D  
//$  1 |O|O|O|O|
//$  2 |O|O|O|O|
//$  3 |O|O|O|O|
//$  4 |O|O|O|O|  
*/

//$ STEP 
//* Je crée un matrice de taille n*n
//* chaque case contient un 'O' si elle est jouable, sinon une 'X'

//$ STEP 2
//* je me place sur la rangée 1
  //$ STEP 3
  //* je me place sur la colonne 1
    //todo CHECK IF la case contient 'O' 
    //todo CHECK IF aucune reine sur la rangée 
    //todo CHECK IF aucune reine sur la colonne
    //todo CHECK IF aucune reine sur la diagonale
    //? IF ANY CHECK => FALSE
      //* je passe a la case suivante
    //? ELSE 
      //* je pose une reine (case = 'R')
      //* je condamne les cases de la rangée
      //* je condamne les cases de la colonne
      //* je condamne les cases de la diagonale
      //! RETURN TRUE IF nb reine jouée  == n
      //! RETURN FALSE IF nb reine jouée + nb case morte == n*n
      //? IF fin de la rangée
          //$ REPEAT STEP 2
      //? ELSE
          //$ REPEAT STEP 3

// Backtracking => check chaque case, si elle est false je reviens a celle d'avant
      
