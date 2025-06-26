const profile = document.querySelector(".players");
 
const players = [
  {
    "name": "Thibaut Courtois",
    "age": 32,
    "position": "Portero",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Thibaut_Courtois_2018.jpg"
  },
  {
    "name": "Andriy Lunin",
    "age": 25,
    "position": "Portero",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Andriy_Lunin_2020.jpg"
  },
  {
    "name": "Fran González",
    "age": 22,
    "position": "Portero",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Fran_Gonzalez_2023.jpg"
  }]; 


console.log(jugador)
perfil = `
    <div class="player-profile">
        <img class="player-image" src="./neymar.jpg" alt="">
       <div class="player-info">
            <h1 class="player-name"></h1>
            <p class="player-age">Edad:</p>
            <p class="player-position">Posición:</p>
            <p class="player-team">Equipo:</p>
        </div>
    </div>

`;

profile.innerHTML = perfil;
