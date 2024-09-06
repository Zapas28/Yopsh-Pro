document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var title = document.getElementById('title').value;
    var loadingElement = document.getElementById('loading');
    var username = localStorage.getItem('YopshLoc_Username');

    loadingElement.style.display = 'block';

    fetch('https://script.google.com/macros/s/AKfycbxaCtn_F7mPm_AOt_ceKqe3Q6llHT2NXlCG1WaqCBTjzqlNYAvhfxXmUWeE_YPJYZx7/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            action: 'submitNews',
            timestamp: new Date().toISOString(),
            title: title,
            username: username
        })
    })
    .then(response => response.json())
    .then(data => {
        loadingElement.style.display = 'none';

        if (data.success) {
            showAlert('Posted Successfully!');
            document.getElementById('newsForm').reset();
        } else {
            showAlert('Failed to post news.');
        }
    })
    .catch(error => {
        loadingElement.style.display = 'none';
        showAlert('Error: ' + error);
    });
});

function showAlert(message) {
    var alertBox = document.getElementById('customAlert');
    document.getElementById('alertMessage').innerHTML = `Yopsh! Page Shows That!<br>${message}`; // Use innerHTML to insert line break
    alertBox.style.display = 'block';
    document.getElementById('closeAlertBtn').onclick = function() {
        alertBox.style.display = 'none';
    };
}