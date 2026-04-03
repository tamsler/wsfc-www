import ReactMarkdown from "react-markdown";

type MarkdownContentProps = {
  source: string;
};

export default function MarkdownContent({ source }: MarkdownContentProps) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        components={{
          a: ({ ...props }) => {
            const isExternal = props.href?.startsWith("http");
            return (
              <a
                {...props}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              />
            );
          },
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
