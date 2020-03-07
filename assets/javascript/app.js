
$(document).ready(function() {

    // Water pokemon are best pokemon
    var poke = ['Totodile', 'Lapras', 'Gyarados', 'Squirtle', 'Psyduck', 'Suicune', 'Frokie', 'Manaphy', 'Kyogre','Mudkip'];

    function displayInfo(){
        $('#pokemon-api').empty();
            var topic = $(this).attr('data-name');
            var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + topic + '&GrmPeN2RHRwvZtfl4S3EEFwr8KxbSoum';
    
            $.ajax({
                url: queryURL,
                method: "GET"
            })
    
            // show me those buttttttoooonnnsss
    
            function showButtons() {
                $('.buttons').empty();
                for (var i = 0; i < topics.length; i++) {
                var makeButtons = $('<button>');
                makeButtons.addClass('topic btn btn-info');
                makeButtons.attr('data-name', poke[i]);
                makeButtons.text(poke[i]);
                $('.buttons').append(makeButtons);
                }
            }
        }
});
showButtons();