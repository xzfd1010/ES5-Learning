{
    var supportsTraversals = document.implementation.hasFeature("Traversal", "2.0")
    var supportsNodeIterator = (typeof document.createNodeIterator == "function")
    var supportsTreeWalker = (typeof document.createTreeWalker == "function")

    console.log("supportsTraversals", supportsTraversals)
    console.log("supportsNodeIterator", supportsNodeIterator)
    console.log("supportsTreeWalker", supportsTreeWalker)
}

// NodeIterator
{

    var html = document.documentElement

    var filter = {
        acceptNode: function (node) {
            return node.tagName.toLowerCase() == "p" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    }

    var iterator = document.createNodeIterator(html, NodeFilter.SHOW_ELEMENT, filter, false)
    console.log(iterator)

    // 实例1
    var div = document.getElementById("div1")
    var iterator = document.createNodeIterator(div,NodeFilter.SHOW_ELEMENT,null,false)
    var node = iterator.nextNode()
    while(node !== null){
        console.log(node.tagName)
        node = iterator.nextNode()
    }



}
// 实例2
{
    var div = document.getElementById("div1")
    var filter = {
        acceptNode: function (node) {
            return node.tagName.toLowerCase() == "li" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    }
    var iterator = document.createNodeIterator(div,NodeFilter.SHOW_ELEMENT,filter,false)
    var node = iterator.nextNode()
    while(node !== null){
        console.log(node.tagName)
        node = iterator.nextNode()
    }
}

// TreeWalker
{
    var div = document.getElementById("div1")
    var filter = {
        acceptNode: function (node) {
            return node.tagName.toLowerCase() == "li" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    }
    var walker = document.createTreeWalker(div,NodeFilter.SHOW_ELEMENT,filter,false)
    var node = walker.nextNode()
    while(node !== null){
        console.log(node.tagName)
        node = walker.nextNode()
    }

}

// 不定义filter的treeWalker
{
    var div = document.getElementById("div1")
    var walker = document.createTreeWalker(div,NodeFilter.SHOW_ELEMENT,null,false)
    walker.firstChild()
    walker.nextSibling()
    var node = walker.firstChild()
    console.log(node)
    while(node !== null){
        console.log(node.tagName)
        console.log(walker.currentNode)
        node = walker.nextNode()
    }

}