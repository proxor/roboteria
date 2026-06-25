# Roboteria Website

Diese Webseite ist fuer GitHub Pages mit Jekyll vorbereitet.

## Lokales Development

### Voraussetzungen
- Ruby 3.0+ 
- Bundler (`gem install bundler`)

### Projekt starten

1. **Dependencies installieren:**
   ```bash
   bundle install
   ```

2. **Development Server starten:**
   ```bash
   bundle exec jekyll serve
   ```

3. **Im Browser öffnen:**
   - http://localhost:4000

Der Server lädt automatisch neu, wenn du Dateien änderst.

### Alternative: Mit Docker

Wenn du Ruby nicht installiert hast, kannst du das Projekt mit Docker ausführen.

**Voraussetzungen:**
- Docker und Docker Compose

**Starten:**
```bash
docker compose up --build
```

Die Seite ist dann unter http://localhost:4000 erreichbar. Beim ersten Start wird das Image gebaut (`bundle install`), das kann ein paar Minuten dauern.

**Mit Docker (ohne Compose):**
```bash
docker build -t roboteria .
docker run -it -p 4000:4000 -v "$(pwd):/srv/jekyll" roboteria
```

**Hinweis zu Firmen-Proxy (TQ-Netzwerk):**
Im TQ-Netzwerk werden HTTPS-Verbindungen über einen MITM-Proxy mit eigenem
Root-Zertifikat umgeleitet. Damit `bundle install` im Container funktioniert,
liegen die nötigen CA-Zertifikate unter `certs/` und werden im `Dockerfile`
in den Trust-Store des Images installiert. Außerhalb des TQ-Netzwerks sind
diese Zertifikate unschädlich.

## Inhalte bearbeiten

- **Kurse:** `_data/courses.yml` — Kursdetails, Daten, Beschreibungen
- **Seiten:** 
  - `index.md` — Startseite
  - `courses.md` — Kursübersicht
  - `projects.md` — micro:bit Projekte
  - `info.md` — Impressum
  - `blog.md` — Blog
  - `shop.md` — Integrierter Spreadshop
- **Blog-Posts:** `_posts/YYYY-MM-DD-slug.md`
- **Styling:** `assets/css/style.css`
- **Layout:** `_layouts/default.html`

## Deployment

Die Seite wird automatisch auf GitHub Pages deployed, wenn du Änderungen zu `main` pushst.
