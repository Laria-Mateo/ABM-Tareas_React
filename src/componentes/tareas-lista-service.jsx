import { getTareas } from "./tareas-service"

export default function TareasListaService(props) {

    const datos = getTareas();
    return (

        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>Terminada</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody> 
                    {/*La funcion map en este cao se utiliza como un foreach*/}
                    {datos.map((t)=> (
                    <tr key={t.id}>
                        <td>{t.id}</td>
                        <td>{t.descripcion}</td>
                        <td>{t.terminado?'Si':'No'}</td>
                        <td>
                            <button className="btn btn-warning" onClick={()=>props.editar(t.id)}>Editar</button>
                            <button className="btn btn-danger ms-1" onClick={()=>props.borrar(t.id)}>Borrar</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>


    )
}