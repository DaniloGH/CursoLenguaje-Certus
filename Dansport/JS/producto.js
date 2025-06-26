
const carrito = [];
const productos = [
  {
    id: 1,
    nombre: "Balón Mikasa FT-5",
    descripcion: "Balón profesional Mikasa FT-5, ideal para fútbol sala.",
    precio: 120,
    imagen: "../assets/imagenes/producto1.jpg"
  },
  {
    id: 2,
    nombre: "Balón de Voley MTD",
    descripcion: "Balón de vóley MTD con cubierta de PU de alta calidad.",
    precio: 85,
    imagen: "../assets/imagenes/producto2.jpeg"
  },
  {
    id: 3,
    nombre: "Camiseta Deportiva",
    descripcion: "Camiseta tipo PSG con diseño moderno y tela transpirable.",
    precio: 65,
    imagen: "../assets/imagenes/producto3.jpg"
  },
  {
    id: 4,
    nombre: "Net Semi-Profesional #80",
    descripcion: "Red semiprofesional para vóley de nylon resistente.",
    precio: 95,
    imagen: "../assets/imagenes/producto4.jpg"
  }
];

function agregarAlCarrito(producto) {
  const existe = carrito.find((p) => p.id === producto.id);
  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  renderizarCarrito();
}

function renderizarCarrito() {
  const carritoDiv = document.getElementById("carrito");
  carritoDiv.innerHTML = "<h2>Carrito de Compras</h2>";
  if (carrito.length === 0) {
    carritoDiv.innerHTML += "<p>Tu carrito está vacío.</p>";
    return;
  }

  const lista = document.createElement("ul");
  carrito.forEach((producto) => {
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} x${producto.cantidad} - S/ ${producto.precio * producto.cantidad}`;
    lista.appendChild(item);
  });
  carritoDiv.appendChild(lista);
}

window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Logo
  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<img src="../assets/imagenes/Logo - Editada.png" height="100px" alt="Logo">`;
  app.appendChild(logo);

  // Buscar
  const buscar = document.createElement("div");
  buscar.className = "buscar";
  buscar.innerHTML = `
    <label for="search">Buscar</label>
    <input type="text" id="search" placeholder="Buscar productos...">
  `;
  app.appendChild(buscar);

  // Navegación
  const botones = document.createElement("div");
  botones.className = "botones";
  botones.innerHTML = `
    <a href="../index.html">Inicio</a>
    <a href="../pages/producto.html">Productos</a>
    <a href="../pages/registrate.html">Regístrate</a>
    <a href="../pages/login.html">Iniciar Sesión</a>
  `;
  app.appendChild(botones);

  // Banner
  const banner = document.createElement("div");
  banner.className = "banner";
  banner.innerHTML = `
    <a href="../pages/producto.html">
      <img src="../assets/imagenes/banner.jpg" height="350px" alt="Banner">
    </a>
  `;
  app.appendChild(banner);

  // Título
  const titulo = document.createElement("div");
  titulo.className = "titulo-productos";
  titulo.innerHTML = `<h1>PRODUCTOS</h1>`;
  app.appendChild(titulo);

  // Sección productos
  const section = document.createElement("section");
  section.className = "section";

  productos.forEach((p) => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <h2>${p.nombre}</h2>
      <img src="${p.imagen}" alt="${p.nombre}">
      <p class="descripcion">${p.descripcion}</p>
      <p class="precio">S/ ${p.precio.toFixed(2)}</p>
    `;
    const boton = document.createElement("button");
    boton.textContent = "Agregar al carrito";
    boton.className = "boton-comprar";
    boton.addEventListener("click", () => agregarAlCarrito(p));
    div.appendChild(boton);
    section.appendChild(div);
  });

  app.appendChild(section);

  // Carrito
  const carritoContenedor = document.createElement("div");
  carritoContenedor.id = "carrito";
  carritoContenedor.style.padding = "20px";
  carritoContenedor.style.background = "#f4f4f4";
  carritoContenedor.style.marginTop = "20px";
  carritoContenedor.style.borderRadius = "10px";
  app.appendChild(carritoContenedor);
  renderizarCarrito();

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
