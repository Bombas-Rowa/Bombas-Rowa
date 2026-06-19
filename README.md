# HidroRowa — Sitio de instalación y venta de bombas Rowa

Landing + catálogo profesional construido con **React + Vite + Tailwind CSS v4** y animaciones con **Framer Motion**. Pensado para generar confianza y derivar consultas a **WhatsApp**.

## 🚀 Cómo correrlo

```bash
npm install      # instalar dependencias (una sola vez)
npm run dev      # servidor de desarrollo  → http://localhost:5173
npm run build    # build de producción     → carpeta /dist
npm run preview  # previsualizar el build
```

## ✏️ Qué editar (lo importante)

Todo lo configurable del negocio está en **`src/config.js`**:

| Campo | Para qué sirve |
|-------|----------------|
| `whatsapp` | ⚠️ **Número de WhatsApp** al que llegan TODOS los botones. Formato internacional sin `+` ni espacios. Ej: `5491122334455`. **Reemplazar el placeholder `5491100000000`.** |
| `phoneDisplay` | Teléfono que se muestra y para el botón "Llamar" |
| `email`, `city`, `hours` | Datos de contacto del footer y sección de contacto |
| `name`, `tagline` | Nombre de la marca |
| `yearsExperience`, `installations` | Números de las estadísticas de confianza |

Los **productos** del catálogo están en **`src/data/products.js`** (nombre, specs, características, categoría, etc.). Agregá, quitá o editá libremente.

## 🧩 Estructura

```
src/
├── config.js              # datos del negocio + generador de links de WhatsApp
├── data/products.js       # catálogo de productos
├── pages/
│   ├── Home.jsx           # arma todas las secciones del home
│   └── Products.jsx       # catálogo completo con filtros
├── sections/              # Hero, Servicios, Carrusel, PorQué, Proceso, Testimonios, FAQ, Contacto
└── components/            # Navbar, Footer, ProductCard, ProductVisual, íconos, etc.
```

## 🖼️ Sobre las imágenes

- **Fotos reales** (hero y sección "por qué elegirnos"): se usan imágenes de Unsplash de instalaciones/plomería para dar contexto y confianza.
- **Productos**: se muestran como **tiles técnicos de marca** (gradiente + specs destacadas) en lugar de fotos de stock genéricas, porque no representarían el producto Rowa real. Cuando tengan fotos propias de cada bomba, se pueden incorporar fácilmente en `ProductCard`/`ProductCarousel`.

## 🔧 Stack

React 18 · React Router · Vite 5 · Tailwind CSS v4 · Framer Motion · Tipografías Bricolage Grotesque + Manrope.
