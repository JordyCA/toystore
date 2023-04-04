import about from "../../assets/img/section/about.jpeg";
import pony from "../../assets/img/section/pony.png";
import "./about.style.css";
const About = () => {
  return (
    <div className="__SectionAbout">
      <div className="perfilImage">
        <img src={about} alt="about-image" />
      </div>
      <div className="group-image">
        <img className="pony" src={pony} alt="pony-image" />
      </div>
      <div className="group-text">
        <div className="title">
          <h2>Sobre nosotros</h2>
        </div>
        <div className="text">
          <p>
            En "Mundo de Leyendas y Juguetes" estamos comprometidos en llevar la
            diversión y la imaginación a todos nuestros clientes. Somos una
            empresa joven, pero apasionados por los juguetes y la creatividad.
          </p>
          <p>
            Nuestro objetivo es ofrecer una experiencia única a todos nuestros
            clientes, a través de juguetes inspirados en leyendas y personajes
            de la cultura pop. Queremos crear un lugar donde la imaginación y la
            diversión se mezclen, y donde todos puedan encontrar algo que les
            guste.
          </p>
          <p>
            En "Mundo de Leyendas y Juguetes" creemos que los juguetes no son
            solo para niños, sino que pueden ser disfrutados por personas de
            todas las edades. Es por eso que ofrecemos una amplia selección de
            juguetes para coleccionistas y adultos, así como para niños.
          </p>
          <p>
            Nuestra empresa está en constante crecimiento y mejora. Trabajamos
            arduamente para ofrecer siempre los mejores productos y servicios a
            nuestros clientes, y estamos comprometidos en crecer y mejorar cada
            día más.
          </p>
          <p>
            En resumen, en "Mundo de Leyendas y Juguetes" somos una empresa
            joven pero apasionada, que cree en la importancia de la diversión y
            la imaginación en la vida de las personas. Queremos ser un lugar
            donde todos puedan encontrar algo que les guste y los haga felices.
            ¡Únete a nuestro mundo de leyendas y juguetes!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
