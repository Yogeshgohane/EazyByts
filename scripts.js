document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.getElementById('news-container');

    // Example news data
    const newsData = [
        {
            title: 'News Article 1',
            description: 'This is the description for news article 1.'
        },
        {
            title: 'News Article 2',
            description: 'This is the description for news article 2.'
        },
        {
            title: 'News Article 3',
            description: 'This is the description for news article 3.'
        }
    ];

    // Function to render news articles
    function renderNewsArticles(newsData) {
        newsData.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.className = 'news-article';
            articleDiv.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
            `;
            newsContainer.appendChild(articleDiv);
        });
    }

    // Fetch news data and render articles
    renderNewsArticles(newsData);
});