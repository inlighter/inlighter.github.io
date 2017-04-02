  var currentQuote = "";
  var currentAuthor = "Неизвестный автор";
  var currentLink = "";
  var id = 0;
  function getRandomNumber(min, max){
    return Math.floor(Math.random()*(Math.abs(max - min) + 1) + Math.min(max, min));
  }

  function getNextQuote() {
    var color = getRandomNumber(0, 360);
    $(".container").css("background", "hsl(" + color + ", 100%, 90%)");
    $.getJSON("https://crossorigin.me/http://www.quotzzy.co/api/quote/?lang=ru", function(data) {
      console.log(data);
      try {
      currentQuote = data.text;
      currentAuthor = data.author.name;
      currentLink = data.author.wiki;
      } catch (e) {
        console.warn("Undefined error");
      }

      var count = 0;
      var currentID = id;

      if (!currentQuote) {
        getNextQuote();
      } else {
      function nextLetter(id) {
        $('blockquote[data-id=' + id + ']').append(currentQuote.charAt(count));
        if (count < currentQuote.length) {
          count += 1;

          setTimeout(function(){
            nextLetter(id);}, 35);

        }
      }
      nextLetter(currentID);
      $("footer cite a").text("— " + currentAuthor);
      $("footer cite a").attr("href", currentLink);
      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
    }).fail(function() {
    $("blockquote").text("Произошла ошибка. Попробуйте еще раз.");
  });
  }


$(function() {
  if (!$("blockquote").text()) {
    $(".quote").delay(350).fadeTo(650, 1);
    getNextQuote();
  }

  $(".quote").click(function() {

    $('blockquote[data-id=' + id + ']').remove();
    id += 1;
    $('<blockquote title="Click to generate new quote"></blockquote>').insertBefore("footer");
    $("blockquote").attr("data-id", id.toString());
    $("footer cite a").empty();
    $(".quote").fadeOut(10);
    getNextQuote();
    $(".quote").delay(350).fadeIn(650);
  });

  $('button').on('click', function() {
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));

  });

});