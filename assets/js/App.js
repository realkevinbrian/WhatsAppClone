import{appHeader,singleChat} from "./components.js"

appHeader();
let name = "Kevin Brian";
let photo = "kevin.jpg";
let preview = "Hello, I am using whatsapp";
singleChat(name,photo,preview);


const showChat = document.getElementById("showChat")

showChat.addEventListener('click', elem=>{
    window.location.href = "chat.html"
})


//when you clic on arrow redirect to back


