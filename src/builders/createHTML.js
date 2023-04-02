export function createHTML(text, classes = []){

    const element = document.createElement(text);

    if(classes !== null){
        element.classList.add(...classes); 
    }
    return element;
}