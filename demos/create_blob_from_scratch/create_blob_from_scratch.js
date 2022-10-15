const crypto = require('crypto')
const zlib = require('zlib')

async function main() {

    let content = `1. Last Last - Burna Boy\n2. What What - Samwell\n3. Bohemian Rhapsody - Queen\n`
    let bytesize = Buffer.byteLength(content, "utf-8"); // get byte length of content
    let header = `blob ${bytesize}\0`
    
    store = header + content
    
    let shasum = crypto.createHash('sha1')
    shasum.update(store)
    let sha1Hash = shasum.digest('hex')
    
    console.log(`sha1Hash: ${sha1Hash}`)
    
    let compressedContent = zlib.deflateSync(store);
    
    console.log(`compressedContent: ${compressedContent}`)
    
    let first2CharsOfHash = sha1Hash.substring(0, 2);
    let last38CharsOfHash = sha1Hash.substring(2);
    
    console.log('first2CharsOfHash:', first2CharsOfHash)
    console.log('last38CharsOfHash:', last38CharsOfHash)

    /*
        const path = require('path');
        let dir = path.join(__dirname, 'test', '.git', 'objects', checksum);
        console.log('dir', dir)
        const fs = require('fs');
        if (!fs.existsSync(dir)) fs.mkdirSync(dir);
        fs.writeFileSync(path.join(dir, hash), compressedContent, { flag: "wx" });
    */

    // To take this experiment further, you can copy
    // this generated object into your database and
    // test the following commands on the hash
    // in your project...
    // git cat-file -p <HASH>
    // ie: git cat-file -p bd9dbf5aae1a3862dd1526723246b20206e5fc37

}

main()