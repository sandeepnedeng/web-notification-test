
console.log("Service worker got executed")
self.addEventListener('push', () => {
    self.ServiceWorkerRegistration.showNotification('test message', {

    });
});