import { useTranslations } from "next-intl";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const tFooter = useTranslations("footer");
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: 48,
        padding: 24,
        borderTop: "1px solid #eee",
        fontSize: 15,
      }}
      className={className}
    >
      <p style={{ color: "#666" }}>{tFooter("text")}</p>
    </div>
  );
}
