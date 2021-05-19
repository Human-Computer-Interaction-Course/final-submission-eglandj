// Creates an array for the sports container selection so i can index it on a user click
const selection = document.querySelectorAll('.sports_container');

// For loop that adds an onclick event to all of the containers and items inside it for each sport section
for (i = 0; i < selection.length; i++) {
    selection[i].onclick = function(event) { 
        var sport_select = event.target.id;// Getting the id of what was clicked on by the user (either the image, title, or container of selected sport)
        var page = removeChar(sport_select);// using the fucntion to remove extra numbers from the ID
        if (page == 'baseball'){ // If statement checks to make sure that the sport selected is baseball since i only have this page created
            openTab(page);
        }else{
            alert("Page does not exist, Coming soon!")// Lets the user know the other pages will be implemented soon
        }
    }
}

// Strips the strings of any leftover numbers
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

// function that creates a new tab when selected sport is clicked on (currently only for baseball)
function openTab(sport){
    url = sport.concat("_calc.html")
    const link = document.createElement('a');
    link.href = url;
    window.open(url, "_self");
}
