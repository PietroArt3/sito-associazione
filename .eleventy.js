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
            // IMPORTANTE: Se i tuoi file sono in una sottocartella (es. 'src/img'),
            // scrivi path.join(__dirname, "src", "img", "in_primo_piano")
            const cartella = path.join(__dirname, "img", "in_primo_piano");

            // Verifichiamo se i file esistono fisicamente
            const pathTitolo = path.join(cartella, "titolo.txt");
            const pathTesto = path.join(cartella, "testo.txt");

            let titoloContenuto = null;
            let testoContenuto = null;

            if (fs.existsSync(pathTitolo)) {
                titoloContenuto = fs.readFileSync(pathTitolo, "utf8").trim();
            }

            if (fs.existsSync(pathTesto)) {
                testoContenuto = fs.readFileSync(pathTesto, "utf8").trim();
            }

            return {
                titolo: titoloContenuto,
                testo: testoContenuto
            };
        });

        eleventyConfig.addPassthroughCopy("img");
    };
};