var networks = [
                { name: "Ben and Jerry's",
                  url:  "ben-and-jerrys"  },

                { name: "Buffalo Wings and Rings",
                  url:  "buffalo-wings-and-rings"  },

                { name: "Burn Boot Camp",
                  url:  "burn-boot-camp"  },

                { name: "CertaPro Painters",
                  url:  "certapro-painters"  },

                { name: "Chicken Salad Chick",
                  url:  "chicken-salad-chick"  },

                { name: "Curves-Jenny Craig",
                  url:  "curves-jenny-craig"  },

                { name: "Del Taco Holdings",
                  url:  "del-taco-holdings"  },

                { name: "Dippin' Dots",
                  url:  "dippin-dots"  },

                { name: "Dunkin' Donuts",
                  url:  "dunkin-donuts"  },

                { name: "Elements Massage",
                  url:  "elements-massage"  },

                { name: "Firehouse Subs",
                  url:  "firehouse-subs"  },

                { name: "Fit Body Boot Camp",
                  url:  "fit-body-boot-camp"  },

                { name: "Great Clips",
                  url:  "great-clips"  },

                { name: "Jamba Juice",
                  url:  "jamba-juice"  },

                { name: "Jazzercise",
                  url:  "jazzercise"  },

                { name: "MaidPro Franchise Corporation",
                  url:  "maidpro-franchise-corporation"  },

                { name: "Massage Envy Franchising",
                  url:  "massage-envy-franchising"  },

                { name: "Meineke Car Care Centers",
                  url:  "meineke-car-care-centers"  },

                { name: "Orange Leaf Frozen Yogurt",
                  url:  "orange-leaf-frozen-yogurt"  },

                { name: "Scooter's Coffee",
                  url:  "scooters-coffee"  },

                { name: "Sport Clips",
                  url:  "sport-clips"  },

                { name: "TITLE Boxing Club",
                  url:  "title-boxing-club"  },

                { name: "Waxing the City",
                  url:  "waxing-the-city"  },

                { name: "Wingstop Restaurants",
                  url:  "wingstop-restaurants"  },

             ];

$(document).ready(function(){

  $.each( networks, function( i, network ) {
    $('.network-list').append("<li class='tile-list-tile'><a href='network--"+ network.url +".html'>⭐️ &nbsp;"+ network.name +"</a></li>");
  });

});
