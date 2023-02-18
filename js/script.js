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
    
    const area = (0.5 * parseFloat(base) * parseFloat(height)).toFixed(2);
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

    const area = (parseFloat(width) * parseFloat(length)).toFixed(2);
    calculation(serial,shapeName,area);
});

// Parallelogram
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    serial = serial + 1;
    const shapeNameElement = document.getElementById('parallelogram');
    const shapeName = shapeNameElement.innerText;

    const base = document.getElementById('parallelogram-base').value;
    const height = document.getElementById('parallelogram-height').value;

    const area = (parseFloat(base) * parseFloat(height)).toFixed(2);
    calculation(serial,shapeName,area);
});

// Rhombus
document.getElementById('rhombus-btn').addEventListener('click',function(){
    serial = serial + 1;
    const shapeName = document.getElementById('rhombus').innerText;

    const d1 = document.getElementById('rhombus-d1').value;
    const d2 = document.getElementById('rhombus-d2').value;

    const area = (0.5 * parseFloat(d1) * parseFloat(d2)).toFixed(2);
    calculation(serial,shapeName,area);
});

// Pentagon
document.getElementById('pentagon-btn').addEventListener('click',function(){
    serial = serial + 1;
    const shapeName = document.getElementById('pentagon').innerText;

    const p = document.getElementById('pentagon-p').value;
    const b = document.getElementById('pentagon-b').value;

    const area = (0.5 * parseFloat(p) * parseFloat(b)).toFixed(2);
    calculation(serial,shapeName,area);
});

// Ellipse
document.getElementById('ellipse-btn').addEventListener('click',function(){
    serial = serial + 1;
    const shapeName = document.getElementById('ellipse').innerText;

    const a = document.getElementById('ellipse-a').value;
    const b = document.getElementById('ellipse-b').value;
    // pi value is = 3.14
    const area = (3.14 * parseFloat(a) * parseFloat(b)).toFixed(2);
    calculation(serial,shapeName,area);
});

function calculation(serial,shapeName,area){
    const tableContainer =  document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td style="padding: 20px"> ${serial} </td>
        <td style="padding: 20px"> ${shapeName} </td>
        <td style="padding: 20px"> ${area}cm<sup>2</sup> </td>
    `    
    tableContainer.appendChild(tr);

}