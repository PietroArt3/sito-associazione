---
layout: base.njk
title: "Fai una donazione"
description: "Sostieni AMO Carpi con una donazione, diventando socio o devolvendo il 5x1000: coordinate bancarie e codice fiscale."
---

# AMO vive grazie alla tua generosità!

Per sostenere AMO puoi fare una donazione presso la nostra segreteria al piano terra dell’Ospedale Ramazzini di Carpi, oppure tramite versamento bancario.

<div style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; background: #e1f0ff; color: #004a99; border-radius: 50px; font-weight: bold; margin-bottom: 30px;">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" style="flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    Le offerte sono deducibili dal proprio reddito
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-bottom: 40px;">

<div style="background: white; border: 2px solid #eee; border-radius: 20px; padding: 25px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); display: flex; flex-direction: column;">

### Versamento Bancario

**Unicredit Banca**
<div style="display: flex; align-items: center; justify-content: space-between; background: #f8f9fa; padding: 10px; border-radius: 8px; border: 1px solid #ddd; margin-bottom: 15px;">
    <span id="iban1" style="font-family: monospace; font-weight: bold; font-size: 0.85rem;">IT 02 J 02008 23313 000028482407</span>
    <button onclick="copiaTesto('iban1', this)" style="cursor: pointer; border: none; background: #004a99; color: white; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem;">Copia</button>
</div>

**BPER**
<div style="display: flex; align-items: center; justify-content: space-between; background: #f8f9fa; padding: 10px; border-radius: 8px; border: 1px solid #ddd; margin-bottom: 15px;">
    <span id="iban2" style="font-family: monospace; font-weight: bold; font-size: 0.85rem;">IT 91 T 05387 23300 000001125000</span>
    <button onclick="copiaTesto('iban2', this)" style="cursor: pointer; border: none; background: #004a99; color: white; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem;">Copia</button>
</div>

**BSGSP**
<div style="display: flex; align-items: center; justify-content: space-between; background: #f8f9fa; padding: 10px; border-radius: 8px; border: 1px solid #ddd;">
    <span id="iban3" style="font-family: monospace; font-weight: bold; font-size: 0.85rem;">IT 11 Y 05034 23301 000000000899</span>
    <button onclick="copiaTesto('iban3', this)" style="cursor: pointer; border: none; background: #004a99; color: white; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem;">Copia</button>
</div>

</div>

<div style="background: #fdfdfd; border: 2px solid #0066cc; border-radius: 20px; padding: 25px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); text-align: center; display: flex; flex-direction: column; justify-content: center;">

### Diventa Socio Ordinario

**Bastano 10 euro all'anno.**

La tessera si può fare direttamente in sede AMO oppure tramite bonifico bancario (utilizzando le coordinate qui a fianco), avendo cura di indicare i propri dati anagrafici nella causale.

<div style="margin-top: 15px; font-weight: bold; color: #0066cc;">
    Un piccolo gesto per entrare a fare parte di AMO.
</div>

</div>

<div style="background: #004a99; color: white; border-radius: 20px; padding: 25px; text-align: center; box-shadow: 0 10px 25px rgba(0,74,153,0.3); display: flex; flex-direction: column; justify-content: center;">

### CINQUE PER MILLE

Nella dichiarazione dei redditi puoi devolvere il 5x1000 dell'IRPEF ad AMO. **Ci aiuterai a realizzare i nostri progetti.**

Basta riportare il codice fiscale:

<div style="background: rgba(255,255,255,0.15); border: 2px dashed rgba(255,255,255,0.4); padding: 15px; border-radius: 12px; margin: 15px 0;">
    <span id="cf" style="font-size: 1.5rem; font-family: monospace; font-weight: 900; letter-spacing: 1px;">90014880364</span>
    <button onclick="copiaTesto('cf', this)" style="margin-top: 10px; display: block; width: 100%; cursor: pointer; border: none; background: white; color: #004a99; padding: 8px; border-radius: 8px; font-weight: bold;">Copia Codice</button>
</div>

**INSIEME CONTIAMO**

</div>
</div>

<img src="/img/5x1000.jpg" alt="Devolvi il 5x1000 ad AMO: codice fiscale 90014880364" class="donazione-img" width="1200" height="455" loading="lazy">

<script>
function copiaTesto(idElemento, btn) {
  const elemento = document.getElementById(idElemento);
  // Si copia senza spazi, così IBAN e codice fiscale si possono incollare direttamente
  const testo = elemento.innerText.replace(/\s+/g, '');

  if (btn.dataset.originalHTML === undefined) {
    btn.dataset.originalHTML = btn.innerHTML;
    btn.dataset.originalBG = btn.style.background;
    btn.dataset.originalColor = btn.style.color;
  }

  function mostraEsito(riuscito) {
    btn.innerHTML = riuscito ? '✓ Copiato!' : 'Copia non riuscita';
    btn.style.background = riuscito ? "#28a745" : "#c0392b";
    btn.style.color = "white";

    clearTimeout(btn.timerCopia);
    btn.timerCopia = setTimeout(() => {
      btn.innerHTML = btn.dataset.originalHTML;
      btn.style.background = btn.dataset.originalBG;
      btn.style.color = btn.dataset.originalColor;
    }, 2000);
  }

  // Metodo di riserva per i browser dove navigator.clipboard non è disponibile
  function copiaDiRiserva() {
    const area = document.createElement('textarea');
    area.value = testo;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    let riuscito = false;
    try { riuscito = document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(area);

    if (!riuscito) {
      // Si seleziona il testo così può essere copiato a mano
      const selezione = window.getSelection();
      const intervallo = document.createRange();
      intervallo.selectNodeContents(elemento);
      selezione.removeAllRanges();
      selezione.addRange(intervallo);
    }
    mostraEsito(riuscito);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(testo).then(() => mostraEsito(true), copiaDiRiserva);
  } else {
    copiaDiRiserva();
  }
}
</script>

<style>
    h1 { color: #004a99; text-transform: uppercase; font-weight: 800; text-align: center; margin-bottom: 20px; }
    h3 { margin-top: 0; color: #004a99; text-transform: uppercase; font-size: 1.2rem; }
    
    /* Applica lo stile solo all'immagine con questa specifica classe */
    .donazione-img { 
        width: 100%; 
        max-width: 600px; 
        border-radius: 20px; 
        display: block; 
        margin: 40px auto; 
        box-shadow: 0 15px 40px rgba(0,0,0,0.1); 
    }
    
    div[style*="background: #004a99"] h3 { color: white; }
    p { line-height: 1.6; text-align: center; }
</style>