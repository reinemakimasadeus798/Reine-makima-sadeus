importer fs depuis "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(texte) {
  retour {
    texte : stylizedChar(texte),
    contextInfo: {
      externalAdReply: {
        titre : "Digix bot",
        corps : "Dan jersey",
        vignette : fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com",
        type de média : 1,
        renderLargerThumbnail: false
      }
    }
  }
}