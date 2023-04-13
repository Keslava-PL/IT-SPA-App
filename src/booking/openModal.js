import { createEl } from "../common/createEl";

export function openModal(){

    // const modalWindow = createEl('div', ['modal', 'show'],{
    //     'id':'modalWindow',
    //     'tabindex':'-1',
    //     'role':'dialog',
    //     'aria-labelledby':"exampleModalCenterTitle",
    //     'aria-hidden':"false"
    // });
    const modalWindow = createEl('div', ['modal', 'tabindex=-1']);
    modalWindow.innerHTML = `
    
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  
    `

    return modalWindow;
  
   
}

