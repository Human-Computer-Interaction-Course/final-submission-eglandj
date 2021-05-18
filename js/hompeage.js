/*

*/

// Creates an array for the sports container selection
const selection = document.querySelectorAll('.sports_container');

for (i = 0; i < selection.length; i++) {
    selection[i].onclick = function(event) { 
        var sport_select = event.target.id;
        var page = removeChar(sport_select);
        if (page == 'baseball'){
            openTab(page);
        }else{
            alert("Page does not exist, Coming soon!")
        }
    }
}


function removeChar(string){
    var newString ="";
	if(string.value == ""){
		alert("Error: ID Value not being captured");
	}else{
		if(newString == ""){
			newString = string.replace("2", "");
		}else{
			newString = newString.replace("2", "");
		}
        if(newString == ""){
			newString = string.replace("3", "");
		}else{
			newString = newString.replace("3", "");
		}
	}
    return newString;
}

function openTab(sport){
    url = sport.concat("_calc.html")
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    link.remove();
}



