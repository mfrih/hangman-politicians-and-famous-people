const characters = [
  {
    name: "PATRICK BALKANY",
    hints: [
      "I'm the king of Levallois !!!",
      "Avec Isabelle, nous habitons dans un petit moulin qui ne paie pas de mine.",
      "Jacques est un vieil ami. Je lui dois ma carrière !",
      "J'ai réussi à faire pousser du pamplemousse au Liechtenstein.",
    ],
    nickname: "Patoche",
    photoLoose: "./images/happy-patrick.png",
    photoWin: "./images/patrick-balkany-chaunu.png",
  },
  {
    name: "JEROME CAHUZAC",
    hints: [
      "Je n'ai pas, je n'ai jamais eu de comptes à l'étranger ni maintenant, ni avant.",
      "Je me suis battu contre la fraude fiscale (... des autres Français).",
      "Askip j'ai été ministre du budget.",
      "Je suis une star des implants capilaires !",
    ],
    nickname: "Jéjé",
    photoLoose: "./images/happy-jerome.png",
    photoWin: "./images/sad-jerome.jpg",
  },
  {
    name: "BERNARD TAPIE",
    hints: [
      "J'ai fait gagner l'unique ligue des Champions à un club français. Le boss, c'est moi.",
      "Glassmann m'a tuer !",
      "Le ministère de la ville, ça me connaît.",
      "♬ J'ai été chanteur à mes débuts ♬",
    ],
    nickname: "Nanard (paix à son âme)",
    photoLoose: "./images/hommage-tapie.jpg",
    photoWin: "./images/hommage-tapie.jpg",
  },
  {
    name: "JEAN TIBERI",
    hints: [
      "Mon miracle : faire voter les morts.",
      "I ❤️ Xavière !",
      "Le 5ème, mon arrondissement, ma bataille.",
      "J'aime les HLM parisiens, je les utilise à toutes les sauces : loger mes enfants, financer mon parti...",
    ],
    nickname: "Jeannot",
    photoLoose: "./images/Tiberi-proces.jpg",
    photoWin: "./images/Tiberi-proces.jpg",
  },
  {
    name: "FRANCOIS FILLON",
    hints: [
      "Sablé-sur-Sarthe, ma circo, mon manoir, ma bataille.",
      "I ❤️ Pénélope !",
      "Le Canard m'a tuer !",
      "J'aime les costumes bien taillés.",
    ],
    nickname: "le Thatcher de la Sarthe",
    photoLoose: "./images/happy-francois.png",
    photoWin: "./images/sad-francois.png",
  },

  {
    name: "CLAUDE GUEANT",
    hints: [
      "J'ai fait un bref passage par la Santé.",
      "L'argent liquide, je ne connais que ça : primes de cabinet, financements de campagne...",
      "J'aime passer des coups de fil à Tripoli en passant par Beyrouth.",
      "J'ai commencé directeur de cabinet de celui à qui je dois toutes mes affaires judiciaires, merci à lui !",
    ],
    nickname: "Monsieur 500 euros",
    photoLoose: "./images/gueant.jpeg",
    photoWin: "./images/gueant.jpeg",
  },

  {
    name: "ALEXANDRE BENALLA",
    hints: [
      "Je suis le garde du corps le plus connu de France",
      "Je traîne pas mal avec des oligarques russes, j'aime bien ça, ils sont sympas !",
      "Je suis le protégé de Brigitte",
      "Je pense que je suis flic, mais en fait, non 🤷🏻 !",
    ],
    nickname: "Alex et sa bande",
    photoLoose: "./images/benalla.jpg",
    photoWin: "./images/benalla.jpg",
  },

  {
    name: "RICHARD FERRAND",
    hints: [
      "Si je vous dis : Crédit Mutuelle de Bretagne, vous me dites...",
      "J'aime présider des choses : l'Assemblée Nationale, le groupe LREM...",
      "Vous ne le savez pas, mais j'ai oeuvré à la cohésion des territoires, eh ouais !",
      "Ils ont des chapeaux ronds, vive la Bretagne ! Ils ont des chapeaux ronds, vive les Bretons !",
    ],
    nickname:
      "Richard Fillon (les députés de sa propre majorité le nomment de la sorte)",
    photoLoose: "./images/ferrand.jpg",
    photoWin: "./images/ferrand.jpg",
  },

  {
    name: "FRANCOIS DE RUGY",
    hints: [
      "Le homard ? Je n'en mange pas. J'ai une intolérance aux crustacés et aux fruits de mer 🦞",
      "I ❤️ Séverine !",
      "J'aime l'écologie et la Macronie aussi",
      "J'aime les dîners fastueux et les bonnes bouteilles.",
    ],
    nickname: "l’arapède du Palais Bourbon",
    photoLoose: "./images/derugy.jpg",
    photoWin: "./images/derugy.jpg",
  },

  {
    name: "MARLENE SCHIAPPA",
    hints: [
      "Marianne, mon idôle que ce soit chez Playboy ou pour piquer dans la caisse.",
      "Ce n'est pas de ma faute, ce sont mes collaborateurs qui sont incompétents",
      "Je suis influenceuse lissage brésilien",
      "Maman travaille 👩🏻‍💻",
    ],
    nickname: "Kim Kardashian (petit surnom donné par Brigitte)",
    photoLoose: "./images/happy-marlene.jpg",
    photoWin: "./images/happy-marlene.jpg",
  },

  {
    name: "SERGE DASSAULT",
    hints: [
      "Corbeil-Essones, mon fief, ma bataille",
      "Un jour, sur un coup de tête j'ai racheté le Figaro !",
      "Je suis le maître des rafales et des mirages",
      "Dans la vie j'aime les armes !",
    ],
    nickname: "Papy Serge (paix à son âme)",
    photoLoose: "./images/happy-serge.jpeg",
    photoWin: "./images/sad-serge.jpeg",
  },

  {
    name: "CHARLES PASQUA",
    hints: [
      "On m'appelle le baron des Hauts-de-Seine",
      "En Corse, on n’a pas pour habitude de se dégonfler",
      "Ah ça Jacquot : je l'ai bien couvert",
      "Quand on est emmerdé par une affaire, il faut susciter une affaire dans l’affaire, et si nécessaire une autre affaire dans l’affaire de l’affaire, jusqu’à ce que personne n’y comprenne plus rien",
    ],
    nickname: "le baron des Hauts-de-Seine (paix à son âme)",
    photoLoose: "./images/happy-pasqua.jpg",
    photoWin: "./images/sad-pasqua.jpg",
  },

  // {
  //   name: "ALFRED SIRVEN",
  //   hints: [
  //     "Sablé-sur-Sarthe, ma circo, mon manoir, ma bataille.",
  //     "I ❤️ Pénélope !",
  //     "Le Canard m'a tuer !",
  //     "J'aime les costumes bien taillés.",
  //   ],
  //   nickname: "le Thatcher de la Sarthe",
  //   photoLoose: "./images/happy-francois.png",
  //   photoWin: "./images/sad-francois.png",
  // },

  // {
  //   name: "NICOLAS BAZIRE",
  //   hints: [
  //     "Sablé-sur-Sarthe, ma circo, mon manoir, ma bataille.",
  //     "I ❤️ Pénélope !",
  //     "Le Canard m'a tuer !",
  //     "J'aime les costumes bien taillés.",
  //   ],
  //   nickname: "le Thatcher de la Sarthe",
  //   photoLoose: "./images/happy-francois.png",
  //   photoWin: "./images/sad-francois.png",
  // },

  // {
  //   name: "CHRISTINE LAGARDE",
  //   hints: [
  //     "Sablé-sur-Sarthe, ma circo, mon manoir, ma bataille.",
  //     "I ❤️ Pénélope !",
  //     "Le Canard m'a tuer !",
  //     "J'aime les costumes bien taillés.",
  //   ],
  //   nickname: "le Thatcher de la Sarthe",
  //   photoLoose: "./images/happy-francois.png",
  //   photoWin: "./images/sad-francois.png",
  // },

  // {
  //   name: "THIERRY GAUBERT",
  //   hints: [
  //     "Sablé-sur-Sarthe, ma circo, mon manoir, ma bataille.",
  //     "I ❤️ Pénélope !",
  //     "Le Canard m'a tuer !",
  //     "J'aime les costumes bien taillés.",
  //   ],
  //   nickname: "le Thatcher de la Sarthe",
  //   photoLoose: "./images/happy-francois.png",
  //   photoWin: "./images/sad-francois.png",
  // },

  // {
  //   name: "DOMINIQUE STRAUSS KAHN",
  //   hints: [
  //     "Sablé-sur-Sarthe, ma circo, mon manoir, ma bataille.",
  //     "I ❤️ Pénélope !",
  //     "Le Canard m'a tuer !",
  //     "J'aime les costumes bien taillés.",
  //   ],
  //   nickname: "le Thatcher de la Sarthe",
  //   photoLoose: "./images/happy-francois.png",
  //   photoWin: "./images/sad-francois.png",
  // },

  // {
  //   name: "ERIC WOERTH",
  //   hints: [
  //     "Sablé-sur-Sarthe, ma circo, mon manoir, ma bataille.",
  //     "I ❤️ Pénélope !",
  //     "Le Canard m'a tuer !",
  //     "J'aime les costumes bien taillés.",
  //   ],
  //   nickname: "le Thatcher de la Sarthe",
  //   photoLoose: "./images/happy-francois.png",
  //   photoWin: "./images/sad-francois.png",
  // },

  // {
  //   name: "MARINE LE PEN",
  //   hints: [
  //     "Sablé-sur-Sarthe, ma circo, mon manoir, ma bataille.",
  //     "I ❤️ Pénélope !",
  //     "Le Canard m'a tuer !",
  //     "J'aime les costumes bien taillés.",
  //   ],
  //   nickname: "le Thatcher de la Sarthe",
  //   photoLoose: "./images/happy-francois.png",
  //   photoWin: "./images/sad-francois.png",
  // },

  // {
  //   name: "BRUNO LE ROUX",
  //   hints: [
  //     "Sablé-sur-Sarthe, ma circo, mon manoir, ma bataille.",
  //     "I ❤️ Pénélope !",
  //     "Le Canard m'a tuer !",
  //     "J'aime les costumes bien taillés.",
  //   ],
  //   nickname: "le Thatcher de la Sarthe",
  //   photoLoose: "./images/happy-francois.png",
  //   photoWin: "./images/sad-francois.png",
  // },

  // {
  //   name: "GERALD DARMANIN",
  //   hints: [
  //     "Sablé-sur-Sarthe, ma circo, mon manoir, ma bataille.",
  //     "I ❤️ Pénélope !",
  //     "Le Canard m'a tuer !",
  //     "J'aime les costumes bien taillés.",
  //   ],
  //   nickname: "le Thatcher de la Sarthe",
  //   photoLoose: "./images/happy-francois.png",
  //   photoWin: "./images/sad-francois.png",
  // },

  // {
  //   name: "DENIS BAUPIN",
  //   hints: [
  //     "Sablé-sur-Sarthe, ma circo, mon manoir, ma bataille.",
  //     "I ❤️ Pénélope !",
  //     "Le Canard m'a tuer !",
  //     "J'aime les costumes bien taillés.",
  //   ],
  //   nickname: "le Thatcher de la Sarthe",
  //   photoLoose: "./images/happy-francois.png",
  //   photoWin: "./images/sad-francois.png",
  // },

  // {
  //   name: "ALEXIS KOHLER",
  //   hints: [
  //     "Sablé-sur-Sarthe, ma circo, mon manoir, ma bataille.",
  //     "I ❤️ Pénélope !",
  //     "Le Canard m'a tuer !",
  //     "J'aime les costumes bien taillés.",
  //   ],
  //   nickname: "le Thatcher de la Sarthe",
  //   photoLoose: "./images/happy-francois.png",
  //   photoWin: "./images/sad-francois.png",
  // },
];
