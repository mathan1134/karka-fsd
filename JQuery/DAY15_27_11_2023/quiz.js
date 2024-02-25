$(document).ready(function(){
    var score = 0;

    $("#bt1").click(function(){
        if ($("#q02").is(":checked")) {
            $("#q002").css("color", "green")
            score += 1;
        } 
        else if($("#q01").is(":checked")){
            $("#q001").css("color", "red")
            $("#ans1").show()
        }
        else {
            $("#q003").css("color", "red")
            $("#ans1").show();
        }  
    });
    
    $("#bt2").click(function(){
        if ($("#q12").is(":checked")) {
            $("#q112").css("color", "green")
            score += 1;
        } 
        else if($("#q11").is(":checked")){
            $("#q111").css("color", "red")
            $("#ans2").show()
        }
        else {
            $("#q113").css("color", "red")
            $("#ans2").show();
        }  
    });
    $("#bt3").click(function(){
        if ($("#q21").is(":checked")) {
            $("#q221").css("color", "green")
            score += 1;
        } 
        else if($("#q22").is(":checked")){
            $("#q222").css("color", "red")
            $("#ans3").show()
        }
        else {
            $("#q223").css("color", "red")
            $("#ans3").show();
        }  
    });
    $("#bt4").click(function(){
        if ($("#q33").is(":checked")) {
            $("#q333").css("color", "green")
            score += 1;
        } 
        else if($("#q32").is(":checked")){
            $("#q332").css("color", "red")
            $("#ans4").show()
        }
        else {
            $("#q331").css("color", "red")
            $("#ans4").show();
        }  
    });
    $("#bt5").click(function(){
        if ($("#q43").is(":checked")) {
            $("#q443").css("color", "green")
            score += 1;
        } 
        else if($("#q42").is(":checked")){
            $("#q442").css("color", "red")
            $("#ans5").show()
        }
        else {
            $("#q441").css("color", "red")
            $("#ans5").show();
        }  
    });
    
    

    $(document).ready(function(){
    $("#all").click(function(){
    $("h4").show( function(){
        $("h4").text("Total Score: " + score)
    })

    })
})
});