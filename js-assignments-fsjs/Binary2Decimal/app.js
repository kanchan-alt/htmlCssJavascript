
let input_1 = document.getElementById("binary")

 input_1.addEventListener("input", () =>{
    let binaryNo = document.getElementById("binary").value; 
    // console.log(binaryNo);

    // let decimalNo = document.getElementsByClassName('result')[0].innerHTML = binaryNo;
    // console.log(decimalNo);

    // convert the binary to decimal

    const b2d = document.querySelector(".btn")
    b2d.addEventListener("click", change);

    function change (binaryNo){
        // console.log(binaryNo);
        let checking = (binaryNo) => {
            for(i=0; i < binaryNo.length; i++){
                if(binaryNo[i]!= 0 && binaryNo[i]!=1){
                    return false;
                }
            }
            return true;
    
        } 
    
        if(checking){
            let decimalNumber = parseInt(binaryNo, 2);
            // console.log(decimalNumber)
            let show = document.getElementsByClassName("result");
            show[0].textContent = "Decimal Number:" +  decimalNumber;
    
        }

    }

    change(binaryNo);
    
   
}
);



















