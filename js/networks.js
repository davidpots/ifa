var networks = [

                { name: "Anytime Fitness",
                  url:  "anytime-fitness"  },

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






                // { name: "American Family Care",
                //   url:  "american-family-care"  },
                //
                // { name: "Arby's",
                //   url:  "arbys"  },
                //
                // { name: "Big Frog",
                //   url:  "big-frog"  },
                //
                // { name: "Denny's",
                //   url:  "dennys"  },
                //
                // { name: "Doc Popcorn",
                //   url:  "doc-popcorn"  },
                //
                // { name: "Maaco",
                //   url:  "maaco"  },
                //
                // { name: "Golden Corral",
                //   url:  "golden-corral"  },
                //
                // { name: "Grease Monkey",
                //   url:  "grease-monkey"  },
                //
                // { name: "Hooters",
                //   url:  "hooters"  },
                //
                // { name: "Huddle House",
                //   url:  "huddle-house"  },
                //
                // { name: "Hungry Howie's",
                //   url:  "hungry-howies"  },
                //
                // { name: "J.D. Byrider",
                //   url:  "jd-byrider"  },
                //
                // { name: "Marco's Pizza",
                //   url:  "marcos-pizza"  },
                //
                // { name: "Merry Maids",
                //   url:  "merry-maids"  },
                //
                // { name: "Miracle-Ear",
                //   url:  "miracle-ear"  },
                //
                // { name: "Molly Maid",
                //   url:  "molly-maid"  },
                //
                // { name: "Nothing Bundt",
                //   url:  "nothing-bundt"  },
                //
                // { name: "Painting with a Twist",
                //   url:  "painting-with-a-twist"  },
                //
                // { name: "Pinot's Palette",
                //   url:  "pinots-palette"  },
                //
                // { name: "Pita Pit",
                //   url:  "pita-pit"  },
                //
                // { name: "Pizza Factory",
                //   url:  "pizza-factory"  },
                //
                // { name: "Pizza Ranch",
                //   url:  "pizza-ranch"  },
                //
                // { name: "Planet Fitness",
                //   url:  "planet-fitness"  },
                //
                // { name: "Schlotzsky's",
                //   url:  "schlotzskys"  },
                //
                // { name: "School of Rock",
                //   url:  "school-of-rock"  },
                //
                // { name: "Sky Zone",
                //   url:  "sky-zone"  },
                //
                // { name: "Sonic",
                //   url:  "sonic"  },
                //
                // { name: "Subway",
                //   url:  "subway"  },
                //
                // { name: "TGI Fridays",
                //   url:  "tgi-fridays"  },
                //
                // { name: "Haagen-Dazs",
                //   url:  "haagen-dazs"  },

             ];

$(document).ready(function(){

  $.each( networks, function( i, network ) {
    $('.network-list').append("<li class='tile-list-tile'><a href='network--"+ network.url +".html'>⭐️ &nbsp;"+ network.name +"</a></li>");
    console.log('http://www.davidpots.com/ifa/' + 'network--' + network.url);
  });

});
