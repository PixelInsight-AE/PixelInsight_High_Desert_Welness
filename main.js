/**
 * Handy extension! Works like this to color code..
 * TODO (orange)
 * ? (blue) Question / Help me out partner.
 * ! (red) Warning / We should not forget this.
 * regular green for miscellaneous comments.
 * 
 * Extension : Name: Better Comments
    Id: aaron-bond.better-comments
    Description: Improve your code commenting by annotating with alert, informational, TODOs, and more!
    Version: 3.0.2
    Publisher: Aaron Bond
    VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
 */

function log() {
  console.log('hello world')
}

log();




// When the user scrolls the page, execute myFunction
window.addEventListener('scroll', function() {

  // Get the logo-small element
  const element = document.getElementById('logo-small');

  // Get the position of the logo-small element
  const position = element.getBoundingClientRect().top;

  // Get the height of the window
  const windowHeight = window.innerHeight;

  // If the logo-small element is in the window, add the visible class
  if (position < windowHeight) {
    element.classList.add('visible');
  }

  // If the logo-small element is not in the window, remove the visible class
  if (position > windowHeight) {
    element.classList.remove('visible');
    //element.style.opacity = 1;
  }
});


$('#category-4').hide();
$('#category-5').hide();
$('#category-6').hide();


var intervalId = null; // needed a check for each click


$(function(){
  var carousel = $('.carousel ul');
  var carouselChild = carousel.find('li');
  var clickCount = 0;
  var canClick = true;

  //itemWidth = carousel.find('li:first').width()+1; //Including margin
  itemWidth = 350;
  console.log(`itemWidth: ${itemWidth}`)

  //Set Carousel width so it won't wrap
  carousel.width(itemWidth*carouselChild.length);

  //Place the child elements to their original locations.
  refreshChildPosition();

  //Set the event handlers for buttons.
  $('.btnNext').click(function(){
    clearInterval(intervalId); // Clear the interval
    intervalId = setInterval(function() {
      $('.btnNext').click();
    }, 3500);

    if(canClick){
      canClick = false;
      clickCount++;

      //Animate the slider to left as item width 
      carousel.stop(false, true).animate({
          left : '-='+itemWidth
      },1000, function(){
          //Find the first item and append it as the last item.
          lastItem = carousel.find('li:first');
          lastItem.remove().appendTo(carousel);
          lastItem.css('left', ((carouselChild.length-1)*(itemWidth))+(clickCount*itemWidth));
          canClick = true;
      });
    }
  });
  let intervalId;
  $('.category').hover(function() {
    console.log("hovered");
    clearInterval(intervalId);
  
  });

  $('.btnPrevious').click(function(){
    clearInterval(intervalId); // Clear the interval
    intervalId = setInterval(function() {
      $('.btnPrevious').click();
    }, 3500);
   
    



    if(canClick){
      canClick = false;
      clickCount--;
      //Find the first item and append it as the last item.
      lastItem = carousel.find('li:last');
      lastItem.remove().prependTo(carousel);

      lastItem.css('left', itemWidth*clickCount);             
      //Animate the slider to right as item width 
      carousel.finish(true).animate({
          left: '+='+itemWidth
      },1000, function(){
          canClick = true;
      });
    }
  });

  function refreshChildPosition(){
    carouselChild.each(function(){
      $(this).css('left', itemWidth*carouselChild.index($(this)));
    });
  }
});



