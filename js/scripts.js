var currentReview = 0;
var totalReviews = reviews.length - 1;
var fadeInDelay = 2000; // how long to wait before fading in the guilt text

var titles = [  "Your customers are talking. Talk back.",
                "Are your reviews falling on deaf ears?",
                "Take control of your customer feedback.",
                "Don't let customers think you don't care." ];
var currentTitle = 0;
var totalTitles = titles.length - 1;

var bgColors = [  "#51ABE3",
                  "#998BBA",
                  "#89A68E",
                  "#B87E7E" ];
var currentBgColor = 0;
var totalBgColors = bgColors.length - 1;


// FUnction to show the new guilt text
function showNoResponseText() {
  setTimeout(function(){
    $('.review-no-response').show();

    setTimeout(function(){
      $('body').addClass('rattle');
    }, 200);

  }, fadeInDelay);
  setTimeout(function(){
    loadNewReview();
  }, fadeInDelay * 3);

}

// Function to load in a new review
function loadNewReview() {

    $('body').removeClass('rattle');
    $('.review-container').hide();

    // Hide the guilt text
    $('.review-no-response').hide();
    $('.review-text').empty();

    // Show the new title
    $('.one-liner').text(titles[currentTitle]);
    if ( currentTitle < totalTitles ) {
      currentTitle = currentTitle + 1;
    } else {
      currentTitle = 0;
    }

    // Set the new BG Color
    $('body').css('background-color',bgColors[currentBgColor]);
    if ( currentBgColor < totalBgColors ) {
      currentBgColor = currentBgColor + 1;
    } else {
      currentBgColor = 0;
    }

    // Load up the next review
    if ( currentReview < totalReviews ) {
      currentReview = currentReview + 1;
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
    $('.review-url').attr('href',reviews[currentReview].url);
    // $('.review-text').text(reviews[currentReview].text);
    // $('.review-meta').css('background-color',newBGColor);
    // $('.review-no-response').css('color',bgColors[newPlatform]);

    $('.review-container').slideToggle();

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
