const skill = () => {

	let clues = require('../clueHandler');

	const answerHandler = require('../answerHandler');

	this.intro = function() {

		this.title = function() {
			return "Merry Christmas Chloe!";
		}();

		this.main = function() {
			return "Merry Christmas Chloe!\n"
				+ "Adam has bought you a gift but it hasn't arrived in the post yet. "
				+ "He could've just printed out the email confirmation but it would've been tacky and shit. "
				+ "So instead, he's asked me to help you work out what it is. "
				+ "He's told me a little bit about it, so I can give you some clues. "
				+ "Then you'll be able to guess it correctly and get a warm fuzzy feeling inside which hopefully isn't just indigestion. "
				+ "If you think you know what it is at any point, just ask me and I'll tell you whether you're right or not. "
				+ "Would you like to hear your first clue?";
		}();

		this.prompt = function() {
			return "Would you like to hear your first clue?";
		}();

		return this;

	}();

	this.clues = function() {

		this.get = (cluePosition) => {
			return clues.get(cluePosition);
		}

		return this;

	}();

	this.guess = function() {

		this.make = (answer) => {
			return answerHandler.determine(answer);
		}

		return this;

	}();

	return this;

}

module.exports = skill();
