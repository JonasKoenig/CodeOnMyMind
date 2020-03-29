let inputElem  = document.getElementById("textInput");
let outputElem = document.getElementById("binOutput");

inputElem.oninput = a => print(stringToBinary(inputElem.innerHTML));

print = output => outputElem.innerHTML = output;

/**
 * Function that converts a string into its binary representation
 *
 * @see https://gist.github.com/eyecatchup/6742657
 * @author https://github.com/eyecatchup
 */
function stringToBinary(str, spaceSeparatedOctets) {
    function zeroPad(num) {
        return "00000000".slice(String(num).length) + num;
    }

    return str.replace(/[\s\S]/g, function(str) {
        str = zeroPad(str.charCodeAt().toString(2));
        return !1 == spaceSeparatedOctets ? str : str + " "
    });
};
