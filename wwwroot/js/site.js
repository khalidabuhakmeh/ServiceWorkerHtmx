if (navigator && navigator.serviceWorker) {
    const registration = await navigator.serviceWorker.register('/js/sw.js', {
        scope: "/",
        type: "module",
        updateViaCache: "none"
    });
}