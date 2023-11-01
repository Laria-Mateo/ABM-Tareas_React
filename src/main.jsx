import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './notfound.jsx'
import TareasAbm from './componentes/tareas-abm.jsx'
import TareasForm from './componentes/tareas-form.jsx'
import Params from './componentes/params.jsx'
import TareasListaService from './componentes/tareas-lista-service.jsx'
import TareasAbmService from './componentes/tareas-abm-service.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/tareas" element={<TareasAbmService />}/>
        <Route path="/tareas/agregar" element={<TareasForm />}/>
        <Route path="/tareas/:idTarea" element={<TareasForm />}/>
        <Route path="*" element={<NotFound />}/> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
