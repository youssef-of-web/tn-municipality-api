interface FooterProps {
  text?: string;
  className?: string;
}

export function Footer({
  text = "Built with ❤️ for the Tunisian developer community",
  className,
}: FooterProps) {
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
      <p style={{ color: "#666" }}>{text}</p>
    </div>
  );
}
