
var myData = []
    $("#data").click(function(){
        var person = {}; 
        var name = $("#name").val();
        var last = $("#last").val();
        var id = $("#id").val();
        var add = $("#add").val();
        var user = $("#user").val();
        var pass = $(".pass").val();
        var date = $("#date").val();
        var bal = $('#bal').val()
        localStorage.setItem('name', name);
        localStorage.setItem('last', last);
        localStorage.setItem('id', id);
        localStorage.setItem('add', add);
        localStorage.setItem('user', user);
        localStorage.setItem('pass', pass);
        localStorage.setItem('date', date);
        localStorage.setItem('bal', bal);
        $("#all").hide();
        $("#ok").show();
        console.log(name = localStorage.getItem('name'))
    })
    
   
   var newAmount = 0
    

    $("#conf").click(function(){
    for (var i = 0; i < localStorage.length; i++){
        
     if ((localStorage.getItem('user') === $("#use").val()) && (localStorage.getItem('pass') === $(".pass").val())){
            $("#ok").hide();
            $("#acc").show();
         }
        else
         {alert("wrong user data");}

     }})

        $("#dep").click(function(){
            $("#acc").hide();
            $("#d12").show();
        })
       
        

$("#with4").click(function(){
    console.log(parseInt($("#amo").val()))
    var newAmount = (parseInt(localStorage.getItem('bal'))) + parseInt($("#amo3").val())
    localStorage.setItem('bal',JSON.stringify(newAmount))
    console.log(newAmount)
    $("#msgD").show(2000);
     
})

$("#with").click(function(){
    $("#acc").hide(0);
    $("#within").show(0);
})

$("#with3").click(function(){
    console.log(parseInt($("#amo2").val()))
    var newAmount = (parseInt(localStorage.getItem('bal'))) - parseInt($("#amo2").val())
    localStorage.setItem('bal',JSON.stringify(newAmount))
    console.log(newAmount,"right result")
    $("#msgC").show(2000);
     
})





        

