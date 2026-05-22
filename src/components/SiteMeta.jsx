import { useEffect } from 'react';
import { siteContent } from '../data/site.js';

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

export default function SiteMeta() {
  useEffect(() => {
    const { seo } = siteContent;
    document.title = seo.title;
    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('meta[name="theme-color"]', 'content', seo.themeColor);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:image"]', 'content', seo.image);
  }, []);

  return null;
}
