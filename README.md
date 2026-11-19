# Silvercore : site vitrine

Le site de [silvercore.fr](https://www.silvercore.fr), qui présente les services Silvercore (Silvernote, Silvertransfert), le blog, la FAQ, le contact et les pages légales.

C'est une application React 19 + TypeScript construite avec Vite, puis servie en statique par nginx dans une image Docker.

## Démarrer

Il faut Node 22.

```bash
npm ci
npm run dev        # http://localhost:3000
```

| Commande          | Rôle                                     |
|-------------------|------------------------------------------|
| `npm run dev`     | serveur de dev sur le port 3000          |
| `npm run build`   | build de production dans `dist/`         |
| `npm run preview` | sert le build localement                 |
| `npm run lint`    | vérification des types (`tsc --noEmit`)  |
| `npm run clean`   | supprime `dist/`                         |

## Arborescence

```
index.html              meta par défaut (page d'accueil), Umami
src/
  App.tsx               routes (react-router)
  constants.ts          nom du site, liens de navigation, services, engagements
  seo.ts                usePageMeta : titre, description, URL canonique, JSON-LD par page
  kit.ts                charge le runtime du design system (public/assets/kit)
  transitions.ts        transitions de sortie et d'entrée entre les pages
  components/           Layout (Navbar, Footer), ui, EuropeMap
  pages/                Home, Services, Blog, BlogPost, FAQ, Contact, Legal, Privacy
  services/blogService.ts  lecture et tri des articles
  data/Blog.json        les articles du blog
  data/europeMap.ts     données de la carte du hero
public/
  assets/kit/           design system (scripts lus une fois au chargement)
  assets/img/, logo/    images, couvertures du blog, logos
  sitemap.xml, robots.txt
scripts/blog-covers.py  génère les couvertures SVG en matrice de points
```

Les liens internes sont de vrais `<a href>` (rechargement complet) : les scripts du kit ne lisent le DOM qu'une fois au démarrage, voir `src/kit.ts`.

## Publier un article

1. Ajouter une entrée dans `src/data/Blog.json` :

   ```json
   {
     "id": "mon-article",
     "title": "…",
     "excerpt": "…",
     "content": "Markdown (GFM)…",
     "date": "2026-11-19",
     "author": "Équipe Silvercore",
     "category": "Sécurité",
     "image": "/assets/img/blog/covers/mon-article.svg",
     "imageAlt": "…"
   }
   ```

   `imageCredit` et `imageSource` sont optionnels. L'article est servi sur `/blog/<id>` ; les articles sont triés par `date`.
2. Ajouter l'URL dans `public/sitemap.xml`.
3. Pour une couverture dans le style du site, ajouter le sujet dans `scripts/blog-covers.py` puis :

   ```bash
   python3 scripts/blog-covers.py <countries-50m.json de world-atlas> public/assets/img/blog/covers
   ```

## Déploiement

- `Dockerfile` : build Node 22, puis image `nginx:alpine` qui sert `dist/` (`nginx.conf` renvoie toutes les routes vers `index.html` et met `/assets/` en cache un an).
- `.github/workflows/docker.yml` : à chaque push sur `main` ou tag `v*`, l'image est construite et poussée sur `ghcr.io/silvercore-git/web-site` (tags `latest`, branche/tag et sha). Secrets nécessaires : `GHCR_USER`, `GHCR_TOKEN` (PAT avec `write:packages`).

Pour tester l'image en local :

```bash
docker build -t silvercore-site .
docker run --rm -p 8080:80 silvercore-site   # http://localhost:8080
```
