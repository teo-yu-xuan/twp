function toggleDropdown() {
    const dropdown = document.getElementById('subaccountDropdown');
    const isVisible = dropdown.style.display === 'block';

    dropdown.style.display = isVisible ? 'none' : 'block';
}

window.onclick = function(event) {
    const dropdown = document.getElementById('subaccountDropdown');
    const arrowButton = document.querySelector('.arrow');

    if (!event.target.matches('.arrow') && !event.target.matches('.subaccount-dropdown') && !event.target.matches('.subaccount-info')) {
        dropdown.style.display = 'none';
    }
}

function refreshNotifications() {
    alert('Notifications refreshed!');
}

function toggleNotification() {
    const notificationSidebar = document.querySelector('.notification-sidebar');
    if (notificationSidebar.style.display === 'block') {
        notificationSidebar.style.display = 'none';
    } else {
        notificationSidebar.style.display = 'block';
    }
}
