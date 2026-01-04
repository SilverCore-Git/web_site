// structured link
export interface Link {
  before: string;
  value: string;
  href: string;
  after: string;
}

// simple section (content + title)
export interface SimpleSection {
  title: string;
  description: string[];
  lien?: Link;
  liste?: {
    before: string[];
    puce: string[];
    after: string[];
  };
}


export interface StructuredContent {
  title: string;
  lastUpdate?: string;
  selection: {
    editeur: SimpleSection;
    hebergeur: SimpleSection;
    responsabilite: SimpleSection;
    donnees_personnelles: SimpleSection;
    cookies: SimpleSection;
    contact: SimpleSection;
  };
}
