/*
 * Copyright 2018-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

// sets up dependencies
const Alexa = require('ask-sdk-core');
const i18n = require('i18next');
const languageStrings = require('./languageStrings');
//APL templates

//Home
const home_template = require('./templates/home.json');
const home_data = require('./templates/home_data.js');
const home_tok = "HomeToken";

// core functionality for fact skill
const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    // checks request type
    //We can only respond if it is a LaunchRequest or a GetFactIntent request.
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && ((request.intent.name === 'GetFactIntent') || (request.intent.name === 'AMAZON.YesIntent')));
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    // gets a random fact by assigning an array to the variable
    // the random item from the array will be selected by the i18next library
    // the i18next library is set up in the Request Interceptor
    const randomFact = requestAttributes.t('FACTS');
    // concatenates a standard message with the random fact
    const speakOutput = requestAttributes.t('GET_FACT_MESSAGE') + randomFact + " Would you like to hear another fact?";
    let responseBuilder = handlerInput.responseBuilder;
    
    if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']){
            
            // Add the RenderDocument directive to the responseBuilder
            responseBuilder.addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: home_tok,
                document: home_template,
                datasources: {
                    home_data
                    
                }
            });
    } else {
    }
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt("Would you like to hear another fact?")//Ask if user wants another fact
      .withSimpleCard(requestAttributes.t('SKILL_NAME'), randomFact)
      .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    return handlerInput.responseBuilder
      .speak(requestAttributes.t('HELP_MESSAGE'))
      .reprompt(requestAttributes.t('HELP_REPROMPT'))
      .getResponse();
  },
};

const FallbackHandler = {
  // The FallbackIntent can only be sent in those locales which support it,
  // so this handler will always be skipped in locales where it is not supported.
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.FallbackIntent';
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    return handlerInput.responseBuilder
      .speak(requestAttributes.t('FALLBACK_MESSAGE'))
      .reprompt(requestAttributes.t('FALLBACK_REPROMPT'))
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    return handlerInput.responseBuilder
      .speak(requestAttributes.t('STOP_MESSAGE'))
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    console.log(`Error stack: ${error.stack}`);
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    return handlerInput.responseBuilder
      .speak(requestAttributes.t('ERROR_MESSAGE'))
      .reprompt(requestAttributes.t('ERROR_MESSAGE'))
      .getResponse();
  },
};

const LocalizationInterceptor = {
  process(handlerInput) {
    // Gets the locale from the request and initializes i18next.
    const localizationClient = i18n.init({
      lng: handlerInput.requestEnvelope.request.locale,
      resources: languageStrings,
      returnObjects: true
    });
    // Creates a localize function to support arguments.
    localizationClient.localize = function localize() {
      // gets arguments through and passes them to
      // i18next using sprintf to replace string placeholders
      // with arguments.
      const args = arguments;
      const value = i18n.t(...args);
      // If an array is used then a random value is selected
      if (Array.isArray(value)) {
        return value[Math.floor(Math.random() * value.length)];
      }
      return value;
    };
    // this gets the request attributes and save the localize function inside
    // it to be used in a handler by calling requestAttributes.t(STRING_ID, [args...])
    const attributes = handlerInput.attributesManager.getRequestAttributes();
    attributes.t = function translate(...args) {
      return localizationClient.localize(...args);
    }
  }
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    HelpHandler,
    ExitHandler,
    FallbackHandler,
    SessionEndedRequestHandler,
  )
  .addRequestInterceptors(LocalizationInterceptor)
  .addErrorHandlers(ErrorHandler)
  .withCustomUserAgent('sample/basic-fact/v2')
  .lambda();
