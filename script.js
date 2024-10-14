/*
Michael Kellems
Date
CIT 215
Prof. Kane
*/

display = document.querySelector(".display")


let objectsarray=
[
    Michael ={
        Name: "Michael",
        Age: 23,
        Major: "CIT - Software Development"
    },
    Laura = {
        Name: "Laura",
        Age: 20,
        Major: "Behavioral Sciences"
    },
    Mohammed = {
        Name: "Mohammed",
        Age: 21,
        Major: "Dentistry"
    },
]

function addObject(name, age, major)
{
    objectsarray.push(
        newobject=
        {
            Name: name,
            Age: age,
            Major: major
        }
    )
}

function removeObject(objectname){
    objectsarray.splice(objectname, 1, )
    return
}

removeObject(Michael)

addObject("Bobby", 22, "CIT")
display.innerHTML = ""
 
objectsarray.forEach((object) =>
    {console.log(object)
    display.innerHTML += `| Name:${object.Name} Age:${object.Age} Major:${object.Major} | <br> </br>`
});