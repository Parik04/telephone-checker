const resultsDiv = document.getElementById("results-div");
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const checkValidNumber = (input) => {
    if(input===''){
        alert("Please provide a phone number"); 
        return;
    }
   const countryCode = '^(\\+91|91)?[\\s\\-]?';
const phoneNumber = '[6-9][0-9]{9}$';
  const phoneRegex = new RegExp(
    `${countryCode}${phoneNumber}`
  );
  const pTag = document.createElement('p');
  pTag.className = 'results-text';
  phoneRegex.test(input)
    ? (pTag.style.color = '#00471b')
    : (pTag.style.color = 'rgb(194, 51, 51)');
  pTag.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} Indian number: ${input}`
    )
  );
  resultsDiv.appendChild(pTag);
};

checkBtn.addEventListener("click" , (e)=>{
    checkValidNumber(userInput.value);
    userInput.value = '';
});

clearBtn.addEventListener("click" , (e)=>{
    resultsDiv.textContent = '';
});
