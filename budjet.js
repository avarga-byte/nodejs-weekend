class App {
    modalOpen;
    modalClose
    backdrop;
    description;
    amount;
    type;
    date;
    insert;
    tableList;
    orlogo;
    zarlaga;
    uldegdel
    budgets = [];
    constructor() {
        this.modalOpen = document.querySelector('#open');
        this.modalClose = document.querySelector('#close');
        this.backdrop = document.querySelector('#backdrop');
        this.description = document.querySelector('#description');
        this.amount = document.querySelector('#amount');
        this.type = document.querySelector('#type');
        this.date = document.querySelector('#date');
        this.insert = document.querySelector('#insert');
        this.tableList = document.querySelector('#tableList');
        this.orlogo = document.querySelector('#orlogo')
        this.zarlaga = document.querySelector('#zargala')
        this.uldegdel = document.querySelector('#uldegdel')
        this.event();
    }
    openModalHandler() {
        this.backdrop.classList.add('open');
    }

    closeModalHandler() {
        this.backdrop.classList.remove('open')
        this.description.value = "";
        this.amount.value = "";
        this.date.value = "";
    }
    insertBudget() {
        let Total = 0;
        if (this.amount.value.trim() === '' && this.description.value.trim() === '' && this.date.value === "") {
            alert("buh medeelel oruulah shaardlagatai")
        } else {
            const budget = {
                description: this.description.value,
                amount: +this.amount.value,
                type: this.type.value,
                date: this.date.value,
                id: Math.random().toString().split('.')[1]
            }
            this.budgets.push(budget);
            if(this.type.value === "+"){
                this.tableList.insertAdjacentHTML('afterbegin',
                `
                <tr class="border-b text-center">
                    <td class="text-left flex items-center gap-3">
                        <p>${this.description.value}</p>
                        <i class="fa-solid fa-arrow-up text-green-400"></i>
                    </td>
                    <td class="text-green-400">${this.amount.value}</td>
                    <td>${this.date.value}</td>
                </tr>
                `)
            }else if(this.type.value === "-"){
                return this.tableList.insertAdjacentHTML('afterbegin',
                `
                <tr class="border-b text-center">
                    <td class="text-left flex items-center gap-3">
                        <p>${this.description.value}</p>
                        <i id="arrow" class="fa-solid fa-arrow-down text-red-400"></i>
                    </td>
                    <td class="text-red-400">${this.amount.value}</td>
                    <td>${this.date.value}</td>
                </tr>
                `)
            }
        }
        this.closeModalHandler();
    }
    
    updateUi(){
        
    }

    event() {
        this.modalOpen.addEventListener('click', this.openModalHandler.bind(this))
        this.modalClose.addEventListener('click', this.closeModalHandler.bind(this))
        this.insert.addEventListener('click', this.insertBudget.bind(this));
    }
}

const app = new App();

// github.com/taichir0923/nodejs-weekend
// amjiltlearnspace1

// updateUI
// sort
// filter

// Gert
// 1. ali ng ogogdol hooson buyu dutuu baival, burtgehgui
// 2. burtgegdsen tohioldold form-g tseverleh
// 3. updateUI function bichih
// 4. NodeJS suulgah

// alert('ogogdol dutu!')