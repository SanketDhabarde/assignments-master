import "./Card.css";

interface Social {
  title: string;
  link: string;
}

interface CardProps {
  name: string;
  description: string;
  interests: string[];
  socials: Social[];
}

function Card({ name, description, interests, socials }: CardProps) {
  return (
    <div className="card">
      <h1>{name}</h1>
      <div>{description}</div>
      <h2>Interests</h2>
      <div className="interests">
        {interests.map((interest) => (
          <span>{interest}</span>
        ))}
      </div>
      {socials.map(({ title, link }) => (
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-link">
          {title}
        </a>
      ))}
    </div>
  );
}

export default Card;
