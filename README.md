# page-electromovilidad
<img width="275" height="763" alt="image" src="https://github.com/user-attachments/assets/5c91b461-4121-4204-863b-3e877f716791" />

# **Proyecto de Electromovilidad: Mapa de Estaciones de Carga en México**

Este proyecto es una aplicación web que muestra un mapa interactivo de estaciones de carga para vehículos eléctricos en México. Está desarrollado utilizando **HTML**, **CSS** y **JavaScript**, con integración de **Leaflet.js** (o Google Maps API) para la visualización del mapa.

---

## **Características**
- Mapa interactivo con marcadores de estaciones de carga en México.
- Información detallada sobre cada estación (nombre, ubicación, etc.).
- Diseño responsive para una visualización óptima en dispositivos móviles y de escritorio.
- Fácil de personalizar y extender con nuevas funcionalidades.

---

## **Tecnologías Utilizadas**
- **HTML**: Estructura de la página web.
- **CSS**: Estilos y diseño responsive.
- **JavaScript**: Lógica del mapa y marcadores.
- **Leaflet.js**: Biblioteca para mapas interactivos (alternativa: Google Maps API).
- **OpenStreetMap**: Proveedor de mapas (gratuito y de código abierto).

---

## **Instalación y Uso**

### **Requisitos**
- Navegador web moderno (Chrome, Firefox, Edge, etc.).
- Conexión a Internet (para cargar los mapas).

### **Pasos para Ejecutar el Proyecto**
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/proyecto-electromovilidad.git
   ```
2. Abre el archivo `index.html` en tu navegador.
3. ¡Explora el mapa de estaciones de carga en México!

---

## **Personalización**

### **Agregar más estaciones de carga**
Puedes agregar más estaciones de carga editando el archivo `script.js`. Simplemente añade nuevas entradas al array `estaciones`:

```javascript
const estaciones = [
    { nombre: "Estación CDMX", coordenadas: [19.4326, -99.1332] },
    { nombre: "Estación Monterrey", coordenadas: [25.6866, -100.3161] },
    // Agrega más estaciones aquí
];
```

### **Usar Google Maps API**
Si prefieres usar Google Maps en lugar de Leaflet.js:
1. Obtén una clave de API desde la [Consola de Google Cloud](https://console.cloud.google.com/).
2. Reemplaza el script de Leaflet con el de Google Maps en el archivo `index.html`:
   ```html
   <script async defer
       src="https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_DE_API&callback=initMap">
   </script>
   ```
3. Actualiza la función `initMap` en `script.js` para usar la API de Google Maps.

---

## **Estructura del Proyecto**
```
proyecto-electromovilidad/
│
├── index.html          # Archivo principal HTML
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
├── README.md           # Este archivo
└── img/                # Carpeta para imágenes (opcional)
```

---

## **Contribuciones**
¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una rama con tu nueva funcionalidad (`git checkout -b nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añade nueva funcionalidad'`).
4. Haz push a la rama (`git push origin nueva-funcionalidad`).
5. Abre un Pull Request.

---

## **Licencia**
Este proyecto está bajo la licencia **MIT**. Para más detalles, consulta el archivo [LICENSE](LICENSE).

---

## **Autor**
- **Nombre**: [Tu Nombre]
- **GitHub**: [Enlace a tu perfil de GitHub]
- **Contacto**: [Tu correo electrónico o redes sociales]

---

## **Capturas de Pantalla**
<img width="841" height="662" alt="image" src="https://github.com/user-attachments/assets/a38cc9cb-97e3-4de6-afc6-d958769577f5" />
 
*Captura del mapa interactivo.*

---

## **Enlaces Útiles**
- [Leaflet.js](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Google Maps API](https://developers.google.com/maps)

---

¡Gracias por visitar este proyecto! Si tienes alguna pregunta o sugerencia, no dudes en contactarme. 🚗⚡

---
