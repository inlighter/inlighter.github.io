$(function() {
  var currentQuote = "";
  var currentAuthor = "";
  var currentLink = "";
  function getNextQuote() {
    $.getJSON("http://www.quotzzy.co/api/quote/?lang=ru", function(data) {
      console.log(data);
      try {
      currentQuote = data.text;
      currentAuthor = data.author.name;
      currentLink = data.author.wiki;
      } catch (e) {
        console.warn("Undefined error");
      }

      var count = 0;

      if (!currentQuote) {
        getNextQuote();
      } else {

      function nextLetter() {
        $("blockquote").append(currentQuote.charAt(count));
        if (count < currentQuote.length) {
          count += 1;
          setTimeout(nextLetter, 35);

        }
      }
      nextLetter();
      $("footer cite a").text("— " + currentAuthor);
      $("footer cite a").attr("href", currentLink);
      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
    }).fail(function() {
    $("blockquote").text("Произошла ошибка. Попробуйте еще раз.");
  });
  }
  if (!$("blockquote").text()) {
    $(".quote").delay(200).fadeTo(800, 1);
    getNextQuote();
  }

  $("blockquote").click(function() {
    $("blockquote").text("");
    $("footer cite a").text("");
    $(".quote").fadeOut('fast');
    getNextQuote();
    $(".quote").delay(200).fadeIn(500);
  });

  $('button').on('click', function() {
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));

  });

});