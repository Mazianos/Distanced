document.getElementById('btn1').onclick = function () {	
    var val1 = $('[name=origin]').val();	   
    var val2 = $('[name=destination]').val();	  
    var val3 = $('[name=time]').val();	
    function save() {	
        localStorage.setItem('current', val1);	
        localStorage.setItem('destination', val2);	
        localStorage.setItem('time', val3);	
    }	
    save()	
    console.log(localStorage);	
}