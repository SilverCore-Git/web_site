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
    answer: "Silvercore est une organisation française qui conçoit des outils numériques basés sur la simplicité, l'intuitivité et le respect de la vie privée."
  },
  {
    question: "Quelle est la place de la sécurité chez Silvercore ?",
    answer: "Elle est centrale. Silvercore a pour objectif de proposer des services sécurisés et de lutter contre les GAFAM qui exploitent vos données et vous traquent sur Internet. Pour cela, chez Silvercore, tout est chiffré. Les quelques services externes utilisés sont français ou européens, et soumis à la réglementation RGPD."
  },
  {
    question: "Mes données sont-elles vraiment sécurisées ?",
    answer: "Oui, nous utilisons le chiffrement de bout en bout pour nos services majeurs. Pour les services qui ne le permettent pas, les données sont systématiquement chiffrées en base de données. De plus, elles sont hébergées en France."
  },
  {
    question: "Les services sont-ils gratuits ?",
    answer: "La plupart de nos services fonctionnent sur un modèle freemium : une version de base est accessible gratuitement, avec des fonctionnalités supplémentaires disponibles via un abonnement."
  },
  {
    question: "Pourquoi choisir Silvercore plutôt qu'un autre service ?",
    answer: "Silvercore se distingue par son engagement fort en faveur de la confidentialité, sa transparence et la simplicité de ses outils. Contrairement à de nombreux services, nous ne monétisons pas vos données."
  },
  {
    question: "Où sont hébergées mes données ?",
    answer: "Toutes les données sont hébergées en France ou en Europe, dans des infrastructures respectant strictement les normes de sécurité et le RGPD."
  },
  {
    question: "Silvercore revend-il mes données ?",
    answer: "Non, jamais ! Vos données vous appartiennent. Silvercore ne les vend pas et ne les exploite pas à des fins publicitaires."
  },
  {
    question: "Puis-je utiliser les services sans créer de compte ?",
    answer: "Certains services peuvent être utilisés sans compte, mais la création d'un compte permet de sauvegarder vos données et d'accéder à toutes les fonctionnalités."
  },
  {
    question: "Comment contacter le support ?",
    answer: "Vous pouvez contacter le support via le formulaire de contact, les email contact et support, sur nos reseau sociaux et sur nos serveurs discords (que demandé de plus ?). Nous faisons notre maximum pour répondre rapidement à toutes les demandes."
  }
];