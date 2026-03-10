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

        eleventyConfig.addGlobalData("datiPrimoPiano", () => {
            // Specifica il percorso corretto della cartella
            const cartella = path.join(__dirname, "img/in_primo_piano/");

            try {
                return {
                    // Legge i file se esistono
                    titolo: fs.existsSync(path.join(cartella, "titolo.txt"))
                        ? fs.readFileSync(path.join(cartella, "titolo.txt"), "utf8").trim()
                        : null,
                    testo: fs.existsSync(path.join(cartella, "testo.txt"))
                        ? fs.readFileSync(path.join(cartella, "testo.txt"), "utf8").trim()
                        : null
                };
            } catch (e) {
                // In caso di errore critico (es. cartella mancante), restituisce tutto vuoto
                return { titolo: null, testo: null };
            }
        });

        eleventyConfig.addPassthroughCopy("img");
    };
};