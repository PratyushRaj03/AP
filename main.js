// Smooth line graph (already set up but adjust colors)
const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Revenue',
        data: [12000, 19000, 15000, 21000, 18000, 25000],
        borderColor: 'rgb(0, 200, 255)',
        backgroundColor: 'rgba(0, 200, 255, 0.2)',
        tension: 0.4 // Smoother line
    }]
};


// Create chart
const ctx = document.getElementById('revenueChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: revenueData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Revenue'
            }
        }
    }
});

// Sample scooter data
const scooters = [
    { id: 'SC001', model: 'SpeedMaster', status: 'Available', lastRental: '2023-03-15' },
    { id: 'SC002', model: 'UrbanCruiser', status: 'Rented', lastRental: '2023-03-20' },
    { id: 'SC003', model: 'EcoRide', status: 'Maintenance', lastRental: '2023-03-10' },
];

// Populate table

    const employees = [
        {name: 'Aarav', position: '-', date: '5 Sept 2024', status: 'present', contact: '9876543210'},
        {name: 'Aditya', position: '-', date: '5 Sept 2024', status: 'present', contact: '9123456789'},
        {name: 'Arjun', position: '-', date: '5 Sept 2024', status: 'present', contact: '9345678901'},
        {name: 'Aryan', position: '-', date: '5 Sept 2024', status: 'absent', contact: '9567890123'},
        {name: 'Avi', position: '-', date: '5 Sept 2024', status: 'present', contact: '9234567890'},
        {name: 'Ayush', position: '-', date: '5 Sept 2024', status: 'present', contact: '9871234567'},
        {name: 'Dev', position: '-', date: '5 Sept 2024', status: 'present', contact: '9345671234'},
        {name: 'Dhruv', position: '-', date: '5 Sept 2024', status: 'present', contact: '9123450987'},
        {name: 'Gaurav', position: '-', date: '5 Sept 2024', status: 'absent', contact: '9456789012'},
        {name: 'Harsh', position: '-', date: '5 Sept 2024', status: 'present', contact: '9345127890'},
        {name: 'Ishan', position: '-', date: '5 Sept 2024', status: 'present', contact: '9213456789'},
        {name: 'Kabir', position: '-', date: '5 Sept 2024', status: 'present', contact: '9567812345'},
        {name: 'Karan', position: '-', date: '5 Sept 2024', status: 'present', contact: '9234509876'},
        {name: 'Kartik', position: '-', date: '5 Sept 2024', status: 'present', contact: '9678901234'},
        {name: 'Krish', position: '-', date: '5 Sept 2024', status: 'present', contact: '9012345678'},
        {name: 'Laksh', position: '-', date: '5 Sept 2024', status: 'absent', contact: '9234678901'},
        {name: 'Manav', position: '-', date: '5 Sept 2024', status: 'present', contact: '9678543210'},
        {name: 'Mohit', position: '-', date: '5 Sept 2024', status: 'present', contact: '9456123456'},
        {name: 'Neel', position: '-', date: '5 Sept 2024', status: 'present', contact: '9786543210'},
        {name: 'Nishant', position: '-', date: '5 Sept 2024', status: 'present', contact: '9012765432'},
        {name: 'Om', position: '-', date: '5 Sept 2024', status: 'absent', contact: '9234012345'},
        {name: 'Parth', position: '-', date: '5 Sept 2024', status: 'present', contact: '9123098765'},
        {name: 'Pranav', position: '-', date: '5 Sept 2024', status: 'present', contact: '9345098761'},
        {name: 'Raj', position: '-', date: '5 Sept 2024', status: 'present', contact: '9234067890'},
        {name: 'Rohan', position: '-', date: '5 Sept 2024', status: 'present', contact: '9786123456'},
        {name: 'Rahul', position: '-', date: '5 Sept 2024', status: 'present', contact: '9012456789'},
        {name: 'Sahil', position: '-', date: '5 Sept 2024', status: 'present', contact: '9123456709'},
        {name: 'Samarth', position: '-', date: '5 Sept 2024', status: 'present', contact: '9345678901'},
        {name: 'Sanjay', position: '-', date: '5 Sept 2024', status: 'paid-leave', contact: '9345126789'},
        {name: 'Shaurya', position: '-', date: '5 Sept 2024', status: 'present', contact: '9456012345'},
        {name: 'Siddharth', position: '-', date: '5 Sept 2024', status: 'present', contact: '9786234501'},
        {name: 'Soham', position: '-', date: '5 Sept 2024', status: 'absent', contact: '9345009876'},
        {name: 'Sumit', position: '-', date: '5 Sept 2024', status: 'present', contact: '9123678901'},
        {name: 'Surya', position: '-', date: '5 Sept 2024', status: 'present', contact: '9234701234'},
        {name: 'Tanish', position: '-', date: '5 Sept 2024', status: 'present', contact: '9234056789'},
        {name: 'Tarun', position: '-', date: '5 Sept 2024', status: 'present', contact: '9012456034'},
        {name: 'Udit', position: '-', date: '5 Sept 2024', status: 'paid-leave', contact: '9678234501'},
        {name: 'Ujjwal', position: '-', date: '5 Sept 2024', status: 'absent', contact: '9234709801'},
        {name: 'Varun', position: '-', date: '5 Sept 2024', status: 'present', contact: '9345098761'},
        {name: 'Ved', position: '-', date: '5 Sept 2024', status: 'present', contact: '9567890123'},
        {name: 'Veer', position: '-', date: '5 Sept 2024', status: 'present', contact: '9786543201'},
        {name: 'Vihaan', position: '-', date: '5 Sept 2024', status: 'present', contact: '9012034678'},
        {name: 'Vikram', position: '-', date: '5 Sept 2024', status: 'present', contact: '9123459087'},
        {name: 'Vinay', position: '-', date: '5 Sept 2024', status: 'paid-leave', contact: '9234067012'},
        {name: 'Viraj', position: '-', date: '5 Sept 2024', status: 'present', contact: '9786098761'},
        {name: 'Vivaan', position: '-', date: '5 Sept 2024', status: 'present', contact: '9456780123'},
        {name: 'Yash', position: '-', date: '5 Sept 2024', status: 'present', contact: '9123045678'},
        {name: 'Yuvraj', position: '-', date: '5 Sept 2024', status: 'present', contact: '9345123456'},
        {name: 'Aarush', position: '-', date: '5 Sept 2024', status: 'present', contact: '9234567890'},
        {name: 'Abhinav', position: '-', date: '5 Sept 2024', status: 'present', contact: '9781234567'},
        {name: 'Akash', position: '-', date: '5 Sept 2024', status: 'present', contact: '9345098701'},
        {name: 'Alok', position: '-', date: '5 Sept 2024', status: 'absent', contact: '9678012345'},
        {name: 'Aniket', position: '-', date: '5 Sept 2024', status: 'absent', contact: '9124567890'},
        {name: 'Arnav', position: '-', date: '5 Sept 2024', status: 'present', contact: '9567123450'},
        {name: 'Bhavesh', position: '-', date: '5 Sept 2024', status: 'paid-leave', contact: '9785098761'},
        {name: 'Chetan', position: '-', date: '5 Sept 2024', status: 'absent', contact: '9234012345'}
    ];
    
    const maxRows = 10;
    let currentIndex = 0;
    
    const tableBody = document.getElementById('employee-table-body');
    const seeMoreBtn = document.getElementById('see-more-btn');
    const filterBtn = document.getElementById('filter-btn');
    const filterOptions = document.getElementById('filter-options');
    const filterBy = document.getElementById('filter-by');
    const filterDate = document.getElementById('filter-date');
    const applyFilterBtn = document.getElementById('apply-filter-btn');
    
    let filteredEmployees = [...employees];
    
    function loadTableData() {
        tableBody.innerHTML = '';  // Clear the table first
        const rowsToLoad = filteredEmployees.slice(currentIndex, currentIndex + maxRows);
        
        rowsToLoad.forEach(employee => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td>${employee.date}</td>
                <td>${employee.status}</td>
                <td>${employee.contact}</td>
            `;
            tableBody.appendChild(row);
        });
    
        currentIndex += maxRows;
    
        // Show or hide the "See More" button
        if (currentIndex >= filteredEmployees.length) {
            seeMoreBtn.style.display = 'none';
        } else {
            seeMoreBtn.style.display = 'block';
        }
    }
    
    // Show filter options when filter button is clicked
    filterBtn.addEventListener('click', () => {
        filterOptions.style.display = filterOptions.style.display === 'none' ? 'block' : 'none';
    });
    
    // Show date picker if the filter is "Date"
    filterBy.addEventListener('change', (e) => {
        if (e.target.value === 'date') {
            filterDate.style.display = 'block';
        } else {
            filterDate.style.display = 'none';
        }
    });
    
    // Apply filter logic
    applyFilterBtn.addEventListener('click', () => {
        const selectedFilter = filterBy.value;
        const selectedDate = filterDate.value;
    
        if (selectedFilter === 'all') {
            filteredEmployees = [...employees];
        } else if (selectedFilter === 'present' || selectedFilter === 'absent' || selectedFilter === 'paid-leave') {
            filteredEmployees = employees.filter(employee => employee.status === selectedFilter);
        } else if (selectedFilter === 'date' && selectedDate) {
            filteredEmployees = employees.filter(employee => new Date(employee.date).toDateString() === new Date(selectedDate).toDateString());
        }
    
        currentIndex = 0;  // Reset index for filtered data
        loadTableData();
        filterOptions.style.display = 'none';  // Hide filter options after applying
    });
    
    // Initial load of table data
    loadTableData();
    
    seeMoreBtn.addEventListener('click', loadTableData);
    