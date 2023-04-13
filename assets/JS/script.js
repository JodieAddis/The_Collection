//let collect = [Movie, Serie, Manga, Drawing, Music, Cooking]; 

//Création d'un array Collection, contenant 10 objets : 1 objet/film
let Collection = [
    alienMovie = {
        Name : "Alien",
        director : " Ridley Scott",
        releaseyear : 1979, 
        picture : './assets/img/alien.jpg' , 
        genre : ["Aventure", "Horreur", "Science-Fiction"], 
        cast : ["Sigourney Weaver", "Tom Skerritt", "John Hurt", "Veronica Cartwright", "Harry Dean Stanton", "Ian Holm", "Yaphet Kotto" ], 
        link : "", 
    }, 
    avatarMovie = {
        Name : "Avatar, The Way of Water",
        director : " James Cameron",
        releaseyear : 2023, 
        picture : "./assets/img/Avatar.jpg", 
        genre : ["Action", "Aventure", "Science-fiction"], 
        cast : ["Sigourney Weaver", "Sam Worthington", "Zoe Saldana", "Kate Winslet", "Cliff Curtis"],
        link : "",  
    }, 
    predatorMovie = {
        Name : "Predator",
        director : "John McTiernan",
        releaseyear : 1987, 
        picture : "./assets/img/predator.jpg", 
        genre : ["Comédie"], 
        cast : ["Arnold Schwarzenegger", "Carl Weathers", "Elpidia Carrillo", "Jesse Ventura", "Sonny Landham", "Bill Duke" ], 
        link : "", 
    }, 
    stellarMovie =  {
        Name : "Interstellar",
        director : "Christopher Nolan",
        releaseyear : 2014, 
        picture : "./assets/img/interstellar.jpg", 
        genre : ["Science-Fiction", "Drame"], 
        cast : ["Matthew McConaughey", "Anne Hathawat", "Jessica Chastain", "Mackenzie Foy", "Matt Damon", "Wes Bentley"],
        link : "",  
    },
    chihiroMovie = {
        Name : "Le voyage de Chihiro",
        director : "Christopher Nolan",
        releaseyear : 2014, 
        picture : "./assets/img/chihiro.jpg", 
        genre : ["Science-Fiction", "Drame"], 
        cast : ["Matthew McConaughey", "Anne Hathawat"],
        link : "",  
    }, 
    bladeMovie = {
        Name : "Blade Runner",
        director : "Ridley Scott",
        releaseyear : 1982, 
        picture : "./assets/img/blade_runner.jpg", 
        genre : ["Science-Fiction"], 
        cast : ["Harrison Ford", "Rutger Hauer", "Sean Young", "Edward James Olmos", "Daryl Hannah"],
        link : "", 
    }, 
    contactMovie = {
        Name : "Contact",
        director : "Robert Zemeckis",
        releaseyear : 1997, 
        picture : "./assets/img/contact.jpg", 
        genre : ["Science-Fiction"], 
        cast : ["Matthew McConaughey", "Jodie Foster", "James Woods", "John Hurt", "Tom Skerritt"], 
    }, 
    fifthMovie =  {
        Name : "The Fifth Element",
        director : "Luc Besson",
        releaseyear : 1997, 
        picture : "./assets/img/fifth_element.jpg", 
        genre : ["Science-Fiction", "Action", "Aventure", "Comédie"], 
        cast : ["Bruce Willis", "Milla Jovovich", "Gary Oldman", "Ian Holm", "Chris Tucker"],
        link : "", 
    }, 
    signMovie = {
        Name : "Signs",
        director : "M. Night Shyamalan",
        releaseyear : 2002, 
        picture : "./assets/img/signes.jpg", 
        genre : ["Science-Fiction", "Thriller"], 
        cast : ["Mel Gibson", "Joaquin Phoenix", "Rory Culkin", "Abigail Breslin", "Cherry Jones"],
        link : "",  
    }, 
    mtxMovie =  {
        Name : "The Matrix",
        director : "Les Wachowski",
        releaseyear : 1999, 
        picture : "./assets/img/matrix.jpg", 
        genre : ["Science-Fiction"], 
        cast : ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving", "Joe Pantoliano"],
        link : "", 
    }
]

let section = document.querySelector('.allCards');

for (let element of Collection){
    const div = document.createElement('div');
    //Insertion des affiches de films 
    let poster = document.createElement('img')
    poster.setAttribute( 'src', element.picture);
    poster.setAttribute('alt', 'test'); 
    div.appendChild(poster);
    //Création d'un tag 'h2'
    const h2 = document.createElement('h2');
    const title = document.createTextNode(element.Name); 
    h2.appendChild(title);
    div.appendChild(h2); 
    //Création d'un tag 'h3'
    const h3 = document.createElement('h3');
    const prod = document.createTextNode(element.director); 
    h3.appendChild(prod);
    div.appendChild(h3); 
    //Elément textes
    const p = document.createElement('p');
    const content1 = document.createTextNode(element.genre); 
    const content2 = document.createTextNode(element.cast);
    p.appendChild(content1);
    p.appendChild(content2); 
    div.appendChild(p);
    //Logo cliquable
    //Ajout des divs dans la section 'allCards'
    section.appendChild(div); 
}




