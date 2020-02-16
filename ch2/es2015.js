function test1(){
    {
        var x = 1;
        const y = 2;
        let z = 3;

        // z=6;
        // y=5;
        // console.log("var : " + x + "\nconst : "+ y + "\nlet : "+z);
        console.log(`var : ${x} \nconst : ${y} \nlet : '${z}'`);
    }
}

function test2(){
    var sayNode = function(){
        console.log('Node');
    };
    var es = 'ES';
    const newObject={
        // sayJS(){
        //     console.log('JS');
        // },
        sayJS : function(){
            console.log('JS');
        },
        sayNode,
        [es+6]:'Fantastic'
    };
    newObject.sayNode();
    newObject.sayJS();
    console.log(newObject.ES6)
}

function test3(){
    let add2 = (x, y) => {
        console.log(x+y);
        // return x+y;
    }
    // add2(1,2);
    // function add3 = (x,y) => (console.log(x+y)); //error
    const add3 = (x,y) => (console.log(x+y));
    add3(5,2);
}

function test4(){
    var relationship1={
        name:'zero',
        friends:['nero','hero','xero'],
        logFriends : function(){
            var that = this;//relationship1
            this.friends.forEach(function(friend){
                console.log(that.name,friend);
            });
        }
    };
    relationship1.logFriends();
    console.log("==============");
    var relationship2={
        name:'zero',
        friends:['nero','hero','xero'],
        logFriends(){
            this.friends.forEach(friend=>{
                console.log(this.name,friend);
            });
        }
    }
    relationship2.logFriends();
}

test4();