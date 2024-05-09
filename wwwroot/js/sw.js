let count = 0;

self.addEventListener('install', function(event) {
    console.log("installing...");
    return self.skipWaiting(); // Added
});

self.addEventListener("activate", (event) => {
    console.log("activating...");
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
    
    if (event.request.headers.has("HX-Request")) {
        const url = event.request.url;

        function renderCount() {
            console.log("handle fetch");
            event.respondWith(new Response(
                `<span id="count">${count}</span>`,
                {
                    headers: {'Content-Type': 'text/html'}
                })
            );
        }

        if (url.endsWith("/load")) {
            renderCount();
        }

        if (url.endsWith("/count")) {
            count++;
            renderCount();
        }

        if (url.endsWith("/reset")) {
            count = 0;
            renderCount();
        }
    }
});



