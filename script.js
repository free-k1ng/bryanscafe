function saveFile() {
    	
    	const name = document.getElementById('name');
        const age = document.getElementById('age');
		const phone = document.getElementById('phone');
		const address = document.getElementById('address');
		const suburb = document.getElementById('suburb');
		const postcode = document.getElementById('postcode');
		const item = document.getElementById('item');
        const mail = document.getElementById('mail');
        
        let data = 
            '\r Name: ' + name.value + ' \r\n ' + 
            'Age: ' +age.value + ' \r\n ' + 
            'Phone (+61): ' + phone.value + ' \r\n ' +             
			'Address: ' + address.value + ' \r\n ' + 
			'Suburb: ' + suburb.value + ' \r\n ' + 
			'Postcode: ' + postcode.value + ' \r\n ' + 
			'Favourite Item: ' + item.value + ' \r\n ' + 
			'E-mail: ' + mail.value;

        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'customerinfo.txt';

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
		return false;
}

function cardtoggle1() {
  var x = document.getElementById("cardhide1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}

function cardtoggle2() {
  var x = document.getElementById("cardhide2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  
}