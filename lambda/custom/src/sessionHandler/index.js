const sessionHandler = () => {
	let _handlerInput = {};

	const _getSessionAttributes = () => {
		return _handlerInput.attributesManager.getSessionAttributes();
	};

	this.load = (handlerInput) =>{
		_handlerInput = handlerInput;
	};

	this.get = (key) => {
		try {
			let attrs = _getSessionAttributes();
			return attrs.hasOwnProperty(key) ? attrs[key] : null;
		} catch (e) {
			return null;
		}
	};

	this.set = (key, val) => {
		try {
			let attrs = _getSessionAttributes();
			attrs[key] = val;
			_handlerInput.attributesManager.setSessionAttributes(attrs);
			return attrs;
		} catch (e) {
			return null;
		}
	};

	return this;
}

module.exports = sessionHandler();
