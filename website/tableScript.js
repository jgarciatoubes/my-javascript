    var a = new Array(4);
    for (var i = 0; i<4; i++) {
        a[i] = new Array(3);

        var firstName = prompt("Insert First Name: ");
        var lastName = prompt("Insert Last Name: ");
        var age = prompt("Insert age: ");
        
        for (var j = 0; j < 3; j++) {
            if(j==0)
                a[i][j] = firstName;
            if(j==1)
                a[i][j] = lastName;
            if(j==2)
                a[i][j] = age;
                                
        }
    }    
    
    var table = document.getElementById("table");

        for(var i = 1; i<table.rows.length; i++){
            for(var j = 0; j<table.rows[i].cells.length; j++){
                table.rows[i].cells[j].innerHTML = a[i-1][j];
            }
        }