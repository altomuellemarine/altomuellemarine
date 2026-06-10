# AltoMuelle

Primera version estatica del sitio de AltoMuelle, preparada para Cloudflare Pages.

## Editar contenido

- Reemplaza todos los textos marcados como `[BORRADOR]`.
- Cambia el correo, WhatsApp, direccion, horarios y redes sociales por datos reales.
- Agrega logo y fotos reales cuando esten disponibles.

## Publicar en Cloudflare Pages

1. En Cloudflare, entra a Workers & Pages y crea un nuevo proyecto conectado a este repo.
2. Usa estos ajustes:
   - Framework preset: None
   - Build command: dejar vacio
   - Output directory: `/`
3. Agrega el dominio `altomuelle.cl` como dominio personalizado.
4. Configura `altomuelle.com` para redirigir a `https://altomuelle.cl`.

## Archivos incluidos

- `index.html`: pagina principal.
- `styles.css`: estilos responsive.
- `script.js`: menu fijo, animaciones suaves y galeria ligera.
- `robots.txt`, `sitemap.xml`, `llms.txt`: base para SEO y visibilidad.
- `_redirects`: redirecciones para Cloudflare.
