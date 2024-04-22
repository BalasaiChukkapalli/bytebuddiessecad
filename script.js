function showInfo(menu) {
    let info = ""; // Default info
  
    // Determine info based on menu clicked
    switch (menu) {
      case 'MAIN':
        info = "This is the main page.";
        break;
      case 'ABOUT':
        info = "Learn more about us.";
        break;
      case 'SERVICE':
        info = "Explore our services.";
        break;
      case 'CONTACT':
        info = "Get in touch with us.";
        break;
      default:
        info = "No information available.";
    }
  
    // Display popup with info
    alert(info);
  }

  function redirectToSignUp() {
    window.location.href = "signup.html"; // Change to the actual URL of your sign-up page
  }
  
  function redirectToSignIn() {
    window.location.href = "signin.html"; // Change to the actual URL of your sign-in page
  }
  

  
  function isMobileDevice() {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileDevices = [
        /android/i,
        /webos/i,
        /iphone/i,
        /ipad/i,
        /ipod/i,
        /blackberry/i,
        /windows phone/i
      ];
    
      return mobileDevices.some(device => userAgent.match(device));
  }
  
  if (isMobileDevice()) {
      // Hide content for mobile devices
      document.querySelector('.container').style.display = 'none';
    
      // Create and append message element
      const messageContainer = document.createElement('div');
      messageContainer.classList.add('message');
    
      const messageHeading = document.createElement('h1');
      messageHeading.textContent = 'This website is not viewable on mobile devices';
    
      const messageText = document.createElement('p');
      messageText.textContent = 'Please view this website on a device with a screen resolution of 768px or higher.';
    
      messageContainer.appendChild(messageHeading);
      messageContainer.appendChild(messageText);
    
      document.querySelector('.mobile-message-container').appendChild(messageContainer);
  } else {
      // Show content for non-mobile devices
      document.querySelector('.container').style.display = 'flex';
  }
  