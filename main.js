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


// $('#example').click(function() {
//   $('#category-4').show();
//   $('#category-5').show();
//   $('#category-6').show();

//   $('#category-1').hide();
//   $('#category-2').hide();
//   $('#category-3').hide();
// });
/*
$('document').ready(function() {
  $('#example').click(function() {
    //$(`#category-${categorys[i]}`).show();
    //$('#category-${cat}`).hide();
    
    const categorys = ['Flower', 'Edible', 'Concentrates', 'Cartridges', 'Topical', 'Pre-Rolls'];

    for (let i = 0; i < categorys.length; i++) {
      if (categorys[i] > categorys.length) {
        i = 0;
      } else {
       
        $(`category-${categorys[i]}`).slideToggle("slow", function() {
          // Animation complete.
          });
        console.log(categorys[i]);


      }
      }
    });

});
*/


$(document).ready(function() {
  const categories = ['1', '2', '3', '4', '5', '6'];
  let currentCategory = 0;

  $('#example').click(function() {
    const nextCategory = (currentCategory + 1); 

    $(`#category-${categories[currentCategory]}`).hide();
    $(`#category-${categories[nextCategory]}`).show();

    currentCategory = nextCategory;
  });
});


$('.test-button').click()

$(document).ready(function() {
  const categories = ['1', '2', '3', '4', '5', '6'];
  let currentCategory = 0;

  $('#example').click(function() {
    const nextCategory = (currentCategory + 3) % categories.length;
    const prevCategory = (currentCategory - 1 + categories.length) % categories.length;
    const nextNextCategory = (currentCategory + 4) % categories.length;

    $(`#category-${categories[prevCategory]}`).hide();
    $(`#category-${categories[currentCategory]}`).hide();
    $(`#category-${categories[nextCategory]}`).show();
    //$(`#category-${categories[nextNextCategory]}`).show();

    currentCategory = nextCategory;
  });
});
