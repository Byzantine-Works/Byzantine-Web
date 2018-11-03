<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicons.png">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>Byzantine | The Digital Asset Solution Provider</title>
  </head>
  <body class="light_version">
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->    
<script src="%PUBLIC_URL%/jquery-1.11.3.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
 <!-- TradingView Widget BEGIN -->

<script>

  $(function() {
    $("#contact .fr1").click(function() {
        var frstname = $("#first_name").val();
        var lastname = $("#last_name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var text = $("#msg_text").val();
        var dataString = 'FirstName='+ frstname + '&LastName=' + lastname + '&email=' + email + '&phone=' + phone + '&text=' + text;

        $.ajax({
            type: "POST",
            url: "send.php",
            data: dataString,
            success: function(){
            $('.success').fadeIn(1000);
            }
        });

        return false;
    });
});


  $(document).ready(function(){

    $("a.scrol").on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      console.log(target);
      $('.mdl-layout__inner-container').animate({
        scrollTop: ($(target).offset().top)
      }, 2000);
    });

  $(".trading_center .lefts table tr td.minus").click(function(event){
      event.preventDefault();
      var amount = $(this).html();
      document.getElementById('box_three').value = amount;
  });

  $(".trading_center .lefts table tr td.plus").click(function(event){
      event.preventDefault();
      var amount = $(this).html();
      document.getElementById('box_one').value = amount;
  });


    $('#box_two').on('keyup',function () {
          var myBox1 = document.getElementById('box_one').value; 
          var myBox2 = document.getElementById('box_two').value;
          var myResult = myBox1 * myBox2;
          document.getElementById('result_one').value = myResult;
  });
    $('#box_four').on('keyup',function () {
          var myBox1s = document.getElementById('box_three').value; 
          var myBox2s = document.getElementById('box_four').value;
          var myResults = myBox1s * myBox2s;
          document.getElementById('result_two').value = myResults;
  });



    $( function() {
      $( "#tabs" ).tabs();
    });
    $('.basic').select2();
    $('.pms_field input').on('keyup',function () {
        if ($(this).val().length>0) {
          
            $(this).addClass('active-text');
        } else {
            $(this).removeClass('active-text');
        }
    });
  
});

  $(document).ready(function(){

$(".light_v").click(function(event){
    event.preventDefault();
    $(this).removeClass('light_v');
    $('body').removeClass('light_version');
    $(this).addClass('drk_v');
});


$(".trading_head .trading .lefts p.ist").click(function(event){
    event.preventDefault();
    $(this).hide();
    $('.open_detail ').slideDown();
    $('.ind').show();
});

$(".trading_head .trading .lefts p.ind").click(function(event){
    event.preventDefault();
    $(this).hide();
    $('.open_detail ').slideUp();
    $('.ist').show();
});


});



</script>

  </body>
</html>