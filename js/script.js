function setPlayerName(playerName,event) {
    const li=document.createElement("li");
    li.innerText=playerName;
    const ul=document.getElementById('purchased-player');
    if (ul.children.length==5) {
        alert("Already purchased 5 player");
        return;
    }
    ul.appendChild(li);
    event.setAttribute("disabled",true);
    event.style.backgroundColor="gray";
}
function getInputFieldValue(id){
    const element=document.getElementById(id);
    const valueString=element.value;
    const value=parseFloat(valueString);
    return value;
} 
function getTextFieldValue(id){
    const element=document.getElementById(id);
    const valueString=element.innerText;
    const value=parseFloat(valueString);
    return value;
} 

function setTextFieldValue(id,value){
    document.getElementById(id).innerText=value;
}

document.getElementById("player").addEventListener("click",function(event){
   const playerElement=event.target.parentNode.children[0];
   const playerName=playerElement.innerText;
   if(playerName.length>0){
       setPlayerName(playerName,event.target);
   }
   
   
})

document.getElementById("calculate-btn").addEventListener("click",function(){
    const perPlayerCost=getInputFieldValue("per-player");
    const totalPlayer=document.getElementById("purchased-player").children.length;
    const totalPlayerCost=perPlayerCost*totalPlayer;
    setTextFieldValue("player-expenses",totalPlayerCost);
})
document.getElementById("total-calculate").addEventListener("click",function(){
    const coach=getInputFieldValue("coach");
    const manager=getInputFieldValue("manager");
    const totalPrevious=getTextFieldValue("player-expenses");
    const currentTotal=coach+manager+totalPrevious;
    setTextFieldValue("total",currentTotal);
})