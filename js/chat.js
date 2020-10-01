window.onload = function() {
    function createChatBox() {
        
        var chatbox = document.createElement("div");
        var chaticon = document.createElement("img");
        var messageFather = document.createElement("p");
        var messageChild = document.createTextNode("teste");
        var dateFather = document.createElement("p");
        var dateChild = document.createTextNode("16:00");
        
        chatbox.className = "message-template";
        
        chaticon.src = "img/icon-person.png";
        
        messageFather.appendChild(messageChild);
        dateFather.appendChild(dateChild);
        
        chatbox.appendChild(chaticon);
        chatbox.appendChild(messageFather);
        chatbox.appendChild(dateFather);
        
        document.getElementById("chat").appendChild(chatbox);
    }
    
    createChatBox();
}