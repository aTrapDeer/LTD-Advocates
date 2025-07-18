export default function sitemap() {
  const baseUrl = 'https://www.ltdadvocates.com/';
  
  const routes = [
    '',
    '/services',
    '/about',
    '/contact',
    '/booking',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 