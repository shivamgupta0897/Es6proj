let pos=0;
let nameA=[];
let rollnoA=[];
let streamA=[];
let passoutyearA=[];
$(document).ready(function(){
    $("#edit").click(function(){
        $("#myModal").modal();
    });
});

function addDetails(){
    let name=document.getElementById("name");
    let rollno=document.getElementById("rollno");
    let stream=document.getElementById("stream");
    let passoutyear=document.getElementById("passoutyear");
    nameA.push(name.value);
    rollnoA.push(rollno.value);
    streamA.push(stream.value);
    passoutyearA.push(passoutyear.value);
    let table1=document.getElementById("table1");
    let tableBody=document.getElementById("tableBody");
    table1.appendChild(tableBody);    
    let row=document.createElement("tr");
    tableBody.appendChild(row);
    let c2=document.createElement("td");
    row.appendChild(c2);    
    let p2=document.createTextNode(name.value);
    c2.appendChild(p2);

    let c3=document.createElement("td");
    row.appendChild(c3);    
    let p3=document.createTextNode(rollno.value);
    c3.appendChild(p3);

    let c4=document.createElement("td");
    row.appendChild(c4);    
    let p4=document.createTextNode(stream.value);
    c4.appendChild(p4);

    let c5=document.createElement("td");
    row.appendChild(c5);    
    let p5=document.createTextNode(passoutyear.value);
    c5.appendChild(p5);
    let c1=document.createElement("td");
    row.appendChild(c1);    

    
    let p1=document.createElement("INPUT");
    p1.type="checkbox";
    p1.className="ch";
    p1.name="box";
    c1.appendChild(p1);
    document.getElementById("frm").reset();
    
    
}

function deleteDetails()
{

    let a=document.getElementsByClassName("ch");
    for(let i=0;i<=a.length;i++)
    {
        if(a[i].checked)
     {
        console.log(i);
         document.getElementById("tableBody").deleteRow(i);
         i=0;
         deleteDetails();
         }  
}
}
function editDetails()
{
    let cha =document.getElementsByClassName("ch");
    let count = 0;

    for (let x=0; x<cha.length; x++){
        if(cha[x].checked)
        {
            count++;
            pos = x;
        }
    }

    if (count > 1)
    {
        alert("Select single row to edit.");
        //return false;
    } 
    else if (count < 1)
     {
        alert("Select a row to edit");
        //return false;
    }
     else{
        $("#myModal").modal();
        $("#nameD").val(nameA[pos]);
        $("#rollnoD").val(rollnoA[pos]);
        $("#streamD").val(streamA[pos]);
        $("#passoutyearD").val(passoutyearA[pos]);
    }
}

function submitB(){
        let tableA = $("#tableBody > tr");
        console.log(tableA);
        let data = tableA[pos].childNodes;
        data[0].innerHTML = nameA[pos] = $("#nameD").val();
        data[1].innerHTML = rollnoA[pos] = $("#rollnoD").val();
        data[2].innerHTML = streamA[pos] = $("#streamD").val();
        data[3].innerHTML = passoutyearA[pos] = $("#passoutyearD").val();
        $("#myModal").modal("hide");
    }
    