//const Node = require('./node.js')
//const Elements = require('./elements.js').Elements

const cache = new WeakMap()

class Element /*extends Node*/{
    constructor(dom,$){
        if(cache.has(dom)){
            return cache.get(dom)
        }
        this.dom = dom
        this._$ = $
        cache.set(dom, this)
    }

    get cheerio(){
        return this._$(this.dom)
    }

    attr(attributeName){ //String
        return this.cheerio.attr(attributeName) || ""
    }

    child(index){ //Element

    }

    children(){ //Elements

    }

    className(){//String
        return this.attr("class") 
    }

    classNames(){//String[]
        return this.className.split(" ")
    }   

    data(){//String

    }

    filter(){

    }
   
    firstElementSibling(){//Element

    }

    getAllElements(){//Elements

    }

    hasAttr(attributeName){//Boolean
        return !!this.attr(attributeName)
    }

    hasClass(className){//Boolean
        return this.classNames.some(v=>v==className)
    }

    hasText(){//Boolean

    }

    html(){//String
        return this.cheerio.html() 
    }

    id(){//String
        return this.attr("id")
    }
    
    lastElementSibling(){//Element

    }

    nextElementSibling(){//Element

    }

    nextElementSiblings(){//Elements

    }

    ownText(){//String
        return this.dom.children
            .filter(node=>node.nodeType==3) // nodeType 3 means Text
            .map(v=>v.data)
            .join("")
    }

    parent(){//Element
        return new Element(this.cheerio.parent().get(0), this._$) 
    }

    parents(){//Elements
        return new Elements(this.cheerio.parents(), this._$) 
    }

    previousElementSibling(){//Element

    }

    previousElementSiblings(){//Elements

    }

    root(){//Element
        return new Element(this._$.root(), this._$)
    }

    select(cssQuery){//Elements
        return new Elements(this.cheerio.find(cssQuery), this._$)
    }

    selectFirst(cssQuery){//Element
        return this.select(cssQuery).first()
    }

    siblingElements(){//Elements

    }

    tagName(){//String
        return this.dom.name
    }

    text(){//String
        return this.cheerio.text() 
    }

    toString(){
        return this.cheerio.toString()
    }

    val(){//String

    }

    wholeText(){//String
        return this.text().replace(/<.+?>/g,"") // correct?
    }
}
exports.Element = Element

class Elements{//extends List
    constructor(cheerio,$){
        this.cheerio = cheerio
        this._$ = $
    }

    attr(attributeKey){//String
        let res = ""
        for(let i=0; i<this.length; i++){
            if(this.get(i).hasAttr(attributeKey)){
                res = this.get(i).getAttr(attributeKey)
                break
            }
        }
        return res
    }

    comments(){//Comment[]?

    }

    eachAttr(attributeKey){//String[]
        return this.toArray()
            .map(elem=>elem.attr(attributeKey))
            .filter(v=>v!="")

    }

    eachText(){//String[]
        return this.toArray().map(elem=>elem.text())
    }

    eq(index){//Elements
        return new Elements(this.cheerio.eq(index), this._$)
    }

    filter(){

    }

    first(){//Element
        return this.get(0)
    }

    get(index){//Element
        return new Element(this.cheerio.get(index), this._$)
    }

    hasAttr(){//Boolean

    }

    hasClass(){//Boolean

    }

    hasText(){//Boolean

    }

    html(){//String
        return this.cheerio.html()
    }

    last(){//Element
        return this.get(this.cheerio.length-1)
    }
    
    get length(){
        return this.size()
    }

    next(){//Elements

    }

    nextAll(){//Elements

    }

    not(query){//Elements

    }

    parents(){//Elements

    }

    prev(){//Elements

    }

    prevAll(){//Elements

    }

    select(cssQuery){//Elements
        return new Elements(this.cheerio.find(cssQuery), this._$)
    }

    selectFirst(cssQuery){//Element
        return this.select(cssQuery).first()
    }

    size(){
        return this.cheerio.length
    }

    text(){//String
        return this.cheerio.text()
    }

    toArray(){//Element[]
        const res = []
        for(let i=0; i<this.length; i++){
            res.push(this.get(i))
        }
        return res
    }

    toString(){//String
        return this.cheerio.toString()
    }

    val(){//String

    }

}
exports.Elements = Elements
