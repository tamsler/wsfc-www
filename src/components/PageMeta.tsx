import { useEffect } from "react";

const SITE_NAME = "West Sacramento Futbol Club";

type PageMetaProps = {
  title: string;
  description: string;
};

export default function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    const descriptionTag =
      document.querySelector('meta[name="description"]') ??
      document.head.appendChild(document.createElement("meta"));

    descriptionTag.setAttribute("name", "description");
    descriptionTag.setAttribute("content", description);
  }, [title, description]);

  return null;
}
