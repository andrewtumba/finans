# Bruksguide - Finansielt Dashboard

## Kom i gang

### 1. Åpne dashboardet
- Åpne `index.html` i en moderne nettleser (Chrome, Firefox, Safari, Edge)
- Du ser nå hovedsiden med et tomt dashboard

### 2. Last demo data (anbefalt for første gang)
- Klikk på "Last demo data"-knappen øverst til høyre
- Dette laster inn eksempeldata for 5 norske selskaper
- Nå kan du utforske alle funksjoner med ekte data

### 3. Eller legg til egne selskaper
- Klikk "Legg til selskap"
- Skriv inn selskapsnavn og ticker (valgfri)
- Klikk "Legg til"

## Navigering

### Dashboard (hovedside)
- **Nøkkeltall-kort**: Viser sammendrag av alle selskaper
- **Selskapstabell**: Oversikt med fargekoding for risiko
  - 🟢 Grønn = Lav risiko
  - 🟡 Gul = Middels risiko  
  - 🔴 Rød = Høy risiko

### Datafangst
Her legger du inn finansielle data for hvert selskap:

1. **Velg selskap**: Skriv eller velg fra dropdown
2. **Velg år**: 2015-2024 tilgjengelig
3. **Fyll ut nøkkeltall**:
   - **Marginer**: EBITDA, drifts- og nettemargin
   - **Lønnsomhet**: ROE, ROA, ROIC
   - **Gjeld**: D/E ratio, rentedekningsgrad, egenkapitalandel
   - **Utbytte**: Utbytte per aksje, payout ratio, yield
   - **Risiko**: Beta og volatilitet
4. **Klikk "Lagre data"**

### Analysesider

#### Marginer
- Velg selskap fra dropdown
- Se utvikling i EBITDA-, drifts- og nettemargin over tid
- Linjegrafer viser trender

#### Lønnsomhet  
- Sammenlign ROE, ROA og ROIC
- Søylediagrammer for hvert år
- Identifiser lønnsomhetstrender

#### Gjeld
- Overvåk D/E ratio og rentedekningsgrad
- Se egenkapitalandel over tid
- Spot gjeldsrisiko tidlig

#### Utbytte
- Spor utbytte per aksje
- Analyser payout ratio og yield
- Vurder utbyttestabilitet

#### Risikoanalyse
- **Risikomatrise**: Oversikt over alle risikofaktorer
- **Fargekoding**: Automatisk kategorisering
- **Samlet risiko**: Kombinert vurdering

## Eksport og backup

### Excel-eksport
- Klikk "Eksporter til Excel" øverst til høyre
- Får en komplett Excel-fil med:
  - Dashboard-oversikt
  - Separate ark per selskap
  - Risikoanalyse

### Datalagring
- Data lagres automatisk i nettleseren
- Ingen data sendes til servere
- For backup: eksporter til Excel regelmessig

## Risikofargekoding

Systemet bruker automatisk fargekoding basert på disse grenseverdiene:

### D/E Ratio (Gjeld-til-egenkapital)
- 🟢 **Lav (≤1.0)**: Konservativ gjeldsbruk
- 🟡 **Middels (1.0-2.0)**: Moderat gjeldsbruk  
- 🔴 **Høy (>2.0)**: Høy gjeldsrisiko

### Beta (Markedsrisiko)
- 🟢 **Lav (≤1.2)**: Lavere volatilitet enn markedet
- 🟡 **Middels (1.2-1.5)**: Moderat markedsrisiko
- 🔴 **Høy (>1.5)**: Høy volatilitet

### Payout Ratio (Utbytteandel)
- 🟢 **Lav (≤60%)**: Bærekraftig utbyttepolitikk
- 🟡 **Middels (60-80%)**: Moderat utbytterisiko
- 🔴 **Høy (>80%)**: Høy utbytterisiko

### Samlet risiko
Beregnes basert på kombinasjon av:
- D/E ratio
- Beta
- Payout ratio  
- Rentedekningsgrad

## Tips for effektiv bruk

### Datainnsamling
1. **Start med de viktigste tallene**: ROE, D/E, dividend yield
2. **Bruk årsrapporter**: Mest pålitelig kilde
3. **Vær konsistent**: Samme definisjoner for alle selskaper
4. **Oppdater regelmessig**: Nye kvartalstall og årsrapporter

### Analyse
1. **Se på trender**: Ikke bare siste år
2. **Sammenlign bransjer**: Ulike bransjer har ulike normalverdier
3. **Kombiner nøkkeltall**: Ikke fokuser på bare ett tall
4. **Bruk risikomatrisen**: Få raskt oversikt over risikofaktorer

### Porteføljehåndtering
1. **Diversifiser risiko**: Ikke for mange høyrisiko-selskaper
2. **Overvåk endringer**: Sett opp regelmessig gjennomgang
3. **Bruk eksport**: Lag rapporter for møter/presentasjoner

## Feilsøking

### Data forsvinner
- Sjekk at du ikke bruker privat/inkognito-modus
- Eksporter til Excel som backup
- Ikke slett nettleserdata uten backup

### Diagrammer vises ikke
- Sjekk internettforbindelse (Chart.js laster fra CDN)
- Prøv å oppdatere siden
- Velg selskap fra dropdown først

### Excel-eksport fungerer ikke
- Sjekk internettforbindelse (xlsx-bibliotek laster fra CDN)
- Prøv en annen nettleser
- Kontroller at popup-blokkering er avslått

## Google Sheets-alternativ

For de som foretrekker Google Sheets:
1. Se `Google_Sheets_Template.md` for detaljert oppsett
2. Bruk GOOGLEFINANCE-formler for automatisk datafangst
3. Sett opp betinget formatering for risikofargekoding

## Kontakt og support

- Les README.md for teknisk informasjon
- Sjekk Google_Sheets_Template.md for Sheets-oppsett
- Opprett issue på GitHub for problemer eller forslag

---

**Lykke til med finansanalysen! 📊💼**