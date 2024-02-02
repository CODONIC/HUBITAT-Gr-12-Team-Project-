window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint ){
            reveals[i].classList.add('Active');
            
        }
    }
}


const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('focus', function() {
    this.classList.remove('blurred');
  });
  card.addEventListener('mouseover', function() {
    this.classList.remove('blurred');
  });

  card.addEventListener('blur', function() {
    this.classList.add('blurred');
  });
  card.addEventListener('mouseout', function() {
    this.classList.add('blurred');
  });
});


window.addEventListener('DOMContentLoaded', () => {
  let intro = document.querySelector('.intro');
  let logoSpan = document.querySelectorAll('.logo-parts');

  // Function to change the background image
  function changeBackgroundImage() {
    // Replace image URLs in the array with your own images
    let backgroundImageUrls = [
      'https://webneel.com/daily/sites/default/files/images/daily/02-2013/10-best-wildlife-photography.jpg',
      'https://ipt.imgix.net/203023/x/0/leonardopapera-wildlifephotographytips4.jpg',
      'https://i.dailymail.co.uk/i/pix/2013/07/30/article-2381310-1B0FE592000005DC-365_1024x615_large.jpg',
      'http://thewowstyle.com/wp-content/uploads/2015/01/18-best-wildlife-photography.jpg',
      'https://mymodernmet.com/wp/wp-content/uploads/2019/09/%C2%A9-Peter-Haygarth-Wildlife-Photographer-of-the-Year.jpg',
      'http://webneel.com/daily/sites/default/files/images/daily/05-2018/wildlife-photography-bear-by-arankadelina.jpg',
      'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2016/07/nature-photogaphy-close-fox.png',
      'http://static1.squarespace.com/static/5499bab1e4b03a78322bbc79/t/56d4a62b20c6470d703c2bf3/1456776753581/?format=1000w',
      'https://www.treehugger.com/thmb/8PGRHL4KT4rs8eZT7MipPARM_V8=/1280x852/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2020__02___Martin_Buzora_-_Wildlife_Photographer_of_the_Year_-_Highly_Commended-b831270b283540a687c8a76a0217ffe0.jpg'
    ];

    // Get a random index from the array
    let randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);

    // Set the background image
    intro.style.backgroundImage = `url('${backgroundImageUrls[randomIndex]}')`;
  }

  setTimeout(() => {
    logoSpan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (index + 1) * 100);
    });

    setTimeout(() => {
      logoSpan.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (span + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = '-100vh';
    }, 2300);

    // Call the function to change the background image
    changeBackgroundImage();
  });
});
