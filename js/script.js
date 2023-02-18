let serial = 0;

// Triangle
document.getElementById('triangle-btn').addEventListener('click',function(){
    serial = serial + 1;

    const shapeNameElement = document.getElementById('triangle');
    const shapeName = shapeNameElement.innerText;

    const baseElement = document.getElementById('triangle-base');
    const heightElement = document.getElementById('triangle-height');
    const base = baseElement.value;
    const height = heightElement.value;
    
    const area = 0.5 * parseFloat(base) * parseFloat(height);
    calculation(serial,shapeName,area);
    
});

// rectangle
document.getElementById('rectangle-btn').addEventListener('click',function(){
    serial = serial + 1;

    const shapeNameElement = document.getElementById('rectangle');
    const shapeName = shapeNameElement.innerText;

    const widthElement = document.getElementById('rectangle-width');
    const lengthElement = document.getElementById('rectangle-length');
    const width = widthElement.value;
    const length = lengthElement.value;

    const area = parseFloat(width) * parseFloat(length);
    calculation(serial,shapeName,area);
});

function calculation(serial,shapeName,area){
    const tableContainer =  document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td style="padding: 20px"> ${serial} </td>
        <td style="padding: 20px"> ${shapeName} </td>
        <td style="padding: 20px"> ${area} </td>
    `    
    tableContainer.appendChild(tr);

}