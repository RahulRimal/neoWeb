

function showBody(clickedIcon) {

    console.log(clickedIcon);

    let articleBody = clickedIcon.parentNode.nextElementSibling;

    if( articleBody.classList.contains('hide-it'))
    {
        articleBody.classList.remove('hide-it')
    articleBody.classList.add('show-it');
    clickedIcon.classList.remove('fa-plus')
    clickedIcon.classList.add('fa-minus')
    }
    else
    {
        articleBody.classList.remove('show-it')
    articleBody.classList.add('hide-it')
    clickedIcon.classList.remove('fa-minus')
    clickedIcon.classList.add('fa-plus')
    }




}