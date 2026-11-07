/**
 * Post-build static route generator (`scripts/prerender-routes.mjs`).
 *
 * Ensures every route in `sitemap.xml` (`/resume`, `/project`, `/writing/*`) exists as a
 * physical `dist/<route>/index.html` file with route-specific `<title>`, `<meta name="description">`,
 * OpenGraph tags, and `<link rel="canonical">`.
 *
 * This guarantees GitHub Pages serves HTTP 200 OK (instead of HTTP 404 via 404.html) when
 * Googlebot, Bingbot, GPTBot, ClaudeBot, or PerplexityBot crawls those URLs directly!
 */
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const routes = [
  {
    route: 'resume',
    title: 'Resume & CV | Kartikesh Mishra · Co-Founder & CTO at Lamina AI · MIT EECS',
    description:
      'Curriculum Vitae and engineering resume of Kartikesh Mishra — Co-Founder & CTO at Lamina AI (YC), MIT EECS M.Eng. in AI/ML, dual B.S. in Computer Science and Mathematics.',
  },
  {
    route: 'project',
    title: 'Projects & Open Source | Kartikesh Mishra · MIT EECS & Lamina AI',
    description:
      'Selected open-source systems, machine learning research, and engineering projects by Kartikesh Mishra, including AssemblyTS, Pyssemble, OctoCloud, 3DAttnVAE-GAN, and CTRL-MoE.',
  },
  {
    route: 'writing/transformer-based-learning-to-rank',
    title: 'Transformer Based Learning to Rank | Kartikesh Mishra · MIT Expository Paper',
    description:
      'Expository paper on Transformer Based Learning to Rank by Kartikesh Mishra (MIT EECS & Mathematics).',
  },
  {
    route: 'writing/iterative-polynomial-root-finding',
    title: 'Iterative Polynomial Root Finding Algorithms | Kartikesh Mishra · MIT Expository Paper',
    description:
      'Expository paper on Iterative Polynomial Root Finding Algorithms in numerical analysis by Kartikesh Mishra (MIT EECS & Mathematics).',
  },
  {
    route: 'writing/multiplicative-weight-update-in-rl',
    title: 'Multiplicative Weight Update in Reinforcement Learning | Kartikesh Mishra · MIT Expository Paper',
    description:
      'Expository paper on Multiplicative Weight Update dynamics in Reinforcement Learning and Game Theory by Kartikesh Mishra (MIT EECS & Mathematics).',
  },
  {
    route: 'writing/random-walk',
    title: 'Random Walk | Kartikesh Mishra · MIT Expository Paper',
    description:
      'Expository paper on Random Walk and stochastic processes by Kartikesh Mishra (MIT EECS & Mathematics).',
  },
];

for (const r of routes) {
  const canonicalUrl = `https://mk314k.github.io/${r.route}`;
  const customized = baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${r.title}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${r.description}" />`
    )
    .replace(
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    )
    .replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${r.title}" />`
    )
    .replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${r.description}" />`
    )
    .replace(
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${canonicalUrl}" />`
    )
    .replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${r.title}" />`
    )
    .replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${r.description}" />`
    );

  const outDir = path.join(distDir, r.route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), customized, 'utf-8');
}

// Keep 404.html fallback for any unknown paths
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
console.log(`Generated ${routes.length} static route HTML entrypoints + 404.html in dist/`);
