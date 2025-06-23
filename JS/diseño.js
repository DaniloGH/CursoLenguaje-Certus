perfil = `
        <div class="player-profile">
            <img class="player-image" src="./neymar.jpg" alt="">
            <div class="player-info">
                <h1 class="player-name">Neymar</h1>
                <p class="player-age">Edad: 32</p>
                <p class="player-position">Posición: Delantero</p>
                <p class="player-team">Equipo: Santos FC</p>
            </div>
        </div>

`;

const profile = document.querySelector(".players");
profile.innerHTML = perfil;