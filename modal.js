
document.addEventListener('DOMContentLoaded', () => {
    // Sample employee data for each table
    const data = {
        'modal-1': [
            { franchise: "Udaipur", units: "3", date: " 5 Sept 2024"},
            { franchise: "Tonk", units: "2", date: " 5 Sept 2024"},
            { franchise: "Sri Ganganagar", units: "5", date: " 5 Sept 2024"},
            { franchise: "Sirohi", units: "2", date: " 5 Sept 2024"},
            { franchise: "Sikar", units: "1", date: " 5 Sept 2024"},
            { franchise: "Sawai Madhapur", units: "4", date: " 5 Sept 2024"},
            { franchise: "Rajsamand", units: "2", date: " 5 Sept 2024"},
            { franchise: "Pratapgarh", units: "3", date: " 5 Sept 2024"}

        ],
        'modal-2': [
            { franchise: "Pali", units: "5", date: " 5 Sept 2024"},
            { franchise: "Nagaur", units: "3", date: " 5 Sept 2024"},
            { franchise: "Kota", units: "4", date: " 5 Sept 2024"},
            { franchise: "Karauli", units: "2", date: " 5 Sept 2024"},
            { franchise: "Jhunjhunu", units: "3", date: " 5 Sept 2024"},
            { franchise: "Jhalwar", units: "2", date: " 5 Sept 2024"},

        ],
        'modal-3': [
            { franchise: "Jalore", units: "2", date: " 5 Sept 2024"},
            { franchise: "Jaisalmer", units: "3", date: " 5 Sept 2024"},
            { franchise: "Dungarpur", units: "2", date: " 5 Sept 2024"},

        ],
        'modal-4': [
            { franchise: "Sawai Madhpur", units: "2", date: " 5 Sept 2024"}
        ]
        // Add more data for other modals as needed
    };

    // Function to populate table data in a modal
    function populateTable(modalId, data) {
        const tableBody = document.getElementById(`${modalId.replace('modal-', 'modal-table-body-')}`);
        tableBody.innerHTML = '';  // Clear existing rows

        data.forEach(item => {
            const row = `<tr>
                <td>${item.franchise}</td>
                <td>${item.units}</td>
                <td>${item.date}</td>
            </tr>`;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    }

    // Initialize modals
    Object.keys(data).forEach(modalId => {
        populateTable(modalId, data[modalId]);
    });

    // Modal and overlay elements
    const showModalButtons = document.querySelectorAll('.show-modal');
    const modals = document.querySelectorAll('.modal');
    const overlay = document.getElementById('modal-overlay');
    
    // Function to show modal and overlay
    function showModal(modalId) {
        document.getElementById(modalId).classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

    // Function to hide modal and overlay
    function hideModal() {
        modals.forEach(modal => modal.classList.add('hidden'));
        overlay.classList.add('hidden');
    }

    // Add event listeners to show modals
    showModalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const modalId = event.target.dataset.modal;
            showModal(modalId);
        });
    });

    // Add event listener to close modals
    modals.forEach(modal => {
        modal.querySelector('.close-modal').addEventListener('click', hideModal);
    });

    // Add event listener to overlay to close modal
    overlay.addEventListener('click', hideModal);
});
