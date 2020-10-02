window.onload = function() {
    
    function twodigits(time) {
        if (time < 10) {
            return "0" + time
        }
        else {
            return time;
        }
    }
    
    function getTime() {
        var d = new Date();
        var time;
        var hour = d.getHours();
        var minute = d.getMinutes();

        time = twodigits(hour) + ":" + twodigits(minute);
        return time;
        
    }
    
    function createChatBox(message = "a", side = 1) {
        
        var chatbox = document.createElement("div");
        var messagetemplate = document.createElement("div");
        var chaticon = document.createElement("img");
        var messageFather = document.createElement("p");
        var messageChild = document.createTextNode(message);
        var dateFather = document.createElement("p");
        var dateChild = document.createTextNode(getTime());
        
        chatbox.className = "message-box";
        
        if (side == 1)
            {
            messagetemplate.className = "message-template left";
            }
        else
            {
             messagetemplate.className = "message-template right";   
            }
        
        chaticon.src = "img/icon-person.png";
        
        messageFather.appendChild(messageChild);
        dateFather.appendChild(dateChild);
        
        messagetemplate.appendChild(chaticon);
        messagetemplate.appendChild(messageFather);
        messagetemplate.appendChild(dateFather);
        
        chatbox.appendChild(messagetemplate);
        
        document.getElementById("chat").appendChild(chatbox);
    }
    
    function updateScroll() {
        var elem = document.getElementById('chat');
        elem.scrollTop = elem.scrollHeight;
    }
    
    document.getElementById("inputleft").onkeypress = function() {
        
        var keypressed = event.keyCode;
        
        if (keypressed == 13)
            {
                var text = document.getElementById("inputleft").value;
                if (text != "")
                {
                    createChatBox(text, 1);
                    document.getElementById("inputleft").value = "";
                    updateScroll();
                }
            }
    }
    
    document.getElementById("inputright").onkeypress = function() {
        
        var keypressed = event.keyCode;
        
        if (keypressed == 13)
            {
                var text = document.getElementById("inputright").value;
                if (text != "")
                {
                    createChatBox(text, 2);
                    document.getElementById("inputright").value = "";
                    updateScroll();
                }
            }
    }
    
    document.getElementById("send-left").onclick = function () {
        
        var text = document.getElementById("inputleft").value;
        if (text != "")
        {
            createChatBox(text, 1);
            document.getElementById("inputleft").value = "";
            updateScroll();
        }
    }
    
    document.getElementById("send-right").onclick = function () {
        
        var text = document.getElementById("inputright").value;
        if (text != "")
        {
            createChatBox(text, 2);
            document.getElementById("inputright").value = "";
            updateScroll();
        }
    }   
    
    
}