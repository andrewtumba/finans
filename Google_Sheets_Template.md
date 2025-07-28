# Google Sheets Finansielt Dashboard - Mal og Instruksjoner

## Arkstruktur

### 1. Dashboard (Hovedark)
```
A1: Finansielt Dashboard - Oversikt
A3: Selskap | B3: ROE (%) | C3: ROA (%) | D3: D/E | E3: Beta | F3: Payout (%) | G3: Dividend Yield (%) | H3: EBITDA Margin (%) | I3: Risiko

Formler for automatisk oppdatering:
B4: =IFERROR(INDEX(ROE!B:B,MATCH(A4,ROE!A:A,0)),"")
C4: =IFERROR(INDEX(ROA!B:B,MATCH(A4,ROA!A:A,0)),"")
D4: =IFERROR(INDEX(Gjeld!B:B,MATCH(A4,Gjeld!A:A,0)),"")
```

### 2. Datafangst (Data Input)
```
A1: Selskapsnavn | B1: Ticker | C1: År | D1-R1: [Alle finansielle nøkkeltall]

Kolonner:
A: Selskapsnavn
B: Ticker (for GOOGLEFINANCE)
C: År
D: EBITDA Margin (%)
E: Driftsmargin (%)
F: Nettemargin (%)
G: ROE (%)
H: ROA (%)
I: ROIC (%)
J: D/E Ratio
K: Rentedekningsgrad
L: Egenkapitalandel (%)
M: Utbytte per aksje (NOK)
N: Payout Ratio (%)
O: Dividend Yield (%)
P: Beta
Q: Volatilitet (%)
R: Markedsverdi (automatisk)
```

### 3. GOOGLEFINANCE Formler
```
For automatisk datafangst (sett inn i Datafangst-arket):

Markedsverdi (kolonne R):
=IFERROR(GOOGLEFINANCE(B2,"marketcap"),"")

Aksjekurs:
=IFERROR(GOOGLEFINANCE(B2,"price"),"")

Beta (hvis tilgjengelig):
=IFERROR(GOOGLEFINANCE(B2,"beta"),"")

P/E Ratio:
=IFERROR(GOOGLEFINANCE(B2,"pe"),"")

52-ukers høy/lav:
=IFERROR(GOOGLEFINANCE(B2,"high52"),"")
=IFERROR(GOOGLEFINANCE(B2,"low52"),"")
```

### 4. Marginer Ark
```
A1: Selskap | B1: 2015 | C1: 2016 | ... | L1: 2024

EBITDA Margin:
A2: [Selskapsnavn]
B2: =IFERROR(INDEX(Datafangst!D:D,MATCH(A2&"2015",Datafangst!A:A&Datafangst!C:C,0)),"")

Driftsmargin:
A10: [Selskapsnavn] 
B10: =IFERROR(INDEX(Datafangst!E:E,MATCH(A10&"2015",Datafangst!A:A&Datafangst!C:C,0)),"")

Nettemargin:
A18: [Selskapsnavn]
B18: =IFERROR(INDEX(Datafangst!F:F,MATCH(A18&"2015",Datafangst!A:A&Datafangst!C:C,0)),"")
```

### 5. Lønnsomhet Ark
```
ROE Seksjon:
A1: ROE (%) | B1: 2015 | C1: 2016 | ... | L1: 2024
A2: [Selskapsnavn]
B2: =IFERROR(INDEX(Datafangst!G:G,MATCH(A2&"2015",Datafangst!A:A&Datafangst!C:C,0)),"")

ROA Seksjon:
A10: ROA (%) | B10: 2015 | C10: 2016 | ... | L10: 2024
A11: [Selskapsnavn]
B11: =IFERROR(INDEX(Datafangst!H:H,MATCH(A11&"2015",Datafangst!A:A&Datafangst!C:C,0)),"")

ROIC Seksjon:
A19: ROIC (%) | B19: 2015 | C19: 2016 | ... | L19: 2024
A20: [Selskapsnavn]
B20: =IFERROR(INDEX(Datafangst!I:I,MATCH(A20&"2015",Datafangst!A:A&Datafangst!C:C,0)),"")
```

### 6. Gjeld Ark
```
D/E Ratio:
A1: D/E Ratio | B1: 2015 | C1: 2016 | ... | L1: 2024
A2: [Selskapsnavn]
B2: =IFERROR(INDEX(Datafangst!J:J,MATCH(A2&"2015",Datafangst!A:A&Datafangst!C:C,0)),"")

Rentedekningsgrad:
A10: Rentedekningsgrad | B10: 2015 | C10: 2016 | ... | L10: 2024
A11: [Selskapsnavn]
B11: =IFERROR(INDEX(Datafangst!K:K,MATCH(A11&"2015",Datafangst!A:A&Datafangst!C:C,0)),"")
```

### 7. Utbytte Ark
```
Utbytte per aksje:
A1: Utbytte per aksje | B1: 2015 | C1: 2016 | ... | L1: 2024
A2: [Selskapsnavn]
B2: =IFERROR(INDEX(Datafangst!M:M,MATCH(A2&"2015",Datafangst!A:A&Datafangst!C:C,0)),"")

Payout Ratio:
A10: Payout Ratio (%) | B10: 2015 | C10: 2016 | ... | L10: 2024
A11: [Selskapsnavn]
B11: =IFERROR(INDEX(Datafangst!N:N,MATCH(A11&"2015",Datafangst!A:A&Datafangst!C:C,0)),"")

Dividend Yield:
A19: Dividend Yield (%) | B19: 2015 | C19: 2016 | ... | L19: 2024
A20: [Selskapsnavn]
B20: =IFERROR(INDEX(Datafangst!O:O,MATCH(A20&"2015",Datafangst!A:A&Datafangst!C:C,0)),"")
```

### 8. Risikoanalyse Ark
```
A1: Selskap | B1: Beta | C1: D/E Risiko | D1: Payout Risiko | E1: Volatilitet | F1: Samlet Risiko

Risiko formler:
C2: =IF(INDEX(Gjeld!B:B,MATCH(A2,Gjeld!A:A,0))>2,"Høy",IF(INDEX(Gjeld!B:B,MATCH(A2,Gjeld!A:A,0))>1,"Middels","Lav"))

D2: =IF(INDEX(Utbytte!B11:L11,MATCH(A2,Utbytte!A11:A21,0))>80,"Høy",IF(INDEX(Utbytte!B11:L11,MATCH(A2,Utbytte!A11:A21,0))>60,"Middels","Lav"))

F2: =IF(COUNTIF(C2:E2,"Høy")>=2,"Høy",IF(COUNTIF(C2:E2,"Høy")>=1,"Middels","Lav"))
```

## Betinget formatering for risikofargekoding

### Dashboard risikokoding:
1. Velg kolonne I (Risiko)
2. Format → Betinget formatering
3. Regler:
   - "Høy" = Rød bakgrunn (#ff4444)
   - "Middels" = Gul bakgrunn (#ffaa00)
   - "Lav" = Grønn bakgrunn (#00aa44)

### D/E Ratio fargekoding:
1. Velg D/E kolonner
2. Betinget formatering:
   - >2 = Rød
   - >1 = Gul
   - <=1 = Grønn

### Beta fargekoding:
1. Velg Beta kolonner
2. Betinget formatering:
   - >1.5 = Rød
   - >1.2 = Gul
   - <=1.2 = Grønn

### Payout Ratio fargekoding:
1. Velg Payout kolonner
2. Betinget formatering:
   - >80% = Rød
   - >60% = Gul
   - <=60% = Grønn

## Automatisering og oppdatering

### Daglig oppdatering:
```
1. GOOGLEFINANCE oppdateres automatisk for børsnoterte selskaper
2. Historiske data må legges inn manuelt
3. Bruk Script Editor for avansert automatisering
```

### Google Apps Script for automatisering:
```javascript
function updateFinancialData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Datafangst');
  var tickers = sheet.getRange('B:B').getValues();
  
  for (var i = 1; i < tickers.length; i++) {
    if (tickers[i][0] !== '') {
      // Oppdater markedsverdi
      var marketCap = '=GOOGLEFINANCE("' + tickers[i][0] + '","marketcap")';
      sheet.getRange(i+1, 18).setFormula(marketCap);
      
      // Oppdater beta hvis tilgjengelig
      var beta = '=GOOGLEFINANCE("' + tickers[i][0] + '","beta")';
      sheet.getRange(i+1, 16).setFormula(beta);
    }
  }
}
```

## Oppsettsguide

1. **Opprett nytt Google Sheets dokument**
2. **Lag arkene:** Dashboard, Datafangst, Marginer, Lønnsomhet, Gjeld, Utbytte, Risikoanalyse
3. **Sett opp kolonnestrukturen** som beskrevet over
4. **Legg inn formler** for automatisk beregning
5. **Konfigurer betinget formatering** for risikofargekoding
6. **Test med eksempeldata**
7. **Sett opp automatisk oppdatering** hvis ønskelig

## Tips for bruk

- Bruk norske ticker-symboler med .OL suffix (f.eks. "EQUI.OL" for Equinor)
- GOOGLEFINANCE fungerer best med store, likvide aksjer
- Historiske data må ofte legges inn manuelt
- Lag backup av data regelmessig
- Bruk navngitte områder for enklere formelreferanser

## Eksempel på ferdig oppsett

```
Dashboard!A4: Equinor
Dashboard!B4: =IFERROR(INDEX(Lønnsomhet!B2:L2,COLUMNS(Lønnsomhet!B2:L2)),"")
Dashboard!I4: =IF(COUNTIF(C4:H4,">kritisk_verdi")>=2,"Høy","Lav")
```

Denne malen gir deg et komplett finansielt dashboard som kan brukes direkte i Google Sheets med automatisk oppdatering og risikofargekoding.