const https = require('https');

function get_image(query) {
    return new Promise((resolve) => {
        const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${query}`;
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    const pages = json.query.pages;
                    for (const id in pages) {
                        if (pages[id].original) {
                            resolve(pages[id].original.source);
                            return;
                        }
                    }
                } catch (e) {}
                resolve(null);
            });
        }).on('error', () => resolve(null));
    });
}

async function run() {
    const queries = ['Excavator', 'Bulldozer', 'Loader_(equipment)', 'Dump_truck', 'Grader', 'Crane_(machine)'];
    for (const q of queries) {
        const img = await get_image(q);
        console.log(`${q}: ${img}`);
    }
}

run();
