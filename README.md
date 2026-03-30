# 🏋️ Gimnasio Templo Fitness Caraz - Sitio Web

## 📋 Descripción

Página web moderna y profesional para el **Gimnasio Templo Fitness Caraz**, ubicado en Caraz, Perú. Diseñada con un enfoque en conversión de clientes, optimización SEO y experiencia de usuario excepcional.

## ✨ Características

### Diseño
- **Paleta de colores**: Negro, rojo (#E31E24) y amarillo (#FFC107)
- **Tipografía moderna**: Montserrat y Bebas Neue
- **Diseño 100% responsive** (móvil, tablet, desktop)
- **Animaciones suaves** al hacer scroll
- **Efecto parallax** en hero y CTA

### Secciones
1. **Hero** - Pantalla de inicio impactante con llamada a la acción
2. **Sobre Nosotros** - Información del gimnasio y calificación 4.8★
3. **Servicios** - 4 servicios principales con iconos
4. **Ejercicios** - 6 disciplinas diferentes con imágenes
5. **Entrenadores** - 3 perfiles profesionales del equipo
6. **Planes y Precios** - 3 opciones de membresía (Básico, Premium, VIP)
7. **Horarios** - Disponibilidad y ventajas
8. **Ubicación** - Mapa interactivo de Google Maps
9. **Testimonios** - Reseñas de clientes
10. **CTA Final** - Llamada a la acción con botones de contacto
11. **Footer** - Información completa y redes sociales

### Funcionalidades
- ✅ Navegación fija con efecto al scroll
- ✅ Menú hamburguesa para móviles
- ✅ Botón flotante de WhatsApp
- ✅ Botón "volver arriba"
- ✅ Animaciones de aparición por sección
- ✅ Contador animado para calificaciones
- ✅ Enlaces directos a WhatsApp y teléfono
- ✅ Integración con Google Maps
- ✅ Optimización SEO

## 🚀 Cómo Usar

### Opción 1: Abrir directamente
1. Abre el archivo `index.html` con tu navegador web
2. La página se cargará completamente funcional

### Opción 2: Servidor local (recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con PHP
php -S localhost:8000

# Con Node.js (http-server)
npx http-server
```

Luego abre: `http://localhost:8000`

## 📱 Personalización

### Cambiar información de contacto

**En `index.html`**, busca y reemplaza:

```html
<!-- Teléfono -->
<a href="tel:+51974572554">974 572 554</a>

<!-- WhatsApp -->
<a href="https://wa.me/51974572554">

<!-- Instagram -->
<a href="https://instagram.com" target="_blank">
```

### Cambiar colores

**En `styles.css`**, modifica las variables CSS:

```css
:root {
    --primary-color: #E31E24;      /* Rojo principal */
    --secondary-color: #FFC107;    /* Amarillo */
    --dark-color: #0A0A0A;         /* Negro */
}
```

### Cambiar imágenes

Las imágenes actuales son de Unsplash (gratis). Para usar imágenes propias:

1. Coloca tus imágenes en una carpeta `images/`
2. Reemplaza las URLs en `index.html`:

```html
<!-- Hero -->
background: url('images/hero.jpg')

<!-- About -->
<img src="images/gimnasio-interior.jpg">

<!-- CTA -->
background: url('images/entrenamiento.jpg')
```

### Actualizar Google Maps

Encuentra tu ubicación exacta:
1. Abre Google Maps
2. Busca: "Jr Carretera Central 812, Caraz"
3. Haz clic en "Compartir" → "Insertar un mapa"
4. Copia el código iframe
5. Reemplaza el iframe en la sección `#ubicacion`

## 🔧 Archivos del Proyecto

```
TemploFitness/
│
├── index.html           # Estructura HTML principal (optimizado)
├── styles.css           # Estilos y diseño
├── script.js            # Funcionalidad JavaScript
├── .htaccess            # Configuración de servidor (compresión, caché)
├── robots.txt           # SEO - Instrucciones para bots
├── sitemap.xml          # SEO - Mapa del sitio
├── OPTIMIZACION.md      # Guía completa de optimización
└── README.md            # Este archivo
```

## ⚡ Optimizaciones Implementadas

### 1. **Lazy Loading**
Todas las imágenes usan carga diferida:
```html
<img src="..." loading="lazy">
```
✅ Las imágenes solo se cargan cuando son visibles

### 2. **Preconnect & DNS-Prefetch**
Conexión anticipada a servidores externos:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
```
✅ Reduce tiempo de conexión a CDNs

### 3. **Defer en Scripts**
JavaScript no bloquea el renderizado:
```html
<script src="script.js" defer></script>
```
✅ La página se muestra inmediatamente

### 4. **Compresión GZIP**
Archivo `.htaccess` configurado para:
- ✅ Comprimir HTML, CSS, JS (reduce ~70% el tamaño)
- ✅ Caché del navegador (evita descargas repetidas)
- ✅ Headers de seguridad

### 5. **SEO Optimizado**
- ✅ Meta tags completos
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Palabras clave estratégicas

## 📊 Rendimiento Esperado

Con las optimizaciones, la página debería:
- ⚡ Cargar en < 3 segundos (hosting básico)
- ⚡ Cargar en < 1 segundo (hosting optimizado/CDN)
- 📱 Funcionar perfectamente en móviles
- 🎯 PageSpeed Score > 85-90

## 🚀 Cómo Usar

La página incluye:
- Meta tags optimizados
- Palabras clave: "gimnasio en Caraz", "fitness Caraz", "entrenamiento Caraz"
- Estructura semántica HTML5
- Alt text en imágenes
- Enlaces internos
- Schema markup ready

### Para mejorar el SEO:
1. Agrega Google Analytics
2. Registra en Google Search Console
3. Sube el `sitemap.xml` a Search Console
4. Optimiza velocidad de carga (ver [OPTIMIZACION.md](OPTIMIZACION.md))
5. Agrega un blog con contenido

## 🌐 Despliegue

### Hosting gratuito recomendado:

1. **Netlify** (RECOMENDADO ⭐)
   - Arrastra la carpeta `gym` a netlify.com/drop
   - Dominio gratis: `templofitness.netlify.app`
   - ✅ CDN global automático
   - ✅ HTTPS gratis
   - ✅ Compresión automática

2. **Vercel**
   - Conecta tu repositorio de GitHub
   - Despliegue automático
   - CDN incluido

3. **GitHub Pages**
   - Sube a un repositorio
   - Activa Pages en Settings
   - Gratis con dominio github.io

4. **Cloudflare Pages**
   - CDN ultra rápido
   - HTTPS automático
   - Gratis ilimitado

### Pasos para Netlify (Más Fácil):
```bash
# Opción 1: Drag & Drop
1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta "gym"
3. ¡Listo! Tu sitio está en línea

# Opción 2: CLI
npm install -g netlify-cli
cd gym
netlify deploy --prod
```

## 💡 Optimización Adicional

Para maximizar el rendimiento, lee la **[Guía Completa de Optimización](OPTIMIZACION.md)** que incluye:

### Optimizaciones Básicas (Gratis):
- Minificar CSS y JavaScript
- Convertir imágenes a WebP
- Comprimir imágenes (TinyPNG, Squoosh)

### Optimizaciones Avanzadas:
- Service Worker para PWA
- Critical CSS inline
- HTTP/2 Server Push
- Imagen adaptativa (responsive images)

### Herramientas de Test:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse (Chrome DevTools)

**Ver [OPTIMIZACION.md](OPTIMIZACION.md) para detalles completos.**

## 📞 Información de Contacto

**Gimnasio Templo Fitness Caraz**
- 📍 Jr. Carretera Central N°812, Caraz, Perú
- 📱 974 572 554
- 📧 Instagram: @templofitness_caraz
- ⏰ Abierto todos los días hasta las 11:00 PM
- ⭐ Calificación: 4.8/5

## 🎨 Recursos Utilizados

- **Fuentes**: Google Fonts (Montserrat, Bebas Neue)
- **Iconos**: Font Awesome 6
- **Imágenes**: Unsplash (reemplazar con fotos reales)
- **Mapa**: Google Maps Embed API

## 💡 Consejos

1. **Toma fotos profesionales** del gimnasio para reemplazar las de stock
2. **Actualiza los testimonios** con reseñas reales de clientes
3. **Agrega más secciones** si es necesario (galería, precios, blog)
4. **Conecta con redes sociales** reales del gimnasio
5. **Mantén actualizada** la información de contacto y horarios

## 🔄 Próximas Mejoras (Opcional)

- [ ] Sistema de reservas online
- [ ] Galería de fotos con lightbox
- [ ] Sección de planes y precios
- [ ] Blog de fitness y nutrición
- [ ] Calculadora de IMC
- [ ] Área de clientes (login)
- [ ] Integración con sistema de pagos
- [ ] Chat en vivo

## 📝 Licencia

Este proyecto es de uso libre para Gimnasio Templo Fitness Caraz.

---

**¿Necesitas ayuda?** Contacta al desarrollador o revisa la documentación de las tecnologías utilizadas.

**¡Transforma tu cuerpo en el Templo Fitness! 💪**
