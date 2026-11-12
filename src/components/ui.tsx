// Small pieces shared by the pages. The look comes from the kit (public/assets/kit).

export function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

export function Check() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="m4.5 8.2 2.3 2.3 4.7-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** A page head for the inner pages: the h1 on the left line and one line under it. */
export function PageHead({ id, title, lead, children }: { id: string; title: string; lead?: string; children?: React.ReactNode }) {
  return (
    <div className="section-head page-head">
      <h1 id={id}>{title}</h1>
      {lead && <p className="t-lead">{lead}</p>}
      {children}
    </div>
  );
}

export function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}
