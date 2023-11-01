import { Link, useNavigate } from 'react-router-dom';
import TareasListaService from './tareas-lista-service';

export default function TareasAbmService() {

    const navigate = useNavigate()
    return (
        <div className="container">
        

            <h2>Abm de tareas</h2>
            <TareasListaService/>
            <div>
                <button className="btn btn-primary" onClick={()=>navigate("/tareas/agregar")}>agregarTarea</button>
            </div>
           <br />
            <Link to="/">Home</Link>
        </div>
        
    )
}