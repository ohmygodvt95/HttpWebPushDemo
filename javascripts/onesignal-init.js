window.OneSignal = window.OneSignal || [];
var initOptions = {
  appId: "53d35e0d-99c9-49ef-ac83-be5fefa16165",
  autoRegister: true,
  notifyButton: {
    enable: true
  }
};

OneSignal.push(function() {
  OneSignal.init(initOptions);
});
