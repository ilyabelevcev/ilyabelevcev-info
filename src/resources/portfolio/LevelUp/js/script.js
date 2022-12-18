// carousel
$('#js-carousel-wrapper').each(function () {
    var owl = $(this).find('.owl-carousel').owlCarousel({
        // margin: 150,
        responsive: {
            1450: {
                items: 3,
                margin: 100,
            },
            1200: {
                items: 2,
                margin: 150,
            },
            800: {
                items: 2,
                margin: 100,
            },
            480: {
                items: 1,
                margin: 0,
            },
            320: {
                items: 1,
                margin: 0,
            }
        },
    });
    $(this).find('.js-prev').on('click', function () {
      owl.trigger('prev.owl.carousel');
    });
    $(this).find('.js-next').on('click', function () {
      owl.trigger('next.owl.carousel');
    });
  });

// only numbers
$(".tel").keypress(function(event){
    event = event || window.event;
    if (event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
    return false;
});

// timer
function blocktimer(idtimer, timetimes, timesnows, member) {
    var timetimes = timetimes;
    timetimes = timetimes.split(", ");
    var timesnows = timesnows;
    var ts = new Date(timetimes[0], timetimes[1], timetimes[2]);
    if((new Date()) > ts){
    ts = (new Date()).getTime() + timesnows;}
    $(idtimer).countdown({
    timestamp	: ts,
    callback	: function(days, hours, minutes, seconds){
    } }); }
    
    $(document).ready(function () {
    blocktimer('#timer', '2022, 1, 1',  30*60*1000);
});