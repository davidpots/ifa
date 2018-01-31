$(document).ready(function(){

  $.each(reviews, function(i) {
    $('body').append( '<h1>' + reviews[i].biz + '</h1>');
    $('body').append( '<ul>' );
    $('body').append( '<li><img src="' + reviews[i].avatar + '" /></li>');
    $('body').append( '<li>' + reviews[i].stars + ' stars</li>');
    $('body').append( '<li>' + reviews[i].name + '</li>');
    $('body').append( '<li>' + reviews[i].text + '</li>');
    $('body').append( '<li><a href="' + reviews[i].url + '">view on Yelp</a></li>');
    $('body').append( '</ul>' );
  });

});

var reviews = [
  {
    name: "Eli A.",
    stars: "1",
    text: "Absolutely terrible it was a long wait followed by a depressed barber breathing her cigarette breath in my ear. She didn't wet my hair before cutting it which resulted in a lopsided choppy hobo-like look.",
    url: "https://www.yelp.com/biz/birds-barbershop-austin-10?hrid=jhV7H1V3vDW7Vj94VyoSgQ",
    avatar: "https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
    biz: "Bird's Barbershop"
  },
  {
    name: "Micheal R.",
    stars: "1",
    text: "It takes them 2 hours to deliver food.  Then they deliver it overcooked and missing things you ordered.  This location sucks.  Bad. Do yourself a favor and call a real Chinese food restaurant.",
    url: "https://www.yelp.com/biz/mama-fus-asian-house-sunset-valley?hrid=iyI0lA9vEcc8BwzXvtqqgA",
    avatar: "https://s3-media3.fl.yelpcdn.com/photo/-Pr2JDWGq9Jk9O5Pe0vZ0w/60s.jpg",
    biz: "Mongolian BBQ"
  },
]
