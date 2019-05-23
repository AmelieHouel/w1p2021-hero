const image1 = require('../images/1.jpg');
const image2 = require('../images/2.jpg');
const image3 = require('../images/3.jpg');
const image4 = require('../images/4.jpg');
const image5 = require('../images/5.jpg');
const image6 = require('../images/6.jpg');
const image10 = require('../images/10.jpg');
const image11 = require('../images/11.jpg');
const image13 = require('../images/13.jpg');
const image14 = require('../images/14.jpg');
const image17 = require('../images/17.jpg');
const image18 = require('../images/18.jpg');
const image20 = require('../images/20.jpg');
const image22 = require('../images/22.jpg');
const image23 = require('../images/23.jpg');
const image24 = require('../images/24.jpg');
const image26 = require('../images/26.jpg');
const image28 = require('../images/28.jpg');
const image29 = require('../images/29.jpg');
const image30 = require('../images/30.jpg');
const image31 = require('../images/31.jpg');
const image32 = require('../images/32.jpg');


// ajouter les photos ici (changer le nom de photos )

export default {
  
  "1": {
    "background": image1,
    "message1": "Alors que vous êtes en route pour remplir votre mission, vous remarquez qu'au loin un groupe de Zombies s’attaquent à un humain. Bien qu’armé, seul, ces chances de survie sont minimes face à eux.",
    "message2": "Le temps presse, que décidez-vous de faire ?",
    "BTN1": "L'aider",
    "to1": "2",
    "BTN2": "Continuer son chemin",
    "to2": "/lose" 
  },

  "2": {
    "background": image2,
    "message1": " - “Merci de ton aide, je ne m’en serais jamais sortie... Je m’appelle John. Je n’ai rien pour te remercier... Qu’est-ce que je pourrais faire pour toi ?” ",
    "message2": " - “Je dois absolument allez à ... afin de récupérer l’antidote qui va nous sauvez de toute cette folie. “ ",
    "message3": " - “J’essayais justement de réparer cette voiture avant que les zombies arrivent. Je suis un ancien mécanicien ! Surveille mes arrières pendant que je la répare et je t’emmène.“",
    "BTN1": "La voiture est prête! On y va ?",
    "to1": "3"
  },

  "3": {
    "background": image3,
    "message1": "L’essence commence à manquer et le soleil va bientôt se coucher. Il faut vite trouver un endroit pour passer la nuit.",
    "message2": "Oh ! Une station service, on devrait s’arrêter ici pour la nuit ! Peut-être trouverons-nous de l’essence et des provisions.",
    "message3": " Qu'en penses-tu ?",
    "BTN1": "Une station service au bord d'une route n'est pas le meilleur endroit pour passer la nuit",
    "to1": "/lose",
    "BTN2": "Oui allons voir ce qu'il y a à l'intérieur",
    "to2": "4"
  },

  "4": {
    "background": image4,
    "message1": "Tu entends ces bruits ? Ça a l'air de venir du fond de la station, je vais voir.",
    "message2": "Tu viens avec moi ou tu restes la ? ",
    "BTN1": "Je viens avec toi, je ne vais pas prendre le risque de rester ici toute seule..",
    "to1": "5",
    "BTN2": "Je vais t'attendre ici",
    "to2": "/lose"
  },

  "5":{
    "background": image5,
    "message1": "Un Zombie.. CLOWN.. WHAT THE FUCK?",
    "message2": "C'était le seul Zombie ici, la pièce du fond est sécurisée, nous pouvons y rester pour la nuit.",
    "BTN1": "Accélérer le temps jusqu'au lendemain matin",
    "to1": "6"
  },
  "6":{
    "background": image6,
    "message1": "Le soleil se lève, il est temps de reprendre la route pour sauver l'humanité",
    "message2": "Mais.. John a disparu.. Des bruits étranges s'échappent de cette porte..",
    "message 3": "L'aventure sans lui s'avère très compliquée",
    "BTN1": "Passer par la porte de derrière et s'enfuir",
    "to1": "7",
    "BTN2": "Chercher John",
    "to2" : "8"
    //       "answer": "Chercher John, car l'aventure sans lui s'avère très compliquée",
  //       "path": "lose"
  //     },
  },

  "7": {
    "background": image6,
    "message1": "Adieu John, nous nous reverons sûrement un jour. Mais j'ai absolument besoin d'avancer. Le temps presse, cette pandémie se poursuit.",
    "message2": "La voiture n'a presque plus d'essence, continuer à pied me fera perdre du temps, mais je serai plus discrète.",
    "BTN1": "Reprendre la voiture",
    "to1": "9",
    "BTN2": "Continuer à pied",
    "to2" : "10"
  },

  "8": {
    "background": image6,
    "message1": "Vous décidez d'ouvrir cette porte.. John... Malheureusement, ce dernier s'est fait mordre. Vous ne vous laissez pas surprendre et l'abattez. ",
    "message2": "Dommage... Il aurez été un bon compagnon. Vous fouillez dans ses vêtements où vous y trouvez les clefs de voiture, vous en profitez pour les récupérer et décidez de ne pas rester plus longtemps ici.",
    "BTN1": "Continuer",
    "to1": "12",
  },

  "9": {
    "background": image6,
    "message1": "Vous arrivez dans la voiture mais les clefs en sont pas sur le contact. ",
    "message2": " - “Mince! John les a gardés sur lui..tant pis” ",
    "BTN1": "Continuer à pied",
    "to1": "10",
  },

  "10": {
    "background": image10,
    "message1": "Encore 50 Km à parcourir, et j'ai absolument besoin d'eau... Un panneau m'indique que je suis à mi-chemin de Palmspring, mais il y a un chemin su le côté. On dirait une allée de maison. ",
    "message2": "Que devrais-je faire ? ",
    "BTN1": "Continuer sur la route",
    "to1": "/lose",
    "BTN2": "Allez visiter cette maison",
    "to2" : "11"
  },

  "11": {
    "background": image11,
    "message1": "C’est un monde totalement différent qui s’offre à vous. Tout est un calme, d’une apparence si paisible. Il y reste même un cheval et des fleurs. Cela fait si longtemps que vous n’en aviez pas vu. C’est comme un rêve éveillé. L’apocalypse semble s’être arrêter à la limite du jardin.",
    "BTN1": "Continuer",
    "to1": "14",
  },

  "12": {
    "background": image10,
    "message1": "La voiture tiens un bon moment avant de finalement s’arrêter. Vous n’avez plus d’autres choix que de continuer à pied. Vous êtes tout de même satisfaite de ce gain de temps.",
    "message2": "Que devrais-je faire ? ",
    "BTN1": "Continuer sur la route",
    "to1": "/lose",
    "BTN2": "Passer ar la forêt",
    "to2" : "13"
  },

  "13": {
    "background": image13,
    "message1": "Je commence à avoir soif.. il me faut absolument de l'eau.",
    "BTN1": "Continuer",
    "to1": "17",
  },

  "14": {
    "background": image14,
    "message1": "Subitement, un fracas grinçant trouble la tranquilité du lieu, puis le grondement d’une voix :",
    "message2": " - “Halte-là ! Où est-ce que tu crois aller comme ça ?!“ ",
    "message3":" - “Je dois récupérer une antidote pour mettre un terme à cette pandémie ! C’est très important, mais j’ai besoin de provisions pour reprendre des forces et tenir...“",
    "BTN1": "Continuer",
    "to1": "15",
  },

  "15": {
    "background": image14,
    "message1": " - “ On se débrouille très bien sans antidote... On s’en sort même mieux depuis que tout ça est arrivé ! ” ",
    "message2": " - “ S’il vous plait, j’en ai vraiment besoin !..“ ",
    "message3": " - “ Vous avez l’air sympathique, heureusement pour vous. Vous avez le choix : Tuer les zombies autour de la maison ou couper du bois“ ",
    "BTN1": "Tuer les Zombies",
    "to1": "/lose",
    "BTN2": "Couper du bois",
    "to2" : "22",
    "BTN3": "Partir",
    "to3": "16"
  },

  "16": {
    "background": image14,
    "message1": " - “Je suis désolé mais je n’ai pas le temps pour ça ! Bon courage pour la suite.",
    "message2": "Vous décidez de continuer par ces clairières, espérant trouver en chemin une source d’eau.",
    "BTN1": "Partir",
    "to1": "17",
  },

  "17": {
    "background": image17,
    "message1": "Vous marchez. Marchez. Et marchez. Cela vous semble interminable. Pas une goutte d’eau à l’horizon depuis que vous êtes partis, vous n’en pouvait plus. Vous peinez, mais continuez tout de même.De toute façon,  Vous n’avez pas vraiment le choix. Au bout de quelques temps, vous finissez par entendre ce son... UNE SOURCE D’EAU ! Vous accélerez le pas et vous vous rendez compte que quelqu’un s’y trouve aussi.",
    "message2": "Que devrais-je faire ? ",
    "BTN1": "Vous vous précipitez",
    "to1": "/lose",
    "BTN2": "Attendre que l'individu s'en aille",
    "to2" : "18"
  },

  "18": {
    "background": image18,
    "message1": "Vous êtes prête à vous jeter à cette source. Mais quelque chose vous chiffonne... Était-ce réellement un survivant ? La déshydratation et la fatigue ne vous permettent pas d’en être sûr. Vous décidez de prendre quelques instant pour observer l’individu, son apparence semble de plus en plus suspecte, sans parler de sa démarche. Vous êtes armée, vous pouvez l’avoir. Que faire ?",
    "BTN1": "Lancer votre arme",
    "to1": "/lose",
    "BTN2": "L'attaquer au corps à corps",
    "to2" : "19"
  },

  "19": {
    "background": image17,
    "message1": " Vous vous rapprochez discrètement. D’un geste rapide, mais maîtrisé, vous plantez votre arme dans le crâne du zombie. À présent, Vous voilà libre de vous déshaltérer en toute sécurité.",
    "BTN1": "Continuer",
    "to1": "20",
  },

  "20": {
    "background": image20,
    "message1": "Alors que vous vous apprétiez à partir, un bruissement suspect vous fit faire volte-face, prête à planter quiconque se trouvant face à vous. Heureusement pour vous, vous avez de bons réflexes, vous évitez de peu d’assassiner des survivants !",
    "message2":" - “Non !! S’il vous plait, on espère juste pouvoir évitez les zombies!“ ",
    "message3": " - “On essaye de rejoindre “ville”, mais c’est compliqué.. Peux tu nous aider ?“ ",
    "BTN1": "Partir sans elles",
    "to1": "21",
    "BTN2": "Partir avec elles",
    "to2" : "21"
  },

  "21": {
    "background": image17,
    "message1": "Vous partez enfin pour la ville. Vous avez certe fait un détour, mais celle-ci ne doit pas être bien loin.",
    "BTN1": "Continuer",
    "to1": "24",
  },

  "22": {
    "background": image22,
    "message1": "Très bien, nous t’équipons avec une hâche et un sac ! Nous avons besoin de 6 buches de bois ",
    "BTN1": "Finaliser la mission",
    "to1": "23",
  },

  "23": {
    "background": image23,
    "message1": "- “Merci pour ton aide, à notre tour de t'aider“ ",
    "message2": "- “Nous te proposons de l’eau et un vieux cheval qui nous embêtes plus qu’autre chose avec le bruit qu’il fait.. Il s’ennuit tellement qu’il hurle à la mort et attire tous les zombies du coin“ ",
    "BTN1": "Partir",
    "to1": "24",
  },

  "24": {
    "background": image24,
    "message1": "Vous êtes enfin arrivez dans la ville.",
    "message2": "Il y a 3 pharmacies, Malheureusement vous n'en savez pas plus sur la localisation de l'antidote",
    "BTN1": "Continuer",
    "to1": "25",
  },

  "25": {
    "background": image24,
    "message1": "La première se trouve tout droit sur le chemin, cela devrait être rapide.",
    "message2": "La seconde est plus proche, mais au vu des bruits que vous entendez, les rues qui l'entourent ne sont pas très sure",
    "message3":"La troisième vous fait faire un grand détour et vous n’êtes toujours pas sûr de la sureté...",
    "message4": "Où décidez-vous d'aller ?",
    "BTN1": "1",
    "to1": "26",
    "BTN2": "2",
    "to1": "/lose",
    "BTN3": "3",
    "to1": "29",
  },

  "26": {
    "background": image26,
    "message1": "Vous décidez d’aller dans la première pharmacie. Il suffira juste d’aller tout droit s’il n’y a pas d’obstacle. Ca devrait aller, normalement.",
    "BTN1": "Faire confiance en votre instinct",
    "to1": "27",
    "BTN2": "Ne pas faire confiance en votre instinct",
    "to1": "/lose",
  },

  "27": {
    "background": image26,
    "message1": "Vous décidez de vous rapprocher des bâtiments afin de longer les murs. Il est hors de question de prendre des risques aussi prêt du but. Rester sur vos gardes est essentiel à ce stade.",
    "message2": "Vous arrivez enfin jusqu’à la pharmacie. Vous prenez quelques instants pour observer ce qu’il s’y passe. De ce que vous voyez, il semble n’y avoir que deux zombies.",
    "message3": "Que décidez-vous de faire ?",
    "BTN1": " Y aller discrètement",
    "to1": "28",
    "BTN2": "Tuer les Zombies",
    "to1": "/lose",
    // Ajouter une page lose en fonction du choix de l'étape 20
  },

  "28": {
    "background": image28,
    "message1": "D’un pas rapide, mais discrêt, vous vous faufilez à l’intérieur. Vous attendez que l’occasion se présente pour contourner chaque zombie. La fouille vous prend un certain temps, et malheureusement pour rien. L’antidote ne se trouve pas ici...Vous n’avez d’autres choix de faire demi-tour.",
    "message2": "Il y a 3 pharmacies, Malheureusement vous n'en savez pas plus sur la localisation de l'antidote",
    "BTN1": "Faire demi-tour",
    "to1": "25",
  },

  "29": {
    "background": image29,
    "message1": "Vous décidez de prendre le risque d’aller à la quatrième pharmacie directement, en espérant que l’antidote s’y trouve et surtout pouvoir y arriver saine et sauve.",
    "message2": "C’est la plus éloignée, certe, mais... Vous ne savez pas, peut-être votre instinct ? Peu importe, mais quelques chose vous dit que ça doit être là-bas.",
    "BTN1": "Continuer",
    "to1": "30",
  },

  "30": {
    "background": image30,
    "message1": "Une fois dans celle-ci, c’est le silence. étonnement, aucun zombie ne se trouve ici...",
    "message2": "Enfin, quelqu’un les as tué avant vous. Vous restez sur vos garde, mais décidez tout de même de fouiller la pharmacie.",
    "BTN1": "Continuer",
    "to1": "31",
  },

  "31": {
    "background": image31,
    "message1": "Alors que vous avez décidé de fouiller l’arrière-boutique, vous tombez nez à nez avec un survivant.",
    "message2": "Et à ses pied... L’antidote ! Il semble prêt à les récupérer ! Vite ! ",
    "message3": "Que faire ?",
    "BTN1": "Le tuer",
    "to1": "33",
    "BTN2": "Lui parler",
    "to1": "32",
  },

  "32": {
    "background": image32,
    "message1": "Vous vous saisissez de votre arme et la plante dans le dos de l’individu, le bloquant contre le mur.",
    "message2": "De toute façon, le coup a sûrement dû le tuer sur le coup. Vous n’avez pas fait tout ce chemin pour qu’un inconscient les récupères pour en faire n'importequoi !",
    "BTN1": "Ramener l'antidote",
    "to1": "/win",
  },

  "33": {
    "background": image32,
    "message1": "Vous décidez de lui parler de votre mission : - N’y touchez pas s’il vous plait ! J’en ai besoin pour sauver l’humanité !",
    "message2": "Vous lui expliquez l’importance de ces médicaments, aussi anodin semble t-il. Vous savez manier les mots et vous paraissez sympathique.",
    "message3": "L’individu décide de vous les laisser, et part à la recherche d’autres liquides... Quelques peu suspect.",
    "BTN1": "Ramener l'antidote",
    "to1": "/win",
  }

}
