import { FAQS } from '@/src/constants';
import { PageHead } from '@/src/components/ui';

export function FAQ() {
  return (
    <section className="section section--page" aria-labelledby="faq-h">
      <div className="wrap">
        <div className="grid grid--top">
          <div className="span-5 stack-4">
            <PageHead id="faq-h" title="Questions fréquentes" lead="Sur Silvercore, nos services et ce que nous faisons de vos données." />
            <a className="link" href="/contact">Poser une autre question</a>
          </div>
          <div className="faq span-6 start-7">
            {FAQS.map((f) => (
              <div className="faq__item" key={f.question}>
                <h2 className="t-card">{f.question}</h2>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
