const fs = require('fs');
const ejsPath = 'views/index.ejs';
const jsPath1 = 'public/_next/static/chunks/0osi1phjb3d8q.js';
const jsPath2 = 'public/_next/static/chunks/2hu9lrp6zaxsi.js';

const dynamicDateJS = `(function(){const d=new Date();const n=d.getDate();return n+(n>0?['th','st','nd','rd'][(n>3&&n<21)||n%10>3?0:n%10]:'')+' '+d.toLocaleString('en-GB',{month:'long'});})()`;

// Update EJS
let ejsContent = fs.readFileSync(ejsPath, 'utf8');
ejsContent = ejsContent.replace(/IIMB UGAT RC – 8th October/g, 'IIMB UGAT RC – <%= ' + dynamicDateJS + ' %>');
fs.writeFileSync(ejsPath, ejsContent);

// Update JS chunks
const jsReplacement = `"IIMB UGAT RC – " + ` + dynamicDateJS;

let js1 = fs.readFileSync(jsPath1, 'utf8');
js1 = js1.replace(/"IIMB UGAT RC – 8th October"/g, jsReplacement);
fs.writeFileSync(jsPath1, js1);

let js2 = fs.readFileSync(jsPath2, 'utf8');
js2 = js2.replace(/"IIMB UGAT RC – 8th October"/g, jsReplacement);
fs.writeFileSync(jsPath2, js2);

console.log('Replaced successfully');
