# Projet individuel - XYZ

Programmation Web - L3 MIASHS - 2026 / 2027

- Prénom : Aissatou 
- Nom : Ba
- Adresse mail universitaire : aissatou.ba2@etu.univ-lorraine.fr
- Groupe de TD :A2
- Adresse du dépôt GitHub privé :(https://github.com/kenbougoule/Projet-individuel---XYZ)

## TD 01

### TD 01 - Élements réalisés

- toutes les questions ont été répondu

### Apprentissages
- Structure d'un composant React fonctionnel typé avec TypeScript (props typées, déstructuration, type de retour explicite).
- Utilisation de `useState` pour gérer un état local, et l'importance de la forme fonctionnelle du setter pour éviter les problèmes liés aux rendus "périmés".
- Rendu conditionnel en JSX avec l'opérateur `&&`, notamment pour l'affichage optionnel d'une image.
- Affichage d'une liste avec `.map()` et rôle de la prop `key` pour l'identification stable des éléments.
- Organisation du travail en Git avec une branche par séance (`td2`), fusionnée dans `main` en fin de séance.

### TD 01 - Bonus réalisés

- bonnus non réalisés

### TD 01 - Élements non réalisés

- toutes les taches ont été fait

### TD 01 - Difficultés rencontrées 

- Confusion initiale sur l'emplacement du projet après `bun create vite` (créé au mauvais endroit, nécessitant un déplacement).
- Dossier dupliqué par erreur lors du déplacement (XYZ imbriqué dans XYZ), corrigé en remontant le contenu d'un niveau.
- Erreur "does not provide an export named 'default'" au lancement de l'application, résolue par un redémarrage du serveur de développement.
- Difficulté initiale à comprendre la syntaxe JSX (accolades pour évaluer une expression, `className` à la place de `class`).
- Confusion entre `import` et `import type` selon qu'on importe une valeur ou un type.

### Solutions appliquées
- Vérification systématique du dossier de travail avec `Get-ChildItem` avant de continuer les manipulations Git.
- Redémarrage du serveur de dev (`bun run dev`) et rechargement forcé du navigateur pour résoudre l'erreur de module.
- Relecture progressive de chaque concept avant de passer à l'étape suivante, plutôt que d'avancer trop vite.

### TD 01 - Déclaration d'usage de l'IA générative

-Utilisation de Claude comme aide à la compréhension : explications de concepts React/TypeScript (JSX, props, useState, rendu conditionnel, différence entre `import` et `import type`), relecture de mon code avec identification des erreurs (sans réécriture automatique à ma place), et aide au diagnostic d'une erreur de compilation liée au cache du serveur de développement.

## TD 02

### TD 02 - Élements réalisés

- Toutes les questions ont été répondu

### TD 02 - Bonus réalisés

- Toutes les questions bonnus on été faite

### TD 02 - Élements non réalisés

- Rien

### TD 02 - Difficultés rencontrées + Solutions appliquées

-- Confusion initiale entre le composant TweetsList et le tableau de données initialTweets lors du filtrage avec .filter().
- Erreur de comparaison lors de la recherche des réponses (comparer un tweet entier à un id au lieu de comparer parentId à id).
- Bug de synchronisation d'affichage lors de la navigation entre deux pages de détail différentes (l'URL changeait mais le contenu affiché restait celui de la page précédente), résolu en ajoutant une prop key basée sur l'id sur l'élément racine de TweetDetailsPage, ce qui force React à recréer le composant à chaque changement d'identifiant.
- Distinction entre une route inconnue (gérée par le routeur, route *) et un tweet introuvable (donnée absente, géré dans le composant lui-même).

### Solutions appliquées
- Relecture progressive de chaque exemple du cours pour l'adapter précisément à la structure du projet (Tweet plutôt qu'Event, tweets plutôt qu'events).
- Ajout temporaire d'un console.log pour diagnostiquer le problème de synchronisation avant de comprendre la cause réelle et d'appliquer la correction avec key={id}.
- Vérification systématique avec bun run lint, bun tsc --noEmit et bun run build après chaque étape.



### TD 02 - Déclaration d'usage de l'IA générative

- Utilisation de Claude comme aide à la compréhension  : explications de concepts liés au routage (Link, Outlet, useParams, différence route inconnue/ressource introuvable), relecture de mon code avec identification des erreurs de logique (comparaisons incorrectes dans filter/find), et aide au diagnostic d'un bug de synchronisation d'affichage entre deux pages de détail (proposition de la solution key={id}, expliquée et appliquée par mes soins). 

## TD 03

### TD 03 - Élements réalisés

- **à compléter**

### TD 03 - Bonus réalisés

- **à compléter**

### TD 03 - Élements non réalisés

- **à compléter**

### TD 03 - Difficultés rencontrées + Solutions appliquées

- **à compléter**

### TD 03 - Déclaration d'usage de l'IA générative

- **à compléter**
