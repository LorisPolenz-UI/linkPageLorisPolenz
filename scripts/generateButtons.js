var elements = [];
elements['GitHub'] = 'https://github.com/LorisPolenz-UI';
elements['Twitter'] = 'https://twitter.com/LorisPolenz';
elements['LinkedIn'] = 'https://www.linkedin.com/in/loris-polenz/';
elements['Traily'] = 'https://www.traily.ch';
checkParameter()
elements['Contact Me'] = 'https://contact.lorispolenz.com';



var parentButtons = document.getElementById('parentButtons');

for (var key in elements) {
    var value = elements[key];
    createContainerForButton(key, value);
}



function generateButton(element) {
    var button = document.createElement('button');
    button.setAttribute('id', `button${element}`);
    button.setAttribute('class', 'button');


    document.getElementById(`id${element}`).appendChild(button);

    document.getElementById(`button${element}`).innerHTML += element;

    
}

function generateUrl(element, url) {
    var a = document.createElement('a');
    a.setAttribute('id', `id${element}`);
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank')
    a.setAttribute('class', 'button');

    document.getElementById(`container${element}`).appendChild(a);

    generateButton(element);
}

function generateCommentToUrls (element) {

    var tooltip = document.createElement('div');
    tooltip.setAttribute('id', `tooltip${element}`);
    tooltip.setAttribute('class', 'tooltip');
    document.getElementById(`container${element}`).appendChild(tooltip);

    var comment = document.createElement('p');
    comment.setAttribute('id', `comment${element}`);
    comment.setAttribute('class', 'tooltipText')

    document.getElementById(`tooltip${element}`).appendChild(comment);


    for (var key in commentsToElements) {
        var value = commentsToElements[key];
        if (key == element) {
            console.log(value);
            document.getElementById(`comment${element}`).innerHTML += value;
        }
    }
}

function createContainerForButton(element, url) {
    var containerButton = document.createElement('div');
    containerButton.setAttribute('id', `container${element}`);
    containerButton.setAttribute('class', 'containerButton');
    parentButtons.appendChild(containerButton);
    generateUrl(element, url);
}


function checkParameter () {
    const params = window.location.search.replace('?', '');
    console.log(params);

    if(params == 'swisscom') {
        elements['Intranet'] = 'https://intranet.swisscom.com/home/profile/CORPROOT%5CTAAPOLO1';
    }
    
}