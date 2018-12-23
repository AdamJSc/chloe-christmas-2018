/* eslint-disable  func-names */
/* eslint-disable  no-console */

// require Alexa
const Alexa = require('ask-sdk-core');

// require session handler
const session = require('./src/sessionHandler');

// require skill
const skill = require('./src/skill');

// clue response builder
const buildClueResponse = (handlerInput) => {
	let cluePosition = session.get('cluePosition');
	let clue = skill.clues.get(cluePosition);

	if (clue.number === 0) {
		return handlerInput.responseBuilder
      .speak(clue.body)
      .withSimpleCard("No more clues!", clue.body)
      .withShouldEndSession(false)
      .getResponse();
  }

	// increment clue position
	session.set('cluePosition', cluePosition + 1);

  let cardTitle = "Clue number " + clue.number;
	let cardBody = clue.body;
	let speechText = cardTitle + "... " + cardBody;

	if (clue.number === 1) {
	  speechText = "Ok, here we go! " + speechText;
  }

	return handlerInput.responseBuilder
		.speak(speechText)
		.withSimpleCard(cardTitle, cardBody)
		.withShouldEndSession(false)
		.getResponse();
}

// begin handlers...

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {

    // set clue position to 0
	  session.set('cluePosition', 0);

	  return handlerInput.responseBuilder
		  .speak("intro text")
		  .reprompt("intro prompt")
		  .getResponse();

    return handlerInput.responseBuilder
      .speak(skill.intro.main)
	    .shouldEndSession(false)
      .reprompt(skill.intro.prompt)
      .withSimpleCard(skill.intro.title, skill.intro.main)
      .getResponse();
  },
};

const PositiveIntentHandler = {
	canHandle(handlerInput) {
		return handlerInput.requestEnvelope.request.type === 'IntentRequest'
			&& handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent';
	},
	handle(handlerInput) {
		if (session.get('inPlay') !== true) {
			session.set('inPlay', true);
			return buildClueResponse(handlerInput);
    }

	}
};

const NextClueIntentHandler = {
	canHandle(handlerInput) {
		return handlerInput.requestEnvelope.request.type === 'IntentRequest'
			&& handlerInput.requestEnvelope.request.intent.name === 'NextClueIntent';
	},
	handle(handlerInput) {
		return buildClueResponse(handlerInput);
	}
};

const HelloWorldIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },
  handle(handlerInput) {
    const speechText = 'Hello World!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'You can say hello to me!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
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

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    PositiveIntentHandler,
    NextClueIntentHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
