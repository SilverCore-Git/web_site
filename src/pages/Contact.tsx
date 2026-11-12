import { PageHead } from '@/src/components/ui';
import { SOCIALS } from '@/src/constants';

export function Contact() {
  return (
    <section className="section section--page" aria-labelledby="contact-h">
      <div className="wrap">
        <div className="grid grid--top">
          <div className="span-5 stack-6">
            <PageHead id="contact-h" title="Contacter Silvercore" lead="Une question, un bug ou une idée pour nos services : écrivez-nous, nous répondons à chaque message." />
            <div className="contact-list">
              <div>
                <h3>Par email</h3>
                <p><a href="mailto:contact@silvercore.fr">contact@silvercore.fr</a>, pour tout le reste</p>
                <p><a href="mailto:support@silvercore.fr">support@silvercore.fr</a>, pour l’aide sur un service</p>
                <p><a href="mailto:host@silvercore.fr">host@silvercore.fr</a>, pour nos infrastructures</p>
              </div>
              <div>
                <h3>Sur Discord</h3>
                <p><a href={SOCIALS.discord}>Le serveur Silvercore</a>, pour la communauté</p>
                <p><a href={SOCIALS.discordSupport}>Le serveur support</a>, pour une aide rapide</p>
              </div>
            </div>
          </div>
          <form
            className="form span-6 start-7"
            action="https://formspree.io/f/xvzdjvoy"
            method="post"
            data-endpoint="https://formspree.io/f/xvzdjvoy"
            data-sent="Votre message est envoyé. Nous vous répondons par email."
            noValidate
          >
            <div className="field">
              <label htmlFor="f-name">Nom</label>
              <input id="f-name" name="name" type="text" autoComplete="name" required aria-describedby="f-name-err" />
              <p className="field__error" id="f-name-err" hidden>Écrivez votre nom.</p>
            </div>
            <div className="field">
              <label htmlFor="f-email">Email</label>
              <input id="f-email" name="email" type="email" autoComplete="email" inputMode="email" required aria-describedby="f-email-err" />
              <p className="field__error" id="f-email-err" hidden>Écrivez une adresse email avec un @, comme nom@exemple.fr.</p>
            </div>
            <div className="field">
              <label htmlFor="f-message">Message</label>
              <textarea id="f-message" name="message" rows={6} required aria-describedby="f-message-err"></textarea>
              <p className="field__error" id="f-message-err" hidden>Écrivez votre message.</p>
            </div>
            <div className="btn-row"><button className="btn btn--primary" type="submit">Envoyer le message</button></div>
            <p className="form__status" role="status" data-form-status></p>
            <p className="t-small muted">Votre nom, votre email et votre message servent seulement à vous répondre.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
