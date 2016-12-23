
//vaidated the form
//alerts users to errors
//returns true if everyting is right
//false otherwise
function validateForm(){
    var arrival = $('#booking_start_date').val();
    if(arrival=="" || arrival==null){
      alert("Please select an arrival date");
      return false;
    }
    var asDate = new Date(arrival);
    if(asDate<new Date()){
      alert("Arrival date cannot be in the past");
      return false;
    }
    var departure = $('#booking_end_date').val();
    if(departure=="" || departure == null){
      alert("Please select a departure date");
      return false;
    }
    var departureDate = new Date(departure);
    if(departureDate<asDate){
      alert("departure date cannot be before arrival date");
      return false;
    }
    var guests = $('#number-of-guests-box-size').val();
    if(guests==null || guests==""){
      alert("Please select the number of guests");
      return false;
    }
    var category = $('select[name=category] option:selected').val();
    if(category=="default"){
      alert("Please select a category");
      return false;
    }
    //otherwise the form is valid
    return true;
}

$(document).ready(function(){
  //using jQuery UI: https://jqueryui.com/datepicker/
  //adds a datepicker widget to a text input element

/*
  It does this by adding a click handler, to an input text
  When its clicked it draws a div containing a datepicker
  When the datepicker is chsen it will then place the date selcted
  as the value of the input box
*/

   $( "#booking_start_date" ).datepicker({onSelect:function(){
     $('#booking_start_date').change();
   }});
   $( "#booking_end_date" ).datepicker({
     onSelect:function(){
       $('#booking_end_date').change();
     }
   });

   /*
      .hover(fun1, fun2)
      click handlers handle click events, activate when something happens, e.g. a mouseclick

   */

   //When the search button is hovered over
   $("#search-button").hover(function(){
     //animate the search button
     $("#search-button").animate({
        backgroundColor:'#30AC97', //change the background colour to this
     });
   },
    function(){
      $("#search-button").animate({
        backgroundColor:'#50c5b3'
      });
    });


    $('#Snowsports').hover(function(){
        /* When I hover over snowsports*/

        //Make the red background colour, fill the image
        $('#Snowsports .activity-title-bar').animate({
            width:'250px',
            height:'230px',
            top: '-255px'
        });

        //Make the text of the title large, and centre it
        $('#Snowsports .activity-title-bar span').animate({
            top: '100px',
            fontSize: '30px'
        });
    }, function(){
        /* When I hover off snowsports */

        //Put the red title bar back to it's original position
        $('#Snowsports .activity-title-bar').animate({
            width:'100%',
            height:'20px',
            top: '-40px'
        });

        //Put the title text back to the way it was originally
        $('#Snowsports .activity-title-bar span').animate({
            top: '0',
            fontSize: '15px'
        });
    });
    $('#Hiking').hover(function(){
        /* When I hover over snowsports*/

        //Make the red background colour, fill the image
        $('#Hiking .activity-title-bar').animate({
            width:'250px',
            height:'230px',
            top: '-255px'
        });

        //Make the text of the title large, and centre it
        $('#Hiking .activity-title-bar span').animate({
            top: '100px',
            fontSize: '30px'
        });
    }, function(){
        /* When I hover off snowsports */

        //Put the red title bar back to it's original position
        $('#Hiking .activity-title-bar').animate({
            width:'100%',
            height:'20px',
            top: '-40px'
        });

        //Put the title text back to the way it was originally
        $('#Hiking .activity-title-bar span').animate({
            top: '0',
            fontSize: '15px'
        });
    });
    $('#Offroading').hover(function(){
        /* When I hover over snowsports*/

        //Make the red background colour, fill the image
        $('#Offroading .activity-title-bar').animate({
            width:'250px',
            height:'230px',
            top: '-255px'
        });

        //Make the text of the title large, and centre it
        $('#Offroading .activity-title-bar span').animate({
            top: '100px',
            fontSize: '30px'
        });
    }, function(){
        /* When I hover off snowsports */

        //Put the red title bar back to it's original position
        $('#Offroading .activity-title-bar').animate({
            width:'100%',
            height:'20px',
            top: '-40px'
        });

        //Put the title text back to the way it was originally
        $('#Offroading .activity-title-bar span').animate({
            top: '0',
            fontSize: '15px'
        });
    });
    $('#Watersports').hover(function(){
        /* When I hover over snowsports*/

        //Make the red background colour, fill the image
        $('#Watersports .activity-title-bar').animate({
            width:'100%',
            height:'230px',
            top: '-255px'
        });

        //Make the text of the title large, and centre it
        $('#Watersports .activity-title-bar span').animate({
            top: '100px',
            fontSize: '30px'
        });
    }, function(){
        /* When I hover off snowsports */

        //Put the red title bar back to it's original position
        $('#Watersports .activity-title-bar').animate({
            width:'100%',
            height:'20px',
            top: '-40px'
        });

        //Put the title text back to the way it was originally
        $('#Watersports .activity-title-bar span').animate({
            top: '0',
            fontSize: '15px'
        });
    });
    $('#Biking').hover(function(){
        /* When I hover over snowsports*/

        //Make the red background colour, fill the image
        $('#Biking .activity-title-bar').animate({
            width:'250px',
            height:'230px',
            top: '-255px'
        });

        //Make the text of the title large, and centre it
        $('#Biking .activity-title-bar span').animate({
            top: '100px',
            fontSize: '30px'
        });
    }, function(){
        /* When I hover off snowsports */

        //Put the red title bar back to it's original position
        $('#Biking .activity-title-bar').animate({
            width:'100%',
            height:'20px',
            top: '-40px'
        });

        //Put the title text back to the way it was originally
        $('#Biking .activity-title-bar span').animate({
            top: '0',
            fontSize: '15px'
        });
    });


    //get all current prices from the cookies and write them into
    // the reciept table
    var activityPrice = getCookie("activity-price");
    var accommodationPrice = getCookie("accommodation-price");
    var vaccinationPrice = getCookie("vaccination-price");
    var shopPrice = getCookie("shop-price");


    //write them into the table
    // but mae sure they're not null first
    if(activityPrice==null){
      activityPrice=0;
    }
    if(accommodationPrice==null){
      accommodationPrice=0;
    }
    if(vaccinationPrice==null){
      vaccinationPrice=0;
    }
    if(shopPrice==null){
      shopPrice=0;
    }
    //calculate the total price here, because before this the variables might be null
    var totalPrice=parseInt(activityPrice)+parseInt(accommodationPrice)+parseInt(vaccinationPrice)+parseInt(shopPrice);
    //now write them all out
    $('#activity-price').text(activityPrice);
    $('#accommodation-price').text(accommodationPrice);
    $('#vaccination-price').text(vaccinationPrice);
    $('#shop-price').text(shopPrice);
    $('#tPrice').text(totalPrice);


    //hover delete effect for table
    $('tr').hover(function(){
        $(this).find('span').css({'cursor':'pointer','display':'inline', 'color':'red'});
    },
  function(){
        $(this).find('span').css({'display':'none'});
  });

  //if the user deletes activities
    $('#delete-activity').click(function(){
      var oldPrice = $('#activity-price').text();
      //set the table activity price to 0
      $('#activity-price').text("0");
      //remove it from the total
      var oldTotal = $('#tPrice').text();
      var newTotal = parseInt(oldTotal)-parseInt(oldPrice);
      $('#tPrice').text(newTotal);
      //reset the cookie to 0
      setCookie("activity-price","0");
    });
    $('#delete-accommodation').click(function(){
      var oldPrice = $('#accommodation-price').text();
      //set the table accomodation price to 0
      $('#accommodation-price').text("0");
      //remove it from the total
      var oldTotal = $('#tPrice').text();
      var newTotal = parseInt(oldTotal)-parseInt(oldPrice);
      $('#tPrice').text(newTotal);
      //reset the cookie to 0
      setCookie("accommodation-price","0");
    });
    $('#delete-vaccinations').click(function(){
      var oldPrice = $('#vaccination-price').text();
      //set the table vaccinations price to 0
      $('#vaccination-price').text("0");
      //remove it from the total
      var oldTotal = $('#tPrice').text();
      var newTotal = parseInt(oldTotal)-parseInt(oldPrice);
      $('#tPrice').text(newTotal);
      //reset the cookie to 0
      setCookie("vaccination-price","0");
    });
    $('#delete-shop').click(function(){
      var oldPrice = $('#shop-price').text();
      //set the table shop price to 0
      $('#shop-price').text("0");
      //remove it from the total
      var oldTotal = $('#tPrice').text();
      var newTotal = parseInt(oldTotal)-parseInt(oldPrice);
      $('#tPrice').text(newTotal);
      //reset the cookie to 0
      setCookie("shop-price","0");
    });

    /* ======= SLIDER ======*/
    $('#slide-2').click(function(){
      if( $('#slide-2').hasClass("fa-dot-circle-o")){
        //if its currently selected, do nothing
      }
      else{
        //animate the text
        $('#item-1').animate({left:'-150%'});
        $('#item-2').animate({left:'0%'},function(){
          $('#item-1').css({'left':'150%'});
          });
          $('#slide-1').removeClass('fa-dot-circle-o');
          $('#slide-1').addClass('fa-circle-o');
          $('#slide-2').removeClass('fa-circle-o');
          $('#slide-2').addClass('fa-dot-circle-o');
      }


    });


    $('#slide-1').click(function(){
      if( $('#slide-1').hasClass("fa-dot-circle-o")){
        //if its currently selected, do nothing
      }
      else{
        $('#item-2').animate({left:'-150%'});
        $('#item-1').animate({left:'0%'},
          function(){
            $('#item-2').css('left','150%');
          });


          $('#slide-2').removeClass('fa-dot-circle-o');
          $('#slide-2').addClass('fa-circle-o');
          $('#slide-1').removeClass('fa-circle-o');
          $('#slide-1').addClass('fa-dot-circle-o');
      }
      });



      //category
      $('select[name=category]').change(function(){
        var newVal = $('select[name=category] option:selected').val();

        if(newVal!="default"){
          setCookie('category',newVal);
        }
      });




});
