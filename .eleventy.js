module.exports = function(eleventyConfig) {
    // Copia CSS e Immagini nella cartella finale senza modificarli
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./img");
    eleventyConfig.addPassthroughCopy("doc");

    return {
        dir: {
            input: "src",    // Le tue bozze sono qui
            output: "public" // Il sito finito andrà qui
        },
    };
    const fs = require("fs");
    const path = require("path");

    module.exports = function(eleventyConfig) {

        // Creiamo i dati globali
        eleventyConfig.addGlobalData("datiPrimoPiano", () => {
            // Specifichiamo il percorso assoluto alla cartella img
            const cartellaInteressata = path.resolve(__dirname, "img/in_primo_piano");

            const fileTitolo = path.join(cartellaInteressata, "titolo.txt");
            const fileTesto = path.join(cartellaInteressata, "testo.txt");

            let contenutoTitolo = null;
            let contenutoTesto = null;

            // Controllo se i file esistono e li leggo
            if (fs.existsSync(fileTitolo)) {
                contenutoTitolo = fs.readFileSync(fileTitolo, "utf8").trim();
            }
            if (fs.existsSync(fileTesto)) {
                contenutoTesto = fs.readFileSync(fileTesto, "utf8").trim();
            }

            // Restituisco l'oggetto (anche se i valori sono null)
            return {
                titolo: contenutoTitolo,
                testo: contenutoTesto
            };
        });

        // Copia la cartella img nel sito finale
        eleventyConfig.addPassthroughCopy("img");

        // Ritorna la configurazione (fondamentale!)
        return {
            dir: {
                input: ".",
                output: "_site"
            }
        };
    };
};