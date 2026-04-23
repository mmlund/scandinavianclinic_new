import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object | object[];
}

const JSON_LD_ID = "page-jsonld";
const CANONICAL_HOST = "https://scandinavianclinic.com";

const normalizeCanonical = (input?: string): string => {
  if (typeof window === "undefined") {
    return input ?? CANONICAL_HOST + "/";
  }
  let path: string;
  if (input) {
    try {
      const url = new URL(input, CANONICAL_HOST);
      path = url.pathname + url.search;
    } catch {
      path = input.startsWith("/") ? input : `/${input}`;
    }
  } else {
    path = window.location.pathname + window.location.search;
  }
  return `${CANONICAL_HOST}${path}`;
};

const setCanonical = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", href);
};

export const syncCanonicalToCurrentPath = () => {
  if (typeof window === "undefined") return;
  setCanonical(normalizeCanonical());
};

export const usePageMeta = ({ title, description, canonical, jsonLd }: PageMeta) => {
  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }

    setCanonical(normalizeCanonical(canonical));

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

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
