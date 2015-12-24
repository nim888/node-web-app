var fs = require('fs');

var css = fs.readFileSync(__dirname + '/style.px.css', 'utf8');
css = css.replace(/(\d+)px/g, function (mh) {
    return parseInt(mh) / 40 + 'rem';
});

console.log(css);
fs.writeFileSync(__dirname + '/style.css', css);



