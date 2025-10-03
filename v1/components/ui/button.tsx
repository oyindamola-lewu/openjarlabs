// Button Component
// A reusable button component with support for variants (primary, secondary, glass, etc.)
// TODO: Implement props for label, onClick, variant, size, and disabled states.

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className="ui-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
