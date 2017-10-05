/** Script to initialize articles */
const ARTICLES_NUM = 25;

//============= Create articles container =========================
const container = create( "div", { class: 'container' } );

// ============ Initialize randon articles ========================
for ( let i = 0; i < ARTICLES_NUM; i++ ) {
    const article = create( "div", { class: 'article' } );
    const header = create( "div", { class: 'article-header' } );
    const text = create( "div", { class: 'article-text' } );

    header.textContent = faker.lorem.words( 2 );
    text.textContent = faker.lorem.paragraphs( 5 );

    article.appendChild( header );
    article.appendChild( text );

    container.appendChild( article );
}

//============= Append container to body =========================
document.body.appendChild( container );

//============= Helper functions =========================
function create( el, options ) {
    const elem = document.createElement( el );

    for ( var param in options ) {
        attr( elem, param, options[ param ] );
    }

    return elem;
}

function attr( el, attribute, param ) {
    if ( !param ) {
        return el[ attribute ] || el.getAttribute( attribute ) || '';
    } else {
        el.setAttribute( attribute, param );
    }
}