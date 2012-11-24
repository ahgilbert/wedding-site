function alterElementWithArray(elementId, array){
    // array contains a src and a title text
    $(elementId).attr("src", array[0]);
    $(elementId).attr("title", array[1]);
}

function alterElementWithRandomArrayElement(elementId, array){
    var newContents = array[Math.floor(Math.random() * array.length)];
    alterElementWithArray(elementId, newContents);
}