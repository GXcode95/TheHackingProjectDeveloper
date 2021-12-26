const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let myArray = [];
let allRented = true;
let mostRented = books[0];
let lessRented = books[0]
for(let i = 0; i < books.length; i++) {
  let book = books[i]
  myArray.push(book.title)
  
  if(book.rented == 0) allRented = false
  if(book.rented > mostRented.rented) mostRented = book
  if(book.rented < lessRented.rented) lessRented = book
  if(book.id == 13372) delete book
}

console.log("Sors-moi la liste des titres des livres du CDI")
console.log(myArray)
console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?")
console.log(allRented)
console.log("Quel est le livre le plus emprunté ?")
console.log(mostRented)
console.log("Quel est le livre le moins emprunté ?")
console.log(lessRented)
console.log("Supprimer le livre avec l'id 13372")
console.log(myArray)


