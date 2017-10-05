//================ A show-case of a sticky function===========

//=========== Uncomment any option to try ===================
const SELECTOR = ".article-header";
// const SELECTOR = document.querySelector( ".article-header" );
// const SELECTOR = document.querySelectorAll( ".article-header" );

//============== Get buttons from DOM ======================
const initBtn = document.querySelector( "#init" );
const disableBtn = document.querySelector( "#disable" );

//============== Set event listener to attach "sticky" functions ========
initBtn.addEventListener( "click", sticky( SELECTOR ).initialize );
disableBtn.addEventListener( "click", sticky( SELECTOR ).disable );