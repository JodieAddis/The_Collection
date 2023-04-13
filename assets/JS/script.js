//let collect = [Movie, Serie, Manga, Drawing, Music, Cooking]; 



//Création d'un array Collection, contenant 10 objets : 1 objet/film
let Collection = [
    alienMovie = {
        Name : "Alien",
        director : " Ridley Scott",
        releaseyear : 1979, 
        picture : './assets/img/alien.jpg' , 
        genre : ["Épouvante-Horreur", "Science-fiction"], 
        cast : ["Sigourney Weaver", "Tom Skerritt", "John Hurt", "Veronica Cartwright", "Harry Dean Stanton", "Ian Holm", "Yaphet Kotto" ], 
        link : "", 
    }, 
    avatarMovie = {
        Name : "Avatar, The Way of Water",
        director : " James Cameron",
        releaseyear : 2023, 
        picture : "./assets/img/Avatar.jpg", 
        genre : ["Action", "Aventure", "Science-fiction"], 
        cast : ["Sigourney Weaver", "Sam Worthington", "Zoe Saldana", "Kate Winslet", "Cliff Curtis" ],
        link : "",  
    }, 
    academyMovie = {
        Name : "Police Academy",
        director : "Hugh Wilson",
        releaseyear : 1984, 
        picture : ".", 
        genre : ["Comédie"], 
        cast : ["Steve Guttenberg", "G.W. Bailey"], 
        link : "", 
    }, 
    stellarMovie =  {
        Name : "Interstellar",
        director : "Christopher Nolan",
        releaseyear : 2014, 
        picture : "./assets/img/interstellar.jpg", 
        genre : ["Science-Fiction", "Drame"], 
        cast : ["Matthew McConaughey", "Anne Hathawat"],
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
        director : "Christopher Nolan",
        releaseyear : 2014, 
        picture : "./assets/img/blade_runner.jpg", 
        genre : ["Science-Fiction", "Drame"], 
        cast : ["Matthew McConaughey", "Anne Hathawat"],
        link : "", 
    }, 
    contactMovie = {
        Name : "Contact",
        director : "Christopher Nolan",
        releaseyear : 2014, 
        picture : "./assets/img/contact.jpg", 
        genre : ["Science-Fiction", "Drame"], 
        cast : ["Matthew McConaughey", "Anne Hathawat"], 
    }, 
    fifthMovie =  {
        Name : "The Fifth Element",
        director : "Christopher Nolan",
        releaseyear : 2014, 
        picture : "./assets/img/fifth_element.jpg", 
        genre : ["Science-Fiction", "Drame"], 
        cast : ["Matthew McConaughey", "Anne Hathawat"],
        link : "", 
    }, 
    signMovie = {
        Name : "Signes",
        director : "Christopher Nolan",
        releaseyear : 2014, 
        picture : "./assets/img/signes.jpg", 
        genre : ["Science-Fiction", "Drame"], 
        cast : ["Matthew McConaughey", "Anne Hathawat"],
        link : "",  
    }, 
    mtxMovie =  {
        Name : "Matrix",
        director : "Christopher Nolan",
        releaseyear : 2014, 
        picture : "./assets/img/matrix.jpg", 
        genre : ["Science-Fiction", "Drame"], 
        cast : ["Matthew McConaughey", "Anne Hathawat"],
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
    div.appendChild(poster);//Ajout aux divs
    //Création d'un tag 'h2' pour les titres de film 
    const h2 = document.createElement('h2');
    const title = document.createTextNode(element.Name); 
    h2.appendChild(title);
    div.appendChild(h2); 
    //Création d'un tage 'h3' pour les noms des directeur
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




