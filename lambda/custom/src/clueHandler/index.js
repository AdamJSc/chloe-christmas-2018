const clueHandler = () => {
  const _clues = [
    "The gift is a bit of card, so don't accidentally put it in a shredder.",
    "With this bit of card you'll be able to attend an event, so don't accidentally go to the wrong place.",
    "The event is in February 2019, so don't forget to take a coat with you.",
    'The event is for a music thing by a band, so make sure you attach your ears before you leave the house.',
    'The band formed in 2011 but gained notoriety in around 2014.',
    'They are British synth pop.',
    'The band have a very distinctive vocal and instrumental sound.',
    'The band are Iain, Martin and Lauren.',
    'You will not get any points in a spelling test for writing their name.',
    "The tickets were nearly £30 each, so don't accidentally not enjoy it."
  ]

  const _noMore = [
    'No more clues now, this is silly',
    "I've got nothing else for you, sorry",
    "I don't know anything else, surely you've got it by now?!"
  ]

  this.get = function (cluePosition) {
    const getRandomNoMore = () => {
      const index = parseInt(Math.random() * _noMore.length)
      return _noMore[index]
    }

    if (!_clues.hasOwnProperty(cluePosition)) {
      return {
        number: 0,
        body: getRandomNoMore()
      }
    }

    return {
      number: (cluePosition + 1),
      body: _clues[cluePosition]
    }
  }

  return this
}

module.exports = clueHandler()
