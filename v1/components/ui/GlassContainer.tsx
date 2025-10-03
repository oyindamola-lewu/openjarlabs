type GlassContainerProps = {
  children: React.ReactNode;
};

const GlassContainer = ({ children }: GlassContainerProps) => {
  return (
    <div className="ui-glass-container">
      {children}
    </div>
  );
};

export default GlassContainer;
