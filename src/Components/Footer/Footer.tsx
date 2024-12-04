import "./footer.css";

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className="footer">
      <footer className="footer-items">
        {children} desarrollado y diseñado por Juan Ramirez full-Stack Developer
        contacto:
      </footer>
    </div>
  );
};

interface FooterProps {
  children: React.ReactNode; // Permite pasar cualquier contenido JSX
}
export { Footer };
