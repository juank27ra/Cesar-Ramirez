import "./Journalist.css";
import Fperfil from "../../../assets/Cesar Ramirez Perfil.jpg";

const Journalist = () => {
  return (
    <div>
      <div className="container-journalist">
        <img src={Fperfil} alt="foto de Cesar Ramirez" className="fperfil" />
        <h2>
          Esta Página es dirigida por el Periodista y autor de libros Cesar
          David Ramirez
          <br />
          Un producto tecnológico para informar al mundo
        </h2>
      </div>
    </div>
  );
};

export { Journalist };
