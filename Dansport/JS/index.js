// main.js - Versión para página de inicio (proyectoinicio)

window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Logo
  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<img src="./assets/imagenes/logo - Editada.png" height="100px" alt="">`;
  app.appendChild(logo);

  // Buscar
  const buscar = document.createElement("div");
  buscar.className = "buscar";
  buscar.innerHTML = `
        <div class="buscar">
         <label for="">Buscar</label>
          <input type="text" id="search">
        </div>
    <div class="botones">
  `;

  app.appendChild(buscar);

  // Botones
  const botones = document.createElement("div");
  botones.className = "botones";
  botones.innerHTML = `
    <div><ul><a href="./index.html">--Inicio--</a></ul></div>
    <div><ul><a href="../Dansport/pages/producto.html">--Productos--</a></ul></div>
    <div><ul><a href="../Dansport/pages/registrate.html">--Registrate--</a></ul></div>
     <div><ul><a href="../Dansport/pages/login.html">--Iniciar Sesion--</a></ul></div>
  `;
  app.appendChild(botones);

  // Banner
  const banner = document.createElement("div");
  banner.className = "banner";
  banner.innerHTML = `
    <a href="../Dansport/pages/producto.html">
      <img src="./assets/imagenes/banner.jpg" height="350px" alt="Banner">
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

