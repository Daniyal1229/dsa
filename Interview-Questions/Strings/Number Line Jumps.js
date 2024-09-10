//  0 3 4 2 
//  yes  bcoz 12 line number they meet

let x1 = 0,v1 = 2,x2 = 5,v2 = 3;

function kangaroo2(x1,v1,x2,v2){
    //  lets start by checcking weather the first kangroo has greater speed or second 
    if (v1 > v2) {
        const initialDistance = x2 - x1; // 5 - 0
        const speedDifference = v1 - v2; // 2 - 3 
        if (initialDistance % speedDifference  === 0){
            return 'yes';
        }
        else{
            return 'no';
        }
    }
    else{
        return 'no'
    }
}

