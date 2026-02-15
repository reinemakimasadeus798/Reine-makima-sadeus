importer fs depuis 'fs'

importer le chemin depuis 'chemin'

// chemin pour la configuration

console.log('initialisation du chemin de configuration')
const configPath = 'config.json'
const premiumPath = "db.json"

//Charger la configuration au démarrage

let config = {}

si (fs.existsSync(configPath)){
    console.log('Fichier de configuration trouvé... tentative de lecture...')
    essayer {

        config = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
        console.log('Lecture du fichier de configuration réussie !')
    } attraper (e){

        console.log('erreur lors de la lecture du fichier de configuration... vérifiez config.json.')

        config = { utilisateurs: {}}
    }

} autre {

    console.log('Fichier de configuration introuvable...')

    config = { utilisateurs: {}}

}

//sauvegarde automatique

const saveConfig = () => {
    console.log('Enregistrement de la configuration dans un fichier...')
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2))
    console.log('Configuration enregistrée avec succès.')
}


//Gestion des utilisateurs premium

soit primes = {}

si (fs.existsSync(premiumPath)){
    essayer {

        primes = JSON.parse(fs.readFileSync(premiumPath, 'utf-8'))
        console.log('Chargement de l'utilisateur premium réussi !')

    } attraper (e){

        console.log('erreur lors de la lecture du fichier de configuration... vérifiez config.json.')

        primes = { premiumUser : {}}
    }
} autre {
    primes = { premiumUser: {}}
    console.log('PSF introuvable')
}

const savePremium = () => {
console.log('...PSS...')//Sauvegarde premium réussie
fs.writeFileSync(premiumPath, JSON.stringify(premiums, null, 2))
console.log('SPU réussi') // Utilisateur premium enregistré
}
export default {
    configuration,
    primes,

    enregistrerP(){
        enregistrerPremium()
    },
    sauvegarder(){
        enregistrerConfig()
    }
}