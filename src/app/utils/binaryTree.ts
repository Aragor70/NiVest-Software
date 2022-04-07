


function Tree() {


    this.root = null;


    this.addValue = ( value: any ) => {

        const n: any = new Node(value)

        if (this.root === null) {

            this.root = n;

        } else {

            this.root.addNode(n)

        }
    }

    this.sort = () => {

        if (this.root !== null) {

            this.root.visit()

        }

    }
}

function Node(value: any) {


    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 0;

    this.addNode = ( n: any ) => {

        if (n.value < this.value) {

            if (this.left === null) {
                this.left = n;
            } else {
                this.left.addNode(n)
            }
            
        } else if (n.value > this.value) {

            
            if (this.right === null) {
                this.right = n;
            } else {
                this.right.addNode(n)
            }

        } else {

            this.count += 1

        }

    }

    this.visit = () => {

        if (this.left !== null) {
            this.left.visit()

        }

        console.log(this.value)

        
        if (this.right !== null) {
            this.right.visit()
        }


    }
}

export const arry: number[] = [ 5, 3, 2, 4, 7, 1 ];

export const setup = () => {


    const tree = new Tree;

    for (let i = 0; i < arry.length; i++) {
        tree.addValue( arry[i] )
    }
    console.log(tree)
    return tree;
}