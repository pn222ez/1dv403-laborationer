function Message(message, date){
	this.getText = function() {
		return message;
	}
	
	this.setText = function(_text) {
		message = _text;
	}
	
	this.getDate = function() {
		return date;
	}

	this.getFormattedDate = function(){
		var month=new Array();
		month[0]="Januari";
		month[1]="Februari";
		month[2]="Mars";
		month[3]="April";
		month[4]="Maj";
		month[5]="Juni";
		month[6]="Juli";
		month[7]="Augusti";
		month[8]="September";
		month[9]="Oktober";
		month[10]="November";
		month[11]="December";
		var seconds=0;
		if(date.getSeconds()<10){
			seconds = "0" + date.getSeconds();
		} else {
			seconds = date.getSeconds();
		}

		var minutes=0;
		if(date.getMinutes() < 10){
			minutes = "0" + date.getMinutes();
		} else {
			minutes = date.getMinutes();
		}
		return date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear() + " kl. " +date.getHours() + ":" + minutes + ":" + seconds;
	}
	
	this.setDate = function(_date) {
		date = _date;
	}

	this.getHtml = function(){
		return message.replace(/[\n\r]/g, "<br>");
	}
	
	Message.prototype.toString = function(){
		return this.getText() + " (" + this.getDate() + ")";
	}
}