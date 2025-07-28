# Finansielt Dashboard

Et omfattende finansielt analyseverktøy for å spore og analysere nøkkeltall for selskaper over tid. Systemet tilbyr både en moderne web-applikasjon og Google Sheets-mal for fleksibel bruk.

## 🚀 Funksjoner

### Dashboard
- **Nøkkeltall-oversikt**: Sammendrag av ROE, ROA, D/E ratio, beta, payout ratio og utbytteyield
- **Selskapsoversikt**: Tabellvisning av alle selskaper med fargekoding for risiko
- **Automatiske beregninger**: Gjennomsnittsverdier og trender

### Datafangst
- **Enkel datainput**: Strukturert skjema for alle finansielle nøkkeltall
- **10-års historikk**: Støtte for data fra 2015-2024
- **Automatisk lagring**: Data lagres lokalt i nettleseren

### Spesialiserte analysesider

#### Marginer
- EBITDA-margin
- Driftsmargin  
- Nettemargin
- Interaktive diagrammer med tidsserier

#### Lønnsomhet
- Return on Equity (ROE)
- Return on Assets (ROA)
- Return on Invested Capital (ROIC)
- Sammenlignende analyse

#### Gjeld og Soliditet
- Debt-to-Equity ratio
- Rentedekningsgrad
- Egenkapitalandel
- Risikoindikatorer

#### Utbytte
- Utbytte per aksje
- Payout ratio
- Dividend yield
- Utbyttehistorikk

#### Risikoanalyse
- **Fargekoding**: Automatisk risikokategorisering
  - 🔴 **Høy risiko**: D/E > 2, Beta > 1.5, Payout > 80%
  - 🟡 **Middels risiko**: D/E > 1, Beta > 1.2, Payout > 60%
  - 🟢 **Lav risiko**: Under grenseverdiene
- **Risikomatrise**: Oversikt over alle risikofaktorer
- **Samlet risikovurdering**: Kombinert score basert på flere faktorer

## 📊 Tekniske funksjoner

### Web-applikasjon
- **Moderne UI**: Responsivt design med glassmorfisme-effekter
- **Interaktive diagrammer**: Chart.js for visualisering
- **Excel-eksport**: Full eksport av alle data til Excel-format
- **Lokal lagring**: Data lagres i nettleserens localStorage

### Google Sheets-integrasjon
- **GOOGLEFINANCE-formler**: Automatisk datafangst for børsnoterte selskaper
- **Betinget formatering**: Automatisk fargekoding basert på risiko
- **Automatiske beregninger**: Formler for alle nøkkeltall
- **Strukturerte ark**: Separate ark for hver analysekategori

## 🛠 Installasjon og bruk

### Web-applikasjon
1. Last ned alle filer til en mappe
2. Åpne `index.html` i en moderne nettleser
3. Start med å legge til selskaper via "Legg til selskap"-knappen
4. Gå til "Datafangst"-fanen for å legge inn finansielle data
5. Utforsk de ulike analysesidene

### Google Sheets
1. Opprett et nytt Google Sheets-dokument
2. Følg instruksjonene i `Google_Sheets_Template.md`
3. Sett opp arkstrukturen som beskrevet
4. Konfigurer GOOGLEFINANCE-formler for automatisk datafangst
5. Legg til betinget formatering for risikofargekoding

## 📈 Bruksscenarios

### Porteføljeanalyse
- Sammenlign flere selskaper side ved side
- Identifiser trender over tid
- Spot risikosignaler tidlig

### Investeringsvurdering
- Analyser lønnsomhetstrender
- Vurder gjeldsbelastning
- Evaluer utbyttepolitikk

### Risikostyring
- Automatisk flagging av høyrisiko-investeringer
- Overvåk endringer i risikoprofil
- Diversifiseringsanalyse

## 🎯 Nøkkeltall som spores

### Lønnsomhet
- **ROE**: Return on Equity
- **ROA**: Return on Assets  
- **ROIC**: Return on Invested Capital
- **EBITDA-margin**: Driftsresultat før avskrivninger
- **Driftsmargin**: Operasjonell lønnsomhet
- **Nettemargin**: Bunnlinje-lønnsomhet

### Soliditet
- **D/E Ratio**: Gjeld-til-egenkapital
- **Rentedekningsgrad**: Evne til å betjene gjeld
- **Egenkapitalandel**: Finansiell stabilitet

### Utbytte
- **Utbytte per aksje**: Absolutt utbetaling
- **Payout Ratio**: Andel av overskudd som utbetales
- **Dividend Yield**: Utbytteavkastning

### Risiko
- **Beta**: Markedsrisiko relativt til indeks
- **Volatilitet**: Prissvingninger
- **Samlet risikoscore**: Kombinert vurdering

## 🔧 Teknisk arkitektur

### Frontend
- **HTML5**: Semantisk struktur
- **CSS3**: Moderne styling med CSS Grid og Flexbox
- **JavaScript ES6+**: Modulær objektorientert kode
- **Chart.js**: Diagrammer og visualisering
- **SheetJS**: Excel-eksport funksjonalitet

### Datalagring
- **localStorage**: Lokal lagring i nettleser
- **JSON**: Strukturert dataformat
- **Excel**: Eksport til .xlsx format

### Google Sheets-integrasjon
- **GOOGLEFINANCE**: Automatisk markedsdata
- **Google Apps Script**: Avansert automatisering
- **Betinget formatering**: Visuell risikokoding

## 📱 Responsivt design

Dashboardet er optimalisert for:
- 🖥 **Desktop**: Full funksjonalitet med alle diagrammer
- 📱 **Mobile**: Tilpasset layout for mindre skjermer
- 📱 **Tablet**: Mellomformat med god brukervennlighet

## 🔒 Datasikkerhet

- **Lokal lagring**: Data lagres kun lokalt på din enhet
- **Ingen skylagring**: Ingen sensitive data sendes til eksterne servere
- **Backup-muligheter**: Excel-eksport for sikkerhetskopi

## 🆕 Fremtidige utvidelser

- **API-integrasjon**: Automatisk datafangst fra finansielle tjenester
- **Flere nøkkeltall**: Utvidet analyserepertoar
- **Sammenligning**: Benchmarking mot bransje/indeks
- **Prognoser**: Trendanalyse og fremskrivninger
- **Rapporter**: Automatisk generering av analyserapporter

## 🤝 Bidrag

Dette er et åpen kildekode-prosjekt. Bidrag er velkommen:
1. Fork repositoriet
2. Opprett en feature branch
3. Commit endringene
4. Opprett en Pull Request

## 📞 Support

For spørsmål eller problemer:
- Sjekk dokumentasjonen i `Google_Sheets_Template.md`
- Opprett en issue i repositoriet
- Kontakt utvikleren direkte

## 📄 Lisens

MIT License - se LICENSE-fil for detaljer.

---

**Laget for finansielle analytikere, investorer og alle som ønsker bedre innsikt i selskapers finansielle helse.**
