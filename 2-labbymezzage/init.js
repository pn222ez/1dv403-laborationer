"use strict";


	var MessageBoard = {
		
		messages: [],
		
		init:function(e){
			var mess = new Message(document.getElementById("user-text").value, new Date());
				var htmlText = mess.getHtml();
				mess.setText(htmlText);
				this.messages.push(mess);
		},	
		renderMessages:function(){
			document.getElementById("count").innerHTML = "Antal inlägg: " + this.messages.length;
			document.getElementById("mess").innerHTML = "";
			for(var i=0; i<this.messages.length; i++){
				this.renderMessage(i);
			}
		},
		renderMessage:function(messageId){
			var link = document.createElement("a");
			var text = document.createElement("p");
			var date = document.createElement("a");
			var div = document.createElement("div");
			var div = document.createElement("div");
			mess.appendChild(div);
			div.setAttribute("class", "the-message");
			var div2 = document.createElement("div");
			
			mess.appendChild(div2);
			div2.setAttribute("class", "message-info");
			var infoImage = document.createElement("figure");
			infoImage.setAttribute("class", "info");
			date.appendChild(infoImage);
			link.href="#";
			var deleteImage = document.createElement("figure");
			deleteImage.setAttribute("class", "delete");
			link.appendChild(deleteImage);
			date.href = "#";
			date.onclick = function(){
				alert("Inlägget skapades den " + MessageBoard.messages[messageId].getFormattedDate());
			}
			link.onclick= function(){
				MessageBoard.removeMessage(messageId);
			}
			text.innerHTML = this.messages[messageId].getText() + " (" + this.messages[messageId].getFormattedDate() + ")";
			div.appendChild(text);
			div2.appendChild(link);
			div2.appendChild(date);
		},
		removeMessage: function(messageId) {
			var conf = window.confirm("Vill du ta bort meddelandet?");
			if(conf==true){
				this.messages.splice(messageId, 1);
				this.renderMessages();
			} else {
				return;
			}
		}
		
	}

document.getElementById("create-mess").onclick = function(){
	MessageBoard.init();
	MessageBoard.renderMessages();
	return false;
}

document.getElementById("user-text").onkeypress = function(e){
	if (!e) var e = window.event;
	
	if (e.keyCode == 13 && !e.shiftKey){
		MessageBoard.init();
		MessageBoard.renderMessages();
		return false;
	}


}
	
