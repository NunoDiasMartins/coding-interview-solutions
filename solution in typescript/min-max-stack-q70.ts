export class MinMaxStackOptimal {
    stack: number[];
    stackMinMax: { min: number, max: number }[];

    constructor() {
        this.stack = [];
        this.stackMinMax = [];
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    pop() {
        this.stackMinMax.pop();
        return this.stack.pop();
    }

    push(number: number) {
        const newMinMax = { min: number, max: number };
        if (this.stackMinMax.length) {
            const lastMinMax = this.stackMinMax[this.stackMinMax.length - 1]; //peek
            newMinMax.min = Math.min(lastMinMax.min, number);
            newMinMax.max = Math.max(lastMinMax.max, number);
        }
        this.stackMinMax.push(newMinMax);
        this.stack.push(number);
    }

    getMin() {
        return this.stackMinMax[this.stackMinMax.length - 1].min;
    }

    getMax() {
        return this.stackMinMax[this.stackMinMax.length - 1].max;
    }
}


// Feel free to add new properties and methods to the class.
export class MinMaxStackNotOptimal {
    stack: number[];
    max: number | null;
    min: number | null;

    constructor() {
        this.stack = [];
        this.min = null;
        this.max = null;
    }

    peek() {
        return this.stack.length >= 0 ? this.stack[this.stack.length - 1] : null;
    }

    pop() {
        const number = this.stack.pop();

        if (number === this.max || number === this.min) {
            this.resolveMinMax();
        }
        return number;
    }

    private resolveMinMax() {
        if (this.stack.length === 0) {
            //this.min = null;
            //this.max = null;
        } else {
            this.min = this.stack[0];
            this.max = this.stack[0];
            for (let i = 0; i < this.stack.length; i++) {
                this.min = Math.min(this.min, this.stack[i]);
                this.max = Math.max(this.max, this.stack[i]);
            }
        }
    }

    push(number: number) {
        if (this.stack.length > 0) {
            if (number > this.max!) {
                this.max = number;
            }
            if (number < this.min!) {
                this.min = number;
            }
        } else {
            this.max = number;
            this.min = number;
        }
        this.stack.push(number);
    }

    getMin() {
        return this.min;
    }

    getMax() {
        return this.max;
    }
}
