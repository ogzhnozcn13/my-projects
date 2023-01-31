//* DEĞİŞKENLER
//*-------------------------------------
const todoInput = document.querySelector('#todo-input');        //* Yazılan text (HTML öğeleriyle birlikte)
console.log(todoInput);

const addBtn = document.querySelector('#todo-button');          //* Buton (HTML öğeleriyle birlikte)
console.log(addBtn);

const todoUl = document.querySelector('#todo-ul');              //* ul (HTML öğeleriyle birlikte)
console.log(todoUl);

// let todos = [];   //* Önce boş bir array oluşturduk ki, içini yazılan öğelerle dolduracağız (newTodo objeleriyle)

let todos = JSON.parse(localStorage.getItem("TODOS")) || [];    //* sayfa yenilendiğinde, ekrandaki veriler gidiyor. bu yüzden; localde saklı verileri çekmek için bunu yazdık. ( []'in sebebi: varsa bişey içinde yaz, yoksa boş array ver.)

// todos.forEach((todo) => {
//     createListElement(todo)
// })



addBtn.addEventListener("click", () => {
    if(todoInput.value.trim() === ""){                              //* Eğer boşluklu olan bir değer girilirse
        alert("Please enter a to do!")
    }
    else{
        const newTodo = {                                           //* newTodo = Her bir "li"
            id : new Date().getTime(),                              //* Mevcut ssat-tarihe göre id vermsi için
            completed : false,                                      //* Ekleme yapıldığında kırmızı tik olarak kullanabilmek için
            text : todoInput.value                                  //* Yazılan text
        }
        createListElement(newTodo);                                 //* Aşağıda yazılan fonksiyon burada çalıştırılır
        todos.push(newTodo);                                        //* Oluşan her bir objeyi (newTodo yu), todos arrayine push la!
        localStorage.setItem("TODOS", JSON.stringify(todos))        //* herbir todos'u, sitring'e çevirip, local stroge'e göndermek için
        todoInput.value = "";                                       //* Click olduğu zaman input içindeki silinsin (boşalsın)
    }
})





function createListElement(newTodo) {
    const {id, completed, text} =newTodo

    const li = document.createElement("li")                 //* li attribute'lerini oluşturmak için
    li.setAttribute("id", id)                               //* li ye "id" adında id verdik (newTodo.id)
    completed && li.classList.add("checked")                //* "checked"i li'ye class olarak ekler 

    const okIcon = document.createElement("i")              //* tik ikonunu oluşturmak için i (icon) attribute'u oluşturuldu
    okIcon.setAttribute("class", "fas fa-check")            //* i'ye class oluşturuldu
    li.appendChild(okIcon);                                 //* tik'i li'nin içine child olrak konumlandırdık

    const deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class", "fas fa-trash")
    li.appendChild(deleteIcon);

    const textP = document.createElement("p")               //* input'a yazılan text için p elemnti oluşturduk
    const pTextNode = document.createTextNode(text)         //* newTodo object'inin içindeki text'i node yaparak, değişken atadık
    textP.appendChild(pTextNode)                            //* node'u p'nin içine child olarak konumlandırdık
    li.appendChild(textP);                                  //* p'yi, li'nin içine child olrak konumlandırdık

    todoUl.appendChild(li)                                  //* li'yi ul'nin içine yolladık
}





todoUl.addEventListener('click', () => {                        //* ul'nin içindeki tik'lere ve çöp kovalarına tıklandığında işlem yapmak için
    const id = e.target.parentElement.getAttribute("id");

    if(e.target.classList.contains("fa-trash")){                //* tıklanılan yerin class'ı fa-trash (çöp kovası) ise,
        e.target.parentElement.remove()                         //* ul'nin içindeki istenilen li silinir
        todos.filter((todo) => todo.id !== Number(id))          //* tıkladığım yerin id'si array'in içindeki bir id'ye eşit değilse (arrayin içinden siler.)
        localStorage.setItem("TODOS", JSON.stringify(todos))    //* local'de güncelleme (silme) yapar.
    }
    else if(e.target.classList.contains("fa-trash")){
        e.target.parentElement.classList.toggle("checked")      //* tıklanılan yerin parent'ının class'ını "değilleme" yapar, (false'u true; true ise false)
        todos.map((todo, index) => {
            if(todo.id == id){
                todos[index].completed = !todos[index].completed;   //* olumsuzu, olumluya ata; olumluyu olumsuza ata. (tik rengi değişimi için)
            }
        })
        localStorage.setItem("TODOS", JSON.stringify(todos))    //* local'de güncelleme (değiştirme) yapar.
    }
})




todoInput.addEventListener("keydown", (e) => {     //* Klavyede "enter" tuşuna basıldığında Add butonu'na da tıklat.
    if(e.code === "Enter"){
        addBtn.click()
    }
})



window.onload = function() {      //* imlecin input kısmında kalması için
    todoInput.focus();
}