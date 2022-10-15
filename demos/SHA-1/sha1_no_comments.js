const utils = require('./utils');

function sha1(text) {
  let h0 = '01100111010001010010001100000001'; let h1 = '11101111110011011010101110001001';
  let h2 = '10011000101110101101110011111110'; let h3 = '00010000001100100101010001110110';
  let h4 = '11000011110100101110000111110000';

  const asciiText = text.split('').map((letter) => utils.charToASCII(letter));
  let binary8bit = asciiText.map((num) => utils.asciiToBinary(num)).map((num) => utils.padZero(num, 8));
  let numString = binary8bit.join('') + '1';
  while (numString.length % 512 !== 448) { numString += '0'; }

  const length = binary8bit.join('').length;
  const binaryLength = utils.asciiToBinary(length);
  const paddedBinLength = utils.padZero(binaryLength, 64);
  numString += paddedBinLength;

  const chunks = utils.stringSplit(numString, 512);
  const words = chunks.map((chunk) => utils.stringSplit(chunk, 32));
  const words80 = words.map((array) => {
    for (let i = 16; i <= 79; i++) {
      const wordA = array[i - 3]; const wordB = array[i - 8];
      const wordC = array[i - 14]; const wordD = array[i - 16];
      const xorA = utils.xOR(wordA, wordB); const xorB = utils.xOR(xorA, wordC); const xorC = utils.xOR(xorB, wordD);
      const leftRotated = utils.leftRotate(xorC, 1);
      array.push(leftRotated);
    }
    return array;
  });

  for (let i = 0; i < words80.length; i++) {
    let a = h0; let b = h1; let c = h2;
    let d = h3; let e = h4;
    for (let j = 0; j < 80; j++) {
      let f; let k;
      if (j < 20) {
        const BandC = utils.and(b, c);
        const notB = utils.and(utils.not(b), d);
        f = utils.or(BandC, notB);
        k = '01011010100000100111100110011001';
      } else if (j < 40) {
        const BxorC = utils.xOR(b, c);
        f = utils.xOR(BxorC, d);
        k = '01101110110110011110101110100001';
      } else if (j < 60) {
        const BandC = utils.and(b, c);
        const BandD = utils.and(b, d);
        const CandD = utils.and(c, d);
        const BandCorBandD = utils.or(BandC, BandD);
        f = utils.or(BandCorBandD, CandD);
        k = '10001111000110111011110011011100';
      } else {
        const BxorC = utils.xOR(b, c);
        f = utils.xOR(BxorC, d);
        k = '11001010011000101100000111010110';
      }
      const word = words80[i][j];
      const tempA = utils.binaryAddition(utils.leftRotate(a, 5), f);
      const tempB = utils.binaryAddition(tempA, e);
      const tempC = utils.binaryAddition(tempB, k);
      let temp = utils.binaryAddition(tempC, word);
      temp = utils.truncate(temp, 32);
      e = d; d = c; c = utils.leftRotate(b, 30);
      b = a; a = temp;
    }

    h0 = utils.truncate(utils.binaryAddition(h0, a), 32); h1 = utils.truncate(utils.binaryAddition(h1, b), 32);
    h2 = utils.truncate(utils.binaryAddition(h2, c), 32); h3 = utils.truncate(utils.binaryAddition(h3, d), 32);
    h4 = utils.truncate(utils.binaryAddition(h4, e), 32);
  }
  return [h0, h1, h2, h3, h4].map((string) => utils.binaryToHex(string)).join('');
}

console.log(sha1('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'))