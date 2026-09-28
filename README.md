# Bukkador Handpan · Relaunch

Statische Astro-Website für die Premium-Event-Positionierung von Michael Noll. Die Website funktioniert vollständig ohne Sanity-Zugangsdaten: Alle Seiten haben lokale Inhalte in `src/content/site.ts`.

## Lokal starten

Voraussetzung: aktuelle Node.js-LTS-Version und npm.

```bash
npm install
npm run dev
```

Qualitätsprüfungen:

```bash
npm run build
npm run typecheck
npm run lint
```

Die fertige statische Website liegt in `dist/` und kann auf einem statischen Host ausgeliefert werden. Produktionsadresse und Canonicals sind in `astro.config.mjs` und `src/content/site.ts` auf `https://bukkador-handpan.de` eingestellt. Bei einem anderen endgültigen Host müssen beide Werte angepasst werden.

## Seiten

- `/` · Startseite
- `/corporate-events/` · Firmenveranstaltungen, Messen, Galas und Empfänge
- `/hochzeiten/` · Paare und Wedding Planner
- `/eventagenturen/` · Agenturen und Veranstalter
- `/ueber-bukkador/` · Michael Noll
- `/referenzen/` · öffentliche Termine und Einblicke, ohne erfundene Kundenreferenzen
- `/academy/` · Unterricht und Workshops
- `/event-kuenstler-rhein-neckar/` und `/event-kuenstler-rhein-main/` · zwei eigenständige Regional-Seiten
- `/kontakt/` · qualifizierte Event-Anfrage
- `/impressum/`, `/datenschutz/`, `/agb/` · Rechtstexte

`reference/` bleibt im Repository als interne Quelle. Astro veröffentlicht ausschließlich `public/` und die gebauten Seiten; `reference/` wird nicht nach `dist/` kopiert.

## Sanity anschließen

1. Ein Sanity-Projekt mit Dataset erstellen. Die Projekt-ID und den Dataset-Namen im [Sanity-Projektbereich](https://www.sanity.io/manage) ablesen.
2. `.env.example` nach `.env` kopieren. Dieselbe Projekt-ID in `PUBLIC_SANITY_PROJECT_ID` und `SANITY_STUDIO_PROJECT_ID` eintragen; Dataset ebenso in beide Dataset-Felder.
3. `npm run studio` starten. Die vorbereiteten Schemas liegen in `sanity/schemaTypes.ts`; die Studio-Konfiguration liegt in `sanity.config.ts`.
4. Für bestehende Seiten Dokumente vom Typ **Seite** anlegen. Der Slug muss einem der vorhandenen Pfade ohne Schrägstriche entsprechen, zum Beispiel `corporate-events`. Felder können schrittweise gepflegt werden; fehlende Felder verwenden die lokalen Inhalte.
5. Nach Veröffentlichungen die statische Website neu bauen und deployen. Bei Bedarf einen Sanity-Webhook als Build-Auslöser einrichten.

Der öffentliche Sanity-Client in `src/lib/sanity.ts` ruft Inhalte nur während des Builds ab. Ohne Projekt-ID oder bei einem Abruffehler greift der lokale Fallback. Für ein privates Dataset müsste ein sicherer serverseitiger Lesetoken ergänzt werden. Die Queries für Events, Referenzen, Navigation, globale Einstellungen und Performance-Angebote sind vorbereitet; derzeit wird der Seiten-Query aktiv verwendet. Sichtbarkeit und Freigaben für Referenzen sind im Schema als Felder angelegt. Inhalte sollten erst nach bestätigten Nutzungsrechten veröffentlicht werden.

## Event-Anfragen

Das Formular erfasst Kontakt, Art, Ort, Datum, Gästezahl, gewünschte Begleitung, Budgetrahmen und Nachricht. Ohne Versanddienst öffnet es einen vorbereiteten E-Mail-Entwurf an `info@bukkador-handpan.de`; die anfragende Person muss diesen im E-Mail-Programm selbst senden. Das ist lokal nutzbar und speichert keine Anfrage auf der Website.

Für direkten Versand `PUBLIC_EVENT_FORM_ENDPOINT` auf einen eigenen HTTPS-Endpunkt setzen. Er muss JSON per `POST` annehmen und bei Erfolg einen `2xx`-Status liefern. Vor Aktivierung gehören Spam-Schutz, Speicherung, Fehlerbehandlung und Datenschutzerklärung zum gewählten Dienst angepasst. Ein solcher Dienst ist noch nicht eingerichtet.

## Markenbild und Medien

Das bestehende goldene Mandala-Logo, Montserrat-Schrift sowie Moosgrün (`#5a694e`) und Altgold (`#bfa766`) wurden aus der alten Website übernommen. Fotos stammen aus deren Sicherung, wurden lokal als WebP optimiert und liegen in `public/images/`. Die alte Baukasten-CDN wird im ausgelieferten HTML nicht referenziert. Die Bildzuordnung und Alternativtexte stehen in `src/content/site.ts`.

Noch benötigt werden ein hochwertiges Video oder Fotos einer echten Live-Veranstaltung mit Publikum und – nur mit Freigabe – belegbare Corporate-/Hochzeitsreferenzen sowie Testimonials. Bis dahin zeigen Event-Seiten Originalaufnahmen von Michael Noll und der Handpan. Es wurden keine Kunden, Auftritte oder Bewertungen erfunden. Die Terminliste auf `/referenzen/` ist ausdrücklich als Auswahl öffentlich angekündigter Termine der alten Website gekennzeichnet.

## Vor öffentlichem Start

- Impressum, Datenschutz und übernommene AGB juristisch prüfen. Insbesondere Hosting-Angaben, Formularversand und die Steuerangabe aus dem alten Impressum müssen geklärt werden.
- Wenn Anfragen ohne E-Mail-Programm direkt ankommen sollen, einen Versand-Endpunkt anbinden.
- Echte Veranstaltungsmedien und freigegebene Referenzen ergänzen.
- Domain und Hosting festlegen, dann Canonicals, Sitemap und Datenschutz mit der endgültigen Bereitstellung abgleichen.

## Technische Basis

Astro und TypeScript erzeugen serverseitig fertig gerendertes HTML für SEO und schnelle Ladezeiten. Bilddateien und die ursprüngliche Montserrat-Schrift sind lokal. Die Seiten nutzen semantische Überschriften, Alt-Texte, sichtbare Fokuszustände und reduzierte Bewegung bei `prefers-reduced-motion`. Sitemap und `robots.txt` werden mitgebaut. JavaScript wird nur für den Formularablauf geladen.
