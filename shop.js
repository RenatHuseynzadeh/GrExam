
const users = JSON.parse(localStorage.getItem('users'))
let computers = []

for(let user of users){
    computers.push(...user.todos)
}

console.log(computers);

const allTabPanes = document.querySelectorAll('.tab-pane')



for(let tabPane of allTabPanes){
    for(let comp of computers){
        if(tabPane.id.toUpperCase() === comp.mark.toUpperCase()){
            tabPane.innerHTML += `<div class="card" style="width: 200px; margin-left: 10px; height: 300px;">
            <div class="dForImg">
            <img src="${comp.img}" class="card-img-top fimg" alt="...">
            </div>
            <div class="card-body">
            <p class="p1">Adi:${comp.mark}</p>
            <p class="p1">Tesvir:${comp.tesvir}</p>
            <p class="p1">Qiymet:${comp.prise}</p>
            <p class="p1">Yeni:${comp.mark}</p>
            
            <p class="p1">id:${comp.id}</p>
              
            <button class="btn btn-primary">Hahahahaha</button>
            </div>
          </div>`
        }
        // if(tabPane.innerHTML === ''){
            // tabPane.innerHTML += 'No computers'
        // }
    }
}