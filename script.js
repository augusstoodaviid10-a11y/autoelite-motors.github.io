/* ══════════════════════════════════════════════════════════
   AutoElite Motors — script.js
   ══════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════
   ✏️ DATOS DE VEHÍCULOS — EDITÁ AQUÍ TUS AUTOS
   Para agregar un auto nuevo, copiá un bloque { } y modificalo.
   ══════════════════════════════════════════════════════════ */
const autos = [
  {
    id: 1,
    marca: "Toyota",
    modelo: "Hilux SRX 4x4",
    año: 2024,
    km: 0,
    precio: 42000000,
    tipo: "0km",
    categoria: "suv",
    destacado: true,
    emoji: "🚙",
    color: "Gris Plata",
    motor: "2.8 TDI 204cv",
    transmision: "Automática 6vel",
    combustible: "Diésel",
    puertas: 4,
    descripcion: "La Hilux SRX 4x4 es la cima de la línea. Con motor 2.8 TDI de 204cv, caja automática, cámara de reversa, control de tracción, cuero y todo el equipamiento para quienes no aceptan compromisos."
  },
  {
    id: 2,
    marca: "Volkswagen",
    modelo: "Polo Track",
    año: 2023,
    km: 12000,
    precio: 14500000,
    tipo: "usado",
    categoria: "sedan",
    destacado: false,
    emoji: "🚗",
    color: "Blanco Cristal",
    motor: "1.6 MSI 110cv",
    transmision: "Manual 5vel",
    combustible: "Nafta",
    puertas: 4,
    descripcion: "Polo Track 2023 en excelente estado. Un solo dueño, service al día en concesionaria oficial, neumáticos nuevos. Ideal como primer auto o para la ciudad. Revisión de 100 puntos aprobada."
  },
  {
    id: 3,
    marca: "Ford",
    modelo: "Ranger XLT 4x2",
    año: 2022,
    km: 38000,
    precio: 29000000,
    tipo: "usado",
    categoria: "suv",
    destacado: true,
    emoji: "🛻",
    color: "Negro Pantera",
    motor: "2.2 TDI 160cv",
    transmision: "Manual 6vel",
    combustible: "Diésel",
    puertas: 4,
    descripcion: "Ranger XLT 2022 impecable. Motor 2.2 diésel con 160cv, preparada con caja de carga protegida y deflector. Servicios realizados en concesionaria. Ideal para trabajo y familia."
  },
  {
    id: 4,
    marca: "Honda",
    modelo: "HR-V EX CVT",
    año: 2024,
    km: 0,
    precio: 31000000,
    tipo: "0km",
    categoria: "suv",
    destacado: false,
    emoji: "🚘",
    color: "Azul Mediterráneo",
    motor: "1.5 VTEC Turbo 177cv",
    transmision: "CVT",
    combustible: "Nafta",
    puertas: 5,
    descripcion: "La nueva HR-V redefine el segmento SUV premium. Interior revolucionario con asientos Magic Seat, pantalla de 9\", Honda Sensing completo. Autonomía de manejo asistido en ciudad."
  },
  {
    id: 5,
    marca: "Chevrolet",
    modelo: "Tracker Premier Turbo",
    año: 2023,
    km: 8500,
    precio: 22000000,
    tipo: "usado",
    categoria: "suv",
    destacado: false,
    emoji: "🚙",
    color: "Rojo Chilli",
    motor: "1.0 Turbo 116cv",
    transmision: "Automática 6vel",
    combustible: "Nafta",
    puertas: 5,
    descripcion: "Tracker Premier, la versión tope de gama. Techo panorámico, tapizado de cuero, Chevrolet MyLink 8\", 6 airbags, alerta de ángulo muerto. Un dueño, cero accidentes. Lista para entregar."
  },
  {
    id: 6,
    marca: "Renault",
    modelo: "Duster Intens 4x4",
    año: 2022,
    km: 55000,
    precio: 16500000,
    tipo: "usado",
    categoria: "suv",
    destacado: false,
    emoji: "🚙",
    color: "Gris Cometa",
    motor: "1.3 Turbo 150cv",
    transmision: "CVT",
    combustible: "Nafta",
    puertas: 5,
    descripcion: "Duster Intens 4x4 2022. La SUV aventurera por excelencia. Tracción 4x4 electrónica, nueva plataforma CMF-B, pantalla de 8\" con Android Auto. Un dueño, excelente estado general."
  },
  {
    id: 7,
    marca: "Peugeot",
    modelo: "208 Allure Plus",
    año: 2024,
    km: 0,
    precio: 17800000,
    tipo: "0km",
    categoria: "sedan",
    destacado: false,
    emoji: "🚗",
    color: "Azul Vertigo",
    motor: "1.2 PureTech 130cv",
    transmision: "Automática 8vel",
    combustible: "Nafta",
    puertas: 5,
    descripcion: "El 208 Allure Plus llega con el revolucionario i-Cockpit: cuadro digital de 10\", pantalla central de 10\", volante compacto y spoiler trasero. El compacto premium del segmento."
  },
  {
    id: 8,
    marca: "Toyota",
    modelo: "Corolla XEI CVT",
    año: 2023,
    km: 21000,
    precio: 25500000,
    tipo: "usado",
    categoria: "sedan",
    destacado: true,
    emoji: "🚗",
    color: "Plateado Lunar",
    motor: "2.0 VVT-i 177cv",
    transmision: "CVT",
    combustible: "Nafta",
    puertas: 4,
    descripcion: "Corolla XEI 2023 con Toyota Safety Sense completo: pre-colisión, carril, luces automáticas. Pantalla de 9\" con CarPlay inalámbrico. Service oficial al día. Excelente relación calidad-precio."
  },
  {
    id: 9,
    marca: "Nissan",
    modelo: "Kicks Advance CVT",
    año: 2022,
    km: 44000,
    precio: 18200000,
    tipo: "usado",
    categoria: "suv",
    destacado: false,
    emoji: "🚘",
    color: "Naranja Monarch",
    motor: "1.6 116cv",
    transmision: "CVT Xtronic",
    combustible: "Nafta",
    puertas: 5,
    descripcion: "Kicks Advance 2022 con cámara 360°, sensor de estacionamiento, Android Auto y Apple CarPlay, retrovisores eléctricos plegables. Impecable. Servicio completo en concesionaria."
  }
];

/* ══════════════════════════════════════════════════════════
   FUNCIONES UTILITARIAS
   ══════════════════════════════════════════════════════════ */
function formatPrecio(n) {
  return "$ " + n.toLocaleString("es-AR");
}

function formatKm(n) {
  if (n === 0) return "0 km";
  return n.toLocaleString("es-AR") + " km";
}

/* ══════════════════════════════════════════════════════════
   RENDER DE CATÁLOGO
   ══════════════════════════════════════════════════════════ */
function renderAutos(filtro = "todos") {
  const grid = document.getElementById("autosGrid");
  grid.innerHTML = "";

  const filtrados = filtro === "todos"
    ? autos
    : autos.filter(a => a.tipo === filtro || a.categoria === filtro);

  if (filtrados.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:64px;color:var(--text-muted);">
      <p style="font-size:2rem;">🔍</p>
      <p>No encontramos vehículos con ese filtro.</p>
    </div>`;
    return;
  }

  filtrados.forEach((auto, i) => {
    const card = document.createElement("div");
    card.className = "auto-card reveal";
    card.style.transitionDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="auto-card-img">
        <div class="img-placeholder">
          <span>${auto.emoji}</span>
          <p>${auto.marca} ${auto.modelo}</p>
        </div>
        <span class="auto-card-badge badge-${auto.tipo}">${auto.tipo === "0km" ? "0 km" : "Usado"}</span>
        ${auto.destacado ? '<span class="badge-destacado">⭐ Destacado</span>' : ""}
      </div>
      <div class="auto-card-body">
        <div class="auto-card-marca">${auto.marca}</div>
        <div class="auto-card-nombre">${auto.modelo}</div>
        <div class="auto-card-specs">
          <div class="spec-item"><span>Año</span><strong>${auto.año}</strong></div>
          <div class="spec-item"><span>Km</span><strong>${formatKm(auto.km)}</strong></div>
          <div class="spec-item"><span>Motor</span><strong>${auto.motor.split(" ")[0]}</strong></div>
        </div>
        <div class="auto-card-footer">
          <div class="auto-precio">
            ${formatPrecio(auto.precio)}
            <span>Precio de lista</span>
          </div>
          <button class="btn-ver-mas" onclick="abrirModal(${auto.id})">Ver más →</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Re-trigger reveal for new cards
  setTimeout(observeReveal, 50);
}

/* ══════════════════════════════════════════════════════════
   MODAL — FICHA DEL VEHÍCULO
   ══════════════════════════════════════════════════════════ */
function abrirModal(id) {
  const auto = autos.find(a => a.id === id);
  if (!auto) return;

  const overlay = document.getElementById("modalOverlay");
  const content = document.getElementById("modalContent");

  const waMsg = encodeURIComponent(
    `Hola! Vi el ${auto.marca} ${auto.modelo} ${auto.año} en su web y me interesa. ¿Podría darme más información?`
  );

  content.innerHTML = `
    <div class="modal-img">
      <div class="img-placeholder">
        <span style="font-size:6rem;">${auto.emoji}</span>
        <p>${auto.marca} ${auto.modelo}</p>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-header">
        <div class="modal-marca">${auto.marca}</div>
        <div class="modal-nombre">${auto.modelo} ${auto.año}</div>
        <div class="modal-precio">${formatPrecio(auto.precio)} <em>Precio de lista</em></div>
      </div>

      <div class="modal-specs">
        <div class="modal-spec"><label>Año</label><strong>${auto.año}</strong></div>
        <div class="modal-spec"><label>Kilómetros</label><strong>${formatKm(auto.km)}</strong></div>
        <div class="modal-spec"><label>Motor</label><strong>${auto.motor}</strong></div>
        <div class="modal-spec"><label>Transmisión</label><strong>${auto.transmision}</strong></div>
        <div class="modal-spec"><label>Combustible</label><strong>${auto.combustible}</strong></div>
        <div class="modal-spec"><label>Puertas</label><strong>${auto.puertas}</strong></div>
        <div class="modal-spec"><label>Color</label><strong>${auto.color}</strong></div>
        <div class="modal-spec"><label>Condición</label><strong>${auto.tipo === "0km" ? "0 km — Nuevo" : "Usado certificado"}</strong></div>
      </div>

      <p class="modal-desc">${auto.descripcion}</p>

      <div class="modal-actions">
        <a href="https://wa.me/5491112345678?text=${waMsg}" 
           class="btn-whatsapp" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Consultar por WhatsApp
        </a>
        <button class="btn-secondary" onclick="simularFinan(${auto.precio})">Simular cuota →</button>
      </div>

      <!-- Formulario de consulta en ficha -->
      <div class="modal-form">
        <h4>💬 Hacer una consulta sobre este auto</h4>
        <form onsubmit="enviarConsultaModal(event, '${auto.marca} ${auto.modelo} ${auto.año}')">
          <div class="mini-form-row">
            <input type="text" name="nombre" placeholder="Tu nombre *" required />
            <input type="tel" name="telefono" placeholder="Tu teléfono *" required />
          </div>
          <input type="email" name="email" placeholder="Tu email" style="width:100%;margin-bottom:12px;background:var(--dark-3);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;color:var(--text-primary);font-size:.9rem;"/>
          <textarea name="mensaje" rows="3" placeholder="¿Qué querés saber sobre este vehículo?" style="width:100%;background:var(--dark-3);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;color:var(--text-primary);font-size:.9rem;margin-bottom:12px;"></textarea>
          <button type="submit" class="btn-primary full">Enviar consulta</button>
        </form>
      </div>
    </div>
  `;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// Cerrar con escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape") cerrarModal();
});

document.getElementById("modalClose").addEventListener("click", cerrarModal);
document.getElementById("modalOverlay").addEventListener("click", function(e) {
  if (e.target === this) cerrarModal();
});

/* ══════════════════════════════════════════════════════════
   SIMULADOR DE FINANCIAMIENTO
   ══════════════════════════════════════════════════════════ */
function calcularCuota() {
  const precio = parseFloat(document.getElementById("simPrecio").value) || 0;
  const anticipo = parseFloat(document.getElementById("simAnticipo").value) || 0;
  const cuotas = parseInt(document.getElementById("simCuotas").value) || 24;

  if (precio <= 0) {
    alert("Por favor ingresá el precio del vehículo.");
    return;
  }

  const financiar = precio - anticipo;
  if (financiar <= 0) {
    alert("El anticipo no puede ser mayor al precio del vehículo.");
    return;
  }

  // Tasa mensual estimada (referencia — no vinculante)
  const tasaMensual = 0.045; // 4.5% mensual estimado
  const cuotaMensual = financiar * (tasaMensual * Math.pow(1 + tasaMensual, cuotas)) / (Math.pow(1 + tasaMensual, cuotas) - 1);
  const totalPagar = cuotaMensual * cuotas + anticipo;

  document.getElementById("resFinanciar").textContent = formatPrecio(Math.round(financiar));
  document.getElementById("resCuota").textContent = formatPrecio(Math.round(cuotaMensual));
  document.getElementById("resTotal").textContent = formatPrecio(Math.round(totalPagar));

  // Animación
  document.getElementById("simResultado").style.borderColor = "var(--accent)";
  setTimeout(() => {
    document.getElementById("simResultado").style.borderColor = "";
  }, 1000);
}

// Cuotas slider label
document.getElementById("simCuotas").addEventListener("input", function() {
  document.getElementById("cuotasLabel").textContent = this.value;
});

// Si viene del modal con precio precargado
function simularFinan(precio) {
  cerrarModal();
  setTimeout(() => {
    const sec = document.getElementById("financiamiento");
    sec.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("simPrecio").value = precio;
    document.getElementById("simAnticipo").value = Math.round(precio * 0.3);
    setTimeout(calcularCuota, 600);
  }, 300);
}

/* ══════════════════════════════════════════════════════════
   FILTROS DE CATÁLOGO
   ══════════════════════════════════════════════════════════ */
document.querySelectorAll(".filtro-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
    renderAutos(this.dataset.filter);
  });
});

/* ══════════════════════════════════════════════════════════
   FORMULARIO DE CONTACTO
   ══════════════════════════════════════════════════════════ */
function enviarFormulario(e) {
  e.preventDefault();
  const form = document.getElementById("contactoForm");
  const success = document.getElementById("formSuccess");

  // Acá conectarías con tu backend / EmailJS / Formspree
  // Por ahora mostramos el estado de éxito
  form.style.display = "none";
  success.style.display = "block";

  // Opcional: mandar a WhatsApp con los datos
  const data = new FormData(form);
  const nombre = data.get("nombre") || "";
  const telefono = data.get("telefono") || "";
  const interes = data.get("interes") || "";
  const mensaje = data.get("mensaje") || "";

  // Se podría redirigir a WA con los datos del form:
  // const waMsg = encodeURIComponent(`Hola! Soy ${nombre} (${telefono}). ${interes}. ${mensaje}`);
  // window.open(`https://wa.me/5491112345678?text=${waMsg}`, "_blank");
}

function enviarConsultaModal(e, vehiculo) {
  e.preventDefault();
  const form = e.target;
  const nombre = form.nombre.value;
  const telefono = form.telefono.value;
  const mensaje = form.mensaje.value || `Quiero más información sobre el ${vehiculo}`;

  // Redirigir a WhatsApp con los datos
  const waMsg = encodeURIComponent(
    `Hola! Soy ${nombre} (${telefono}). ${mensaje}. Me interesa el ${vehiculo}.`
  );
  window.open(`https://wa.me/5491112345678?text=${waMsg}`, "_blank");

  // Feedback visual
  form.innerHTML = `<div style="text-align:center;padding:20px;">
    <div style="font-size:2rem;margin-bottom:8px;">✅</div>
    <p style="color:var(--text-secondary);">¡Listo! Te vamos a contactar pronto.</p>
  </div>`;
}

/* ══════════════════════════════════════════════════════════
   NAVBAR SCROLL
   ══════════════════════════════════════════════════════════ */
const navbar = document.getElementById("navbar");
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 80) {
    navbar.classList.add("scrolled");
    backTop.classList.add("visible");
  } else {
    navbar.classList.remove("scrolled");
    backTop.classList.remove("visible");
  }
}, { passive: true });

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ══════════════════════════════════════════════════════════
   MENÚ MOBILE (HAMBURGER)
   ══════════════════════════════════════════════════════════ */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
  document.body.style.overflow = navLinks.classList.contains("open") ? "hidden" : "";
});

// Cerrar al hacer click en link
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
    document.body.style.overflow = "";
  });
});

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL (ANIMACIONES)
   ══════════════════════════════════════════════════════════ */
function observeReveal() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  elements.forEach(el => observer.observe(el));
}

// Agregar clase reveal a secciones
function addRevealClasses() {
  const selectors = [
    ".ventaja-card", ".testimonio-card", ".nosotros-texto",
    ".nosotros-visual", ".fin-info", ".simulador-card",
    ".contacto-info", ".contacto-form-wrap", ".mapa-wrap",
    ".section-header", ".catalogo-cta", ".filtros"
  ];
  selectors.forEach((sel, sIdx) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add("reveal");
      if (i > 0) el.classList.add(`reveal-delay-${Math.min(i, 3)}`);
    });
  });
}

/* ══════════════════════════════════════════════════════════
   SMOOTH SCROLL LINKS
   ══════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const navH = navbar.offsetHeight;
      const targetY = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  });
});

/* ══════════════════════════════════════════════════════════
   ACTIVE NAV LINK ON SCROLL
   ══════════════════════════════════════════════════════════ */
function updateActiveNav() {
  const sections = ["home", "catalogo", "financiamiento", "nosotros", "contacto"];
  const navH = navbar.offsetHeight;

  sections.forEach(id => {
    const sec = document.getElementById(id);
    if (!sec) return;
    const top = sec.getBoundingClientRect().top;
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!link) return;
    if (top <= navH + 80 && top + sec.offsetHeight > navH) {
      link.style.color = "var(--white)";
    } else {
      link.style.color = "";
    }
  });
}
window.addEventListener("scroll", updateActiveNav, { passive: true });

/* ══════════════════════════════════════════════════════════
   INICIALIZACIÓN
   ══════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  // Renderizar autos
  renderAutos();

  // Agregar clases de reveal
  addRevealClasses();

  // Iniciar observer
  observeReveal();

  // Iniciar simulador con valores de ejemplo
  document.getElementById("simPrecio").value = 20000000;
  document.getElementById("simAnticipo").value = 6000000;
  calcularCuota();

  console.log(
    "%c AutoElite Motors 🚗 ",
    "background:#2563EB;color:white;font-size:14px;font-weight:bold;padding:8px 16px;border-radius:8px;"
  );
  console.log("%c Web desarrollada con ❤️", "color:#8A9BAD;font-size:12px;");
});
