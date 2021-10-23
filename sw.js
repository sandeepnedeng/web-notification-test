
console.log("Service worker got executed")
self.addEventListener('push', (e) => {

    e.waitUntil(self.registration.showNotification('Hello Worols'));
});