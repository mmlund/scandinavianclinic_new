import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object | object[];
}

const JSON_LD_ID = "page-jsonld";

export const usePageMeta = ({ title, description, canonical, jsonLd }: PageMeta) => {
  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }

    const link = document.querySelector('link[rel="canonical"]');
    if (link && canonical) {
      link.setAttribute("href", canonical);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && canonical) ogUrl.setAttribute("content", canonical);

    // Remove any existing page-specific JSON-LD
    const existing = document.getElementById(JSON_LD_ID);
    if (existing) existing.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = JSON_LD_ID;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const node = document.getElementById(JSON_LD_ID);
      if (node) node.remove();
    };
  }, [title, description, canonical, jsonLd]);
};
