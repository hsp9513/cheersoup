const Cheerio = require('cheerio')
const Element = require('./element.js').Element
const Elements = require('./element.js').Elements
//const Elements = require('./elements.js').Elements

function CheerSoup(html){
    const $ = Cheerio.load(html.toString())

    console.log("CheerSoup")
    console.log(html.toString().substr(0,1000))
    console.log($.toString())
    return new Element($.root()[0], $)
}


CheerSoup.Element = Element
CheerSoup.Elements = Elements

module.exports = CheerSoup
