
import { DayData } from './types';

export const CALENDAR_DATA: DayData[] = [
  {
    id: 1,
    title: "Villarreal CF",
    content: "Vesteixen de groc per accident: el 1947 el president va viatjar a València per comprar samarretes blanques, es van esgotar i només en quedaven de grogues.",
    colors: ["#F5E216", "#005187"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Villarreal_CF_logo-en.svg/962px-Villarreal_CF_logo-en.svg.png",
    question: "Per què el Villarreal vesteix de color groc?",
    options: ["Per honorar la ceràmica local", "Per accident: no quedaven samarretes blanques", "Per imitar el submarí dels Beatles"],
    correctAnswer: 1
  },
  {
    id: 2,
    title: "Real Madrid",
    content: "El 1998, abans d'un partit de Champions, la porteria del Bernabéu es va trencar i van haver d'anar corrents en camió a la ciutat esportiva a buscar-ne una altra mentre el partit s'endarreria una hora.",
    colors: ["#EFEFEF", "#FEBE10"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    question: "Quin incident va endarrerir un partit de Champions al Bernabéu el 1998?",
    options: ["Es va trencar una porteria", "Es va anar la llum", "L'àrbitre va perdre el xiulet"],
    correctAnswer: 0
  },
  {
    id: 3,
    title: "Valencia CF",
    content: "Santiago Cañizares es va perdre el Mundial del 2002 perquè li va caure un flascó de colònia al peu al bany de l'hotel i es va seccionar un tendó.",
    colors: ["#EFEFEF", "#000000"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg",
    question: "Per què es va perdre Cañizares el Mundial de 2002?",
    options: ["Es va trencar la mà parant un penal", "Li va caure un flascó de colònia al peu", "Va agafar una grip molt forta"],
    correctAnswer: 1
  },
  {
    id: 4,
    title: "Atlético de Madrid",
    content: "El president Jesús Gil va celebrar un títol de Lliga recorrent els carrers de Madrid muntat a lloms d'un elefant anomenat \"Imperioso\".",
    colors: ["#CB3524", "#EFEFEF"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/f/f9/Atletico_Madrid_Logo_2024.svg",
    question: "Com va celebrar Jesús Gil un títol de Lliga?",
    options: ["Muntat en un elefant", "Banyant-se al Manzanares", "Saltant en paracaigudes"],
    correctAnswer: 0
  },
  {
    id: 5,
    title: "Rayo Vallecano",
    content: "És l'únic estadi de Primera on el fons d'una porteria no té grada, sinó una paret gegant enganxada a blocs de pisos des d'on els veïns veuen els partits gratis al balcó.",
    colors: ["#EFEFEF", "#D62526"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Rayo_Vallecano_logo.svg/1200px-Rayo_Vallecano_logo.svg.png",
    question: "Què té d'especial l'estadi de Vallecas?",
    options: ["Té gespa artificial blava", "No té grada en un fons, sinó edificis", "És l'estadi més gran d'Espanya"],
    correctAnswer: 1
  },
  {
    id: 6,
    title: "Real Betis",
    content: "Els colors verd-i-blancs no són per la bandera andalusa, sinó copiats del Celtic de Glasgow perquè un dels fundadors va estudiar a Escòcia i li va encantar l'equipació.",
    colors: ["#0BB363", "#EFEFEF"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg",
    question: "Quin equip va inspirar els colors del Betis?",
    options: ["Celtic de Glasgow", "Sporting de Lisboa", "Panathinaikos"],
    correctAnswer: 0
  },
  {
    id: 7,
    title: "Celta de Vigo",
    content: "L'estrella russa Aleksandr Mostovoi va abandonar un partit contra l'Sporting de Gijón a mitja part, marxant del camp ell sol perquè estava frustrat amb com jugava el seu equip.",
    colors: ["#8AC3EE", "#EFEFEF"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/1/12/RC_Celta_de_Vigo_logo.svg",
    question: "Què va fer Aleksandr Mostovoi en un partit contra l'Sporting?",
    options: ["Va marcar 5 gols", "Va abandonar el camp enfadat a mitja part", "Va jugar de porter"],
    correctAnswer: 1
  },
  {
    id: 8,
    title: "Real Oviedo",
    content: "El club es va salvar de la desaparició el 2012 gràcies a una campanya viral a Twitter on milers de persones de tot el món (inclòs l'home més ric del món, Carlos Slim) van comprar accions per 10€.",
    colors: ["#003183", "#EFEFEF"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Real_Oviedo_logo.svg/827px-Real_Oviedo_logo.svg.png",
    question: "Qui va ajudar a salvar l'Oviedo el 2012?",
    options: ["El govern d'Astúries", "Milers de persones a Twitter i Carlos Slim", "La Lliga de Futbol"],
    correctAnswer: 1
  },
  {
    id: 9,
    title: "Sevilla FC",
    content: "L'entrenador Carlos Bilardo va esbroncar el seu metge per atendre un rival lesionat cridant la famosa frase: \"¡Al enemigo, ni agua! ¡Pisalo, pisalo!\".",
    colors: ["#EFEFEF", "#D41217"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg",
    question: "Quina frase famosa va cridar Carlos Bilardo?",
    options: ["¡Ganar, ganar y ganar!", "¡Pisalo, pisalo!", "¡Si no sufres no ganas!"],
    correctAnswer: 1
  },
  {
    id: 10,
    title: "Getafe CF",
    content: "Van llançar una campanya de màrqueting anomenada \"Getafinder\", una app estil Tinder només per a abonats del club, amb l'objectiu de \"reproduir\" més fans del Getafe.",
    colors: ["#005999", "#EFEFEF"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_logo.svg/1148px-Getafe_logo.svg.png",
    question: "Què era 'Getafinder'?",
    options: ["Un detector de talent jove", "Una app estil Tinder per a abonats", "Un cercador de seients lliures"],
    correctAnswer: 1
  },
  {
    id: 11,
    title: "CA Osasuna",
    content: "En un partit als anys 80 a El Sadar, el públic va llançar un garrí (un porc petit) viu al terreny de joc amb la samarreta de l'equip posada.",
    colors: ["#0A346F", "#D91C1F"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/d/db/Osasuna_logo.svg",
    question: "Quin animal va llançar el públic al camp als anys 80?",
    options: ["Un gall", "Un garrí (porc petit)", "Un conill"],
    correctAnswer: 1
  },
  {
    id: 12,
    title: "RCD Espanyol",
    content: "El mític porter Tommy N’Kono va inspirar tant a un nen italià que aquest va decidir fer-se porter només per ell; aquell nen era Gianluigi Buffon.",
    colors: ["#338EC3", "#EFEFEF"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/d/d6/Rcd_espanyol_logo.svg",
    question: "A quin porter llegendari va inspirar Tommy N'Kono?",
    options: ["Gianluigi Buffon", "Iker Casillas", "Manuel Neuer"],
    correctAnswer: 0
  },
  {
    id: 13,
    title: "Levante UD",
    content: "Johan Cruyff, un dels millors jugadors de la història, va fitxar sorprenentment pel Levante el 1981 i va jugar 10 partits a Segona Divisió quan ningú s'ho esperava.",
    colors: ["#005CA5", "#A50044"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/7/7b/Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg",
    question: "Quina llegenda mundial va jugar al Levante el 1981?",
    options: ["Diego Maradona", "Johan Cruyff", "Pelé"],
    correctAnswer: 1
  },
  {
    id: 14,
    title: "Athletic Club",
    content: "El famós \"Pichichi\" (Rafael Moreno) jugava sempre amb un mocador lligat al cap per protegir-se d'una ferida, creant una imatge icònica que va passar a la història.",
    colors: ["#EE2523", "#000000"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg",
    question: "Què portava sempre 'Pichichi' al cap?",
    options: ["Una gorra", "Un mocador nuat", "Una cinta de cuir"],
    correctAnswer: 1
  },
  {
    id: 15,
    title: "Real Sociedad",
    content: "El 1976, abans de la legalització de la Ikurriña, els capitans de la Reial i l'Athletic (Kortabarria i Iribar) van sortir al camp portant la bandera basca il·legalment com a acte de protesta.",
    colors: ["#0067B1", "#EFEFEF"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg",
    question: "Què van treure els capitans al derbi basc de 1976?",
    options: ["Una pancarta de pau", "La Ikurriña (llavors il·legal)", "Una samarreta conjunta"],
    correctAnswer: 1
  },
  {
    id: 16,
    title: "RCD Mallorca",
    content: "L'any 2004, Samuel Eto’o va gastar-se 30.000€ de la seva butxaca per convidar a una paellada gegant a tots els aficionats que viatgessin a la final de la Copa del Rei a Elx.",
    colors: ["#E20613", "#000000"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/97/RCD_Mallorca_%28logo%29.svg/1547px-RCD_Mallorca_%28logo%29.svg.png",
    question: "Què va pagar Samuel Eto'o als aficionats del Mallorca?",
    options: ["L'entrada al camp", "Una paellada gegant", "El bitllet d'avió"],
    correctAnswer: 1
  },
  {
    id: 17,
    title: "Elche CF",
    content: "Van ser el primer equip d'Espanya a portar una franja horitzontal verda al pit (el 1927), inspirada directament en les vistes dels palmerars de la ciutat.",
    colors: ["#EFEFEF", "#00A650"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/a/a7/Elche_CF_logo.svg",
    question: "En què s'inspira la franja verda de l'Elche?",
    options: ["En els camps de gespa", "En els palmerars de la ciutat", "En la bandera d'Alacant"],
    correctAnswer: 1
  },
  {
    id: 18,
    title: "FC Barcelona",
    content: "El fitxatge de Leo Messi es va firmar tècnicament en un tovalló de paper d'un bar perquè Carles Rexach no volia deixar escapar el nen i no tenia cap altre paper a mà.",
    colors: ["#004D98", "#A50044"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    question: "On es va firmar el primer contracte de Messi?",
    options: ["En un tovalló de paper", "En un contracte oficial de la FIFA", "En una llibreta d'escola"],
    correctAnswer: 0
  },
  {
    id: 19,
    title: "Girona FC",
    content: "Durant la celebració del seu ascens, l'autobús descapotable va passar per sota d'unes branques d'arbres massa baixes i els jugadors van haver d'ajupir-se ràpidament per evitar un accident greu.",
    colors: ["#CE1126", "#EFEFEF"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Girona_FC_Logo.svg/1200px-Girona_FC_Logo.svg.png",
    question: "Quin incident va passar a la rua d'ascens del Girona?",
    options: ["L'autobús es va avariar", "Van passar sota arbres massa baixos", "Es va punxar una roda"],
    correctAnswer: 1
  },
  {
    id: 20,
    title: "Deportivo Alavés",
    content: "Van jugar la final de la UEFA de 2001 contra el Liverpool amb una samarreta especial que portava els noms de tots els socis del club impresos a la tela.",
    colors: ["#009AD7", "#EFEFEF"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Deportivo_Alaves_logo_%282020%29.svg/1200px-Deportivo_Alaves_logo_%282020%29.svg.png",
    question: "Què portava la samarreta de la final UEFA 2001?",
    options: ["Els noms de tots els socis", "Un mapa de Vitoria", "El menú del sopar de celebració"],
    correctAnswer: 0
  },
  {
    id: 21,
    title: "LALIGA",
    content: "Només Barça, Madrid i Athletic Club no han baixat mai de Primera Divisió, un rècord que mantenen des de l'inici de la competició el 1929.",
    colors: ["#111111", "#EFEFEF"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bb/LaLiga_EA_Sports_%28Black%29.svg",
    question: "Quins tres equips no han baixat mai a Segona?",
    options: ["Barça, Madrid i Athletic", "Madrid, Atlético i Barça", "Barça, Madrid i Valencia"],
    correctAnswer: 0
  },
  {
    id: 22,
    title: "LALIGA",
    content: "La primera lliga es va disputar la temporada 1928–29 amb només 10 equips, i el FC Barcelona es va proclamar el primer campió de la història.",
    colors: ["#111111", "#EFEFEF"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bb/LaLiga_EA_Sports_%28Black%29.svg",
    question: "Quants equips van jugar la primera lliga?",
    options: ["20 equips", "10 equips", "12 equips"],
    correctAnswer: 1
  },
  {
    id: 23,
    title: "LALIGA",
    content: "Diversos equips històrics com el Real Oviedo o la UD Las Palmas figuren entre els grans de la classificació històrica total de Primera Divisió.",
    colors: ["#111111", "#EFEFEF"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bb/LaLiga_EA_Sports_%28Black%29.svg",
    question: "Quin equip històric està entre els grans de la classificació històrica?",
    options: ["Real Oviedo", "CE Europa", "UE Lleida"],
    correctAnswer: 0
  },
  {
    id: 24,
    title: "LALIGA",
    content: "Als inicis de la lliga, els àrbitres no feien servir targetes; les targetes grogues i vermelles no es van introduir al futbol espanyol fins a l'any 1971.",
    colors: ["#111111", "#EFEFEF"],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bb/LaLiga_EA_Sports_%28Black%29.svg",
    question: "Quan es van introduir les targetes (grogues/vermelles) a Espanya?",
    options: ["Des del principi (1929)", "L'any 1971", "L'any 1990"],
    correctAnswer: 1
  }
];
