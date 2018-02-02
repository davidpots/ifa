var currentReview = 0;
var totalReviews = reviews.length - 1;
var fadeInDelay = 2000; // how long to wait before fading in the guilt text
// var bgColors = [ "#3D4153", "#3081B0", "#17A6FB","#FF685B","#FF895B","#A07DBE","#724697"]
// var bgColors = ["#17A6FB"];
// var bgColors = { Yelp: "#D32323",
//                  Facebook: "#3A599D",
//                  Google: "#D04539",
//                  TripAdvisor: "#56973D" };



// FUnction to show the new guilt text
function showNoResponseText() {
  setTimeout(function(){
    $('.review-no-response').fadeIn();
  }, fadeInDelay);
  setTimeout(function(){
    loadNewReview();
  }, fadeInDelay * 3);

}

// Function to load in a new review
function loadNewReview() {

    $('.review-container').hide();

    // Hide the guilt text
    $('.review-no-response').hide();
    $('.review-text').empty();

    // Load up the next review
    if ( currentReview < totalReviews ) {
      currentReview = currentReview + 1;
      console.log("currentReview is set to: " + currentReview);
    } else {
      currentReview = 0;
    }

    // Load up the next bg Color
    // var newBGColor = bgColors[Math.floor(Math.random()*bgColors.length)];

    // Inject the loaded review into the DOM
    // $('.review-avatar').attr('src',reviews[currentReview].avatar);
    $('.review-stars').attr('src','img/star-ratings/star-rating-' + reviews[currentReview].stars + '.svg');
    $('.review-name').text(reviews[currentReview].name);
    $('.review-biz').text(reviews[currentReview].biz);
    $('.review-platform').text(reviews[currentReview].platform);
    $('.review-location').text(reviews[currentReview].loc);
    // $('.review-text').text(reviews[currentReview].text);
    // $('.review-meta').css('background-color',newBGColor);
    // $('.review-no-response').css('color',bgColors[newPlatform]);

    $('.review-container').fadeIn();

    new TypeIt('.review-text', {
       strings: reviews[currentReview].text,
       speed: 35,
       autoStart: true,
       callback: showNoResponseText
    });

}

$(document).ready(function(){

  // On page load, start the cycle
  loadNewReview();

  // // Event to move to the next review
  // $('body').click(function(){
  //   loadNewReview();
  // });

});
