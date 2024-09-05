// Sample data for each main table
const dataTable1 = [
    { franchise: "Udaipur", units: "3", date: " 5 Sept 2024"},
    { franchise: "Tonk", units: "2", date: " 5 Sept 2024"},
    { franchise: "Sri Ganganagar", units: "5", date: " 5 Sept 2024"},
    { franchise: "Sirohi", units: "2", date: " 5 Sept 2024"},
    { franchise: "Sikar", units: "1", date: " 5 Sept 2024"},
    { franchise: "Sawai Madhapur", units: "4", date: " 5 Sept 2024"},
    { franchise: "Rajsamand", units: "2", date: " 5 Sept 2024"},
    { franchise: "Pratapgarh", units: "3", date: " 5 Sept 2024"}

];

const dataTable2 = [
    { franchise: "Pali", units: "5", date: " 5 Sept 2024"},
    { franchise: "Nagaur", units: "3", date: " 5 Sept 2024"},
    { franchise: "Kota", units: "4", date: " 5 Sept 2024"},
    { franchise: "Karauli", units: "2", date: " 5 Sept 2024"},
    { franchise: "Jhunjhunu", units: "3", date: " 5 Sept 2024"},
    { franchise: "Jhalwar", units: "2", date: " 5 Sept 2024"},
];

const dataTable3 = [
    { franchise: "Jalore", units: "2", date: " 5 Sept 2024"},
    { franchise: "Jaisalmer", units: "3", date: " 5 Sept 2024"},
    { franchise: "Dungarpur", units: "2", date: " 5 Sept 2024"},
];

const dataTable4 = [
    { franchise: "Sawai Madhpur", units: "2", date: " 5 Sept 2024"}
];

// Sample data for modals
const modalData = {
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
};


const ctx2 = document.getElementById('pieChart2').getContext('2d');
    const pieChart2 = new Chart(ctx2, {
      type: 'doughnut', // For the ring-style pie chart
      data: {
        labels: ['Completd', 'Pending', 'Canceled', 'Returned'],
        datasets: [{
          label: 'Task Assignments',
          data: [8, 6, 3,1],
          backgroundColor: ['#7f3cff', '#f86a3d', '#ffffff', '#000000'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        }
      }
    });


// Populate table with data
function populateTable(tableBodyId, data) {
    const tableBody = document.getElementById(tableBodyId);
    tableBody.innerHTML = '';  // Clear existing rows

    data.forEach(employee => {
        const row = `<tr>
            <td>${employee.franchise}</td>
            <td>${employee.units}</td>
            <td>${employee.date}</td>
        </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

// Populate modal table with data
function populateModalTable(modalId, data) {
    const tableBody = document.getElementById(`${modalId.replace('modal-', 'modal-table-body-')}`);
    tableBody.innerHTML = '';  // Clear existing rows

    data.forEach(employee => {
        const row = `<tr>
            <td>${employee.franchise}</td>
            <td>${employee.units}</td>
            <td>${employee.date}</td>
        </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

// Initialize the table population for main tables
populateTable('employee-table-body-1', dataTable1);
populateTable('employee-table-body-2', dataTable2);
populateTable('employee-table-body-3', dataTable3);
populateTable('employee-table-body-4', dataTable4);

// Initialize modal tables
Object.keys(modalData).forEach(modalId => {
    populateModalTable(modalId, modalData[modalId]);
});

// Filter functionality
function filterTable(tableBodyId, filterBy, filterValue, data) {
    let filteredData = data;

    if (filterBy === "date") {
        filteredData = data.filter(emp => emp.date === filterValue);
    }

    populateTable(tableBodyId, filteredData);
}

// Filter modal table data
function filterModalTable(modalId, filterBy, filterValue) {
    let filteredData = modalData[modalId];

    if (filterBy === "date") {
        filteredData = modalData[modalId].filter(emp => emp.date === filterValue);
    }

    populateModalTable(modalId, filteredData);
}

// Event listeners for filters in main tables
document.getElementById('filter-btn-1').addEventListener('click', () => {
    document.getElementById('filter-options-1').style.display = 'block';
});
document.getElementById('apply-filter-btn-1').addEventListener('click', () => {
    const filterBy = document.getElementById('filter-by-1').value;
    const filterValue = (filterBy === "date") ? document.getElementById('filter-date-1').value : filterBy;
    filterTable('employee-table-body-1', filterBy, filterValue, dataTable1);
});

document.getElementById('filter-btn-2').addEventListener('click', () => {
    document.getElementById('filter-options-2').style.display = 'block';
});
document.getElementById('apply-filter-btn-2').addEventListener('click', () => {
    const filterBy = document.getElementById('filter-by-2').value;
    const filterValue = (filterBy === "date") ? document.getElementById('filter-date-2').value : filterBy;
    filterTable('employee-table-body-2', filterBy, filterValue, dataTable2);
});

document.getElementById('filter-btn-3').addEventListener('click', () => {
    document.getElementById('filter-options-3').style.display = 'block';
});
document.getElementById('apply-filter-btn-3').addEventListener('click', () => {
    const filterBy = document.getElementById('filter-by-3').value;
    const filterValue = (filterBy === "date") ? document.getElementById('filter-date-3').value : filterBy;
    filterTable('employee-table-body-3', filterBy, filterValue, dataTable3);
});

document.getElementById('filter-btn-4').addEventListener('click', () => {
    document.getElementById('filter-options-4').style.display = 'block';
});
document.getElementById('apply-filter-btn-4').addEventListener('click', () => {
    const filterBy = document.getElementById('filter-by-4').value;
    const filterValue = (filterBy === "date") ? document.getElementById('filter-date-4').value : filterBy;
    filterTable('employee-table-body-4', filterBy, filterValue, dataTable4);
});

// Event listeners for filters in modals
document.getElementById('filter-btn-modal-1').addEventListener('click', () => {
    document.getElementById('filter-options-modal-1').style.display = 'block';
});
document.getElementById('apply-filter-btn-modal-1').addEventListener('click', () => {
    const filterBy = document.getElementById('filter-by-modal-1').value;
    const filterValue = (filterBy === "date") ? document.getElementById('filter-date-modal-1').value : filterBy;
    filterModalTable('modal-1', filterBy, filterValue);
});

document.getElementById('filter-btn-modal-2').addEventListener('click', () => {
    document.getElementById('filter-options-modal-2').style.display = 'block';
});
document.getElementById('apply-filter-btn-modal-2').addEventListener('click', () => {
    const filterBy = document.getElementById('filter-by-modal-2').value;
    const filterValue = (filterBy === "date") ? document.getElementById('filter-date-modal-2').value : filterBy;
    filterModalTable('modal-2', filterBy, filterValue);
});

document.getElementById('filter-btn-modal-3').addEventListener('click', () => {
    document.getElementById('filter-options-modal-3').style.display = 'block';
});
document.getElementById('apply-filter-btn-modal-3').addEventListener('click', () => {
    const filterBy = document.getElementById('filter-by-modal-3').value;
    const filterValue = (filterBy === "date") ? document.getElementById('filter-date-modal-3').value : filterBy;
    filterModalTable('modal-3', filterBy, filterValue);
});

document.getElementById('filter-btn-modal-4').addEventListener('click', () => {
    document.getElementById('filter-options-modal-4').style.display = 'block';
});
document.getElementById('apply-filter-btn-modal-4').addEventListener('click', () => {
    const filterBy = document.getElementById('filter-by-modal-4').value;
    const filterValue = (filterBy === "date") ? document.getElementById('filter-date-modal-4').value : filterBy;
    filterModalTable('modal-4', filterBy, filterValue);
});
