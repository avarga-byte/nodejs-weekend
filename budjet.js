class App {
    modalOpen;
    modalClose
    backdrop;
    description;
    amount;
    type;
    date;
    insert;
    budgets = [];
    constructor(){
        this.modalOpen = document.querySelector('#open');
        this.modalClose = document.querySelector('#close');
        this.backdrop = document.querySelector('#backdrop');
        this.description = document.querySelector('#description');
        this.amount = document.querySelector('#amount');
        this.type = document.querySelector('#type');
        this.date = document.querySelector('#date');
        this.insert = document.querySelector('#insert');
        this.event();
    }

    openModalHandler(){
        this.backdrop.classList.add('open');
    }

    closeModalHandler(){
        this.backdrop.classList.remove('open')
    }

    insertBudget(){
        const budget = {
            description: this.description.value,
            amount: +this.amount.value,
            type: this.type.value,
            date: this.date.value,
            id: Math.random().toString().split('.')[1]
        }
        this.budgets.push(budget);
        this.closeModalHandler();
    }

    event(){
        this.modalOpen.addEventListener('click' , this.openModalHandler.bind(this))
        this.modalClose.addEventListener('click' , this.closeModalHandler.bind(this))
        this.insert.addEventListener('click' , this.insertBudget.bind(this));
    }
}

const app = new App();

// github.com/taichir0923/nodejs-weekend
// amjiltlearnspace1

// updateUI
// sort
// filter


// 1. ali ng ogogdol hooson buyu dutuu baival, burtgehgui
// 2. burtgegdsen tohioldold form-g tseverleh
// 3. updateUI function bichih