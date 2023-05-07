const repositorio_thead = document.querySelector(".repositorio-thead");
const repositorio_tbody = document.querySelector(".repositorio-tbody");

function aplicarFiltro() {
    console.log(document.getElementById("filtro").value)

    let filtro = document.getElementById("filtro").value;

    fetch("formulario.json")
    .then(function(response) {
        return response.json();
    })
    
    .then(function(respuestas) {
        let out_thead = "";
        let out_tbody = "";
        
        if (filtro == "todo") {
            out_thead += `
                <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Centro</th>
                    <th scope="col">¿Cuántas veces a la semana realizas ejercicio?</th>
                    <th scope="col">¿Cuando haces ejercicio, cuánto tiempo suele durar?</th>
                    <th scope="col">¿Consumes bebidas energéticas?</th>
                    <th scope="col">En un día típico ¿comes frutas?</th>
                    <th scope="col">En un día típico ¿comes verduras?</th>
                    <th scope="col">¿Tomas suplementos nutricionales?</th>
                    <th scope="col">¿Cuál es tu comida favorita?</th>
                    <th scope="col">¿Cuál es tu bebida favorita?</th>
                </tr>                
            `;

            for (let respuesta of respuestas) {
                out_tbody += `
                    <tr>
                        <td>${respuesta.fecha}</td>
                        <td>${respuesta.nombre}</td>
                        <td>${respuesta.centro}</td>
                        <td>${respuesta.vecesSemana}</td>
                        <td>${respuesta.duracion}</td>
                        <td>${respuesta.bebidasEnergeticas}</td>
                        <td>${respuesta.frutas}</td>
                        <td>${respuesta.verduras}</td>
                        <td>${respuesta.suplementos}</td>
                        <td>${respuesta.comidaFav}</td>
                        <td>${respuesta.bebidaFav}</td>
                    </tr>
                `;
            }
        } else if (filtro == "fecha") {
            out_thead += `
                <tr>
                    <th>Fecha</th>
                </tr>                
            `;

            for (let respuesta of respuestas) {
                out_tbody += `
                    <tr>
                        <td>${respuesta.fecha}</td>
                    </tr>
                `;
            }            
        } else if (filtro == "nombre") {
            out_thead += `
                <tr>
                    <th>Nombre</th>
                </tr>                
            `;

            for (let respuesta of respuestas) {
                out_tbody += `
                    <tr>
                        <td>${respuesta.nombre}</td>
                    </tr>
                `;
            }            
        } else if (filtro == "centro") {
            out_thead += `
                <tr>
                    <th>Centro de estudio</th>
                </tr>                
            `;

            for (let respuesta of respuestas) {
                out_tbody += `
                    <tr>
                        <td>${respuesta.centro}</td>
                    </tr>
                `;
            }            
        } else if (filtro == "vecesSemana") {
            out_thead += `
                <tr>
                    <th>¿Cuántas veces a la semana realizas ejercicio?</th>
                </tr>                
            `;

            for (let respuesta of respuestas) {
                out_tbody += `
                    <tr>
                        <td>${respuesta.vecesSemana}</td>
                    </tr>
                `;
            }          
        } else if (filtro == "bebidasEnergeticas") {
            out_thead += `
                <tr>
                    <th>¿Consumes bebidas energéticas?</th>
                </tr>                
            `;

            for (let respuesta of respuestas) {
                out_tbody += `
                    <tr>
                        <td>${respuesta.bebidasEnergeticas}</td>
                    </tr>
                `;
            }          
        } else if (filtro == "bebidasEnergeticas") {
            out_thead += `
                <tr>
                    <th>¿Consumes bebidas energéticas?</th>
                </tr>                
            `;

            for (let respuesta of respuestas) {
                out_tbody += `
                    <tr>
                        <td>${respuesta.bebidasEnergeticas}</td>
                    </tr>
                `;
            }          
        } else if (filtro == "frutas") {
            out_thead += `
                <tr>
                    <th>En un día típico ¿comes frutas?</th>
                </tr>                
            `;

            for (let respuesta of respuestas) {
                out_tbody += `
                    <tr>
                        <td>${respuesta.frutas}</td>
                    </tr>
                `;
            }          
        } else if (filtro == "verduras") {
            out_thead += `
                <tr>
                    <th>En un día típico ¿comes verduras?</th>
                </tr>                
            `;

            for (let respuesta of respuestas) {
                out_tbody += `
                    <tr>
                        <td>${respuesta.verduras}</td>
                    </tr>
                `;
            }          
        } else if (filtro == "suplementos") {
            out_thead += `
                <tr>
                    <th>¿Tomas suplementos nutricionales?</th>
                </tr>                
            `;

            for (let respuesta of respuestas) {
                out_tbody += `
                    <tr>
                        <td>${respuesta.suplementos}</td>
                    </tr>
                `;
            }          
        } else if (filtro == "comidaFav") {
            out_thead += `
                <tr>
                    <th>¿Cuál es tu comida favorita?</th>
                </tr>                
            `;

            for (let respuesta of respuestas) {
                out_tbody += `
                    <tr>
                        <td>${respuesta.comidaFav}</td>
                    </tr>
                `;
            }          
        } else if (filtro == "bebidaFav") {
            out_thead += `
                <tr>
                    <th>¿Cuál es tu bebida favorita?</th>
                </tr>                
            `;

            for (let respuesta of respuestas) {
                out_tbody += `
                    <tr>
                        <td>${respuesta.bebidaFav}</td>
                    </tr>
                `;
            }          
        }
        repositorio_thead.innerHTML = out_thead;
        repositorio_tbody.innerHTML = out_tbody;
    })
}

aplicarFiltro()

