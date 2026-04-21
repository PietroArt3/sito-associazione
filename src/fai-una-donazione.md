---
layout: base.njk
title: "Fai una donazione"
---

# AMO vive grazie alla tua generosità!

Per sostenere AMO puoi fare una donazione presso la nostra segreteria al piano terra dell’Ospedale Ramazzini di Carpi, oppure tramite versamento bancario.

<div style="display: inline-block; padding: 8px 20px; background: #e1f0ff; color: #004a99; border-radius: 50px; font-weight: bold; margin-bottom: 30px;">
    ✨ Le offerte sono deducibili dal proprio reddito
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

<img src="/img/5permille.jpg" alt="Sostieni AMO" class="donazione-img">

<script>
function copiaTesto(idElemento, btn) {
  const testo = document.getElementById(idElemento).innerText;
  const originalHTML = btn.innerHTML;
  const originalBG = btn.style.background;

  navigator.clipboard.writeText(testo).then(() => {
    btn.innerHTML = '✓ Copiato!';
    btn.style.background = "#28a745";
    
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = originalBG;
    }, 2000);
  });
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