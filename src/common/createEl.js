export function createEl(type, classes =[],attributes = {}){

    const element = document.createElement(type);

 

    //adding classes
    element.classList.add(...classes);
    
    //adding attributes

    Object.entries(attributes).forEach(entry =>{
        const [attrName, attrValue] = entry;
        element.setAttribute(attrName,attrValue);
    });

    return element;
}