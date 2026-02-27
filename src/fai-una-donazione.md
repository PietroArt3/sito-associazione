---
layout: base.njk
title: "Fai una donazione"
---

# AMO Vive Grazie alla tua Generosità!

Per sostenere AMO puoi fare una donazione presso la segreteria Amo al piano terra dell’ingresso dell’Ospedale Ramazzini di Carpi, o puoi fare un versamento bancario.

**Le offerte sono deducibili dal proprio reddito:**

<br>

<p>
  <strong>Unicredit Banca:</strong> 
  <span id="testoDaCopiare">IT 02 J 02008 23313 000028482407</span>
  <button onclick="copiaTesto('testoDaCopiare',this)" style="margin-left: 10px; cursor: pointer; border: none; background: #eee; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem;">
    <i class="fa-regular fa-copy"></i> Copia
  </button>
</p>
<p>
  <strong>BPER:</strong> 
  <span id="testoDaCopiare2">IT 91 T 05387 23300 000001125000</span>
  <button onclick="copiaTesto('testoDaCopiare2',this)" style="margin-left: 10px; cursor: pointer; border: none; background: #eee; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem;">
    <i class="fa-regular fa-copy"></i> Copia
  </button>
</p>
<p>
  <strong>BSGSP:</strong> 
  <span id="testoDaCopiare3">IT 11 Y 05034 23301 000000000899</span>
  <button onclick="copiaTesto('testoDaCopiare3',this)" style="margin-left: 10px; cursor: pointer; border: none; background: #eee; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem;">
    <i class="fa-regular fa-copy"></i> Copia
  </button>
</p>

<br>

<script>
function copiaTesto(idElemento, btn) {
  // Ora la funzione riceve l'ID specifico e il pulsante cliccato
  const testo = document.getElementById(idElemento).innerText;
  const originalHTML = btn.innerHTML;
  const originalBG = btn.style.background;

  navigator.clipboard.writeText(testo).then(() => {
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Copiato!';
    btn.style.background = "#d4edda"; 
    
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = originalBG || "#eee";
    }, 2000);
  });
}
</script>


## CINQUEPERMILLE
Nella dichiarazione dei redditi puoi devolvere (senza nessun aggravio per il contribuente) il 5 per mille dell’IRPEF ad AMO. **Ci aiuterai a realizzare i nostri progetti a favore dei pazienti oncologici**.

Basta riportare il codice fiscale di AMO:


# **90014880364**

**INSIEME CONTIAMO**
<div style="flex: 1; min-width: 400px;">
<div style="text-align: center;">
    <img src="/img/5permille.jpg" alt="I nostri volontari" style="width: 80%; border-radius: 12px; shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </div>
</div>