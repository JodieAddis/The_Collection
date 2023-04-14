//let collect = [Movie, Serie, Manga, Drawing, Music, Cooking]; 

//Création d'un array Collection, contenant 10 objets : 1 objet/film
let Collection = [
    alienMovie = {
        Name : "Alien",
        director : " Ridley Scott",
        releaseyear : 1979, 
        picture : './assets/img/alien.jpg' , 
        genre : ["Aventure ", "Horreur ", "Science-Fiction "], 
        cast : ["Sigourney Weaver ", "Tom Skerritt ", "John Hurt ", "Veronica Cartwright ", "Harry Dean Stanton ", "Ian Holm ", "Yaphet Kotto " ], 
        link : "https://www.youtube.com/watch?v=aeUJf5pCgOw",
        logo_link : "./assets/img/youtube.svg", 
    }, 
    avatarMovie = {
        Name : "Avatar",
        director : " James Cameron",
        releaseyear : 2023, 
        picture : "./assets/img/Avatar.jpg", 
        genre : ["Action ", "Aventure ", "Science-fiction"], 
        cast : ["Sigourney Weaver ", "Sam Worthington ", "Zoe Saldana ", "Kate Winslet ", "Cliff Curtis "],
        link : "https://www.youtube.com/watch?v=2UEkizpGKDU", 
        logo_link : "./assets/img/youtube.svg", 
    }, 
    predatorMovie = {
        Name : "Predator",
        director : "John McTiernan",
        releaseyear : 1987, 
        picture : "./assets/img/predator.jpg", 
        genre : ["Comédie"], 
        cast : ["Arnold Schwarzenegger ", "Carl Weathers ", "Elpidia Carrillo ", "Jesse Ventura ", "Sonny Landham ", "Bill Duke" ], 
        link : "https://www.youtube.com/watch?v=9wb5V_2OEfA", 
        logo_link : "./assets/img/youtube.svg",
    }, 
    stellarMovie =  {
        Name : "Interstellar",
        director : "Christopher Nolan",
        releaseyear : 2014, 
        picture : "./assets/img/interstellar.jpg", 
        genre : ["Science-Fiction ", "Drame"], 
        cast : ["Matthew McConaughey ", "Anne Hathawat ", "Jessica Chastain ", "Mackenzie Foy ", "Matt Damon ", "Wes Bentley"],
        link : "https://www.youtube.com/watch?v=VaOijhK3CRU",
        logo_link : "./assets/img/youtube.svg", 
    },
    futurMovie = {
        Name : "Retour vers le futur",
        director : "Robert Zemeckis",
        releaseyear : 1985, 
        picture : "./assets/img/futur.jpg", 
        genre : ["Science-Fiction ", "Comédie"], 
        cast : ["Michael J. Fox ", "Christopher Lloyd ", "Crispin Glover ", "Lea Thompson ", "Thomas F. Wilson"],
        link : "https://www.youtube.com/watch?v=cU5BREZ9ke0", 
        logo_link : "./assets/img/youtube.svg",
    }, 
    bladeMovie = {
        Name : "Blade Runner",
        director : "Ridley Scott",
        releaseyear : 1982, 
        picture : "./assets/img/blade_runner.jpg", 
        genre : ["Science-Fiction"], 
        cast : ["Harrison Ford ", "Rutger Hauer ", "Sean Young ", "Edward James Olmos ", "Daryl Hannah "],
        link : "https://www.youtube.com/watch?v=FfRPKYwsFNg", 
        logo_link : "./assets/img/youtube.svg",
    }, 
    contactMovie = {
        Name : "Contact",
        director : "Robert Zemeckis",
        releaseyear : 1997, 
        picture : "./assets/img/contact.jpg", 
        genre : ["Science-Fiction"], 
        cast : ["Matthew McConaughey ", "Jodie Foster ", "James Woods ", "John Hurt ", "Tom Skerritt "], 
        link : "https://www.youtube.com/watch?v=09ffXK4UYWs", 
        logo_link : "./assets/img/youtube.svg",
    }, 
    fifthMovie =  {
        Name : "The Fifth Element",
        director : "Luc Besson",
        releaseyear : 1997, 
        picture : "./assets/img/fifth_element.jpg", 
        genre : ["Science-Fiction ", "Action ", "Aventure ", "Comédie "], 
        cast : ["Bruce Willis ", "Milla Jovovich ", "Gary Oldman ", "Ian Holm ", "Chris Tucker "],
        link : "https://www.youtube.com/watch?v=7rzmiE-pESk", 
        logo_link : "./assets/img/youtube.svg",
    }, 
    signMovie = {
        Name : "Signs",
        director : "M. Night Shyamalan",
        releaseyear : 2002, 
        picture : "./assets/img/signes.jpg", 
        genre : ["Science-Fiction ", "Thriller"], 
        cast : ["Mel Gibson ", "Joaquin Phoenix ", "Rory Culkin ", "Abigail Breslin ", "Cherry Jones"],
        link : "https://www.youtube.com/watch?v=1V0XQNdcs78",  
        logo_link : "./assets/img/youtube.svg",
    }, 
    mtxMovie =  {
        Name : "The Matrix",
        director : "Les Wachowski",
        releaseyear : 1999, 
        picture : "./assets/img/matrix.jpg", 
        genre : ["Science-Fiction"], 
        cast : ["Keanu Reeves ", "Laurence Fishburne ", "Carrie-Anne Moss ", "Hugo Weaving ", "Joe Pantoliano"],
        link : "https://www.youtube.com/watch?v=8xx91zoASLY", 
        logo_link : "./assets/img/youtube.svg",
    }
]

let section = document.querySelector('.allCards');

for (let element of Collection){
    const div = document.createElement('div');
    //Insertion des affiches de films 
    let poster = document.createElement('img')
    poster.setAttribute( 'src', element.picture);
    poster.setAttribute('alt', 'test'); 
    poster.setAttribute('class', 'poster'); 
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
    //Ajout des dates de production
    let p_date = document.createElement('p');
    const year = document.createTextNode(element.releaseyear); 
    p_date.setAttribute('class', 'date'); 
    p_date.appendChild(year);
    div.appendChild(p_date); 
    //Elément texte genre
    const p_genre = document.createElement('p');
    const content1 = document.createTextNode(element.genre);
    p_genre.setAttribute('class', 'genre'); 
    p_genre.appendChild(content1);
    div.appendChild(p_genre);
        //Elément texte cast
    const p_cast = document.createElement('p');
    const content2 = document.createTextNode(element.cast);
    p_cast.setAttribute('class', 'cast'); 
    p_cast.appendChild(content2); 
    div.appendChild(p_cast); 
    //Logo cliquable
    //Ajout des divs dans la section 'allCards'
    section.appendChild(div); 
    //Ajout d'un lien vers Youtube
    let a = document.createElement('a');
    a.setAttribute('href', element.link); 
    let logo = document.createElement('img'); 
    logo.setAttribute('class', 'Link'); 
    logo.setAttribute('src', element.logo_link );
    a.appendChild(logo); 
    div.appendChild(a); 
}

//Selection des termes des catégories de film