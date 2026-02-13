import { Act } from './types';

export const INTRO_TEXT = [
  "Imaginez un comptable qui vous annonce fièrement que vos dépenses mensuelles représentent 24% de vos revenus, avant de vous glisser discrètement sous le nez une facture détaillée qui culmine à 42%. Pas de panique, ce n'est pas votre banquier qui a découvert la créativité fiscale. C'est juste Windows, ce bon vieux camarade qui fait tourner 70% des ordinateurs de la planète, et qui semble avoir développé une relation complexe avec l'arithmétique de base.",
  "Bienvenue dans l'univers fascinant où les chiffres dansent le tango, où les processus jouent à colin-maillard avec le Task Manager, et où la transparence est un concept aussi flou qu'une photo de Bigfoot. Ce n'est pas de la science-fiction, c'est votre quotidien numérique."
];

export const ACTS: Act[] = [
  {
    id: "act-1",
    title: "Acte I : Le Grand Théâtre des Incohérences",
    subtitle: "Ou Comment Windows a Réinventé les Mathématiques",
    iconName: "Cpu",
    subsections: [
      {
        title: "La Mémoire qui Fait des Bonds de Cabri",
        content: [
          "Commençons par le plus savoureux : l'affaire de la RAM schizophrène. Ouvrez votre Task Manager un lundi matin. Il vous sourit, confiant : \"24% de mémoire utilisée, mon ami, tout va bien dans le meilleur des mondes\". Maintenant, sortez votre calculatrice – oui, celle qui fait encore de l'addition à l'ancienne – et additionnez manuellement l'utilisation mémoire de chaque processus visible.",
          "Suspense.",
          "42%.",
          "Quarante-deux pourcent. Pas 25%, pas 26% avec un petit écart d'arrondi excusable. Non. Presque le double. C'est comme si votre balance vous disait que vous pesez 60 kilos pendant que le médecin lit 103 sur son instrument. L'un des deux ment, et spoiler alert : ce n'est probablement pas le médecin.",
          "Cette incohérence n'est pas un cas isolé, une bizarrerie cosmique survenue lors d'une éclipse lunaire. Elle est documentée, reproductible, systématique. Des captures d'écran circulent dans les forums techniques comme des photos de famille embarrassantes lors des repas de Noël."
        ],
        highlight: "Mathématiquement parlant, c'est impossible. Sauf si..."
      },
      {
        title: "Le Performance Monitor : L'Aveugle qui Guide les Aveugles",
        content: [
          "Parlons maintenant du Performance Monitor, cet outil censé être votre phare dans la tempête des ressources système. Léger, intégré, pratique. Un seul petit défaut : il ne journalise pas les informations du noyau.",
          "Imaginez un journaliste qui couvre une manifestation mais qui décide de ne pas interviewer les organisateurs, de ne pas mentionner les banderoles, et de se concentrer uniquement sur la couleur des chaussures des passants. Techniquement, il fait son travail. Pratiquement, il passe à côté de l'essentiel.",
          "Le noyau, c'est le cœur du système. C'est là que se passent les opérations critiques, les décisions importantes, les activités sensibles. Ne pas le surveiller, c'est comme installer une caméra de sécurité qui filme uniquement le plafond."
        ]
      }
    ]
  },
  {
    id: "act-2",
    title: "Acte II : Les Vulnérabilités",
    subtitle: "Ou Comment Transformer un Bug en Feature",
    iconName: "ShieldAlert",
    subsections: [
      {
        title: "CVE-2022-37969 : L'Art de Maquiller les Compteurs",
        content: [
          "Parlons peu, parlons CVE. La vulnérabilité CVE-2022-37969 est un petit bijou d'ingénierie. Elle permet de falsifier les compteurs de performance. Concrètement ? Un acteur malveillant peut manipuler les données que Windows rapporte sur lui-même.",
          "C'est génial, non ? C'est comme si un criminel pouvait modifier en temps réel les images de vidéosurveillance pour y apparaître sous les traits d'un chaton jouant avec une pelote de laine. Les agents de sécurité regardent leurs écrans, attendris : \"Ah, qu'il est mignon ce petit chat\". Pendant ce temps, le coffre-fort est déjà vide.",
          "Cette vulnérabilité a été exploitée dans la nature. Pas dans un laboratoire stérile avec des chercheurs en blouse blanche. Dans la vraie vie. Par de vrais méchants. Avec de vraies conséquences."
        ]
      },
      {
        title: "BlackLotus : Le Bootkit qui Fait Sauter le Verrou",
        content: [
          "Ah, BlackLotus. Un nom qui sonne comme celui d'un méchant de James Bond. Et pour cause : ce bootkit est le caïd du quartier. Sa spécialité ? Contourner le Secure Boot.",
          "Pour les non-initiés, le Secure Boot, c'est censé être la porte blindée de votre système. Le verrou inviolable. Le gardien qui ne dort jamais. BlackLotus, lui, s'en sert comme d'une porte pour chat. Il entre, s'installe confortablement, désactive BitLocker (votre chiffrement de disque), neutralise Windows Defender (votre antivirus), et s'établit une petite persistance bien douillette.",
          "Le plus beau ? Il exploite la vulnérabilité CVE-2022-37894, une faille connue. Microsoft a patché cette vulnérabilité. Sauf que... le patch ne fonctionne pas vraiment."
        ],
        highlight: "C'est un peu comme mettre un pansement sur une jambe de bois : techniquement, vous avez fait quelque chose. Pratiquement, le problème persiste."
      },
      {
        title: "QakBot : L'Empereur du Ransomware",
        content: [
          "QakBot, c'est le caïd historique. Le parrain. Celui qui distribue les ransomwares comme d'autres distribuent des prospectus publicitaires. Ce malware a infecté des centaines de milliers de machines, volé des données sensibles, et servi de rampe de lancement à des attaques encore plus vicieuses.",
          "Comment ? En exploitant des vulnérabilités zero-day de Windows. Des failles que Microsoft ne connaissait pas (ou prétendait ne pas connaître)."
        ]
      }
    ]
  },
  {
    id: "act-3",
    title: "Acte III : Les Processus Fantômes",
    subtitle: "Ou la Magie Noire du Task Manager",
    iconName: "Ghost",
    subsections: [
      {
        title: "Le Syndrome du Clone Invisible",
        content: [
          "Ouvrez votre Task Manager. Combien de processus voyez-vous ? Cinquante ? Cent ? Maintenant, ouvrez un outil forensique comme Volatility ou Rekall. Ces outils analysent directement la mémoire vive, sans passer par les filtres complaisants de Windows.",
          "Surprise : vous découvrez des processus qui n'apparaissent pas dans le Task Manager. Des processus fantômes. Pire encore : des clones de processus système avec des PID identiques. Imaginez découvrir que vous avez un jumeau dont vous ignoriez l'existence, et qui vit dans votre maison sans que vous l'ayez jamais croisé.",
          "Ces processus fantômes ne sont pas là pour le folklore. Ils servent à masquer des activités malveillantes : exfiltration de données, communication avec des serveurs de commande et contrôle, installation de backdoors."
        ]
      },
      {
        title: "WMI : Le Vecteur d'Attaque qui Monte, qui Monte...",
        content: [
          "WMI (Windows Management Instrumentation), c'est censé être un outil d'administration. Dans les faits, c'est le couteau suisse des hackers. Il permet d'exécuter des commandes malveillantes avec un minimum de journalisation.",
          "Concrètement ? Un attaquant qui obtient les droits administrateur peut utiliser WMI pour déployer des malwares, modifier des configurations, exfiltrer des données... le tout en laissant très peu de traces. C'est comme si un cambrioleur pouvait entrer chez vous, tout dévaliser, et effacer automatiquement ses empreintes digitales et les enregistrements des caméras."
        ]
      }
    ]
  },
  {
    id: "act-4",
    title: "Acte IV : L'Entropie Logicielle",
    subtitle: "Ou Pourquoi Tout Part en Sucette",
    iconName: "Shuffle",
    subsections: [
      {
        title: "Le Principe de Désorganisation Naturelle",
        content: [
          "L'entropie logicielle, c'est un concept aussi simple qu'effrayant : avec le temps, un système informatique se désorganise naturellement. Les correctifs s'accumulent sur les correctifs. Les failles s'empilent sur les failles. La complexité augmente. La dette technique explose.",
          "Windows, avec ses décennies d'existence, est un exemple magistral de cette entropie. C'est une cathédrale bâtie sur des fondations romaines, avec des extensions médiévales, des rénovations baroques, et des ajouts modernistes."
        ]
      },
      {
        title: "La Dette Technique Impayée",
        content: [
          "Microsoft ne peut pas tout corriger. Ou plutôt, Microsoft ne veut pas (ou ne peut pas) tout corriger. Chaque mise à jour apporte son lot de nouveaux problèmes. Des correctifs défectueux brisent des fonctionnalités. Des patchs incomplets laissent des vulnérabilités ouvertes.",
          "Le résultat ? Une accumulation de failles persistantes que les cybercriminels exploitent joyeusement."
        ],
        highlight: "C'est un jeu du chat et de la souris, sauf que le chat est myope, asthmatique, et qu'il a oublié où il a mis ses lunettes."
      }
    ]
  },
  {
    id: "act-5",
    title: "Acte V : Les Implications Géopolitiques",
    subtitle: "Ou Qui Tire les Ficelles ?",
    iconName: "GlobeLock",
    subsections: [
      {
        title: "La Surveillance Étatique : PRISM et les Copains",
        content: [
          "Les anomalies de Windows ne sont pas seulement des aubaines pour les cybercriminels. Elles sont aussi compatibles avec des techniques de surveillance étatique. Des programmes comme PRISM (NSA) ou Tempora (GCHQ) reposent sur l'accès direct aux infrastructures informatiques.",
          "Imaginez : si Microsoft laisse délibérément des failles ouvertes, si les outils de surveillance intégrés sont volontairement limités, si la télémétrie collecte des données sensibles... alors Windows devient une infrastructure de surveillance parfaite."
        ]
      },
      {
        title: "Le Doute Raisonnable",
        content: [
          "Attention : nous ne sommes pas dans le complotisme primaire. Nous sommes dans le doute raisonnable. Les preuves techniques existent. Les vulnérabilités sont documentées. Les anomalies sont reproductibles. L'absence de correctifs efficaces est un fait.",
          "Deux hypothèses : 1. Incompétence : Microsoft est incapable de corriger ses propres produits. 2. Délibération : Certaines failles sont maintenues volontairement pour faciliter la surveillance."
        ],
        highlight: "Laquelle est la plus plausible ? La première est embarrassante. La seconde est terrifiante."
      }
    ]
  },
  {
    id: "act-6",
    title: "Acte VI : Les Solutions",
    subtitle: "Ou Comment ne Pas Devenir Parano... Trop Vite",
    iconName: "Terminal",
    subsections: [
      {
        title: "Les Outils Alternatifs : Sortir de la Matrice",
        content: [
          "Heureusement, des alternatives existent. Des outils comme Process Hacker, Volatility, Rekall, ou Sysmon permettent d'analyser le système en profondeur, en contournant les limitations des outils intégrés.",
          "Ces outils sont comme des lunettes infrarouges dans une pièce sombre. Ils révèlent ce que Windows préfère cacher : les processus fantômes, les activités suspectes, les anomalies comportementales."
        ]
      },
      {
        title: "L'Intelligence Artificielle & L'Approche Symbiotique",
        content: [
          "L'IA offre des capacités prometteuses pour détecter des anomalies. Des algorithmes de machine learning peuvent identifier des patterns suspects que l'œil humain manquerait.",
          "Une solution plus radicale serait de découpler les outils de monitoring du noyau Windows. Imaginez un système de surveillance indépendant, tournant sur une machine virtuelle séparée, analysant le système principal de l'extérieur."
        ]
      }
    ]
  }
];