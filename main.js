let myAddButton = document.querySelector("#knapp1");
let input1 = document.querySelector("#name");
let myList = document.querySelector("#lista");
let mySecondButton = document.querySelector("#knapp2");
let myDeleteButton = document.querySelector("#knapp3");
let myDiv = document.querySelector("#div2");
let myPara = document.createElement("p");
myPara.innerText="There’s currently no people standing in line"

myAddButton.addEventListener("click",()=>{
    let inputValue = input1.value;
    let myLine = document.createElement("li");
    myLine.innerText=inputValue;
    input1.value="";
    myList.appendChild(myLine);
    myDiv.removeChild(myPara);
});
mySecondButton.addEventListener("click",()=>{
    let inputValue = input1.value;
    let myLine = document.createElement("li");
    myLine.innerText=inputValue;
    input1.value="";
    myList.prepend(myLine);
    myDiv.removeChild(myPara);
})

myDeleteButton.addEventListener("click",(e)=>{
    let firstPerson = document.querySelector("li");
    firstPerson.remove();
    if(myList.childElementCount<=0){
    myDiv.appendChild(myPara);
    }
});
