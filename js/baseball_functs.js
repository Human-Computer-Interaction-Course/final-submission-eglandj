function calc_BRA(){
    var stolen = parseFloat(document.getElementById("num_bases").value);
    var pouts = parseFloat(document.getElementById("pout_ret").value);
    var bra = ((stolen / (stolen + pouts)) * 100).toFixed(4);

    if(isNaN(bra) == true){
        alert("Invalid Operation")
    }else{
        var bra_string = bra.toString();
        document.getElementById("br_avg").value = bra_string + " percent";
    }
}

function calc_OBP(){
    var hits = parseFloat(document.getElementById("hits").value);
    var walks = parseFloat(document.getElementById("walks").value);
    var hbp = parseFloat(document.getElementById("hbp").value);
    var atbats = parseFloat(document.getElementById("atbats").value);
    var sf = parseFloat(document.getElementById("sf").value);

    var obp = hits + walks + hbp;
    var oba = atbats + walks + sf + hbp;

    var final = ((obp / oba).toFixed(4));

    if(isNaN(final) == true){
        alert("Invalid Operation")
    }else{
        var final_string = final.toString();
        document.getElementById("obp").value = final_string;
    }
}

function calc_ERA(){
    var ernd_runs = parseFloat(document.getElementById("earned_runs").value);
    var in_pitch = parseFloat(document.getElementById("in_pitch").value);

    var era = ((ernd_runs / in_pitch)*7).toFixed(4);

    if(isNaN(era) == true){
        alert("Invalid Operation")
    }else{
        var era_string = era.toString();
        document.getElementById("era").value = era_string;
    }
}

function calc_BA(){
    var num_hits = parseFloat(document.getElementById("num_hits").value);
    var num_bats = parseFloat(document.getElementById("num_bats").value);

    if(num_hits > num_bats){
        alert("Hits cannot be greater than at bats");
    }else{
        var ba = ((num_hits / num_bats)).toFixed(4);

        if(isNaN(ba) == true){
            alert("Invalid Operation");
        }else{
            var era_string = era.toString();
            document.getElementById("ba").value = era_string;
        }
    }
}