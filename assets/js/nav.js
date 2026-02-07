// Mobile menu toggle
function toggleMenu() {
    var navLinks = document.getElementById('navLinks');
    var menuToggle = document.querySelector('.menu-toggle');

    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// Desktop hover + mobile click dropdown behavior
document.addEventListener('DOMContentLoaded', function() {
    var dropdownItems = document.querySelectorAll('.has-dropdown');
    var dropdownTimeout;

    dropdownItems.forEach(function(item) {
        var trigger = item.querySelector('.dropdown-trigger');

        // Mouse enter - show dropdown (desktop only)
        item.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                clearTimeout(dropdownTimeout);
                this.classList.add('active');
            }
        });

        // Mouse leave - hide dropdown with small delay (desktop only)
        item.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                var self = this;
                dropdownTimeout = setTimeout(function() {
                    self.classList.remove('active');
                }, 100);
            }
        });

        // Click on trigger (mobile)
        trigger.addEventListener('click', function(event) {
            event.preventDefault();
            if (window.innerWidth <= 768) {
                item.classList.toggle('active');
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.has-dropdown')) {
            dropdownItems.forEach(function(item) {
                item.classList.remove('active');
            });
        }
    });
});
