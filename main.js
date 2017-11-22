function addDetails(){
    let name=document.getElementById("name");
    let rollno=document.getElementById("rollno");
    let stream=document.getElementById("stream");
    let passoutyear=document.getElementById("passoutyear");
       let table1=document.getElementById("table1");
    let tableBody=document.getElementById("tableBody");
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
    p1.setAttribute("type","checkbox");    
    p1.setAttribute("class","ch");    
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
    let cha = document.getElementsByClassName("ch");
    let pos=0;
    for(let i=0;i<cha.length;i++){
        if(cha[i].checked && i==0){
            break;
        }
        else if(cha[i].checked && i!=0)
        {
            pos++;
        }
    }
    let count=0;
    for (let x=0;x<cha.length;x++){
        if(cha[x].checked){
            count++;
            cha[x].checked=0;            
        }
    }
    if(count==0) {
        console.log(count);
         alert("Select a row to edit."); 
         $("#myModal").modal({backdrop: false}); 
         $('#edit').attr('data-toggle','modal');         
         document.getElementById("myModal").style.visibility = "hidden";  
         return false;
    } 
    else if(count>1) {
        alert("Select single row to edit");
        $("#myModal").modal({backdrop: false});     
        $('#edit').attr('data-toggle','modal');                 
        document.getElementById("myModal").style.visibility = "hidden";  
        return false;
    }
    else if(count==1){
        console.log(pos); 
        $('#edit').attr('data-target','#myModal');
        $("#myModal").modal({backdrop: true});                 
       document.getElementById("myModal").style.visibility = "visible";  
       let nameD=document.getElementById("nameD");
       let rollnoD=document.getElementById("rollnoD");
       let streamD=document.getElementById("streamD");
       let yearD=document.getElementById("passoutyearD");
        $("#myModal").on("hide.bs.modal", function () {
            let r = document.getElementById("table1").rows[pos+1].cells;
            r[0].innerHTML = nameD.value;
            r[1].innerHTML = rollnoD.value;
            r[2].innerHTML = streamD.value;
            r[3].innerHTML = yearD.value;
    });
}
}