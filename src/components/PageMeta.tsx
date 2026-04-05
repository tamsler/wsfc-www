import { useEffect } from "react";

const SITE_NAME = "West Sacramento Futbol Club";
const SITE_URL = "https://westsacramentofc.org";
const DEFAULT_OG_IMAGE = `${SITE_URL}/wsfc.webp`;

function setMetaTag(content: string, property: string, attr: "name" | "property" = "name") {
  const selector = `meta[${attr}="${property}"]`;
  const tag =
    document.querySelector(selector) ??
    document.head.appendChild(document.createElement("meta"));
  tag.setAttribute(attr, property);
  tag.setAttribute("content", content);
}

type PageMetaProps = {
  title: string;
  description: string;
};

export default function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    setMetaTag(description, "description");

    // OpenGraph
    setMetaTag(fullTitle, "og:title", "property");
    setMetaTag(description, "og:description", "property");
    setMetaTag(DEFAULT_OG_IMAGE, "og:image", "property");
    setMetaTag("website", "og:type", "property");

    // Twitter Card
    setMetaTag("summary", "twitter:card");
    setMetaTag(fullTitle, "twitter:title");
    setMetaTag(description, "twitter:description");
    setMetaTag(DEFAULT_OG_IMAGE, "twitter:image");
  }, [title, description]);

  return null;
}
