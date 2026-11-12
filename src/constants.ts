export const SITE_NAME = 'Silvercore';

export const STATUS_URL = 'https://status.silvercore.fr';

export const MAIN_ACTION = { label: 'Voir nos services', href: '/services' };

export const SOCIALS = {
  instagram: 'https://taap.it/silvercore.insta',
  discord: 'https://taap.it/silvercore.discord',
  discordSupport: 'https://taap.it/silvercore.discord.support',
  github: 'https://taap.it/silvercore.github',
};

export const SERVICES = [
  {
    id: 'silvernote',
    name: 'Silvernote',
    short: 'Notes chiffrées et partagées',
    description: 'L’app de prise de notes gratuite. Classez vos cours, vos courses et vos projets par dossier.',
    points: [
      'Chaque note est chiffrée avant d’être enregistrée.',
      'Écrivez à plusieurs en temps réel sur la même note.',
      'Vos notes se synchronisent sur tous vos appareils.',
    ],
    status: 'Disponible',
    action: 'Essayer Silvernote',
    link: 'https://www.silvernote.fr',
    icon: '/assets/logo/snote/favicon.svg',
    preview: '/assets/img/mockup_mcbook_silvernote.png',
    previewAlt: 'Silvernote ouvert sur un ordinateur portable, avec des notes classées par dossier',
  },
  {
    id: 'silvertransfert',
    name: 'Silvertransfert',
    short: 'Envois chiffrés jusqu’à 10 Go',
    description: 'Envoyez des fichiers jusqu’à 10 Go, gratuitement, par un simple lien.',
    points: [
      'Chiffrement de bout en bout en AES-256 : personne ne voit vos fichiers, pas même nous.',
      'Le fichier et son lien sont supprimés après 30 jours.',
      'Hébergé sur nos serveurs en France.',
    ],
    status: 'Nouveau',
    action: 'Envoyer un fichier',
    link: 'https://www.silvertransfert.fr',
    icon: '/assets/logo/stransfert/favicon.png',
    preview: '/assets/img/mockup_phone_silvertransfert_little.png',
    previewAlt: 'L’écran d’accueil de Silvertransfert sur un téléphone, avec le bouton Faire un transfert',
  },
];

export const FAQS = [
  {
    question: 'Qu’est-ce que Silvercore ?',
    answer: 'Une organisation française basée à Lyon qui conçoit des outils numériques simples et respectueux de la vie privée : Silvernote pour les notes, Silvertransfert pour les fichiers.',
  },
  {
    question: 'Les services sont-ils gratuits ?',
    answer: 'Oui pour l’essentiel. La plupart fonctionnent en freemium : une version de base gratuite, et des fonctions en plus par abonnement.',
  },
  {
    question: 'Mes données sont-elles vraiment chiffrées ?',
    answer: 'Oui. Nos services principaux sont chiffrés de bout en bout. Pour ceux qui ne le permettent pas, les données sont chiffrées dans notre base de données.',
  },
  {
    question: 'Où sont hébergées mes données ?',
    answer: 'Sur nos propres serveurs en France. Les rares services externes que nous utilisons sont français ou européens et soumis au RGPD.',
  },
  {
    question: 'Silvercore revend-il mes données ?',
    answer: 'Non, jamais. Nous ne vendons pas vos données et ne les utilisons pas à des fins publicitaires.',
  },
  {
    question: 'Puis-je utiliser les services sans compte ?',
    answer: 'Certains, oui. Un compte sert à sauvegarder vos données et à accéder à toutes les fonctions.',
  },
  {
    question: 'Pourquoi Silvercore plutôt qu’un autre service ?',
    answer: 'Parce que nous ne monétisons pas vos données, que nous hébergeons tout en France et que nos outils restent simples à prendre en main.',
  },
  {
    question: 'Comment contacter le support ?',
    answer: 'Par le formulaire de contact, par email à support@silvercore.fr, sur nos réseaux sociaux ou sur notre serveur Discord de support.',
  },
];
