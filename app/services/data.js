const world1 = require('../images/World 1.jpg');
// ajouter les photos ici (changer le nom de photos )
export default {
  
"1": {
  "message1": "Alors que vous êtes en route pour remplir votre mission, vous remarquez qu'au loin un groupe de Zombies s’attaquent à un humain. Bien qu’armé, seul, ces chances de survie sont minimes face à eux.",
  "message2": "Le temps presse, que décidez-vous de faire ?",
  "BTN1": "L'aider",
  "to1": "2",
  "BTN2": "Continuer son chemin",
  "to2": "/lose" 
},
//suprimer les ids et rajouter numero
"2": {
  "background": world1,
  "message1": " - “Merci de ton aide, je ne m’en serais jamais sortie... Je m’appelle John. Je n’ai rien pour te remercier... Qu’est-ce que je pourrais faire pour toi ?” ",
  "message2": " - “Je dois absolument allez à ... afin de récupérer l’antidote qui va nous sauvez de toute cette folie. “ ",
  "message3": " - “J’essayais justement de réparer cette voiture avant que les zombies arrivent. Je suis un ancien mécanicien ! Surveille mes arrières pendant que je la répare et je t’emmène.“",
  "BTN1": "La voiture est prête! On y va ?",
  "toOne": "3"
},
"3": {
  "message1": "L’essence commence à manquer et le soleil va bientôt se coucher. Il faut vite trouver un endroit pour passer la nuit.",
  "message2": "Oh ! Une station service, on devrait s’arrêter ici pour la nuit ! Peut-être trouverons-nous de l’essence et des provisions.",
  "message3": " Qu'en penses-tu ?",
  "BTN1": "Oui allons voir ce qu'il y a à l'intérieur",
  "to1": "4",
  "BTN2": "Une station service au bord d'une route n'est pas le meilleur endroit pour passer la nuit",
  "to2": "lose"
},
// "4": {
//   "message1": "Tu entends ces bruits ? Ça a l'air de venir du fond de la station, je vais voir",
//   "message2": "Tu viens avec moi ou tu restes la ? ",
//   "actions": [
//     {
//       "answer": "Je viens avec toi, je ne vais pas prendre le risque de rester ici toute seule..",
//       "path": 5
//     },
//     {
//       "answer": "Je vais t'attendre ici",
//       "path": "lose"
//     }  
//   ]
// },
// {
//   "id": 5,
//   "message1": "Un Zombie.. CLOWN.. WHAT THE FUCK?",
//   "message2": "C'était le seul Zombie ici, la pièce du fond est sécurisée, nous pouvons y rester pour la nuit.",
//   "actions": 
//     {
//       "answer": "Accélérer le temps jusqu'au lendemain matin",
//       "path": 6
//     }
// },
// {
//   "id": 6,
//   "message1": "Le soleil se lève, il est temps de reprendre la route pour sauver l'humanité",
//   "message2": "Mais.. John a dsparu.. Des bruits étranges s'échappent de cette porte..",
//   "actions": [
//     {
//       "answer": "Passer par la porte de derrière et s'enfuir",
//       "path": 7
//     },
//     {
//       "answer": "Chercher John, car l'aventure sans lui s'avère très compliquée",
//       "path": "lose"
//     },
//     {
//       "answer": "Chercher John, car l'aventure sans lui s'avère très compliquée",
//       "path": 8
//     } 
//   ]
// },
// {
//   "id": 7,
//   "message1": "Adieu John, nous nous reverons sûrement un jour. Mais j'ai absolument besoin d'avancer. Le temps presse, cette pandémie se poursuit.",
//   "actions": [
//     {
//       "answer": "Reprendre la voiture, il n'y a presque plus d'essence, mais il en reste donc autant en profiter un maximum",
//       "path": 9
//     },
//     {
//       "answer": "Continuer à pied, il n'y a presque plus d'essence et je risque de ne pas être discrète.",
//       "path": 10
//     }
//   ]
// },
// {
//   "id": 8,
//   "message1": "Vous décidez d’ouvrir cette porte... John... Malheureusement, ce dernier s’est fait mordre. Vous ne vous laissez pas surprendre et vous savez vous battre. D’un coup de hache, vous l’abattez. Dommage... Il aurez été un bon compagnon. Vous fouillez dans ses vêtements où vous y trouvez les clefs de voiture, vous en profitez pour les récupérer et décidez de ne pas rester plus longtemps ici.",
//   "actions":
//     {
//       "answer": "Continuer",
//       "path": 12
//     }
// },
// {
//   "id": 9,
//   "message1": "Vous arrivez dans la voiture mais les clefs ne sont pas sur le contact. Mince! John les a gardés sur lui..Tant pis ",
//   "actions": [
//     {
//       "answer": "Continuer à pied",
//       "path": 10
//     }

//   ]
// },
// {
//   "id": 10,
//   "message1": "Encore 50 Km à parcourir, et j’ai absolument besoin d’eau... Un panneau m’indique que je suis à mi-chemin de “---”, mais il y a un chemin sur le côté. On dirait une allée de maison.",
//   "message2": "Que devrais-je faire",
//   "actions": [
//     {
//       "answer": "Continuer sur la route",
//       "path":"lose"
//     },
//     {
//       "answer": "Allez visiter cette maison afin de récupérer de l'eau et de la nourriture",
//       "path": 11
//     }
//   ]
// },
// {
//   "id": 11,
//   "message1": "C’est un monde totalement différent qui s’offre à vous. Tout est un calme, d’une apparence si paisible. Il y reste même un cheval et des fleurs. Cela fait si longtemps que vous n’en aviez pas vu. C’est comme un rêve éveillé. L’apocalypse semble s’être arrêter à la limite du jardin.",
//   "actions":
//     {
//       "answer": "Continuer",
//       "path": 14
//     }
// },
// {
//   "id": 12,
//   "message1": "La voiture tiens un bon moment avant de finalement s’arrêter. Vous n’avez plus d’autres choix que de continuer à pied. Vous êtes tout de même satisfaite de ce gain de temps.",
//   "actions":[ 
//     {
//       "answer": "Continuer sur la route",
//       "path": "lose"
//     },
//     {
//       "answer": "Passer par la forêt",
//       "path": 13
//     }
//   ]
// },
// {
//   "id": 13,
//   "message1": "Je commence à avoir soif.. il me faut absolument de l'eau.",
//   "actions":
//     {
//       "answer": "Continuer",
//       "path": 17
//     }
// },
// {
//   "id": 14,
//   "message1": "Subitement, un fracas grinçant trouble la tranquilité du lieu, puis le grondement d’une voix :",
//   "message2": " - “Halte-là ! Où est-ce que tu crois aller comme ça ?!“ ",
//   "message3":" - “Je suis Cléa ! Je dois récupérer une antidote pour mettre un terme à cette pandémie ! C’est très important, mais j’ai besoin de provisions pour reprendre des forces et tenir...“",
//   "actions":
//     {
//       "answer": "Continuer",
//       "path": 15
//     }
// },
// {
//   "id": 15,
//   "message1":" - “ On se débrouille très bien sans antidote... On s’en sort même mieux depuis que tout ça est arrivé ! ” ",
//   "message2": " - “ S’il vous plait, j’en ai vraiment besoin !..“ ",
//   "message3":" - “ Vous avez l’air sympathique, heureusement pour vous. Vous avez le choix tuer les zombie alentours, ou couper du bois“ ",
//   "actions":[
//     {
//       "answer": "Tuer les zombies",
//       "path": "lose"
//     },
//     {
//       "answer": "Couper du bois",
//       "path": 22
//     },
//     {
//       "answer": "Partir",
//       "path": 16
//     }
//   ]
// },
// {
//   "id": 16,
//   "message1":" - “Je suis désolé mais je n’ai pas le temps pour ça ! Bon courage pour la suite.",
//   "actions":
//     {
//       "answer": "Partir",
//       "path": 17
//     }
// },
// {
//   "id": 17,
//   "message1":"Vous marchez. Marchez. Et marchez. Cela vous semble interminable. Pas une goutte d’eau à l’horizon depuis que vous êtes partis, vous n’en pouvait plus. Vous peinez, mais continuez tout de même.De toute façon,  Vous n’avez pas vraiment le choix. Au bout de quelques temps, vous finissez par entendre ce son... UNE SOURCE D’EAU ! Vous accélerez le pas et vous vous rendez compte que quelqu’un s’y trouve aussi.",
//   "actions":[ 
//     {
//       "answer": "Vous vous précipitez",
//       "path": "lose"
//     },
//     {
//       "answer": "Attendre que l'individu s'en aille",
//       "path": 18
//     }
//   ]
// },
// {
//   "id": 18,
//   "message1":"Vous êtes prête à vous jeter à cette source. Mais quelque chose vous chiffonne... Était-ce réellement un survivant ? La déshydratation et la fatigue ne vous permettent pas d’en être sûr. Vous décidez de prendre quelques instant pour observer l’individu, son apparence semble de plus en plus suspecte, sans parler de sa démarche. Vous êtes armée, vous pouvez l’avoir. Que faire ?",
//   "actions":[ 
//     {
//       "answer": "Lancer votre arme",
//       "path": "lose"
//     },
//     {
//       "answer": "L'attaquer au corps à corps",
//       "path": 19
//     }
//   ]
// },
// {
//   "id": 19,
//   "message1":"Vous vous rapprochez discrètement. D’un geste rapide, mais maîtrisé, vous plantez votre arme dans le crâne du zombie. À présent, Vous voilà libre de vous déshaltérer en toute sécurité.",
//   "actions":
//     {
//       "answer": "Continuer",
//       "path": 20
//     }

// },
// {
//   "id": 20,
//   "message1":"Alors que vous vous apprétiez à partir, un bruissement suspect vous fit faire volte-face, prête à planter quiconque se trouvant face à vous. Heureusement pour vous, vous avez de bons réflexes, vous évitez de peu d’assassiner des survivants !",
//   "message2":" - “Non !! S’il vous plait, on espère juste pouvoir évitez les zombies!“ ",
//   "message3": " - “On essaye de rejoindre “ville”, mais c’est compliqué..“ ",
//   "actions":[ 
//     {
//       "answer": "Partir sans elles",
//       "path": 21
//     },
//     {
//       "answer": "Partir avec elles",
//       "path": 21
//     }
//   ]
// },
// {
//   "id": 21,
//   "message1":"vous partez enfin pour la ville. Vous avez certe fait un détour, mais celle-ci ne doit pas être bien loin.",
//   "actions":
//     {
//       "answer": "Continuer",
//       "path": 24
//     }
// },
// {
//   "id": 22,
//   "message":"Très bien, nous t’équipons avec une hâche et un sac ! Nous avons besoin de 6 buches de bois ",
//   "actions":
//     {
//       "answer": "Finaliser la mission",
//       "path": 23
//     }
// },
// {
//   "id": 23,
//   "message":"Merci pour ton aide, à notre tour de t'aider",
//   "message2": "Nous te proposons de l’eau et un vieux cheval qui nous embêtes plus qu’autre chose avec le bruit qu’il fait.. Il s’ennuit tellement qu’il hurle à la mort et attire tous les zombies du coin ",
//   "actions":
//     {
//       "answer": "Partir",
//       "path": 24
//     }
// },
// {
//   "id": 24,
//   "message":"Vous êtes enfin arrivez dans la ville. Il y a 3 pharmacies, Malheureusement nous n'en savons pas plus sur la localisation de l'antidote",
//   "actions":
//     {
//       "answer": "Continuer",
//       "path": 25
//     }
// },
// {
//   "id": 25,
//   "message1":"La première se trouve tout droit sur le chemin, cela devrait être rapide. Mais... La seconde est plus proche, mais au vu des bruits que vous entendez, les rues ne sont pas très sûr.La troisième vous fait faire de grands détours et vous n’êtes toujours pas sûr de la sureté...",
//   "message2": "Où décidez-vous d’aller ?",
//   "actions":[ 
//     {
//       "answer": "1",
//       "path": 26
//     },
//     {
//       "answer": "2",
//       "path": "lose"
//     },
//     {
//       "answer": "3",
//       "path": 29
//     }
//   ]
// },
// {
//   "id": 26,
//   "message":"Vous décidez d’aller dans la première pharmacie. Il suffira juste d’aller tout droit s’il n’y a pas d’obstacle. Ca devrait aller, normalement.",
//   "actions":[
//     {
//       "answer": "Faire confiance en votre instinct",
//       "path": 27
//     },
//     {
//       "answer": "Ne pas faire confiance en votre instinct",
//       "path": "lose"
//     }
//   ]
// },
// {
//   "id": 27,
//   "message":"Vous décidez de vous rapprocher des bâtiments afin de longer les murs. Il est hors de question de prendre des risques aussi prêt du but. Rester sur vos gardes est essentiel à ce stade.",
//   "message2":"Vous arrivez enfin jusqu’à la pharmacie. Vous prenez quelques instants pour observer ce qu’il s’y passe. De ce que vous voyez, il semble n’y avoir que deux zombies. Que décidez-vous de faire ?",
//   "actions":[
//     {
//       "answer": "Y aller discrètement",
//       "path": 28
//     },
//     {
//       "answer": "Y aller discrètement",
//       "path": "/lose1"
//     },
//     {
//       "answer": "Tuer les Zombies",
//       "path": "lose"
//     }
//   ]
// },
// {
//   "id": 28,
//   "message": "D’un pas rapide, mais discrêt, vous vous faufilez à l’intérieur. Vous attendez que l’occasion se présente pour contourner chaque zombie. La fouille vous prend un certain temps, et malheureusement pour rien. L’antidote ne se trouve pas ici...Vous n’avez d’autres choix de faire demi-tour.",
//   "actions":
//     {
//       "answer": "Faire demi-tour",
//       "path": 25
//     }
// },
// {
//   "id": 29,
//   "message": "Vous décidez de prendre le risque d’aller à la quatrième pharmacie directement, en espérant que l’antidote s’y trouve et surtout pouvoir y arriver saine et sauve. C’est la plus éloignée, certe, mais... Vous ne savez pas, peut-être votre instinct ? Peu importe, mais quelques chose vous dit que ça doit être là-bas.",
//   "actions":
//     {
//       "answer": "Continuer",
//       "path": 30
//     }
// },
// {
//   "id": 30,
//   "message": "Une fois dans celle-ci, c’est le silence. étonnement, aucun zombie ne se trouve ici... Enfin, quelqu’un les as tué avant vous. Vous restez sur vos garde, mais décidez tout de même de fouiller la pharmacie.",
//   "actions":
//     {
//       "answer": "Continuer",
//       "path": 31
//     }
// },
// {
//   "id": 31,
//   "message": "Alors que vous avez décidé de fouiller l’arrière-boutique, vous tombez nez à nez avec un survivant. Et à ses pied... L’antidote ! Il semble prêt à les récupérer ! Vite !  Que faire ?",
//   "actions":[
//     {
//       "answer": "Le tuer",
//       "path": 33
//     },
//     {
//       "answer": "Lui parler",
//       "path": 32
//     }
//   ]
// },
// {
//   "id": 32,
//   "message": "Vous vous saisissez de votre arme et la plante dans le dos de l’individu, le bloquant contre le mur. De toute façon, le coup a sûrement dû le tuer sur le coup. Vous n’avez pas fait tout ce chemin pour qu’un inconscient les récupère et n’en fasse vous ne savez quoi.",
//   "actions":
//     {
//       "answer": "Ramener l'antidote",
//       "path": "win"
//     }
// },
// {
//   "id": 33,
//   "message": "Vous décidez de lui parler de votre mission : - N’y touchez pas s’il vous plait ! J’en ai besoin pour sauver l’humanité !",
//   "message2": "Vous lui expliquez l’importance de ces médicaments, aussi anodin semble t-il. Vous savez manier les mots et vous paraissez sympathique.",
//   "message3": "L’individu décide de vous les laisser, et part à la recherche d’autres liquides... Quelques peu suspect.",
//   "actions":
//     {
//       "answer": "Ramener l'antidote",
//       "path": "win"
//     }
// },
    
}
