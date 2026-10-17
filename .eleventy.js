const path = require("path");
const Image = require("@11ty/eleventy-img").default;

module.exports = function(eleventyConfig) {
    // 1. Copia delle cartelle (Pass-through)
    // strumenti.txt contiene solo appunti interni: resta nella cartella ma non viene pubblicato
    eleventyConfig.addPassthroughCopy("./img", {
        filter: (percorso) => path.basename(percorso) !== "strumenti.txt"
    });
    eleventyConfig.addPassthroughCopy("doc");

    // 2. Foto caricate dal pannello (Pages CMS)
    // Le foto fatte col telefono pesano diversi MB: in homepage se ne usa una copia rimpicciolita.
    // Se la foto non si riesce a elaborare si usa l'originale, così la pubblicazione non si blocca.
    eleventyConfig.addAsyncFilter("fotoRidotta", async function(percorso, larghezza) {
        try {
            const risultato = await Image(path.join(process.cwd(), percorso), {
                widths: [larghezza],
                formats: ["webp"],
                outputDir: path.join(process.cwd(), "public", "img", "ridotte"),
                urlPath: "/img/ridotte/"
            });
            return risultato.webp[0].url;
        } catch (err) {
            console.log("⚠️ Impossibile rimpicciolire la foto, uso l'originale:", percorso, err.message);
            return percorso;
        }
    });

    // 3. Configurazione Percorsi Input/Output
    return {
        dir: {
            input: "src",    // Le tue bozze sono qui
            output: "public" // Il sito finito andrà qui
        },
    };
};
