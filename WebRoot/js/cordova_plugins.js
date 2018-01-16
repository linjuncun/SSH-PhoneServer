cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.networkinformation/www/network.js",
        "id": "org.apache.cordova.networkinformation.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
     {
        "file": "plugins/org.apache.cordova.networkinformation/www/Connection.js",
        "id": "org.apache.cordova.networkinformation.Connection",
        "clobbers": [
            "Connection"
        ]
    },
     {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
		{
		"file" : "plugins/org.apache.cordova.camera/www/CameraConstants.js",
		"id" : "org.apache.cordova.camera.Camera",
		"clobbers" : [ "Camera" ]
	},
	{
		"file" : "plugins/org.apache.cordova.camera/www/CameraPopoverOptions.js",
		"id" : "org.apache.cordova.camera.CameraPopoverOptions",
		"clobbers" : [ "CameraPopoverOptions" ]
	},
	{
		"file" : "plugins/org.apache.cordova.camera/www/Camera.js",
		"id" : "org.apache.cordova.camera.camera",
		"clobbers" : [ "navigator.camera" ]
	},
	{
		"file" : "plugins/org.apache.cordova.camera/www/CameraPopoverHandle.js",
		"id" : "org.apache.cordova.camera.CameraPopoverHandle",
		"clobbers" : [ "CameraPopoverHandle" ]
	},
	{
		"file" : "plugins/com.phonegap.plugins.barcodescanner/www/barcodescanner.js",
		"id" : "com.phonegap.plugins.barcodescanner.barcodescanner",
		"clobbers" : [ "barcodescanner" ]
	},
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open1"
        ]
    },
    {
		"file" : "plugins/com.phonegap.plugins.datepicker/www/datepicker.js",
		"id" : "com.phonegap.plugins.datepicker.datepicker",
		"clobbers" : [ "datePicker" ]
	},
    {
        "file": "plugins/com.gldjc.guangcaiclient/www/gcapp.js",
        "id": "com.gldjc.guangcaiclient.gcapp",
        "clobbers": [
            "gcapp"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device": "0.2.13"
}
// BOTTOM OF METADATA
});