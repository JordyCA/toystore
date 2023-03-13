import Toycard from '../toy-card/toycard.component';
import './packages.style.css';

const Packages = () => {
    return (
        <div className='__SectionPackages'>
            <div className='text'>
                <span>¿Qué paquetes tenemos?</span>
                <span>Tu diversión en las mejores manos</span>
                <span>Tu envió llegara en menos de 7 días.</span>
            </div>
            <div className='group-pack'>
                <Toycard packName="Paquete básico" />
                <Toycard packName="Paquete regular" />
                <Toycard packName="Paquete caro" />
            </div>


        </div>
    );
}

export default Packages;