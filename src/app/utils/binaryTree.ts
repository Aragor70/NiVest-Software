


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



export const setup = () => {


    const tree = new Tree;

    tree.addValue( 5 )
    tree.addValue( 3 )
    tree.addValue( 2 )
    tree.addValue( 4 )
    tree.addValue( 7 )
    tree.addValue( 1 )
    console.log(tree)
    return tree;
}