document.addEventListener('DOMContentLoaded', () => {
    const phoneContainer = document.querySelector('.phone-container');
    
    // --- Navigation Logic ---
    phoneContainer.addEventListener('click', (event) => {
        const targetScreenId = event.target.closest('[data-target]')?.dataset.target;
        const isBackButton = event.target.classList.contains('back-button');

        if (targetScreenId) {
            navigateTo(targetScreenId);
        } else if (isBackButton) {
            goBack();
        }
    });

    function navigateTo(screenId) {
        // Implement a simple navigation stack for "back" functionality
        const currentScreen = document.querySelector('.screen.active');
        const nextScreen = document.getElementById(screenId);

        if (currentScreen && nextScreen) {
            currentScreen.classList.remove('active');
            nextScreen.classList.add('active');
            // In a real advanced demo, you'd add JS to trigger CSS sliding animations here
        }
    }
    
    function goBack() {
        // Simple back logic (requires a more robust stack for full navigation history)
        // For this example, we just go back to home
        navigateTo('home-screen'); 
    }

    // --- Dynamic Live Tiles ---
    function startLiveTiles() {
        const liveTiles = document.querySelectorAll('.tile.large');
        liveTiles.forEach(tile => {
            // Start the CSS animation by adding a class
            setTimeout(() => {
                 tile.classList.add('flipped');
            }, Math.random() * 2000); // Stagger the flips randomly
           
            // Optional: JS to update tile content dynamically (e.g., fetch real weather data)
            // Example: Update the weather details every minute
            setInterval(() => {
                const temp = Math.floor(Math.random() * 20) + 60; // Random temp
                tile.querySelector('.front').textContent = `Weather: ${temp}°F`;
                tile.querySelector('.back').textContent = `Updated: ${new Date().toLocaleTimeString()}`;
            }, 60000);
        });
    }

    startLiveTiles();
});
