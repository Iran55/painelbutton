$(function () {
   
    var scntDiv = $('#dynamicDiv');
 
    // função que organiza as ids
    function ids(){
       scntDiv.find("input:not(:first)").each(function(i){
          this.id = "item"+ parseInt(i+1);
       });
    }
    
    
    $(document).on('click', '#addInput', function () {
    
       var nome = $("#inputeste").val();
    
       $('<p>'+
       '<label>'+nome+'</label>' +
       '<input type="text" size="20" value="" placeholder="" /> '+
       '<a class="btn btn-danger" href="javascript:void(0)" id="remInput">'+
       '<span class="glyphicon glyphicon-minus" aria-hidden="true"></span> '+
       'Remover Campo'+
       '</a>'+
       '</p>').appendTo(scntDiv);
       
       ids();
       
       return false;
    });
 
    $(document).on('click', '#remInput', function () {
       $(this).parents('p').remove();
       ids();
       return false;
    });
 });