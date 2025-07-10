window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
 // Logo
  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<img src="./assets/imagenes/Logo - Editada.png" height="100px" alt="Logo">`;
  app.appendChild(logo);
  // Eslogan
const eslogan = document.createElement("p");
eslogan.className = "eslogan";
eslogan.textContent = "¡Tu pasión deportiva empieza aquí! 🏆";
app.appendChild(eslogan);
  // Buscar
  const buscar = document.createElement("div");
buscar.className = "buscar";
buscar.innerHTML = `
  <label for="search">Buscar:</label>
  <input type="text" id="search" placeholder="Escribe un producto...">
  <button id="searchBtn">Buscar</button>
  <div id="resultado" class="resultado"></div>
`;
app.appendChild(buscar);

const inputBuscar = document.getElementById("search");
const btnBuscar = document.getElementById("searchBtn");
const resultado = document.getElementById("resultado");

//Mostrar productos como tarjetas
function mostrarProductos(lista) {
  resultado.innerHTML = ""; // Limpiar
  if (lista.length === 0) {
    resultado.innerHTML = "<p>No se encontraron resultados.</p>";
    return;
  }

  lista.forEach(producto => {
    const card = document.createElement("div");
    card.className = "tarjeta";
  card.innerHTML = `
  <img src="${producto.imagen}" alt="${producto.nombre}">
  <h4>${producto.nombre}</h4>
  <p>${producto.descripcion}</p>
  <p><strong>Precio: S/ ${producto.precio}</strong></p>
`;
resultado.appendChild(card);
  });
}

// EVENTOS - Buscar
btnBuscar.addEventListener("click", () => {
  const valor = inputBuscar.value.toLowerCase().trim();

  const encontrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(valor) ||
    p.descripcion.toLowerCase().includes(valor) 
  );

  mostrarProductos(encontrados);
});

inputBuscar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnBuscar.click();
});

  // Botones
const botones = document.createElement("div");
botones.className = "botones";

// Botón Inicio
const btnInicio = document.createElement("a");
btnInicio.href = "./index.html";
btnInicio.textContent = "--Inicio--";
botones.appendChild(btnInicio);

// Botón Productos
const btnProductos = document.createElement("a");
btnProductos.href = "pages/producto.html";
btnProductos.textContent = "--Productos--";
botones.appendChild(btnProductos);

// Verificar si el usuario está logueado
const usuario = JSON.parse(localStorage.getItem("usuario"));

if (usuario) {
  // 👤 Botón Perfil
  const btnPerfil = document.createElement("a");
  btnPerfil.textContent = `👤 ${usuario.nombre || "Perfil"}`;
  botones.appendChild(btnPerfil);

  // ❌ Botón Cerrar sesión
  const btnCerrar = document.createElement("a");
  btnCerrar.href = "#";
  btnCerrar.textContent = "Cerrar sesión";
  btnCerrar.addEventListener("click", () => {
    localStorage.removeItem("usuario");
    window.location.reload();
  });
  botones.appendChild(btnCerrar);

} else {
  // 🔐 Botón Registrarse
  const btnRegistro = document.createElement("a");
  btnRegistro.href = "../pages/registrate.html";
  btnRegistro.textContent = "--Regístrate--";
  botones.appendChild(btnRegistro);

  // 🔐 Botón Iniciar sesión
  const btnLogin = document.createElement("a");
  btnLogin.href = "../pages/login.html";
  btnLogin.textContent = "--Iniciar Sesión--";
  botones.appendChild(btnLogin);
}

app.appendChild(botones);
  // Banner
  const banner = document.createElement("div");
  banner.className = "banner";
  banner.innerHTML = `
    <a href="./pages/producto.html">
      <img src="./assets/imagenes/Banner.jpg" height="350px" alt="Banner">
    </a>
  `;
  app.appendChild(banner);

  // Misión
  const mision = document.createElement("section");
  mision.className = "mision";
  mision.innerHTML = `
    <div class="box1">
      <h3>Misión</h3>
      <img src="./assets/imagenes/mision.jpg" height="120px" alt="">
      <p>Ofrecer productos deportivos de calidad a precios accesibles, brindando una experiencia de compra rápida, segura y personalizada para atletas, aficionados y amantes del deporte en todo el Perú.</p>
    </div>
  `;
  app.appendChild(mision);

  // Visión
  const vision = document.createElement("section");
  vision.className = "vision";
  vision.innerHTML = `
    <div class="box2">
      <h3>Visión</h3>
      <p>Ser la tienda virtual deportiva líder del sur del Perú, reconocida por su innovación, variedad de productos y compromiso con el desarrollo del deporte a nivel local y nacional.</p>
      <img src="./assets/imagenes/vision.jpg" height="120px" alt="">
    </div>
  `;
  app.appendChild(vision);

  // ¿Quiénes somos?
  const somos = document.createElement("section");
  somos.className = "somos";
  somos.innerHTML = `
    <div class="box3">
      <h3>¿Quiénes somos?</h3>
      <img src="./assets/imagenes/quienes somos.jpg" height="120px" alt="">
      <p>Dansport nació con el objetivo de acercar el deporte a todo el país. Somos una tienda virtual arequipeña apasionada por fomentar un estilo de vida activo, ofreciendo artículos deportivos de confianza y un servicio atento que nos conecta con nuestra comunidad.</p>
    </div>
  `;
  app.appendChild(somos);

  // Footer
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="footer-section">
      <h4>Contacto</h4>
      <p>Email: dansport@gmail.com</p>
      <p>Tel: +51 986 413 550</p>
    </div>
    <div class="footer-section">
      <h4>Síguenos</h4>
      <p>Instagram: @dansport.pe</p>
      <p>Facebook: Dansport Oficial</p>
    </div>
    <div class="footer-section">
      <h4>Legal</h4>
      <p><a href="#">Términos y Condiciones</a></p>
      <p><a href="#">Política de Privacidad</a></p>
    </div>
  `;
  app.appendChild(footer);
});
import { productos } from './dataproducto.js';