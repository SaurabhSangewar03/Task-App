$("#add_task").submit(function(event){
  alert("Task Inserted Successfully!");
})

if(window.location.pathname == "/"){
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function(){
      var id = $(this).attr("data-id")

      var request = {
          "url" : `http://localhost:8080/api/task/${id}`,
          "method" : "DELETE"
      }

      if(confirm("Do you really want to delete this Task ?")){
          $.ajax(request).done(function(response){
              alert("Task Deleted Successfully!");
              location.reload();
          })
      }

  })
}