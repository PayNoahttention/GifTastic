
$(document).ready(function() {
    var poke = ['Totodile', 'Lapras', 'Gyarados', 'Squirtle', 'Psyduck', 'Suicune', 'Frokie', 'Manaphy', 'Kyogre','Mudkip'];
});

$('#pokemon-api').empty();
      var topic = $(this).attr('data-name');
      var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + topic + '&GrmPeN2RHRwvZtfl4S3EEFwr8KxbSoum';