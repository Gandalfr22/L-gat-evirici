const encodeMapping = {
    a:'e',
    b:'z',
    c:'v',
    ç:'y',
    d:'p',
    e:'a',
    f:'j',
    g:'k',
    ğ:'l',
    h:'r',
    i:'ö',
    ı:'o',
    j:'f',
    k:'g',
    l:'ğ',
    m:'c',
    n:'ç',
    o:'u',
    ö:'ü',
    p:'b',
    r:'d',
    s:'m',
    ş:'n',
    t:'h',
    u:'ı',
    ü:'i',
    v:'s',
    y:'ş',
    z:'t'
}

const decodeMapping = Object.fromEntries(Object.entries(encodeMapping).map(ent => ent.reverse()))
const changeCoding = (text, mapping) => {
    const capitals = Array.from(text).map(l => l.toLocaleUpperCase('TR') === l);
    const lowerText = text.toLocaleLowerCase('TR');
    const lowerEncoded = Array.from(lowerText).map(l => mapping[l] || l);
    const encodedResult = capitals.map((elm, index) => elm === false ? lowerEncoded[index] : lowerEncoded[index].toLocaleUpperCase('TR'));
    return encodedResult.join("");
};


const encode = (text) => changeCoding(text, encodeMapping)
const decode = (text) => changeCoding(text, decodeMapping)

document.getElementById("encode").addEventListener("click", cevir = () => {
    var input = document.getElementById("inputText").value
    
    document.getElementById("outputText").innerText = decode(input);
    

});



document.getElementById("decode").addEventListener("click",coz = () => {
    var input = document.getElementById("inputText").value

    document.getElementById("outputText").innerText = encode(input);
 
});




function bgyTURKCEcevir() {
    var original = document.getElementById("sifrelenmisKufur1").value;
    const encoded = encode(original);
    document.getElementById("turkceKufurAlani").value = encoded;
}

function turkceBGYcevir() {
    var orig = document.getElementById("kufurAlani").value;
    const decoded = decode(orig);
    document.getElementById("sifrelenmisKufur").value = decoded;
}