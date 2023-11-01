import { useState } from "react";
import TareasForm from "./tareas-form";
import TareasLista from "./tareas-lista";
import { Link, useNavigate } from 'react-router-dom'

const tareaVacia ={id:-1,descripcion: '', terminada:false}


export default function TareasAbm() {
    
    const [tareas, setTareas] = useState([
        {id:1,descripcion: 'Tarea 1', terminada:false},
        {id:2,descripcion: 'Tarea 2', terminada:false}
    ]);

    const [estado, setEstado] = useState({
        mostrarForm: false,
        tareaActual: tareaVacia,
    })

    const navigate = useNavigate();




    const ocultarForm = () =>{
        setEstado({...estado, mostrarForm:false})
    }
    const agregarTarea = () =>{
        navigate("/tareas/agregar")
        setEstado({...estado,tareaActual:tareaVacia, mostrarForm:true})

    }
    const editarTarea = (id) =>{
        const tareaAEditar = tareas.find(t=> t.id === id);
       
        setEstado({...estado, tareaActual:tareaAEditar,mostrarForm:true})

    }
    const aceptarEdicion = (tarea) =>{
        if(estado.tareaActual.id === -1)
        {
        setTareas([...tareas, {...tarea,id:tareas.length+1}]);
        setEstado({...estado, mostrarForm:false})
        }
        else
        {
        const ind = tareas.findIndex(t => t.id === tarea.id)
        const nuevaLista = [...tareas];
        nuevaLista[ind] = tarea;
        setTareas(nuevaLista);
        

        }
        ocultarForm();
        
    }
    const borrarTarea = (id) =>{
        setTareas(tareas.filter(t=> t.id !== id))
    }


    return (
        <div className="container">


            <h2>Abm de tareas</h2>
            <TareasLista datos={tareas} borrar={borrarTarea} editar = {editarTarea}/>
            <div>
                <button className="btn btn-primary" onClick={()=>agregarTarea()}>agregarTarea</button>
            </div>
            <hr />
            {estado.mostrarForm?<TareasForm tareaActual={estado.tareaActual} cancelar={ocultarForm}/*
            Se le pasa la funcion no el resultado de la funcion = ocultarForm()*/ 
            aceptar = {aceptarEdicion} />:null}
            
            <Link to="/">Home</Link>
            
        </div>
    )
}