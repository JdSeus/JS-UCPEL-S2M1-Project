window.onload = function() {
    
    /*FUNÇÔES*/
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
    
    function createChatBox(message = "a", side = 1, name = "Name") {
        
        var chatbox = document.createElement("div");
        var messagetemplate = document.createElement("div");
        var chaticon = document.createElement("img");
        var nameFather = document.createElement("p");
        var nameChild = document.createTextNode(name);
        var messageFather = document.createElement("p");
        var messageChild;
        var dateFather = document.createElement("span");       
        var dateChild = document.createTextNode(getTime());      
        
        
        if (side == 1)
            {
                chaticon.src = "img/icon-person1.png";
                messagetemplate.className = "message-template left";
                document.getElementById("inputleft").value = "";
                document.getElementById("animation-left").style.display = 'none';
            }
        else
            {
                chaticon.src = "img/icon-person2.png";
                messagetemplate.className = "message-template right";   
                document.getElementById("inputright").value = "";
                document.getElementById("animation-right").style.display = 'none';
            }
        
        messageChild = document.createTextNode(message);  
        
        chatbox.className = "message-box";
        
        nameFather.appendChild(nameChild);
        
        messageFather.appendChild(messageChild);
        dateFather.appendChild(dateChild);
        
        messagetemplate.appendChild(chaticon);
        messagetemplate.appendChild(nameFather);
        messagetemplate.appendChild(messageFather);
        messagetemplate.appendChild(dateFather);
        
        chatbox.appendChild(messagetemplate);
        
        document.getElementById("chat").appendChild(chatbox);
        updateScroll();
    }
    
    function updateScroll() {
        var elem = document.getElementById('chat');
        elem.scrollTop = elem.scrollHeight;
    }
    
    /*/////////////////////////////////////////////////////////////////////////////
    *//////////////////////////////////////////////////////////////////////////////
    /*/////////////////////////////////////////////////////////////////////////////
    *//////////////////////////////////////////////////////////////////////////////
    
    /*CONFIGURAÇÕES INICIAIS DA TELA*/
    
    createChatBox("Entrou no chat", 1, "Ipsum");
    createChatBox("Entrou no chat", 2, "Lorem");
    document.getElementById("animation-left").style.display = 'none';
    document.getElementById("animation-right").style.display = 'none';
    
    /*/////////////////////////////////////////////////////////////////////////////
    *//////////////////////////////////////////////////////////////////////////////
    /*/////////////////////////////////////////////////////////////////////////////
    *//////////////////////////////////////////////////////////////////////////////

     

    /*CONFIGURAÇÔES DOS ELEMENTOS*/
    document.getElementById("inputleft").onkeydown= function() {
        
        const Enter = 13;
        const BackSpace = 8;
        
        var keypressed = event.keyCode;
        var text = document.getElementById("inputleft").value;
        
        if (text.trim().length > 0)
        { 
            if (keypressed == Enter)
                {
                    createChatBox(text, 1, "Ipsum");
                }
            else
                {
                    document.getElementById("animation-left").style.display = 'block';
                }
        }
        else
        {
            document.getElementById("animation-left").style.display = 'none';
        }
        
        if (keypressed == BackSpace && text.trim().length < 2)
            {
                document.getElementById("animation-left").style.display = 'none';
            }
    }
    
    document.getElementById("inputright").onkeydown = function() {
        
        const Enter = 13;
        const BackSpace = 8;
        
        var keypressed = event.keyCode;
        var text = document.getElementById("inputright").value;
        
        if (text.trim().length > 0)
        { 
            if (keypressed == Enter)
                {  
                    createChatBox(text, 2, "Lorem");
                }
             else
                {
                    document.getElementById("animation-right").style.display = 'block';
                }
        }
        else
        {
            document.getElementById("animation-right").style.display = 'none';
        }
        
        if (keypressed == BackSpace && text.trim().length < 2)
            {
                document.getElementById("animation-left").style.display = 'none';
            }
    }
    
    document.getElementById("send-left").onclick = function () {
        
        var text = document.getElementById("inputleft").value;
        
        if (text.trim().length > 0)
        {
            createChatBox(text, 1, "Ipsum");
        }
    }
    
    document.getElementById("send-right").onclick = function () {
        
        var text = document.getElementById("inputright").value;
        
        if (text.trim().length > 0)
        {
            createChatBox(text, 2, "Lorem");

        }
    }   
    
    
}