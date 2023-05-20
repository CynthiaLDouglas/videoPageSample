// https://players.brightcove.net/5298920694001/S1gayyNlug_default/index.min.js
// https://rtr-prod-assets.s3.amazonaws.com/js/currentYear.js
// https://rtr-prod-assets.s3.amazonaws.com/js/modal-manager.js
// https://static.cloudsna.com/store/PROD/js/jquery.countdown.js

var buttonTime = 3733000; //Timer
var htmlLink = "marketingassets.cloudsna.com/prod/common/EET/NextPageLink/1677857723260.html";

if ($('.btn-hidden').css("display") == "inherit") {
  $('.btn-hidden').css("display", "block");
}
//Timer Code
setTimeout(function pause_countdown() {
    $('#runner-event').countdown('2022/11/09 00:00:00', function (event) {

        $(this).html(event.strftime('<div><span>%D</span> day%!D </div>' + '&nbsp;<div>%H hour%!H </div>' + '&nbsp;<div>%M minute%!M  </div>' + '&nbsp;<div>%S second%!S</div>'));
    });
    $('#runner-event').on('finish.countdown', function (event) {
        $(this).html('').parent().addClass('disabled');
    });

}, 200);
//End Timer Code