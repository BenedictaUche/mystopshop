const url = 'https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US';
async function options() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7bbfb55acbmsh0e6aacc679a727ap14e711jsn0bdb1d5d5029',
                'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const result = await response.json();
        console.log(result);
        const results = result.navigation;

        const ul = document.createElement('ul');
        results.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });

        document.body.appendChild(ul);
    }
    catch (error) {
        console.error(error);
    }

};

options();

