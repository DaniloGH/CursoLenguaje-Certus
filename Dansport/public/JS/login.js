// login.js - Página de inicio de sesión con Firebase + Firestore

window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Logo
  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<img src="../assets/imagenes/logo - editada.png" height="100px" alt="">`;
  app.appendChild(logo);

  // Botones
  const botones = document.createElement("div");
  botones.className = "botones";
  botones.innerHTML = `
    <ul class="encabezado">
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

  // 🔐 Firebase
  const auth = firebase.auth();
  const db = firebase.firestore();

  // Evento de login
  const form = document.getElementById("formLogin");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const contraseña = document.getElementById("contraseña").value;

    try {
      const userCredential = await auth.signInWithEmailAndPassword(correo, contraseña);
      const user = userCredential.user;

      // Obtener datos del usuario desde Firestore
      const docRef = db.collection("usuarios").doc(user.uid);
      const docSnap = await docRef.get();

      if (docSnap.exists) {
        const datosUsuario = docSnap.data();
        console.log("🔎 Usuario desde Firestore:", datosUsuario);

        // (Opcional) Guardar en localStorage
        localStorage.setItem("usuario", JSON.stringify(datosUsuario));
      } else {
        console.warn("⚠️ Usuario no encontrado en la base de datos");
      }

      alert("✅ Inicio de sesión exitoso");
      window.location.href = "../index.html";
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("❌ Error: " + error.message);
    }
  });
});
