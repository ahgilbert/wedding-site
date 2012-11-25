function alterElementWithArray(elementId, array){
    // array contains a src and a title text
    $(elementId).attr("src", array[0]);
    $(elementId).attr("title", array[1]);
}

function alterElementWithRandomArrayElement(elementId, array){
    console.log(array.length);
    var randomInt = Math.floor(Math.random() * array.length);
    console.log(randomInt);
    var newContents = array[randomInt];
    console.log(newContents[0]);
    console.log(newContents[1]);
    alterElementWithArray(elementId, newContents);
}