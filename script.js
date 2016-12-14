 $(document).ready(function() {

    $(document).keydown(function() {
       $('body').keydown(function(e) {
        if (e.which === 32) {
         $('h1').css('background-color', 'pink');
        }
        else if (keycode === 69) {
         while (i < 6) {
          $("body").append("🌈")
          i++
         }
        };

        if (e.which === 71) {

         $("body").append("https://media.giphy.com/media/14g4L6kXIdGHU4/giphy.gif");
        }
       });
 