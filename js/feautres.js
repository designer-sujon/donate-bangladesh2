document.getElementById('history-btn')
.addEventListener('click', function(){
    document.getElementById('show-history').classList.remove('hidden')
    document.getElementById('history-btn').classList.remove('border', 'border-gray-400')
    document.getElementById('donation-btn').classList.add('border', 'border-gray-400')
    document.getElementById('history-btn').classList.add('bg-btn-color')
    document.getElementById('donation-btn').classList.remove('bg-btn-color')
    document.getElementById('donation-container').classList.add('hidden')
});

document.getElementById('donation-btn')
.addEventListener('click', function(){
    document.getElementById('donation-container').classList.remove('hidden')
    document.getElementById('donation-btn').classList.remove('border', 'border-gray-400')
    document.getElementById('history-btn').classList.add('border', 'border-gray-400')
    document.getElementById('donation-btn').classList.add('bg-btn-color')
    document.getElementById('history-btn').classList.remove('bg-btn-color')
    
    document.getElementById('show-history').classList.add('hidden')
});