
var books = [

        {
            name: "HTML & CSS : Design and Build Websites 1st Edition by Jon Duckett ",
            category: "JavaScript",
            price: 44.94,
            picture: "/Users/saleem/Desktop/hack/webstorehackthon/book1.jpg",
            Selling_points: {
                ratings: "5 stars by buyers",
                value: "on sale",
                extras: "website access",
                print: "Easy to read"
            }
        },

            {
                name: "JAVASCRIPT & JQUERY : Interactive Front-End Web Development 1st Edition by Jon Duckett",
                category: "JavaScript",
                price: 46.94,
                picture: "/Users/saleem/Desktop/hack/webstorehackthon/book1.jpg",
                Selling_points: {
                    ratings: "4 stars by buyers",
                    value: "on sale",
                    extras: "website access",
                    print: "Easy to read"
                }
            }
        ]



        var music = [

            {
                name: "Patricia Kaas - Rien Ne S'Arrete ",
                category: "French Jazz",
                price: 17.99,
                picture: "/Users/saleem/Desktop/hack/webstorehackthon/music1.jpg",
                Selling_points: {
                    ratings: "5 stars by buyers",
                    value: "on sale",
                    extras: "online access",
                    sound: "Stereo sound"
                }
            },

            {
                name: "Patricia Kaas - Mademoiselle Chante Import ",
                category: "French Jazz",
                price: 12.95,
                picture: "/Users/saleem/Desktop/hack/webstorehackthon/music2.jpg",
                Selling_points: {
                    ratings: "5 stars by buyers",
                    value: "on sale",
                    extras: "online access",
                    sound: "Stereo sound"
                }
            }
            
        ]

/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 2/11/16
 * Time: 6:16 PM
 * Content:
 */

//  TODO: this is the code I wrote (Ronny).
var windowHeight = $(window).height() - ($('header').height() + $('footer').height());
$('#mainNav a').click(function() {
    if($(this).parent().hasClass("active")) {
        $("#mainNav a").parent().removeClass("active");
        $("#mainSection").slideUp(1000);
        $("#productNav").slideUp(1000);
    } else {
        $("#mainNav a").parent().removeClass("active");
        $(this).parent().addClass("active");
        $("#mainSection").slideDown(1000, function() {
            $(this).height(windowHeight);
        });
        $("#productNav").slideDown(1000, function() {
            $(this).height("75px");
        });
    }
});

var html = "<ul>";

for(var prop in obj){
    if(prop === "image"){
        html += "<li><img href='" + obj["prop"] + "'><ul><li>ADD</li><li>INFO</li></ul></li>";
    }
}
html += "<ul>";

$('#products').append( html );

       
