import { useParams } from "react-router-dom"

export default function Params() {
    const params = useParams();

    return(
        <div>
            anda el parametro es: {params.idTarea}
        </div>
    )
}