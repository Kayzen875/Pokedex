import { useEffect, useState } from "react";

function Nocodb() {

    const token = "RntGobIeckz014JpwItJYVwBX-WOYVqIk9846OHl";
    const url = "https://app.nocodb.com/api/v2/tables/mhzgywmhskvl5wh/records"

    const [cursos, setCursos] = useState([]);

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [horas, setHoras] = useState(0);

    function getData() {

        const options = {
            method: "GET",
            headers: {
                "xc-token": token,
                "Content-type": "application/json"
            }
        }

        fetch(url, options)
            .then(respuesta => respuesta.json())
            .then(x => setCursos(x.list))
            .catch(e => console.log(e));
    }

    function postData(e) {

        e.preventDefault();

        const curso = {
            "nombre": nombre,
            "horas": horas*1,
            "descripcion":descripcion
        }

        const options = {
            method: "POST",
            headers: {
                "xc-token": token,
                "Content-type": "application/json"
            },
            body: JSON.stringify(curso)
        }        

        fetch(url, options)
        .then(() =>{
            setNombre("");
            setDescripcion("");
            setHoras(0);
        })
        .then(() => getData())
        .catch(e => console.log(e));
    }

    useEffect(() => {

        getData();

    }, [])

    function deleteData(id){

        const test = {
            "Id": id*1
        }

        const options = {
            method : "DELETE",
            headers: {
                "xc-token": token,
                "Content-type": "application/json"
            },
            body: JSON.stringify(test)
        }

        fetch(url, options)
        .then(() => getData())
        .catch(e => console.log(e));
    }

    return (
        <>
            <h1>NocoDB</h1>

            <form  onSubmit={postData}>
                <label htmlFor="Title">Nombre</label>
                <input type="text" id="Title" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <br />
                <label htmlFor="descripcion">Descripcion</label>
                <input type="text" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                <br />
                <label htmlFor="horas">Horas</label>
                <input type="number" id="horas" value={horas} onChange={(e) => setHoras(e.target.value)} />
                <br />
                <button type="submit">Enviar datos</button>
            </form>

            <div>
                <ul>{cursos.map(curso => <div key={curso.id}><li>{curso.nombre} {curso.horas}h {curso.descripcion}</li><button onClick={() => deleteData(curso.Id)}>Eliminar</button></div>)}</ul>
            </div>
        </>
    )
}

export default Nocodb;