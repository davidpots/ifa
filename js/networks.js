var networks = [
                { name: "Ben and Jerry's",
                  url:  "ben-and-jerrys"  },

                { name: "Buffalo Wings and Rings",
                  url:  "buffalo-wings-and-rings"  },

                { name: "Burn Boot Camp",
                  url:  "burn-boot-camp"  },

                { name: "CertaPro Painters",
                  url:  "certapro-painters"  },

                // { name: "______",
                //   url:  "______"  },
             ];

$(document).ready(function(){

  $.each( networks, function( i, network ) {
    $('.network-list').append("<li class='tile-list-tile'><a href='network--"+ network.url +".html'>"+ network.name +"</a></li>");
  });

});
