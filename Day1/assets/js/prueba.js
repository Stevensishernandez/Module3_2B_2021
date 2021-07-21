var x=10;
var y=20;

const datos = [
    {
      "No": "1",
      "First": "Juan",
      "Last": "Sanches",
      "Handle": "@JuanSan"
    },
    {
        "No": "2",
        "First": "Pedro",
        "Last": "Coelo",
        "Handle": "@Pedro"
    },
    {
        "No": "3",
        "First": "Pepito",
        "Last": "Sanches",
        "Handle": "@pepito"
    },
  ];


function prueba(){
    contenedor = document.getElementById('result');
    var contenidoTable = '';
    datos.forEach(element => {
        contenidoTable += `
        <tr>
        <th scope="row"> ${element.No} </th>
        <td>${element.First}</td>
        <td>${element.Last}</td>
        <td>${element.Handle}</td>
        </tr>
        `;
    });

    contenedor.innerHTML = contenidoTable;

}





