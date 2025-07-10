//Productos
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
    nombre: "Camiseta Deportiva - PSG",
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
  },
  {
    id: 5,
    nombre: "Camiseta Deportiva - Barcelona",
    descripcion: "Luce los colores del Barça con orgullo. Tela dry-fit, ultraligera y de secado rápido. Ideal para entrenar o salir con estilo.",
    precio: 75,
    imagen: "../assets/imagenes/producto5.jpeg"
  },
  {
    id: 6,
    nombre: "Guantes de Box - VENUM - 12OZ",
    descripcion: "Diseño profesional con acolchado multicapa. Protege tus nudillos y mejora tus golpes. Ajuste con velcro reforzado.",
    precio: 120,
    imagen: "../assets/imagenes/producto6.png"
  },
  {
    id: 7,
    nombre: "Raqueta de Tennis de mesa - STIGA",
    descripcion: "Control y velocidad en cada saque. Mango antideslizante, goma de alta respuesta y estructura de 5 capas.",
    precio: 45,
    imagen: "../assets/imagenes/producto7.jpg"
  },
  {
    id: 8,
    nombre: "Rodillera de voley - MTD",
    descripcion: "Protección flexible con espuma de impacto. Transpirable, ergonómica y ligera. Ideal para entrenamientos y partidos.",
    precio: 50,
    imagen: "../assets/imagenes/producto8.jpg"
  },
  {
    id: 9,
    nombre: "Espinilleras - Nike",
    descripcion: "Diseño anatómico con cobertura rígida. Interior acolchado y correas ajustables. Seguridad sin incomodidad.",
    precio: 32,
    imagen: "../assets/imagenes/producto9.png"
  },
  {
    id: 10,
    nombre: "Camiseta Deportiva - Real Madrid (Visitante)",
    descripcion: "Diseño oficial inspirado en el equipo merengue. Tela técnica, cómoda y con ventilación lateral.",
    precio: 95,
    imagen: "../assets/imagenes/producto10.png"
  },
  {
    id: 11,
    nombre: "Venda Box - UPPERCUT",
    descripcion: "Soporte firme para muñeca y nudillos. Algodón elástico, 3 metros de largo. Ideal para boxeo, muay thai o sparring.",
    precio: 25,
    imagen: "../assets/imagenes/producto11.png"
  }
  ,
  {
    id: 12,
    nombre: "Pelota de Tennis - Wilson",
    descripcion: "Rebote constante y alta durabilidad. Apta para todas las superficies. Aprobada para entrenamiento o competencia.",
    precio: 30,
    imagen: "../assets/imagenes/producto12.jpg"
  }
];
const carrito = [];
// Funciones del carrito
function agregarAlCarrito(producto) {
  const existe = carrito.find((p) => p.id === producto.id);
  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  renderizarCarrito();
}

function eliminarDelCarrito(id) {
  const index = carrito.findIndex(p => p.id === id);
  if (index !== -1) {
    carrito.splice(index, 1);
    renderizarCarrito();
  }
}

function comprarCarrito() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  alert("¡Gracias por tu compra!");
  carrito.length = 0;
  renderizarCarrito();
}

function renderizarCarrito() {
  const carritoDiv = document.getElementById("carrito");
  if (!carritoDiv) return;

  carritoDiv.innerHTML = "<h2>Carrito de Compras</h2>";

  if (carrito.length === 0) {
    carritoDiv.innerHTML += "<p>Tu carrito está vacío.</p>";
    return;
  }

  const lista = document.createElement("ul");
  carrito.forEach((producto) => {
    const item = document.createElement("li");
    item.innerHTML = `
      ${producto.nombre} x${producto.cantidad} - S/ ${(producto.precio * producto.cantidad).toFixed(2)}
      <button data-id="${producto.id}" class="btn-eliminar">❌</button>
    `;
    lista.appendChild(item);
  });
  carritoDiv.appendChild(lista);

  const btnComprar = document.createElement("button");
  btnComprar.textContent = "🛒 Comprar";
  btnComprar.className = "btn-comprar";
  btnComprar.addEventListener("click", comprarCarrito);
  carritoDiv.appendChild(btnComprar);

  document.querySelectorAll(".btn-eliminar").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      eliminarDelCarrito(id);
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderizarCarrito();
});
  // Logo
  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<img src="../assets/imagenes/Logo - Editada.png" height="100px" alt="Logo">`;
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
btnInicio.href = "../index.html";
btnInicio.textContent = "--Inicio--";
botones.appendChild(btnInicio);

// Botón Productos
const btnProductos = document.createElement("a");
btnProductos.href = "../pages/producto.html";
btnProductos.textContent = "--Productos--";
botones.appendChild(btnProductos);

// Si hay usuario logueado
const usuario = JSON.parse(localStorage.getItem("usuario"));

if (usuario) {
  // Botón Perfil
  const btnPerfil = document.createElement("a");
  btnPerfil.textContent = `👤 ${usuario.nombre || "Perfil"}`;
  botones.appendChild(btnPerfil);

  // Botón Cerrar sesión
  const btnCerrar = document.createElement("a");
  btnCerrar.href = "#";
  btnCerrar.textContent = "Cerrar sesión";
  btnCerrar.addEventListener("click", () => {
    localStorage.removeItem("usuario");
    window.location.reload();
  });
  botones.appendChild(btnCerrar);

} else {
  // Botón Registro
  const btnRegistro = document.createElement("a");
  btnRegistro.href = "../pages/registrate.html";
  btnRegistro.textContent = "--Registrarse--";
  botones.appendChild(btnRegistro);

  // Botón Login
  const btnLogin = document.createElement("a");
  btnLogin.href = "../pages/login.html";
  btnLogin.textContent = "--Iniciar sesión--";
  botones.appendChild(btnLogin);
}

app.appendChild(botones);

  // Banner
  const banner = document.createElement("div");
  banner.className = "banner";
  banner.innerHTML = `
    <a href="../pages/producto.html">
      <img src="../assets/imagenes/Banner.jpg" height="350px" alt="Banner">
    </a>
  `;
  app.appendChild(banner);

  // Título
  const titulo = document.createElement("div");
  titulo.className = "titulo-productos";
  titulo.innerHTML = `<h1>PRODUCTOS</h1>`;
  app.appendChild(titulo);

  // Sección productos
// Carrusel
const section = document.createElement("section");
section.className = "carrusel";

// Encabezado y contenedor de productos
section.innerHTML = `
  <div id="contenedorProductos" class="grid-productos"></div>
  <div class="carrusel-controles">
    <button id="btnAnterior">🔙 Anterior</button>
    <button id="btnSiguiente">Siguiente 🔜</button>
  </div>
`;

app.appendChild(section);

const contenedor = document.getElementById("contenedorProductos");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

let paginaActual = 0;
const productosPorPagina = 4; 

function mostrarPagina(pagina) {
  contenedor.innerHTML = ""; 

  const inicio = pagina * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosAMostrar = productos.slice(inicio, fin);

  productosAMostrar.forEach((p) => {
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
    contenedor.appendChild(div);
  });


  btnAnterior.disabled = pagina === 0;
  btnSiguiente.disabled = fin >= productos.length;
}

// Botones
btnAnterior.addEventListener("click", () => {
  if (paginaActual > 0) {
    paginaActual--;
    mostrarPagina(paginaActual);
  }
});

btnSiguiente.addEventListener("click", () => {
  if ((paginaActual + 1) * productosPorPagina < productos.length) {
    paginaActual++;
    mostrarPagina(paginaActual);
  }
});

// Mostrar la primera página
mostrarPagina(paginaActual);

// 1. Crear el contenedor del carrito
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
