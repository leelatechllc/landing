document.addEventListener('DOMContentLoaded', function () {
    // Simulate loading time
    setTimeout(function () {
        document.querySelector('.loader-wrapper').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 3000); // Adjust the time as needed
});
