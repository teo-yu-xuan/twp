function toggleHeadAccDrop() {
    const dropdown = document.getElementById('headAccDrop');
    const isVisible = dropdown.style.display === 'block';

    dropdown.style.display = isVisible ? 'none' : 'block';
}

window.onclick = function(event) {
    const dropdown = document.getElementById('headAccDrop');
    const arrowButton = document.querySelector('.head-acc-action');

    if (!event.target.matches('.head-acc-action') && !event.target.matches('.head-acc-drop') && !event.target.matches('.head-subacc-info')) {
        dropdown.style.display = 'none';
    }
}

function refreshNotifications() {
    alert('Notifications refreshed!');
}

function toggleNotification() {
    const notificationSidebar = document.querySelector('.head-notify-bar');
    if (notificationSidebar.style.display === 'block') {
        notificationSidebar.style.display = 'none';
    } else {
        notificationSidebar.style.display = 'block';
    }
}

function toggleSideMenu(menuId) {
    var menuContent = document.getElementById(menuId);
    var arrow = menuContent.previousElementSibling.querySelector('.side-menu-drop');

    if (menuContent.style.display === "none" || menuContent.style.display === "") {
        menuContent.style.display = "block";
        arrow.classList.add('open');
    } else {
        menuContent.style.display = "none";
        arrow.classList.remove('open');
    }
}



// Tab switching function
function changeTab(event, tabName) {
    // Hide all tables (by removing 'active' class)
    const allTables = document.querySelectorAll('.orders-table');
    allTables.forEach(table => {
        table.classList.remove('active');
    });

    // Remove active class from all tabs
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab and add active class to the clicked tab
    document.querySelector(`.${tabName}`).classList.add('active');
    event.currentTarget.classList.add('active');
}



// Ensure that the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Apply Filter functionality
    document.getElementById('applyFilters').addEventListener('click', function() {
        const orderId = document.getElementById('orderId').value;
        const shippingChannel = document.getElementById('shippingChannel').value;

        // Apply filters (Just print out for demonstration)
        console.log(`Filters Applied:
            Order ID: ${orderId}
            Shipping Channel: ${shippingChannel}`);
    });

    // Reset Filters functionality
    document.getElementById('resetFilters').addEventListener('click', function() {
        // Reset all filter fields
        document.getElementById('orderId').value = '';
        document.getElementById('shippingChannel').value = 'all';
        
        console.log('Filters Reset');
    });

    // Toggle Add Order form visibility
    document.getElementById('addOrderBtn').addEventListener('click', function() {
        document.getElementById('addOrderForm').style.display = 'block'; // Show the form
    });

    // Close Add Order form
    document.getElementById('closeForm').addEventListener('click', function() {
        document.getElementById('addOrderForm').style.display = 'none'; // Hide the form
    });

    // Submit Add Order form
    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload on form submission

        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const productStatus = document.getElementById('productStatus').value;
        const countdown = document.getElementById('countdown').value;
        const shippingChannelForm = document.getElementById('shippingChannelForm').value;

        // Display the submitted data (you can replace this with actual form submission logic)
        console.log(`Order Submitted:
            Product Name: ${productName}
            Product Price: ${productPrice}
            Order Status: ${productStatus}
            Countdown: ${countdown}
            Shipping Channel: ${shippingChannelForm}`);

        // After submission, hide the form
        document.getElementById('addOrderForm').style.display = 'none';
    });


});
