function loadUser(){
 
      var xmlhttp = new XMLHttpRequest();
      var url = "https://api.github.com/users";
      
      xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var people = JSON.parse(this.responseText);
              myFunction(people);
          }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();

      function myFunction(people) {
          var output = "";
          var i;
          for(i=0; i<5; i++) {
              output+='<div class="container"><div><img src="'+people[i].avatar_url+'" width="100px" height="100px"></div>' + 
                             '<div><ul>' + 
                              '<li>ID: '+people[i].id+'</li>' +   
                              '<li>Login: '+people[i].login+'</li>' +  
                               '<li>Repos:'+people[i].repos_url +'</li>' +
                               '<li>Github: <a href='+ people[i].html_url+'>'+ people[i].html_url +'</a> </li>'+
                               '<li>Type:'+people[i].type +'</li>'+
                           '</ul></div></div>' ; 
          }
          document.getElementById("mypeople").innerHTML = output;
      }
      
        
  }