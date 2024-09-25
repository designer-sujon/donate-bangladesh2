

const mainBalance = openingBalance ('main-Balance');
const noakhaliBalance = openingBalance ('noakhali-Balance');
const feniBalance = openingBalance ('feni-Balance');
const quotaBalance = openingBalance ('quota-Balance');

const noakhaliDonateAmount = getDonateAmount ('input-noakhali')
const feniDonateAmount = getDonateAmount ('input-feni')
const quotaDonateAmount = getDonateAmount ('input-quota')


// Noakhali Flood Donation
document.getElementById('donate-btn.noakhali')
.addEventListener('click', function(event){
    event.preventDefault()
    const mainBalance = openingBalance ('main-Balance');
    const noakhaliBalance = openingBalance ('noakhali-Balance');
    const noakhaliDonateAmount = getDonateAmount ('input-noakhali')
    if(noakhaliDonateAmount<=0 || isNaN(noakhaliDonateAmount)){
        alert ('Please enter a valid amount')
        return
    }
    if(noakhaliDonateAmount>mainBalance){   
        alert ('Insufficient Balance')
        return
    }
    const noakhaliDonate = noakhaliBalance + noakhaliDonateAmount;
    document.getElementById('noakhali-Balance').innerText = noakhaliDonate.toFixed(2)
    const mBalance = mainBalance - noakhaliDonateAmount
    document.getElementById('main-Balance').innerText = mBalance.toFixed(2)

   const div = document.createElement('div')
   div.classList.add('border','rounded-xl','px-6','py-6','mt-6', 'space-y-2');
   const currentTime = new Date()
   div.innerHTML= `
   <h1 class="text-2xl lg:text-3xl font-medium lg:font-bold"> ${noakhaliDonateAmount.toFixed(2)} Taka is Donated for Flood at Noakhali, Bangladesh</h1>
   <p class="text-xl font-medium"> Date: ${currentTime}</p>
   `
   document.getElementById('transaction-container').appendChild(div)

   const modal = document.getElementById('my_modal_1');
   modal.showModal()
   document.getElementById('input-noakhali').value= '';
    
});


// Feni Flood Donation
document.getElementById('donate-btn-feni')
.addEventListener('click', function(){
    const mainBalance = openingBalance ('main-Balance');
    const feniBalance = openingBalance ('feni-Balance');
    const feniDonateAmount = getDonateAmount ('input-feni')
    if(feniDonateAmount<=0 || isNaN(feniDonateAmount)){
        alert ('Please enter a valid amount')
        return
    }
    if(feniDonateAmount>mainBalance){
        alert ('Insufficient Balance')
        return
    }
    const feniDonate = feniBalance + feniDonateAmount;
    document.getElementById('feni-Balance').innerText = feniDonate.toFixed(2);
    const mBalance = mainBalance - feniDonateAmount;
    document.getElementById('main-Balance').innerText=mBalance.toFixed(2);

    const div = document.createElement('div')
   div.classList.add('border','rounded-xl','px-6','py-6','mt-6', 'space-y-2');
   const currentTime = new Date()
   div.innerHTML= `
   <h1 class="text-2xl lg:text-3xl font-medium lg:font-bold"> ${feniDonateAmount.toFixed(2)} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
   <p class="text-xl font-medium"> Date: ${currentTime}</p>
   `
   document.getElementById('transaction-container').appendChild(div)

   const modal = document.getElementById('my_modal_1');
   modal.showModal()

   document.getElementById('input-feni').value= '';
    
})

// Quota Movement Donation
document.getElementById('donate-btn-quota')
.addEventListener('click', function(){
    const mainBalance = openingBalance ('main-Balance');
    const quotaBalance = openingBalance ('quota-Balance');
    const quotaDonateAmount = getDonateAmount ('input-quota')
    if(quotaDonateAmount<=0 || isNaN(quotaDonateAmount)){
        alert ('Please enter a valid amount')
        return
    }
    if(quotaDonateAmount>mainBalance){
        alert ('Insufficient Balance')
        return
    }
    const quotaDonate = quotaBalance + quotaDonateAmount;
    document.getElementById('quota-Balance').innerText = quotaDonate.toFixed(2);
    const mBalance = mainBalance - quotaDonateAmount;
    document.getElementById('main-Balance').innerText=mBalance.toFixed(2);

    const div = document.createElement('div')
   div.classList.add('border','rounded-xl','px-6','py-6','mt-6', 'space-y-2');
   const currentTime = new Date()
   div.innerHTML= `
   <h1 class="text-2xl lg:text-3xl font-medium lg:font-bold"> ${quotaDonateAmount.toFixed(2)} Taka is Aid for Injured in the Quota Movement</h1>
   <p class="text-xl font-medium"> Date: ${currentTime}</p>
   `
   document.getElementById('transaction-container').appendChild(div)
   const modal = document.getElementById('my_modal_1');
   modal.showModal()
   document.getElementById('input-quota').value= '';
    
})


  
