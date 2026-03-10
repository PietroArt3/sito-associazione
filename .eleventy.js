const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
    // 1. Copia delle cartelle (Pass-through)
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./img");
    eleventyConfig.addPassthroughCopy("doc");

    // 2. Definizione dei Dati Globali (Primo Piano)
    eleventyConfig.addGlobalData("datiPrimoPiano", () => {
        // Usiamo process.cwd() per essere sicuri di partire dalla cartella principale
        const percorsoCartella = path.join(process.cwd(), "img", "in_primo_piano");

        const fileTitolo = path.join(percorsoCartella, "titolo.txt");
        const fileTesto = path.join(percorsoCartella, "testo.txt");

        let contenutoTitolo = null;
        let contenutoTesto = null;

        try {
            if (fs.existsSync(fileTitolo)) {
                contenutoTitolo = fs.readFileSync(fileTitolo, "utf8").trim();
                console.log("✅ Titolo trovato!");
            } else {
                console.log("❌ Titolo NON trovato in:", fileTitolo);
            }

            if (fs.existsSync(fileTesto)) {
                contenutoTesto = fs.readFileSync(fileTesto, "utf8").trim();
                console.log("✅ Testo trovato!");
            }
        } catch (err) {
            console.log("⚠️ Errore durante la lettura dei file .txt:", err);
        }

        return {
            titolo: contenutoTitolo,
            testo: contenutoTesto
        };
    });

    // 3. Configurazione Percorsi Input/Output
    return {
        dir: {
            input: "src",    // Le tue bozze sono qui
            output: "public" // Il sito finito andrà qui
        },
    };
};