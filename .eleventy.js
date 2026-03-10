module.exports = function(eleventyConfig) {
    // Copia CSS e Immagini nella cartella finale senza modificarli
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./img");
    eleventyConfig.addPassthroughCopy("doc");

    const fs = require("fs");
    const path = require("path");

    module.exports = function(eleventyConfig) {

        eleventyConfig.addGlobalData("datiPrimoPiano", () => {
            // Proviamo a comporre il percorso partendo dalla posizione di questo file (.eleventy.js)
            // Se la cartella img è nella root insieme a questo file, il percorso è "./img/in_primo_piano"
            const percorsoCartella = path.join(process.cwd(), "img", "in_primo_piano");

            const fileTitolo = path.join(percorsoCartella, "titolo.txt");
            const fileTesto = path.join(percorsoCartella, "testo.txt");

            let contenutoTitolo = null;
            let contenutoTesto = null;

            try {
                if (fs.existsSync(fileTitolo)) {
                    contenutoTitolo = fs.readFileSync(fileTitolo, "utf8").trim();
                    console.log("✅ Titolo trovato!"); // Questo apparirà nel tuo terminale
                } else {
                    console.log("❌ Titolo NON trovato in:", fileTitolo);
                }

                if (fs.existsSync(fileTesto)) {
                    contenutoTesto = fs.readFileSync(fileTesto, "utf8").trim();
                    console.log("✅ Testo trovato!");
                }
            } catch (err) {
                console.log("⚠️ Errore durante la lettura:", err);
            }

            return {
                titolo: contenutoTitolo,
                testo: contenutoTesto
            };
        });

        eleventyConfig.addPassthroughCopy("img");
    };

    return {
        dir: {
            input: "src",    // Le tue bozze sono qui
            output: "public" // Il sito finito andrà qui
        },
    };
};