
import type { Tweet } from "../types/Tweet";

export const initialTweets: Array<Tweet>  = [
   {
    id: "a1b2c3d4-0001-4000-8000-000000000001",
    authorName: "Ada Lovelace",
    authorHandle: "adalovelace",
    content: "Et si une machine ne se contentait pas de calculer, mais composait aussi de la musique ? Le potentiel des nombres dépasse largement l'arithmétique.",
    image: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/500px-Ada_Lovelace_portrait.jpg",
        alt: "Portrait d'Ada Lovelace",
    },
    createdAt: "2026-06-10T14:32:00.000Z",
},

{
    id: "a1b2c3d4-0002-4000-8000-000000000002",
    authorName: "Grace Hopper",
    authorHandle: "gracehopper",
    content: "La phrase la plus coûteuse en informatique : \"on a toujours fait comme ça\". Osez remettre en question vos habitudes de code.",
    image: {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg",
        alt: "Portrait de Grace Hopper",
    },
    createdAt: "2026-06-15T09:05:00.000Z",
},
{
    id: "a1b2c3d4-0003-4000-8000-000000000003",
    authorName: "Alan Turing",
    authorHandle: "alanturing",
    content: "Peut-on dire qu'une machine pense ? Peut-être la vraie question est de savoir si elle peut nous faire douter de la différence.",
    createdAt: "2026-06-18T11:20:00.000Z",
},
{
    id: "a1b2c3d4-0004-4000-8000-000000000004",
    authorName: "Margaret Hamilton",
    authorHandle: "mhamilton",
    content: "Chaque ligne de code compte quand une mission spatiale en dépend. La rigueur n'est pas une option, c'est une nécessité.",
    createdAt: "2026-06-20T16:45:00.000Z",
},
{
    id: "a1b2c3d4-0005-4000-8000-000000000005",
    authorName: "Dennis Ritchie",
    authorHandle: "dennisritchie",
    content: "J'ai créé le langage C dans les années 70. Je ne pensais pas qu'il servirait encore de base à autant de logiciels dans le monde informatique aujourd'hui.",
    createdAt: "2026-06-20T16:45:00.000Z",
},

{
    id: "a1b2c3d4-0006-4000-8000-000000000006",
    authorName: "Katherine Johnson",
    authorHandle: "katjohnson",
    content: "j'ai calculé à la main les trajectoires qui ont envoyé l’Homme sur la Lune, tout en luttant contre la ségrégation. Fière de mon parcours",
    createdAt: "2026-06-20T18:45:00.000Z",
},
{
    id: "a1b2c3d4-0007-4000-8000-000000000007",
    authorName: "Barbara Liskov",
    authorHandle: "barliskov",
    content: "Un bon programme doit permettre de remplacer un objet par un autre sans tout casser. C'est simple à dire, plus difficile à concevoir correctement.",
    createdAt: "2026-06-20T12:00:00.000Z",
},
{
    id: "a1b2c3d4-0008-4000-8000-000000000008",
    authorName: "Donald Knuth",
    authorHandle: "donknuth",
    content: "Un algorithme bien structuré se relit sans effort six mois plus tard. C'est ça, la vraie preuve qu'il est bon.",
    createdAt: "2026-06-20T13:00:00.000Z",
},
{
    id: "a1b2c3d4-0009-4000-8000-000000000009",
    authorName: "Radia Perlman",
    authorHandle: "radperlmann",
    content: "On m'appelle 'la mère d'Internet'. Franchement, ça me met un peu mal à l'aise — j'ai juste résolu un problème de boucles dans les réseaux, pas inventé le web à moi seule.Le vrai travail d'équipe, on l'oublie trop souvent.",
    createdAt: "2026-06-24T14:00:00.000Z",
},
{
    id: "a1b2c3d4-0010-4000-8000-000000000010",
    authorName: "Linus Torvalds",
    authorHandle: "lintorvalds",
    content: "Du code mal écrit me met de mauvaise humeur plus vite que n'importe quoi d'autre. La qualité n'est pas négociable, même sur un projet gratuit.",
    createdAt: "2026-06-24T18:00:00.000Z",
},

];

