// Card Component
// A generic parent card wrapper to be used for different card types (project, lab, testimonial, etc.)
// TODO: Implement props for children, style variants, and glass effect.

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="ui-card">
      {children}
    </div>
  );
};

export default Card;
