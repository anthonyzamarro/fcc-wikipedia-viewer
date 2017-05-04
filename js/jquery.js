$(document).ready(function(){
  var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=123&namespace=0&limit=10';
  var displayTitles;
  $('#input').on('keydown', function(event)  {
   if (event.which === 13) {
    function search() {
     var userInput = document.getElementById('input').value;
       var split = url.split('23');
        var split1 = split[1];
         var split0 = split[0].replace(/[0-9]+/, userInput);
          var newURL = split0 + split1;
      $.ajax({
        url: newURL,
        data: { action: 'opensearch', format: 'json'},
        dataType: 'jsonp',
        success: function (x) {
          $('#search-list').empty(); // clears any data currently displayed in ul.
          x.shift();
          var searchList = document.getElementById('search-list');
          var titles = x[0];
          var description = x[1];
          var link = x[2];
        for(var i = 0; i < titles.length && i < description.length && i < link.length; i++) {
          var listTitles = document.createElement('li');
          var displayTitles = searchList.appendChild(listTitles);
            $(displayTitles).wrap('<a href=' + link[i] +'></a>');
              displayTitles.prepend(titles[i]);
              displayTitles.after(description[i]);
           }
            $('ul').css('background', 'white');
            $('#input').val('');
         }
      });
    }
     search();
     event.preventDefault();
   }
 });
});
// @jawaka72 The .empty() method in jquery will clear out the HTML content of an element. https://api.jquery.com/empty/
// It's the same as setting the html to ""
