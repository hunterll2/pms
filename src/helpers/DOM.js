
/**
 * Inserts children into a parent element in the DOM.
 *
 * @param {string} parentElementSelector - The ID of the parent element.
 * @param {Array} children - The array of children to be inserted.
 * @param {function} callback - The callback function to generate HTML for each child.
 *
 * @example
 * InsertChildrenIntoParentElement('parent', ['child1', 'child2'], (placeholder, child) => `<div>${child}</div>`);
 */
export function InsertChildrenIntoParentElement(parentNodeId, children, callback) {
    const parentNode = document.getElementById(parentNodeId)
    const placeholderHtml = parentNode.children[0].outerHTML

    // remove old children befroe adding new
    let child = parentNode.firstElementChild
    while (child) {
        child.remove()
        child = parentNode.firstElementChild
    }

    for (const child of children) {
        const html = callback(placeholderHtml, child)
        // after getting the html of the item, insert it into the end of the parentNode
        parentNode.insertAdjacentHTML("afterbegin", html)
    }
}