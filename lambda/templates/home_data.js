/* this provides icon handling */

const utils = require('util.js');
const mediaUrl = utils.getS3PreSignedUrl("Media/APP_ICON.png");
module.exports = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Welcome to Astro Facts"
                }
            },
            "logoUrl": `${mediaUrl}`,
            "hintText": "Try, \"Alexa, open Astro Facts\""
        },
        "transformers": [
            {
                "inputPath": "welcomeSpeechSSML",
                "transformer": "ssmlToSpeech",
                "outputName": "welcomeSpeech"
            }
        ]
    }
}