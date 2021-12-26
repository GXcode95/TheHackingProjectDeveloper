function rot13(str,shift=13) {
  const alphabet = 26

  str = str.split('').map(c => {
    c =  c.charCodeAt(0)
    if (c > 122 || c < 65 || (c > 90 && c < 97)) return String.fromCharCode(c)
    
    let max, min;
    if (c >= 65 && c <= 90) max = 90, min=65;
    if (c >= 97 && c <= 122 ) max = 122, min =97;
    c += shift 
    if (c > max) c -= alphabet 
    if (c < min) c += alphabet 

    return String.fromCharCode(c)
  }).join('')

  console.log(str)
  return str;
}

rot13("Go ! Eagles GO !", -13);
rot13("Tb ! Rntyrf TB !")