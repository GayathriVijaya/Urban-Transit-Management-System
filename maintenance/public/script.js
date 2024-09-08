document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        operatorid: formData.get('operatorid'),
        issue: formData.get('issue')
    };

    fetch('/submit-ticket', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Ticket submitted successfully!');
        document.getElementById('ticketForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});