const fruits = ["pomme", "banane", "poire"];

console.log("Premier fruit :", fruits[0]);
console.log("Dernier fruit :", fruits[fruits.length - 1]);

fruits[1] = "kiwi";

console.log("Tableau modifié :", fruits);
console.log("Longueur :", fruits.length);
////
fruits.push("mangue");
const last = fruits.pop();

fruits.unshift("fraise");
const first = fruits.shift();

const quelquesFruits = fruits.slice(0, 2);

fruits.splice(1, 1, "abricot");

console.log({ last, first, fruits, quelquesFruits });
////
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i]}`);
}
///
for (const fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}
///
fruits.forEach(fruit => console.log(`Fruit: ${fruit}`));
///
const notes = [12, 8, 17, 5, 14, 19, 10];
const bonifiees = notes.map(n => Math.min(n + 1, 20));

const admissibles = notes.filter(n => n >= 10);
const moyenne = notes.reduce((acc, n) => acc + n, 0) / notes.length;
const premiereFaible = notes.find(n => n < 10);
const aMentionTB = notes.some(n => n >= 18);
const toutesAdmissibles = notes.every(n => n >= 10);

console.log({
  bonifiees,
  admissibles,
  moyenne,
  premiereFaible,
  aMentionTB,
  toutesAdmissibles
});
////
const asc = [...notes].sort((a, b) => a - b);
const desc = [...notes].sort((a, b) => b - a);

console.log({ asc, desc });
/////
const etudiant = {
  prenom: "Lina",
  nom: "Durand",
  age: 21,
  notes: [14, 16, 12],
  moyenne() {
    const s = this.notes.reduce((a, n) => a + n, 0);
    return s / this.notes.length;
  }
};
console.log(etudiant.prenom);
console.log(etudiant["nom"]);
console.log(etudiant.moyenne());
///
etudiant.age = 22;
etudiant.filiere = "Informatique";
delete etudiant.filiere;            
console.log(Object.keys(etudiant));
//////
const { prenom, nom, ville = "(inconnue)" } = etudiant;
console.log(`${prenom} ${nom} — ${ville}`);
/////
const base = { a: 1, b: 2 };
const extension = { b: 3, c: 4 };
const fusion = { ...base, ...extension }; 

function pickAB({ a, b, ...reste }) {
  return { a, b, reste };
}
console.log(pickAB({ a: 1, b: 2, c: 3, d: 4 }));
/////
const o = { x: 10, y: 20 };
console.log(Object.keys(o));   
console.log(Object.values(o)); 
console.log(Object.entries(o));
const cop = Object.assign({}, o, { y: 30 });
console.log(cop);
console.log(o.hasOwnProperty("x"));
/////
const titres = livres.map(l => l.titre);
const enStock = livres.filter(l => l.stock > 0);
const valeurStock = livres.reduce((acc, l) => acc + l.prix * l.stock, 0);
const plusAncien = livres.reduce((min, l) => (l.annee < min.annee ? l : min));
const plusRecent = livres.reduce((max, l) => (l.annee > max.annee ? l : max));
//////


/////
const lister = ls => [...ls].sort((a, b) => a.titre.localeCompare(b.titre));
const genererId = ls => (ls.length ? Math.max(...ls.map(l => l.id ?? 0)) + 1 : 1);
const ajouter = (ls, livre) => [...ls, { ...livre, id: livre.id ?? genererId(ls) }];
const maj = (ls, id, patch) => ls.map(l => (l.id === id ? { ...l, ...patch } : l));
const supprimer = (ls, id) => ls.filter(l => l.id !== id);
const rechercher = (ls, q) => {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return ls.filter(l => l.titre.toLowerCase().includes(s) || l.auteur.toLowerCase().includes(s));
};