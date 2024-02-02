window.addEventListener("online", onFunction);
    window.addEventListener("offline", offFunction);

    function onFunction() {
      showText("Your browser is working online.");
    }

    function offFunction() {
      showText("Your browser is working offline.");
    }

    function showText(message) {
      alert(message);

      // Close the alert after 5 seconds
      setTimeout(function () {
        var alertBox = document.querySelector('.alert');
        if (alertBox) {
          alertBox.style.display = 'none';
        }
      }, 5000);
    }