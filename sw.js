
console.log("Service worker got executed")
self.addEventListener('push', () => {
    self.ServiceWorkerRegistration.sendNotification('test message', {

    });
});