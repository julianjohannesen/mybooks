var GoogleAuth; // Google Auth object.
function initClient() {
  // Initialize js client library
  gapi.client.init({
      // Note: the API key is automatically added to the end of discovery document URLs
      'apiKey': 'AIzaSyCP4wm4HGR-D-IHRvlnlXGBGGSsjhaR9CY',
      // ClientID and scope are both required for Oauth
      'clientId': '38504770633-kkfnu7g5c9jcsrqqi55d6amrl4v398qm.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/books',
      // The API schema
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/books/v1/rest']
  }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });
} 

// Client Secret: YQRwVc9rVyBBK1iYYdvaqUEW 
