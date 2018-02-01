var currentReview = 0;
var totalReviews = 3; // make this to take the actual size of the array
var fadeInDelay = 2000; // how long to wait before fading in the guilt text

// FUnction to show the new guilt text
function showNoResponseText() {
  setTimeout(function(){
    $('.review-no-repsonse').fadeIn();
  }, fadeInDelay);
  setTimeout(function(){
    loadNewReview();
  }, fadeInDelay * 3);

}

// Function to load in a new review
function loadNewReview() {

    $('.review-container').hide();

    // Hide the guilt text
    $('.review-no-repsonse').hide();
    $('.review-text').empty();

    // Load up the next review
    if ( currentReview < totalReviews ) {
      currentReview = currentReview + 1;
    } else {
      currentReview = 0;
    }

    // Inject the loaded review into the DOM
    $('.review-avatar').attr('src',reviews[currentReview].avatar);
    $('.review-stars').attr('src','img/star-ratings/star-rating-' + reviews[currentReview].stars + '.svg');
    $('.review-name').text(reviews[currentReview].name);
    $('.review-biz').text(reviews[currentReview].biz);
    // $('.review-text').text(reviews[currentReview].text);

    $('.review-container').fadeIn();

    new TypeIt('.review-text', {
       strings: reviews[currentReview].text,
       speed: 25,
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

var reviews = [
  // {
  //   name:   "_____",
  //   stars:  "_____",
  //   text:   "_____",
  //   url:    "_____",
  //   loc:    "_____",
  //   avatar: "_____",
  //   biz:    "_____"
  // },

  {
    name:   "D. W.",
    stars:  "1",
    text:   "Bought a Groupon for my daughter for end of school. Called to make the appointment and was told I had to sign a waiver in person. Went by there on my way home and waited for 5 minutes but no one came to the front. Couldn't wait any longer so left and tried to call for other options. There was no answer. Tried several times and finally reached someone and was then told I could not sign a waiver but they would call the manager. Ridiculous.",
    url:    "https://www.yelp.com/biz/elements-massage-round-rock?hrid=petqJqVPi1gL9BCdFf1nDw",
    loc:    "Round Rock, TX",
    avatar: "https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
    biz:    "Elements Massage"
  },
  {
    name:   "Scott S.",
    stars:  "4",
    text:   "The prices keep going up on this stuff, which is sad, but this is my favorite location quality- and variety-wise ever. I could eat this every day if I didn't need to be mobile.",
    url:    "https://www.yelp.com/biz/orange-leaf-frozen-yogurt-austin?hrid=dfcKVIMgVgh9kBI1xdyoTA",
    loc:    "Austin, TX",
    avatar: "https://s3-media1.fl.yelpcdn.com/photo/TpGoQXawtCDxqyCQDlsnWw/120s.jpg",
    biz:    "Orange Leaf Frozen Yogurt"
  },
  {
    name:   "Elizabeth S.",
    stars:  "1",
    text:   "Rude employee! I work at another Orange Leaf in Austin, and the staff where I work at are not rude like this lady that was working there last night! From the moment I stepped foot, she was being rude and snarky! Their manager needs to give them a lesson or two about customer service, because I know for sure my manager would be very upset if I was being rude to a customer!!!",
    url:    "https://www.yelp.com/biz/orange-leaf-frozen-yogurt-austin-7?hrid=Us6LQsfWXTFGJwowBTwQ6Q",
    loc:    "Austin, TX",
    avatar: "https://s3-media2.fl.yelpcdn.com/photo/_6I9LwxAqhanyIE68hQcmw/120s.jpg",
    biz:    "Orange Leaf Frozen Yogurt"
  },
  {
    name:   "Manuelita E.",
    stars:  "5",
    text:   "This is our favorite smoothie stop right after the gym, conveniently located next to La fitness. The wraps and sandwiches are solid and flavorful. The smoothies are great and there's many to choose from. The prices are fair, you can get combos to make it cheaper.",
    url:    "https://www.yelp.com/biz/tropical-smoothie-cafe-dallas?hrid=Uvytq19qgGn4D1PTZkPKAA",
    loc:    "Dallas, TX",
    avatar: "https://s3-media1.fl.yelpcdn.com/photo/Dj1Xe6RpoFj2kF9egFkvtg/60s.jpg",
    biz:    "Tropical Smoothie Cafe"
  },
  {
    name: "Eli A.",
    stars: "1",
    text: "Absolutely terrible it was a long wait followed by a depressed barber breathing her cigarette breath in my ear. She didn't wet my hair before cutting it which resulted in a lopsided choppy hobo-like look.",
    url: "https://www.yelp.com/biz/birds-barbershop-austin-10?hrid=jhV7H1V3vDW7Vj94VyoSgQ",
    loc:    "Austin, TX",
    avatar: "https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
    biz: "Bird's Barbershop"
  },
  {
    name: "Micheal R.",
    stars: "1",
    text: "It takes them 2 hours to deliver food.  Then they deliver it overcooked and missing things you ordered.  This location sucks.  Bad. Do yourself a favor and call a real Chinese food restaurant.",
    url: "https://www.yelp.com/biz/mama-fus-asian-house-sunset-valley?hrid=iyI0lA9vEcc8BwzXvtqqgA",
    loc:    "Sunset Valley, TX",
    avatar: "https://s3-media3.fl.yelpcdn.com/photo/-Pr2JDWGq9Jk9O5Pe0vZ0w/60s.jpg",
    biz: "Mongolian BBQ"
  },
]
