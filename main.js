function drawGrid(width){
    if(width > 100){
        return 
    }

    const container = document.getElementById("container");
    
    
    for(let i = 0; i < width; i++){
        //draw a row
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < width; j++){
            //draw a column
            const column = document.createElement('div');
            column.classList.add("column");
            row.append(column);
        }
        container.append(row);
    }
    
    boxes = document.querySelectorAll('.column');
    boxes.forEach(element => {
        element.addEventListener('pointerover',(event) => {
            console.log(element)
            element.style.backgroundColor = "black"
        })
    });
}

function removeGrid(){
    const columns = document.querySelectorAll('.column')
    columns.forEach(element => {
        element.remove();
    })
    const rows = document.querySelectorAll('.row');
    rows.forEach(element => {
        element.remove()
    })
}

drawGrid(100)