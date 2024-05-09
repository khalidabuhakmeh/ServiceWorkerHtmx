# HTMX with ServiceWorkers

The idea is to have ServiceWorkers handle HTMX requests and it's possible! Even though it may not be practicle in most cases.

Issues I've run into:

1. ServiceWorkers are about "progressive enhancement," that means they're really designed to cache files and respond after the initial load.
2. The ServiceWorker can be slow to load.
3. If there is **No Backend** then you'll have to work out communication between the "client" and the service worker before you let users start clicking.

Anyhow, here you go. 

I was going to blog about this, but not being able to achieve my goal that I set out to accomplish, I think this is fine being a GitHub repo oddity.