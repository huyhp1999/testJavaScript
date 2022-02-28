

var array = [
    
    {
        id: x,
        user: "Elmer Cobb",
        duty: "Net developer"
    },

    {
        id: x,
        user: "Estelle",
        duty: "Middle Copywriter"
    },

    {
        id: x,
        user: "Vernon Simpson",
        duty: "Front-en Developer"
    },

    {
        id: x,
        user: "Mittie Medina",
        duty: "Anroid developer"
    },
]
array.map((value, index) => {
    const x;
    for(x = 0; x <array.length; x++){
        x = index + 1;
        value.id = x
    }
    return value.id

})
console.log(array)

function findID (data){
    console.log(data)
   array.map(function(value, index){
       if(value.user == data){
           document.getElementById("searchdata").innerHTML = `<h3>${value.user}</h3>
                                                                <p>${value.duty}</p>`         
        }
    })

}


var newUser;
var newDuty;
function popupUser (data1) {
    console.log(data1)
   newUser = data1;
}

function popupDuty (data2){
    console.log(data2)
   newDuty = data2;
}
function newData (){
    var spaceArray = {
        id: array.length + 1,
        user: newUser,
        duty: newDuty
    }
    array.push(spaceArray);
    console.log(array)
    array.map((data,index) => {
        const node = document.createElement("div");
        node.innerHTML = `
        <div>
            <h3>${data.user}</h3>
            <p>${data.duty}</p>       
            <button onclick="updateUser(${index}, ${data.id})" type="button">Update</button>
            
            <div id="a${index}"> </div>
            
            <button onclick="deleteUser(${data.id})" type="button">Delete</button>
        </div>
        `
        document.getElementById("searchdata").appendChild(node)
      
    })
}
var A = false;
var B = "";

function updateUser (data, dataID){
    console.log(data)
    if(A == false){

        const node = document.createElement("form")
        node.innerHTML = 
        `        
        <input onkeyup="dataUpdateUser(this.value)" type="text" placeholder="User">
        <input onkeyup="dataUpdateDuty(this.value)" type="text" placeholder="Duty">          
        
        <button onclick="UpdateDataAll(${data},${dataID})" type="button">Submit</button>        
        `
        document.getElementById("a"+data).appendChild(node)
        A = true;
        B = "a"+data
    } else {
        
        document.getElementById(B).innerHTML = ""; 
        const node = document.createElement("form")
        node.innerHTML =
        `        
        <input onkeyup="dataUpdateUser(this.value)" type="text" placeholder="User">
        <input onkeyup="dataUpdateDuty(this.value)" type="text" placeholder="Duty">          
        
        <button onclick="UpdateDataAll(${data},${dataID})" type="button">Submit</button>        
        `
        document.getElementById("a"+data).appendChild(node)
        B = "a"+data;
    }
}
var newDataUser;
var newDataDuty;
function dataUpdateUser (newUser){
    newDataUser = newUser;
    console.log(newDataUser);
}

function dataUpdateDuty (newDuty){
    newDataDuty = newDuty;
    console.log(newDataDuty);   
}

function UpdateDataAll (indexOld, dataID){
    console.log(dataID)
    console.log(newDataUser)
    console.log(newDataDuty)

    array.map((item) => {
        if(item.id == dataID){
            console.log(true)
            item.user = newDataUser,
            item.duty = newDataDuty;
        
        } 
        return item;
    });
    
    document.getElementById("searchdata").innerHTML=""; 
    array.map((data,index) => {
        const node = document.createElement("div");
        node.innerHTML = `
        <div>
            <h3>${data.user}</h3>
            <p>${data.duty}</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            
            <button onclick="updateUser(${index}, ${data.id})" type="button">Update</button>
            
            <div id="a${index}"> </div>
            
            <button onclick="deleteUser(${data.id})" type="button">Delete</button>
        </div>
        `
        document.getElementById("searchdata").appendChild(node)
        console.log(node)
    })
}

function deleteUser(idOld){
    const oldid = idOld - 1;
    array.map((item) => {
        if(item.id == oldid){
            console.log(oldid)
            array.splice(oldid, 1)
        }
        return array;
    });
    console.log(array)


    document.getElementById("searchdata").innerHTML=""; 
    array.map((data,index) => {
        const node = document.createElement("div");
        node.innerHTML = `
        <div>
            <h3>${data.user}</h3>
            <p>${data.duty}</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            
            <button onclick="updateUser(${index}, ${data.id})" type="button">Update</button>
            
            <div id="a${index}"> </div>
            
            <button onclick="deleteUser(${data.id})" type="button">Delete</button>
        </div>
        `
        document.getElementById("searchdata").appendChild(node)
        console.log(node)
    })
};

