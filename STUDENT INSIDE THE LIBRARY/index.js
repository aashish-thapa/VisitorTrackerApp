let count = 0;
function increment(){
    count += 1
    document.getElementById("count").innerText=count
}

function save(){
    let tree = count + "-"
    document.getElementById("save-el").textContent +=tree
    console.log()
    document.getElementById("count").innerText=0
    count = 0
    

}
function restart(){
    document.getElementById("count").innerText=0
    count = 0
    document.getElementById("save-el").textContent=" ";


}