function saveData(){
    let dataKey=document.getElementById("inputkey").value;
    let data=document.getElementById("inputData").value;
    localStorage.setItem(dataKey,data);
    alert('Data saved👍');
}
function loadData(){
    let Key=document.getElementById("inputkey").value.trim();
    let dataValue=localStorage.getItem(Key);
    
    document.getElementById("output").textContent=dataValue!==null?`${Key}:${dataValue}`:"No data found";
    alert('Data recieved')
}
function clearData(){
    let dataKey=document.getElementById("inputkey").value;
    localStorage.removeItem(dataKey);
    alert('cleared');
    document.getElementById("output").textContent="";
}
function Data(){
    let allData = localStorage;
    document.getElementById("output").textContent = ""; // Clear previous output
    for (let key in allData) {
        if (allData.hasOwnProperty(key)) {
            let value = allData[key];
            document.getElementById("output").textContent += `${key} : ${value};\n`;
        }
    }
}

