# Bukkador Handpan · Premium Event Relaunch V2

Stand: 28. September 2026. Umsetzung im bestehenden Astro-Projekt. Diese Fassung ist lokal gebaut und geprüft, aber nicht veröffentlicht.

## 1. Geändert

- Startseite auf Premium-Event-Positionierung und klare Besucherführung umgestellt: Event-Hero, differenzierte Zielgruppeneinstiege, Event Journey, Showreel-Slot, Leistungsumfang und kontextbezogene Anfragen.
- Corporate-, Hochzeits- und Agenturseite mit eigenen Abläufen und CTAs erweitert. Die Agenturseite zeigt Produktionsprozess und vorbereitete Materialslots.
- „Referenzen & Events“ trennt Case Studies, Veranstalterstimmen, Konzept-Impressionen und archivierte öffentliche Termine. Ohne freigegebene Belege werden keine Kundenfälle angezeigt.
- Neun neue Event-Konzeptbilder in WebP und je eine 800-Pixel-Variante ergänzt. Die Bildserie wurde anschließend auf gemeinsame Artist-Anmutung, exakte 16:9-Breitbilder und individuelle 4:5-Mobile-Crops geprüft und beim Corporate-Dinner-Motiv angeglichen. Alle öffentlichen Verwendungen sind als Konzeptbild markiert; OG-Bilder nutzen echte Michael-Fotos.
- Anfrageformular auf direkten API-Versand, Vorauswahl des Anlasses und Qualifizierungsfelder umgestellt. `/danke/` und eine gestaltete 404-Seite ergänzt.
- Wiederverwendbare Event Journey und Case-Study-Komponente sowie erweiterte Sanity-Felder für freigegebene Referenzen ergänzt.

## 2. Bewusst beibehalten

- Astro, statische Auslieferung über GitHub Pages, vorhandene Komponenten als Grundlage und Sanity-Fallback.
- Goldene Mandala-Marke, Montserrat, Moosgrün/Altgold, ruhige Editorial-Flächen und vorhandene dezente Bewegung.
- Echte Michael-Aufnahmen für Person und Academy, Academy-Inhalte, Rechtstexte als gekennzeichnete Arbeitsfassungen und zwei statt vieler regionaler Seiten.

## 3. Seitenstruktur

`/` · `/corporate-events/` · `/hochzeiten/` · `/eventagenturen/` · `/ueber-bukkador/` · `/referenzen/` · `/academy/` · `/event-kuenstler-rhein-neckar/` · `/event-kuenstler-rhein-main/` · `/kontakt/` · `/danke/` · `/impressum/` · `/datenschutz/` · `/agb/` · `404.html`.

Hauptnavigation: Corporate Events, Hochzeiten, Eventagenturen, Über Bukkador, Referenzen, Event anfragen. Academy und Regionalseiten sind im Footer erreichbar.

## 4. Funnel

- **Corporate:** Einsatzbereiche → Eventphasen → Leistung/Technik → Planungsprozess → Referenzen/Person → Corporate-Anfrage.
- **Wedding:** emotionale Hero-Bildwelt → Trauung/Empfang/Dinner/Abend → Abstimmung mit Paar oder Wedding Planner → Hochzeits-Anfrage.
- **Agency:** Produktionsnutzen → direkte Abstimmung/Technik → vorbereitete Artist-Materialien → Briefing/Profil-Anforderung.
- **Academy:** Kursformate → persönliche Unterrichtsoptionen → direkte Academy-E-Mail. Eventseiten verlinken die Academy nicht als CTA.

## 5. Placeholder Assets

`home-hero-event.webp`, `corporate-reception.webp`, `corporate-dinner.webp`, `corporate-detail.webp`, `agency-backstage.webp`, `wedding-ceremony.webp`, `wedding-reception.webp`, `wedding-dinner.webp`, `event-atmosphere.webp`. Für das Artist-Porträt ist mit `michael-noll-portrait.webp` bereits ein echtes Bild vorhanden. Motiv, Crops, Licht, Safe Area und spätere Originalaufnahmen stehen in `PLACEHOLDER-ASSETS.md`.

## 6. Echte Assets benötigt

- **P0 – dringend:** Echtes Event-Hero mit Michael, Publikum und Raum; mindestens eine freigegebene Corporate- und eine Hochzeitsaufnahme; echtes Event-Showreel mit Poster.
- **P1 – wichtig:** Empfang, Dinner, Handpan-Detail, Aufbau/Soundcheck und Hochzeitsphasen als zusammenhängende Shootings; aktuelle Pressebilder, Artist-Profil und Technical Rider.
- **P2 – später:** Weitere Event-Impressionen, aktualisiertes Editorial-Porträt und zusätzliche Cases.

## 7. Content benötigt

- Michaels freigegebene Entstehungsgeschichte für „Über Bukkador“.
- Aktuelle Eckdaten zu Academy-Unterricht zu Hause/online, Workshop-Video und Terminen.
- Bestätigte öffentliche Termine nach September 2026; alte Termine werden derzeit nur als Archiv gezeigt.
- Verbindliche technische Details und Inhalte für Rider, Profil sowie Showreel.
- Juristisch geprüfte Impressums-, Datenschutz- und AGB-Fassungen vor öffentlichem Betrieb des Formulars.

Der Abgleich mit der alten Website steht in `CONTENT-MIGRATION.md`.

## 8. Social Proof benötigt

Freigegebene Kundennamen und Logos, mindestens ein vollständig belegbarer Eventfall (Anlass, Ort, Konzept, Ablauf, Fotos und Nutzungsrechte), Originalstimmen von Veranstaltern mit Veröffentlichungsfreigabe. Ohne diese Belege erscheinen neutrale, klar gekennzeichnete Slots. Öffentliche Termine werden nicht als Kundenreferenzen bezeichnet.

## 9. Technik

Das Formular sendet per `POST` an einen vorbereiteten Cloudflare Worker. Dieser validiert den Lead, speichert ihn 30 Tage in KV und versendet eine Benachrichtigung über Resend. Das Frontend zeigt nach Erfolg `/danke/`; `form_start`, `form_submit` und `qualified_lead` sind als DOM-Events vorhanden. Es wurde keine Analytics-Bibliothek hinzugefügt.

Der Hero und der Showreel-Bereich können ein freigegebenes MP4 über `PUBLIC_SHOWREEL_SRC` aufnehmen. Ohne Video bleiben die markierten Konzeptbilder sichtbar.

**Für den Live-Betrieb offen:** Cloudflare Worker und KV bereitstellen, Resend-Absenderdomain und API-Secret konfigurieren, `PUBLIC_EVENT_FORM_ENDPOINT` als GitHub-Variable setzen, Datenschutz rechtlich vervollständigen, Spam-Schutz ergänzen und den gesamten Versand auf der echten Domain testen. Solange kein Endpunkt gesetzt ist, ist der Senden-Button deaktiviert und die direkte E-Mail sichtbar. Der Live-Versand ist daher noch nicht aktiv. Sanity ist vorbereitet, aber ohne Projektzugang bleibt der lokale Content aktiv.

## 10. SEO und QA

Jede Hauptseite hat eigene H1, Title/Meta Description, Canonical und Open-Graph-Tags. Corporate, Hochzeit, Agenturen und beide Regionen haben getrennte Suchintentionen; Service-Strukturdaten ergänzen Person- und Website-Daten. Die Sitemap enthält die öffentlichen Seiten und schließt `/danke/` aus. Interne Links wurden geprüft.

Geprüft: Build, Astro/TypeScript, Lint, drei Worker-Tests und Browserdarstellung auf **1440 × 900** sowie **390 × 844** für alle 14 Seiten. Kein horizontaler Überlauf, keine im sichtbaren Bereich defekten Bilder; mobile Navigation und Anlass-Vorauswahl funktionieren. Ein lokaler Testdienst nahm eine Beispielanfrage an und führte zur Dankeseite. Die Browser-Konsole zeigte dabei keine Warnungen oder Fehler. Der Live-Dienst und echte Referenzen konnten mangels Zugangsdaten bzw. Material noch nicht geprüft werden.
