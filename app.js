$(document).ready(function(){
    var animals = ["dog", "cat", "bird"];
    function populateButtons(){
        $(".buttonsContainer").empty();
        for(var i=0; i<animals.length;i++){ //i=0;
            var animalButton = $("<button>");//<button></button>
            //$("<button>").addClass("animal-button");
            animalButton.addClass("animal-button"); //<button class="animal-button"></button>
            animalButton.attr("data-type", animals[i]); //<button class="animal-button" data-type="dog"></button>
            animalButton.text(animals[i]);//<button class="animal-button" data-type="dog">dog</button>
            $(".buttonsContainer").append(animalButton);
            // <div class="buttonsContainer">
            //     <button class="animal-button" data-type="dog">dog</button>
            // </div>
        }

    }
    populateButtons();
    $("#add-animal").on("click", function(event){
        event.preventDefault();
        var newAnimal = $("input").val();
        animals.push(newAnimal); //["dog", "cat", "bird", "cow"];
        populateButtons();

    })
    $(document).on("click", ".animal-button", function() {
       $("#images").empty(); 
        var animalName = $(this).attr("data-type");
        console.log("animal name: " +animalName)
        //link to API
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=" +animalName;
        console.log(queryURL)
  
        // used to retrieve data from a URL database
        $.ajax({
          url: queryURL,
          method: "GET"
        })
  
          // Function that makes images appear
          .then(function(response) {
  
            // Assigns image to variable
            var imageUrl = response.data.image_original_url;
  
            // makes an image tag
            var dogImage = $("<img>");
  
            // Set image tag attributes
            dogImage.attr("src", imageUrl);
            dogImage.attr("alt", "dog image");
  
            //
            $("#images").prepend(dogImage);
          });
      });
})