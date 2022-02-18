$( "button" ).click(function() {
    $( "div" )
    .animate({ left:"+=250px" }, 2000 )
     .queue(function() {
        $( this ).toggleClass( "new" ).dequeue();
      })
  .animate({ left:"-=250px" }, 2000 );
  });
  