import "./FeatureCard.css";

type FeatureCardProps = {
  title: string;
  description: string;
  link?: string;
  href?: string;
};

export function FeatureCard({
  title,
  description,
  link = "Open →",
  href = "#platform",
}: FeatureCardProps) {
  return (
    <a className="feature-card" href={href}>
      <span className="feature-card__icon" aria-hidden="true">
        ◆
      </span>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
      <span className="feature-card__spacer" />
      <span className="feature-card__link">{link}</span>
    </a>
  );
}
