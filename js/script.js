// Original code from: http://alexapps.net/enlarge-thumbnail-image-mouse-click 
function showImage(smSrc, lgSrc) {
    document.getElementById('mypic-large').src = smSrc;
    showLargeImagePanel();
    unselectAll();
    setTimeout(function() {
        document.getElementById('mypic-large').src = lgSrc;
    }, 1)
}
function showLargeImagePanel() {
    document.getElementById('mypic-large-panel').style.display = 'block';
}
function unselectAll() {
    if(document.selection)
        document.selection.empty();
    if(window.getSelection)
        window.getSelection().removeAllRanges();
}

$(document).ready(function(){  
    $(".mypic").click(function(){
        showImage(this.src, this.src);
    });

    $("#mypic-large-panel").click(function(){
        this.style.display="none";
    });
});