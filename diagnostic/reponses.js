// Diagnostic d'entrée — Inscription à un atelier.
// Complétez les deux fonctions. Fichier testé séparément avec Node.
// Ne pas ajouter d'import : gardez de simples export function.

export function estValide(texte) {
  if (typeof texte !== "string") {
    return false;
  }
  const longueur = texte.trim().length;
  return longueur >= 3 && longueur <= 40;
}

export function extraireActifs(elements) {
  if (!Array.isArray(elements)) {
    return [];
  }
  const noms = [];
  for (const element of elements) {
    if (typeof element !== "object" || element === null) {
      continue;
    }
    if (element.active !== true || typeof element.name !== "string") {
      continue;
    }
    const nom = element.name.trim();
    if (nom !== "") {
      noms.push(nom);
    }
  }
  return noms;
}
