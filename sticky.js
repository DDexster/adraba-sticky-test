/**
 * Function that takes css-selector, HTMLElement or NodeList
 * and returns object with 2 function that makes this elements 
 * "sticky"
 * 
 * @param {any} css-selector, HTMLElement, NodeList 
 * @returns object with 2 functions initialize and disable, 
 *          or an error message if attribute is not one is listed above
 */
function sticky( selector ) {

    // set local variable to be NodeList or HTMLElement
    const elements = ( typeof selector === "string" ) ?
        document.querySelectorAll( selector ) :
        selector;

    //boolean to see if it's an HTMLElement
    const isOneElement = elements instanceof HTMLElement;

    // check if "elements" variable is valid
    if ( !NodeList.prototype.isPrototypeOf( elements ) && !isOneElement ) {
        console.log( "ERROR: No HTML elements in selection query" );
        return { error: "ERROR: No HTML elements in selection query" }
    }

    // function that initialize stickyness
    const initialize = () => {
        if ( !isOneElement ) {
            elements.forEach( element => {
                _setSticky( element );
            } );
        } else {
            _setSticky( elements );
        }
    };

    // function that disables stickyness
    const disable = () => {
        if ( !isOneElement ) {
            elements.forEach( element => {
                _unsetStucky( element );
            } );
        } else {
            _unsetStucky( elements );
        }
    };

    return { initialize, disable }
}


//============ Helper functions ==================
function _setSticky( element ) {
    element.style.position = "sticky";
    element.style.zIndex = "999";
    element.style.top = "0";
}

function _unsetStucky( element ) {
    element.style.position = "";
    element.style.zIndex = "";
    element.style.top = "";
}