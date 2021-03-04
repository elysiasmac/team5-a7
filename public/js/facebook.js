function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      console.log('Successfully logged in with Facebook');
      // logged into your app and Facebook. Get name and picture.
      FB.api('/me?fields=name, first_name, picture.width(480)', changeUser);
    }
  }
  
  function changeUser(response) {
    console.log("test successful");
    // Add code to change name and image.
    $('p.facebookLogin').hide();
    $('#name').text(response.name);
    $('#photo').attr('src', response.picture.data.url);
  }