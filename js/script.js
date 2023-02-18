let serial = 0; //Generate serial number and 0 is initial value.

/* I am using Event listener / addEventListener  */

// Triangle
document.getElementById('triangle-btn').addEventListener('click',function(){
    serial = serial + 1;
    
    const shapeName = getInputValueById('triangle');

    const base = document.getElementById('triangle-base').value;
    const height = document.getElementById('triangle-height').value;

    // Check valid or not / validation
    if(isNaN(base) && isNaN(height)){
        alert('Please Enter a valid number');
    }
    else if(base < 0 && height < 0){
        alert('Please Enter a positive number');
    }
    else if(base === '' || height === ''){
        alert('Please Enter a valid number');
    }
    else if(base < 0 || height < 0){
        alert('Please Enter a positive number');
    }
    
    // Calculate area
    const area = (0.5 * parseFloat(base) * parseFloat(height)).toFixed(2);
    calculation(serial,shapeName,area);
    
});


// rectangle
document.getElementById('rectangle-btn').addEventListener('click',function(){
    serial = serial + 1;
    
    const shapeName = getInputValueById('rectangle');

    const width = document.getElementById('rectangle-width').value;
    const length = document.getElementById('rectangle-length').value;

    // Check valid or not / validation
    if(width === '' || length === ''){
        alert('Please Enter a valid number');
    }
    else if(isNaN(width) && isNaN(length)){
        alert('Please enter a Number');
    }
    else if(width < 0 && length < 0){
        alert('Please Enter a positive number');
    }
    else if(width < 0 || length < 0){
        alert('Please Enter a positive number');
    }
    // Calculate area
    const area = (parseFloat(width) * parseFloat(length)).toFixed(2);
    calculation(serial,shapeName,area);
});

// Parallelogram
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    serial = serial + 1;
    
    const shapeName = getInputValueById('parallelogram');

    const base = document.getElementById('parallelogram-base').value;
    const height = document.getElementById('parallelogram-height').value;
    // Calculate area
    const area = (parseFloat(base) * parseFloat(height)).toFixed(2);
    calculation(serial,shapeName,area);
});

// Rhombus
document.getElementById('rhombus-btn').addEventListener('click',function(){
    serial = serial + 1;
    
    const shapeName = getInputValueById('rhombus');

    const d1 = document.getElementById('rhombus-d1').value;
    const d2 = document.getElementById('rhombus-d2').value;

    // Calculate area
    const area = (0.5 * parseFloat(d1) * parseFloat(d2)).toFixed(2);
    calculation(serial,shapeName,area);
});

// Pentagon
document.getElementById('pentagon-btn').addEventListener('click',function(){
    serial = serial + 1;
    
    const shapeName = getInputValueById('pentagon');
    
    const p = document.getElementById('pentagon-p').value;
    const b = document.getElementById('pentagon-b').value;

    // Calculate area
    const area = (0.5 * parseFloat(p) * parseFloat(b)).toFixed(2);
    calculation(serial,shapeName,area);
});

// Ellipse
document.getElementById('ellipse-btn').addEventListener('click',function(){
    serial = serial + 1;

    const shapeName = getInputValueById('ellipse');
    
    const a = document.getElementById('ellipse-a').value;
    const b = document.getElementById('ellipse-b').value;
    
    // Calculate area
    // pi value is = 3.14
    const area = (3.14 * parseFloat(a) * parseFloat(b)).toFixed(2);
    calculation(serial,shapeName,area);
});


// function for get input value by id
function getInputValueById(inputId){
    const shapeNameElement = document.getElementById(inputId).innerText;
    return shapeNameElement;
}


// Function for calculation - Show the data
function calculation(serial,shapeName,area){
    const tableContainer =  document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${shapeName}</td>
        <td>${area}cm<sup>2</sup></td>
        <td><button style="background-color:#1090d8;padding:6px 12px;color: white;border-radius:4px;">convert to m<sup>2</sup></button></td>
    `    
    tableContainer.appendChild(tr);
}

// Random generate color code
const triangleCard = document.getElementById('triangle-card');
triangleCard.addEventListener('mouseover',function(){
    getNewColor('triangle-card');
});

document.getElementById('rectangle-card').addEventListener('mouseover',function(){
    getNewColor('rectangle-card');
});
document.getElementById('parallelogram-card').addEventListener('mouseover',function(){
    getNewColor('parallelogram-card');
});
document.getElementById('rhombus-card').addEventListener('mouseover',function(){
    getNewColor('rhombus-card');
});
document.getElementById('pentagon-card').addEventListener('mouseover',function(){
    getNewColor('pentagon-card');
});
document.getElementById('ellipse-card').addEventListener('mouseover',function(){
    getNewColor('ellipse-card');
});

// function for generate color
function getNewColor(inputCardId){
    let hexCode = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D',,'E','F'];
    let color = "#";
    for(let i = 0; i < 6; i ++){
        let num = Math.round(Math.random() * 15);
        let num2 = hexCode[num];
        color = color + num2;
    }
    document.getElementById(inputCardId).style.backgroundColor = color;

}



// I am adding a blog button using event handler
document.getElementById('blog-btn').addEventListener('click',function(e){
    window.location.href= 'blog.html';
});