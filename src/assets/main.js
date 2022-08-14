const API  = "https://youtube-v31.p.rapidapi.com/search?channelId=UCNYW2vfGrUE6R5mIJYzkRyQ&part=snippet%2Cid&order=date&maxResults=50"

const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': 'd986a84cbemshd2d01d2547ea60fp19bca0jsn487b2ec9c805',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = document.getElementById('content');

async function fetchData (urlApi){
    const response = await fetch (urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchData(API);
        
        let view = `
            ${videos.items.map(video => `
                <div class="group relative">
                    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <a href="https://www.youtube.com/watch?v=${video.id.videoId}"><img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full"></a>
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                        </h3>
                    </div>
                </div>
            
            `).slice(0,8).join('')}
        `;
        content.innerHTML = view;
        
    }catch (error){
        console.log(error);
    }
})();