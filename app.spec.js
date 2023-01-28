describe("Modal overlay", () => {
    let modalBtn;
    let modalOverlay;
    let closeBtn;
   
    
    beforeEach(() => {
    modalBtn = document.querySelector('.modal-btn');
    modalOverlay = document.querySelector('.modal-overlay');
    closeBtn = document.querySelector('.close-btn');
    });
    
    it("should add the 'open-modal' class on click of modal button", () => {
    modalBtn.dispatchEvent(new Event('click'));
    expect(modalOverlay.classList.contains("open-modal")).toBe(true);
    });
    
    it("should remove the 'open-modal' class on click of close button", () => {
    modalOverlay.classList.add("open-modal");
    closeBtn.dispatchEvent(new Event('click'));
    expect(modalOverlay.classList.contains("open-modal")).toBe(false);
    });


    });