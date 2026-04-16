export const SITE_NAME = "Silvercore";
export const SITE_DESCRIPTION = "Des services numériques pensés pour votre confidentialité.";

export const NAV_LINKS = [
  { name: "Accueil", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export const SERVICES = [
  {
    id: "silvernote",
    name: "Silvernote",
    description: "Votre app de prise de notes gratuite. Organisez votre travail, vos courses, vos loisirs et bien plus encore.",
    details: "Chaque note est chiffrée et vos données restent vôtres. Collaborez en temps réel et restez synchronisé.",
    status: "Disponible",
    link: "https://www.silvernote.fr",
    icon: "/assets/logo/snote/favicon.svg",
    preview: "/assets/img/mockup_mcbook_silvernote.png"
  },
  {
    id: "silvertransfert",
    name: "Silvertransfert",
    description: "Des transferts gratuits et sécurisés jusqu'à 10 Go.",
    details: "Chiffrement de bout en bout. Personne ne peut voir vos fichiers, même pas nous. Simple, rapide et français.",
    status: "Obsolete",
    link: "https://www.silvertransfert.fr",
    icon: "/assets/logo/stransfert/favicon.png",
    preview: "/assets/img/mockup_phone_silvertransfert.png"
  }
];

export const POLICIES = [
  {
    title: "Durabilité et écologie",
    content: "Nous concevons nos services et nos infrastructures dans une optique durable et respectueuse de l’environnement. Silvercore s’engage à réduire au maximum son empreinte carbone."
  },
  {
    title: "Éthique et transparence",
    content: "Silvercore adopte une approche éthique fondée sur la transparence, l’équité et la responsabilité. Nous veillons à ce que nos décisions respectent nos utilisateurs."
  },
  {
    title: "Sécurité et confidentialité",
    content: "La protection de vos données est au cœur de nos priorités. Vos informations sont stockées exclusivement sur nos serveurs en France et systématiquement chiffrées."
  }
];

export const FAQS = [
  {
    question: "Qu'est-ce que Silvercore ?",
    answer: "Silvercore est un collectif français qui conçoit des outils numériques basés sur la simplicité, l'intuitivité et le respect de la vie privée."
  },
  {
    question: "Mes données sont-elles vraiment sécurisées ?",
    answer: "Oui, nous utilisons le chiffrement de bout en bout pour nos services majeurs. De plus, toutes les données sont hébergées en France."
  },
  {
    question: "Les services sont-ils gratuits ?",
    answer: "La plupart de nos services de base sont gratuits. Nous croyons que la confidentialité ne devrait pas être un luxe."
  }
];
