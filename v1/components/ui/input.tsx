

// Input Component
// A reusable text input component for forms (text, email, password, etc.)
// TODO: Implement props for type, placeholder, value, onChange, label, and error state.

type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type = "text", placeholder, value, onChange }: InputProps) => {
  return (
    <input
      className="ui-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;