
        
var about ={
    contact: [{
        phone: "800-555-1212",
        email: "webstore@gmail.com",
        address: '1234 WebStore Drive, CA 92122',
        image:    "store1.jpg"
    }],
    team: [{
        name: "Ronny",
        email: "ronny@gmail.com",
        image: "ronny.jpg"
    },
    {   
        name: "Saleem",
        email: "saleem@gmail.com",
        image: "saleem.jpg"

    }

    ]

}




        var products ={

            book: [
            {
                name:"HTML & CSS : Design and Build Websites 1st Edition by Jon Duckett ",
                category: "JavaScript",
                price: 44.94,
                image: "book1.jpg",
                Selling_points: [
                 "5 stars by buyers",
                "on sale",
                "website access",
                "Easy to read"]
            },

            {
                name:"JAVASCRIPT & JQUERY : Interactive Front-End Web Development 1st Edition by Jon Duckett",
                category: "JavaScript",
                price: 46.99,
                image: "book2.jpg",
                Selling_points: [
                 "5 stars by buyers",
                "on sale",
                "website access",
                "Easy to read"]

            }],
            music: [
            {
                name:"Ptricia Kaas - Rien Ne S'Arrete  ",
                category: "French Jazz",
                price: 14.98,
                image: "music1.jpg",
                Selling_points: [
                 "5 stars by buyers",
                "on sale",
                "Online music access",
                "Easy to listen"]


            },

            {
                name:"Patricia Kaas - Mademoiselle Chante Import  ",
                category: "French Jazz",
                price: 16.97,
                image: "music2.jpg",
                Selling_points: [
                 "5 stars by buyers",
                "on sale",
                "Online music access",
                "Easy to listen"]
            }
            ]

        }
/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 2/11/16
 * Time: 6:16 PM
 * Content:
 */

//  TODO: this is the code I wrote (Ronny).

var windowHeight = $(window).height() - ($('header').height() + $('footer').height());
$('#mainNav a').on('click',function() {
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

$('#prod').on('click',function(){
    var html = "<ul>";

console.log("you click me");

for(var prop in products){
    for(var i=0; i < prop.length; i++){
        

        for(var key in products[prop][i]){
            // console.log(key);

            if (key==="image"){

                // console.log(key);

                html += "<li><img src='" + products[prop][i][key] + "'width='200' height='250'><ul><li>ADD</li><li>INFO</li></ul></li>";
            }
                        
        }
    }
    // if(prop === "image"){
    //     html += "<li><img href='" + obj["prop"] + "'><ul><li>ADD</li><li>INFO</li></ul></li>";

    // }
}

html += "</ul>";

$('#products').html(html);

});


//********************************************************************


$('#about').on('click',function(){
    var html = "<ul>";

console.log("you click me");

for(var prop in about){
    for(var i=0; i < prop.length; i++){
        

        for(var key in about[prop][i]){
            // console.log(key);

            if (key==="image"){

                // console.log(key);

                html += "<li><img src='" + about[prop][i][key] + "'width='200' height='250'><ul><li>ADD</li><li>INFO</li></ul></li>";
            }
                        
        }
    }
    // if(prop === "image"){
    //     html += "<li><img href='" + obj["prop"] + "'><ul><li>ADD</li><li>INFO</li></ul></li>";

    // }
}

html += "</ul>";

$('#about').html(html);

});



