var resSel = '#nofeshApp > div.searchDealsPage.page > section.filterSearchSection > div > ul > section > h3'

var resEl = document.querySelectorAll(resSel);
var resVal = resEl[0].innerHTML;
var searchBtn = document.getElementById('searchButton');

searchBtn.click();

var interval = setInterval(()=>{
    resEl = document.querySelectorAll(resSel);

    if( resEl[0] == undefined ) {
        clearInterval(interval)
    }
    else {
        searchBtn.click();
    }
}, 1000)
