let serial = 0;
// Triangle
const triangleBtn = document.getElementById('triangle-btn');
triangleBtn.addEventListener('click',function(){
    serial = serial + 1;
    getInputValueById('triangle');
    const baseElement = document.getElementById('triangle-base');
    const base = baseElement.value;

    const heightElement = document.getElementById('triangle-height');
    const height = heightElement.value;

    const area = 0.5 * parseFloat(base) * parseFloat(height);
    return area;
});

function getInputValueById(inputId){
    const shapeNameElement = document.getElementById(inputId);
    const shapeName = shapeNameElement.innerText;
    const displayArea = displayArea(serial,shapeName,area);
}

// Rectangle
const rectangleBtn = document.getElementById('')

function displayArea(serial,shapeName,area){
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td> ${serial} </td>
        <td> ${shapeName} </td>
        <td> ${area} </td>
    `    
    tableContainer.appendChild(tr);
}