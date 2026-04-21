# 📘 AutoElite Motors — Guía Completa

## 🗂️ Estructura de archivos

```
autoelite-motors/
├── index.html      → Estructura y contenido HTML
├── styles.css      → Estilos visuales
├── script.js       → Lógica, autos y simulador
└── GUIA.md         → Este archivo
```

---

## ✏️ CÓMO EDITAR LOS CONTENIDOS

### 1. Cambiar el nombre / marca de la concesionaria

En **`index.html`** buscá y reemplazá:
- `AutoElite` → tu nombre
- `MOTORS` → tu subtítulo
- `autoelitemotors.com.ar` → tu dominio

En **`styles.css`** no hay cambios de texto necesarios.

---

### 2. Cambiar el número de WhatsApp

Buscá en todo el proyecto: `5491112345678`  
Reemplazalo por tu número **sin + ni espacios**, con código de país.

Ejemplo Argentina: `5491199887766` (para +54 9 11 9988-7766)

---

### 3. Cambiar la dirección y horario

En **`index.html`**, buscá la sección `<!-- CONTACTO -->` y editá:
```html
<span>Av. del Libertador 4520, Palermo, Buenos Aires</span>
<span>+54 11 1234-5678</span>
<span>Lun–Vie 9:00 a 19:00 | Sáb 9:00 a 14:00</span>
<span>ventas@autoelitemotors.com.ar</span>
```

---

### 4. Agregar / editar autos

Todo el catálogo está en **`script.js`**, al principio del archivo.  
Buscá el array `const autos = [...]` y agrega un nuevo bloque:

```javascript
{
  id: 10,                          // ← Número único (el siguiente disponible)
  marca: "Mercedes-Benz",          // ← Marca
  modelo: "GLA 200 AMG Line",      // ← Modelo y versión
  año: 2023,                       // ← Año
  km: 15000,                       // ← Kilómetros (0 para 0km)
  precio: 55000000,                // ← Precio EN NÚMEROS (sin puntos ni $)
  tipo: "usado",                   // ← "0km" o "usado"
  categoria: "suv",                // ← "suv" o "sedan"
  destacado: true,                 // ← true = muestra ⭐ en la tarjeta
  emoji: "🚘",                    // ← Ícono representativo
  color: "Negro Obsidiana",        // ← Color del auto
  motor: "1.3 Turbo 163cv",        // ← Motor
  transmision: "DCT 7vel",         // ← Transmisión
  combustible: "Nafta",            // ← Combustible
  puertas: 5,                      // ← Cantidad de puertas
  descripcion: "Descripción del auto..." // ← Texto de la ficha
},
```

**💡 Tip:** El `id` debe ser único. Si el último auto tiene `id: 9`, el nuevo tiene `id: 10`.

---

### 5. Cambiar precios

Solo editá el campo `precio:` en el auto correspondiente en `script.js`.  
El sitio formatea el número automáticamente con puntos de miles.

---

### 6. Agregar imágenes reales

**Opción A — Imágenes locales:**
1. Creá una carpeta `img/` junto a los archivos
2. Guardá la imagen (ej: `toyota-hilux.jpg`)
3. En `script.js`, dentro del auto, el emoji se muestra como placeholder.  
   Para reemplazarlo por imagen real, editá la función `renderAutos()` en `script.js`:

Buscá este bloque:
```javascript
<div class="img-placeholder">
  <span>${auto.emoji}</span>
  <p>${auto.marca} ${auto.modelo}</p>
</div>
```

Reemplazalo por:
```javascript
<img src="img/${auto.imagen}" alt="${auto.marca} ${auto.modelo}" style="width:100%;height:100%;object-fit:cover;"/>
```

Y en cada auto del array, agregá la propiedad:
```javascript
imagen: "toyota-hilux.jpg",
```

**Opción B — URLs externas (más rápido):**
Podés usar imágenes de Mercado Libre, OLX o de tu propia galería:
```javascript
imagen: "https://link-a-tu-imagen.com/auto.jpg",
```

---

### 7. Cambiar colores del sitio

En **`styles.css`**, al principio, editá las variables:

```css
:root {
  --accent: #2563EB;        /* ← Azul principal. Cambiá por tu color */
  --accent-bright: #3B82F6; /* ← Versión más clara del acento */
  --gold: #C9A84C;          /* ← Dorado para detalles premium */
}
```

Para un tema verde esmeralda: `--accent: #059669`  
Para un tema rojo deportivo: `--accent: #DC2626`

---

### 8. Cambiar la historia "Sobre nosotros"

En **`index.html`**, buscá la sección `<!-- SOBRE NOSOTROS -->` y editá los textos en los `<p>`.

---

### 9. Conectar el formulario de contacto (real)

Por defecto, el formulario muestra un mensaje de éxito pero no envía emails.  
Para conectarlo, usá **Formspree** (gratis):

1. Entrar a https://formspree.io y crear cuenta
2. Crear un nuevo formulario
3. Copiá tu endpoint (ej: `https://formspree.io/f/xpzvwqkd`)
4. En **`index.html`**, buscá:
   ```html
   <form class="contacto-form" id="contactoForm" onsubmit="enviarFormulario(event)">
   ```
   Y reemplazalo por:
   ```html
   <form class="contacto-form" action="https://formspree.io/f/TU_ID" method="POST">
   ```
5. Eliminá el `onsubmit` y el botón quedaría type="submit" normal.

---

## 🌐 CÓMO SUBIR LA WEB

### Opción A — GitHub Pages (Gratis, recomendado para empezar)

**Paso a paso para principiantes:**

1. **Crear cuenta en GitHub:** https://github.com/signup  
   (gratis, solo necesitás email)

2. **Crear un repositorio nuevo:**
   - Click en "+" → "New repository"
   - Nombre: `autoelite-motors` (o el que quieras)
   - Marcá "Public"
   - Click "Create repository"

3. **Subir los archivos:**
   - En la página del repositorio, click "uploading an existing file"
   - Arrastrá los 3 archivos: `index.html`, `styles.css`, `script.js`
   - Click "Commit changes"

4. **Activar GitHub Pages:**
   - Ir a "Settings" → "Pages"
   - En "Source", seleccioná "Deploy from a branch"
   - Branch: `main`, carpeta: `/ (root)`
   - Click "Save"

5. **Tu URL:**  
   En 1-2 minutos estará disponible en:  
   `https://tu-usuario.github.io/autoelite-motors/`

---

### Opción B — Netlify (Más fácil, recomendado)

1. Entrar a https://netlify.com → "Sign up" con Google o email

2. En el dashboard, encontrá la zona que dice:  
   **"Want to deploy a new site without connecting to Git?"**  
   → **"deploy manually"**

3. Arrastrá toda la carpeta con tus 3 archivos a esa zona

4. ¡Listo! Netlify te da una URL como:  
   `https://amazing-hoover-abc123.netlify.app`

5. Para cambiarle el nombre:  
   Site settings → General → Site name → cambialo

**Ventajas de Netlify:** Podés conectar tu propio dominio, formularios integrados, HTTPS automático.

---

### Opción C — Dominio propio (.com.ar)

1. Comprá el dominio en NIC.ar (.com.ar, ~$1000/año) o en Namecheap (internacionales)
2. Contratá un hosting (Hostinger, SiteGround, o NIC.ar mismo)
3. Subí los archivos por FTP o el administrador de archivos del hosting
4. Apuntá el dominio al hosting siguiendo las instrucciones del proveedor

---

## 📱 CONECTAR WHATSAPP REAL

El botón de WhatsApp ya está listo. Solo necesitás:

1. Reemplazar `5491112345678` por tu número real (con código de país)
2. Editá el mensaje de bienvenida en el link:
   ```
   ?text=Hola!%20Quiero%20información%20sobre%20los%20vehículos
   ```
   Podés cambiar el texto después de `text=` (recordá usar `%20` para los espacios)

**Para respuestas rápidas (respuestas guardadas en WhatsApp Business):**
- Descargá WhatsApp Business (gratis)
- Configurá mensajes de bienvenida y ausencia
- Creá respuestas rápidas para las consultas más frecuentes

---

## 🚀 MEJORAS FUTURAS RECOMENDADAS

### Nivel 1 — Fácil (sin código)
- ✅ Agregar Google Analytics (gratis) para ver visitas
- ✅ Conectar Instagram → enlace en el footer
- ✅ Registrar en Google Business Profile (ex Google My Business)
- ✅ Formspree para recibir emails de los formularios

### Nivel 2 — Medio
- 📸 Agregar galería de imágenes reales por vehículo (carousel)
- 🔍 Campo de búsqueda en el catálogo
- 💰 Tasación online con formulario
- 📊 Google Analytics 4 con eventos de conversión

### Nivel 3 — Avanzado
- 🗄️ Panel de administración para gestionar el stock (requiere backend)
- 🔗 Integración con Mercado Autos o InfoAutos API
- 📧 CRM para seguimiento de leads (HubSpot tiene plan gratuito)
- 💳 Integración con financieras para aprobación online

---

## 💡 TIPS DE MARKETING PARA CONVERTIR MÁS

1. **Fotos reales** → Las fotos propias de alta calidad duplican las consultas. Usá luz natural, ángulo de 3/4, interior limpio.

2. **Precio visible** → Nunca ocultes el precio. Los compradores que ven el precio convierten 3x más que los que tienen que preguntar.

3. **WhatsApp rápido** → Respondé en menos de 10 minutos. El 60% de los leads elige el vendedor que responde primero.

4. **Google Business** → Configurá tu ficha de Google con horarios, fotos y dirección. Es gratis y te aparece en Maps.

5. **Videos cortos** → Subí videos de 30-60 segundos de cada auto a Instagram Reels / TikTok. Enorme tráfico gratis.

6. **Testimonios reales** → Pedile a clientes satisfechos una reseña en Google. 5 reseñas reales = credibilidad de agencia.

---

## 📞 SOPORTE

Si necesitás personalización adicional o tenés dudas, podés:
- Editar el código con cualquier editor de texto (VS Code es gratis y excelente)
- Buscar en https://developer.mozilla.org para referencias de HTML/CSS/JS

---

*Desarrollado con ❤️ | AutoElite Motors Template v1.0*
