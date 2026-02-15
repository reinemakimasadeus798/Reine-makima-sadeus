importer crypto depuis 'crypto';
importer fs depuis 'fs/promises';

const FICHIER = 'base de données/digix2/shadow.enc';
const SECRET = process.env.OWNER_KEY || 'Digix-crew';

const ALGO = 'aes-256-cbc';

fonction getKey() {
  return crypto.createHash('sha256').update(SECRET).digest();
}

export async function encryptOwners(ownerArray) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGO, getKey(), iv);

  let encrypted = cipher.update(JSON.stringify(ownerArray), 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const payload = iv.toString('hex') + ':' + encrypted;
  attendre fs.writeFile(FILE, payload);
}

export async function decryptOwners() {
  essayer {
    const data = await fs.readFile(FILE, 'utf8');
    const [ivHex, encrypted] = data.split(':');

    const déchiffrer = crypto.createDecipheriv(
      ALGO,
      obtenirKey(),
      Buffer.from(ivHex, 'hex')
    );

    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    décrypté += déchiffrer.final('utf8');

    renvoie JSON.parse(décrypté);
  } attraper {
    retour [];
  }
}