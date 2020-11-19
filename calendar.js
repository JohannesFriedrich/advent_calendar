let current_Year = 2020;

function checkDoor(day){
    
    let current_Date = new Date();
    let doorDate = new Date(current_Year +"-12-" + day);
    let differenceDays = doorDate - current_Date;
    differenceDays = Math.ceil(differenceDays/(1000*3600*24));
    console.log(differenceDays);

    if( differenceDays > 0){
        document.getElementById("btn_"+day).checked = false;
        let DaysToOpen;

        if (differenceDays == 1)
            DaysToOpen = "Noch etwas Geduld! Bis zu diesem Türchen ist es noch 1 Tag!";
        else {
            DaysToOpen = "Noch etwas Geduld! Bis zu diesem Türchen sind es noch " + differenceDays + " Tage";
        }

        alert(DaysToOpen)

    } else {

        //setTimeout(function() {
            // Code, der erst nach 2 Sekunden ausgeführt wird
          //  window.open("")
          //}, 1000);

        

    }
}