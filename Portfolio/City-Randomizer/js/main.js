function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function capitalize(string){
          return string.charAt(0).toUpperCase() + string.slice(1);
        }

        function getPhrase(data){
          var numCities = data["cities"].length;
          var numAdjs = data["adjectives"].length;
          var randomCity = data["cities"][getRandomInt(0, numCities - 1)];
          var randomAdj = data["adjectives"][getRandomInt(0, numAdjs - 1)];
          var randomPhrase = capitalize(randomAdj) + ' ' + randomCity;
          return randomPhrase;
        }



        var generated = [];

        function getStringOfPrases(lst){
          var str = '';
          for (var i=0; i < lst.length; i++){
            str += lst[i] + "\n";

          }
          return str;
        }

        function genPhrase(data){
          var uniquePhrases = data["adjectives"].length*data["cities"].length;
          while(uniquePhrases > generated.length){
            var phrase = getPhrase(data);
            if ($.inArray(phrase, generated) > -1){
              continue;
            }

            else {
              generated.push(phrase);

              $("textarea").text(getStringOfPrases(generated));
              $("#inp").val(phrase);
              $("span").text("Generated " + generated.length.toString() + " of " + uniquePhrases.toString());

              break;
            }
          }

          if (uniquePhrases == generated.length){
            $("#btn-1").prop("disabled", true);
            $("#btn-1").css("background-color", "gainsboro");
          }
        }
        var urlAPI = "https://gp-js-test.herokuapp.com/api";
        $(document).ready(function(){
        $.getJSON(urlAPI, function(data){

            $("#btn-1").click(function(){genPhrase(data);});
        });
        });