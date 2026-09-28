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
npm test
```

Die fertige statische Website liegt in `dist/` und wird derzeit für GitHub Pages unter `https://ak-learn-code.github.io/relaunch-Bukkador-Handpan/` gebaut. Bei Umzug auf die eigene Domain müssen `astro.config.mjs`, `src/content/site.ts`, Worker-Origin und die Formular-URL angepasst werden.

## Seiten

- `/` · Startseite
- `/corporate-events/` · Firmenveranstaltungen, Messen, Galas und Empfänge
- `/hochzeiten/` · Paare und Wedding Planner
- `/eventagenturen/` · Agenturen und Veranstalter
- `/ueber-bukkador/` · Michael Noll
- `/referenzen/` · freigegebene Case-Study-Slots, Konzept-Impressionen und archivierte öffentliche Termine
- `/academy/` · Unterricht und Workshops
- `/event-kuenstler-rhein-neckar/` und `/event-kuenstler-rhein-main/` · zwei eigenständige Regional-Seiten
- `/kontakt/` · qualifizierte Event-Anfrage
- `/danke/` · Bestätigung nach erfolgreichem Versand (noindex)
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

Das Formular sendet JSON direkt an einen API-Endpunkt und führt nach einem erfolgreichen `2xx`-Status auf `/danke/`. Es öffnet keinen E-Mail-Entwurf. Ohne konfigurierten Endpunkt ist die Senden-Schaltfläche gesperrt und die Kontakt-E-Mail wird als Alternative angezeigt. Ein `2xx` bedeutet, dass der Backend-Dienst den Lead angenommen hat; ohne ein bereitgestelltes Backend gibt es keinen Live-Versand.

Ein Cloudflare-Worker ist unter `api/lead-worker.mjs` vorbereitet. Er prüft Herkunft und Pflichtfelder, speichert Leads 30 Tage in Cloudflare KV und benachrichtigt über Resend. Die Beispielkonfiguration liegt in `api/wrangler.toml.example`; `RESEND_API_KEY` muss als Worker-Secret gesetzt werden. Vor dem Live-Betrieb braucht es eine eigene Cloudflare-Worker-URL, eine KV-Namespace-ID, eine verifizierte Absenderdomain und die rechtlich geprüfte Datenschutzerklärung. Spam-Schutz über das vorhandene Honeypot-Feld hinaus sollte vor Aktivierung ergänzt werden.

Die Worker-URL kommt in `PUBLIC_EVENT_FORM_ENDPOINT`; beim GitHub-Pages-Workflow wird sie aus der Repository-Variable gleichen Namens gelesen. `ALLOWED_ORIGIN` muss zur tatsächlichen Website-Origin passen. Nach Einrichtung den Worker bereitstellen, die Variable setzen und die Website neu bauen. Keine Secrets als `PUBLIC_`-Variable speichern.

Tracking-Hooks sind DOM-Events `form_start`, `form_submit` und `qualified_lead` ohne Analytics-Bibliothek. `qualified_lead` wird nach erfolgreichem Versand ausgelöst, wenn Anlass, Ort, Datum und Budgetrahmen angegeben wurden.

## Markenbild und Medien

Das bestehende goldene Mandala-Logo, Montserrat-Schrift sowie Moosgrün (`#5a694e`) und Altgold (`#bfa766`) wurden aus der alten Website übernommen. Fotos stammen aus deren Sicherung, wurden lokal als WebP optimiert und liegen in `public/images/`. Die alte Baukasten-CDN wird im ausgelieferten HTML nicht referenziert. Die Bildzuordnung und Alternativtexte stehen in `src/content/site.ts`.

Noch benötigt werden ein hochwertiges Video oder Fotos einer echten Live-Veranstaltung mit Publikum und – nur mit Freigabe – belegbare Corporate-/Hochzeitsreferenzen sowie Testimonials. Bis dahin zeigen Event-Seiten sichtbar als Konzeptbild markierte Eventmotive; Über Bukkador und Academy nutzen echte Aufnahmen von Michael Noll. Die neun generierten Motive liegen in `public/images/placeholders/`; Austauschvorgaben stehen in `PLACEHOLDER-ASSETS.md`. Es wurden keine Kunden, Auftritte oder Bewertungen erfunden. Die Terminliste auf `/referenzen/` ist ausdrücklich als Auswahl öffentlich angekündigter Termine der alten Website gekennzeichnet.

Ein freigegebenes MP4-Showreel kann später über `PUBLIC_SHOWREEL_SRC` eingebunden werden. Auf Desktop läuft es im Hero stumm, inline und in Schleife; auf Mobile bleibt ein statisches Poster. Der große Showreel-Bereich bietet Wiedergabesteuerung. Vor dem Live-Betrieb muss das Poster durch ein echtes Event-Still ersetzt werden.

## Vor öffentlichem Start

- Impressum, Datenschutz und übernommene AGB juristisch prüfen. Insbesondere Hosting-Angaben, Formularversand und die Steuerangabe aus dem alten Impressum müssen geklärt werden.
- Cloudflare Worker, KV und Resend konfigurieren; erst danach den direkten Formularversand aktivieren und Ende-zu-Ende testen.
- Konzeptbilder durch echte Veranstaltungsmedien ersetzen und freigegebene Referenzen ergänzen. Der alte/neue Inhaltsabgleich steht in `CONTENT-MIGRATION.md`.
- Domain und Hosting festlegen, dann Canonicals, Sitemap und Datenschutz mit der endgültigen Bereitstellung abgleichen.

## Technische Basis

Astro und TypeScript erzeugen serverseitig fertig gerendertes HTML für SEO und schnelle Ladezeiten. Bilddateien und die ursprüngliche Montserrat-Schrift sind lokal. Die Seiten nutzen semantische Überschriften, Alt-Texte, sichtbare Fokuszustände und reduzierte Bewegung bei `prefers-reduced-motion`. Sitemap und `robots.txt` werden mitgebaut. JavaScript wird nur für den Formularablauf geladen.
