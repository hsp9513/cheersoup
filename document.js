const Element = require("./element.js")

class Document extends Element{
    constructor(dom,$){
        if(cache.has(dom)){
            return cache.get(dom)
        }
        this.dom = dom
        this._$ = $
        cache.set(dom, this)
    }

    body(){//Element
        return new Element(this.selectFirst("body"), this._$)
    }

    charset(){//Charset? String?

    }

    head(){//Element
        return new Element(this.selectFirst("head"), this._$)
    }

    nodeName(){//String

    }

    title(){//String
        return new Element(this.selectFirst("title"), this._$)
    }
}

