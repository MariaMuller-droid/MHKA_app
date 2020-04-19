// algemene stuff
let menuHamburger = document.querySelector(".hamburger");
let menuitems = document.querySelectorAll(".menuitem");
let navigatie = document.querySelector("nav");
let ii;
function menuFunction(){
      console.log(menuitems)
      ii=0;
      navigatie.classList.toggle("menu")
      while(ii<menuitems.length){
      menuitems[ii].classList.toggle("onzichtbaar");
      ii++;
      }
}

menuHamburger.addEventListener("click", menuFunction)

// init Isotope
let iso = new Isotope( '.grid', {
  itemSelector: '.element-item',
  layoutMode: 'fitRows', // bekijken in documentatie
  getSortData: {
    name: '.name', // => name sorteert op de classe name
    symbol: '.symbol'
  }
});

// homepage deel niet tonen
let mijnSecties = document.querySelectorAll("section")
let iii;

    iii=0;
    while(iii<mijnSecties.length){
    if (mijnSecties[iii].classList.contains("tip")) {
          mijnSecties.classList.add("onzichtbaar");
    }
    iii++
    }

// filter functions
var filterFns = {
ium: function( itemElem ) {
    var name = itemElem.querySelector('.name').textContent;
    return name.match( /ium$/ );
  }
};
// bind filter button click
let filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}
