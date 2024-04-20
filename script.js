document.getElementById('fetch-dog').addEventListener('click', async function() {
    const dogContainer = document.getElementById('dog-container');
    const spinner = document.querySelector('.spinner-border');
    const img = document.getElementById('dog-img');

    img.style.visibility = 'hidden';
    spinner.style.display = 'block';

    try {
        const response = await fetch ('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        
        img.onload = () => {
            spinner.style.display = 'none';
            img.style.visibility = 'visible';            
        }; 

        img.onerror = () => {
            spinner.style.displya = 'none';
            img.style.visibility = 'hidden';
            dogContainer.innerHTML += '<p>Image load failed. Please try again.</p>';
        };

        img.src = data.message;
    } catch (error) {
            console.error('Error fetching the dog image:', error);
            spinner.style.display = 'none';
            img.style.visibility = 'hidden';
            dogContainer.innerHTML = '<p>Oops! Something went wrong. Try again later.</p>'
        }
});