document.getElementById('Form').onsubmit = submit;
function submit(e){  
        executeChart();
        e.preventDefault();       
        }
function executeChart(){
    const input = document.getElementById("inp").value;
    var arrayData=[];   
    var bgColor=[];       
    arrayData = generateRandom(input)
    bgColor = generateBarColor(input,arrayData)
    generateChart(arrayData,bgColor);
}
function generateRandom(amount){
    var randomCollection=[]
    for (let iter = 0; iter < amount ;iter++){
        var dataRandom =  Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      randomCollection.push(dataRandom);   
    }
    return(randomCollection);
}
function generateBarColor(input,theArr){
    var bgColor=[];
    for (let iter = 0; iter < input ;iter++){
    
        if(theArr[iter]<25){{bgColor.push('green')}}
        if(theArr[iter]>= 26 && theArr[iter]<51){{bgColor.push('green')}}
        if(theArr[iter]>= 51 && theArr[iter]<76){{bgColor.push('red')}}
        if(theArr[iter]>76){{bgColor.push('blue')}}
    }   
    return(bgColor);
}
function generateChart(floor,bgColor){ 
    const ctx = document.getElementById('cookieChart');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: floor,
                datasets: [{
                    label: 'Charts',
                    data: floor,
                    backgroundColor: bgColor,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
    
        });   
}