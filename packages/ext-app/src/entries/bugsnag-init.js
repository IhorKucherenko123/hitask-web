const bugsnag = require('bugsnag-js');

const Bugsnag = bugsnag({
	apiKey: __BUGSNAG_API_KEY__,
	appVersion: __APP_VERSION__,
	releaseStage: __ENV__,
});

Bugsnag.beforeNotify = error => {
	error.stacktrace = error.stacktrace.replace(/chrome-extension:/g, 'chrome_extension:');
};

window.Bugsnag = Bugsnag;
