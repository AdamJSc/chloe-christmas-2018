const clueHandler = () => {

	let clues = [
		"The gift is a bit of card, so don't accidentally put it in a shredder.",
		"With this bit of card you'll be able to attend an event, so don't accidentally go to the wrong place.",
		"The event is in February 2019, so don't forget to take a coat with you.",
		"The event is for a music thing by a band, so make sure you attach your ears before you leave the house.",
		"The band came out in about 2014."
	];

	let noMore = [
		"No more clues now, this is silly",
		"I've got nothing else for you, sorry",
		"I don't know anything else, surely you've got it by now?!"
	];

	this.get = function(cluePosition) {
		const getRandomNoMore = () => {
			const index = parseInt(Math.random() * noMore.length);
			return noMore[index];
		};

		if (!clues.hasOwnProperty(cluePosition)) {
			return {
				number: 0,
				body: getRandomNoMore()
			};
		}

		return {
			number: (cluePosition + 1),
			body: clues[cluePosition]
		};
	};

	return this;

};

module.exports = clueHandler();
