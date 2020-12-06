 document.querySelector('.form').addEventListener('submit',function(e){
    const inputValue = document.querySelector('.amount-value');
    const oneMonthInput = document.querySelector('.oneMonthInput');
    const threeMonthInput = document.querySelector('.threeMonthInput');
    const twelveMonthInput = document.querySelector('.twelveMonthInput');
    
    userValue = parseFloat(inputValue.value);
    const oneMonthValue = userValue * 0.02 ;
    const threeMonthValue = userValue * 0.08;
    const twelveMonthValue = userValue * 2;

     oneMonthInput.value = `₹ ${oneMonthValue.toFixed(2)}` ; ;
     threeMonthInput.value = `₹ ${threeMonthValue.toFixed(2)}` ;
     twelveMonthInput.value = `₹ ${twelveMonthValue.toFixed(2)}`;
     
    e.preventDefault();
})



// 0.02 - one month
//0.08 - 3 month
//2 - 12 month

