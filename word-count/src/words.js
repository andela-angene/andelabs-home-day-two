'use strict'

const words = function words(sentence){

    //check if a string was passed in
    if (typeof sentence !== 'string') return null;

    //Add individual words to a list
    const wordLs = sentence.split(/\s+|\\n|\\t/);
    var counts = {};
    for (var i = 0; i < wordLs.length; i++){

        //Check if the 'counts' object contains the word. If true, increment the value else set the value to 1
        counts.hasOwnProperty(wordLs[i]) ? counts[wordLs[i]]++ : counts[wordLs[i]] = 1;
    }
    return counts;
}

module.exports = words;