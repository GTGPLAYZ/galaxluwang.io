document.getElementById('submitBtn').addEventListener('click', function() {
    var loveLetter = document.getElementById('loveLetter').value;
    var resultDiv = document.getElementById('result');
    
    if (loveLetter.trim() === '') {
        resultDiv.textContent = 'Please write your love letter before sending.';
    } else {
        resultDiv.innerHTML = '<p>Your love letter:</p><p>' + loveLetter + '</p>';
    }
});
