/*
Description:
    In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically,
    with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.

    Example
    "ZpglnRxqenU" -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr," +
    "Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"
    Technical Details
    The string will include only letters.
        The first letter of each sequence is uppercase followed by n-1 lowercase.
        Each sequence is separated with a comma.
        Return value needs to be a string.
        */
function alphaSeq (str) {
    return str.toLowerCase().split('').sort().map(str => {
        const position = str.charCodeAt(0) - 96;
        return str.toUpperCase() + str.repeat(position - 1);
    }).join(',');
}
/*
Sample Tests:

const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("alphaSeq",function() {
    it("Basic tests",function() {
        assert.strictEqual(alphaSeq("ZpglnRxqenU"), "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz");
        assert.strictEqual(alphaSeq("NyffsGeyylB"), "Bb,Eeeee,Ffffff,Ffffff,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Sssssssssssssssssss,Yyyyyyyyyyyyyyyyyyyyyyyyy,Yyyyyyyyyyyyyyyyyyyyyyyyy,Yyyyyyyyyyyyyyyyyyyyyyyyy");
        assert.strictEqual(alphaSeq("MjtkuBovqrU"), "Bb,Jjjjjjjjjj,Kkkkkkkkkkk,Mmmmmmmmmmmmm,Ooooooooooooooo,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Tttttttttttttttttttt,Uuuuuuuuuuuuuuuuuuuuu,Uuuuuuuuuuuuuuuuuuuuu,Vvvvvvvvvvvvvvvvvvvvvv");
        assert.strictEqual(alphaSeq("EvidjUnokmM"), "Dddd,Eeeee,Iiiiiiiii,Jjjjjjjjjj,Kkkkkkkkkkk,Mmmmmmmmmmmmm,Mmmmmmmmmmmmm,Nnnnnnnnnnnnnn,Ooooooooooooooo,Uuuuuuuuuuuuuuuuuuuuu,Vvvvvvvvvvvvvvvvvvvvvv");
        assert.strictEqual(alphaSeq("HbideVbxncC"), "Bb,Bb,Ccc,Ccc,Dddd,Eeeee,Hhhhhhhh,Iiiiiiiii,Nnnnnnnnnnnnnn,Vvvvvvvvvvvvvvvvvvvvvv,Xxxxxxxxxxxxxxxxxxxxxxxx");
    });
});*/
