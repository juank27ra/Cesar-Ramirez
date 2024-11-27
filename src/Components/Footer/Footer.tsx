const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className="footer">
      <footer className="footer-items">{children} aquiva el footer</footer>;
    </div>
  );
};

interface FooterProps {
  children: React.ReactNode; // Permite pasar cualquier contenido JSX
}
export { Footer };
