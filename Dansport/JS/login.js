// login.js - Página de inicio de sesión para Dansport

window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Logo
  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<img src="../assets/imagenes/logo - editada.png" height="300px" alt="">`;
  app.appendChild(logo);

  // Botones
  const botones = document.createElement("div");
  botones.className = "botones";
  botones.innerHTML = `
    <ul class= "encabezado">
      <div class="inicio"><a href="../index.html">--Inicio--</a></div>
    </ul>
  `;
  app.appendChild(botones);

  // Formulario login
  const login = document.createElement("section");
  login.className = "login";
  login.innerHTML = `
    <div class="login-container">
      <h2>Inicia Sesión</h2>
      <form id="formLogin">
        <label for="correo">Correo electrónico</label>
        <input type="email" id="correo" required />

        <label for="contraseña">Contraseña</label>
        <input type="password" id="contraseña" required />

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  `;
  app.appendChild(login);

  // Evento submit
  const form = document.getElementById("formLogin");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const contraseña = document.getElementById("contraseña").value;

    const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioDansport"));

    if (
      usuarioGuardado &&
      usuarioGuardado.correo === correo &&
      usuarioGuardado.contraseña === contraseña
    ) {
      alert("¡Inicio de sesión exitoso! Bienvenido, " + usuarioGuardado.nombre);
      window.location.href = "../index.html"; // o dashboard si lo tienes
    } else {
      alert("Correo o contraseña incorrectos");
    }
  });
});
