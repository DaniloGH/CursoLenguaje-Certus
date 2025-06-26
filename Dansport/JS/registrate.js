// registro.js - Genera formulario de registro y gestiona usuarios

window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Logo
  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<img src="../assets/imagenes/logo - editada.png" height="100px" alt="">`;
  app.appendChild(logo);

  // Botones de navegación
  const botones = document.createElement("div");
  botones.className = "botones";
  botones.innerHTML = `
    <ul>
      <div><a href="../index.html">--Inicio--</a></div>
      <div><a href="../pages/producto.html">--Productos--</a></div>
    </ul>
  `;
  app.appendChild(botones);

  // Sección de registro
  const registro = document.createElement("section");
  registro.className = "registro";
  registro.innerHTML = `
    <div class="registro-container">
      <h2>Regístrate en Dansport</h2>
      <form id="formRegistro">
        <label for="nombre">Nombre completo</label>
        <input type="text" id="nombre" required />

        <label for="correo">Correo electrónico</label>
        <input type="email" id="correo" required />

        <label for="contraseña">Contraseña</label>
        <input type="password" id="contraseña" required />

        <label for="confirmar">Confirmar contraseña</label>
        <input type="password" id="confirmar" required />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  `;
  app.appendChild(registro);

  // Evento submit del formulario
  const form = document.getElementById("formRegistro");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contraseña = document.getElementById("contraseña").value;
    const confirmar = document.getElementById("confirmar").value;

    if (contraseña !== confirmar) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Guardar en localStorage
    const usuario = { nombre, correo, contraseña };
    localStorage.setItem("usuarioDansport", JSON.stringify(usuario));

    alert("¡Registro exitoso! Ahora inicia sesión.");
    window.location.href = "./login.html"; // Redirige a página de login
  });
});
