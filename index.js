const Cheerio = require('cheerio')
const Document = require('./element.js').Document
const Element = require('./element.js').Element
const Elements = require('./element.js').Elements
//const Elements = require('./elements.js').Elements

function CheerSoup(html,option={}){
    option.decodeEntities = option.decodeEntities || false
    const $ = Cheerio.load(html.toString(), option)

//    return new Element($.root()[0], $)
    return new Document($.root()[0], $)
}


CheerSoup.Element = Element
CheerSoup.Elements = Elements

module.exports = CheerSoup
