
var apiKey  = 'NGCVFuJ8w4IWMyLeaGGyg2X01orRKdq1';
var userID  = 'rikirosales';
 (function() {
 var behanceUserAPI = 'http://www.behance.net/v2/users/'+ userID +'?callback=?&api_key='+ apiKey;
 var behanceProjectsAPI = 'http://www.behance.net/v2/users/'+ userID +'/projects?callback=?&api_key='+ apiKey;
    
        $.getJSON(behanceUserAPI, function(user) {
            
            var data = JSON.stringify(user);
            sessionStorage.setItem('behanceUser', data);
            setUserTemplate();
        });

        function setUserTemplate() {
	        var userData    = JSON.parse(sessionStorage.getItem('behanceUser')),
	        getTemplate = $('#profile-template').html(),
	        template    = Handlebars.compile(getTemplate),
	        result      = template(userData);
	        $('div.header').html(result);
	        
    	};


         $.getJSON(behanceProjectsAPI, function(user) {
            
            var data = JSON.stringify(user);
            sessionStorage.setItem('behanceProjects', data);
            setProjectTemplate();
            console.log(result)
        });
        function setProjectTemplate() {
            var userData    = JSON.parse(sessionStorage.getItem('behanceProjects')),
            getTemplate = $('#project-template').html(),
            template    = Handlebars.compile(getTemplate),
            result      = template(userData);
            $('#projects').html(result);
            console.log(result)
        };

})();


