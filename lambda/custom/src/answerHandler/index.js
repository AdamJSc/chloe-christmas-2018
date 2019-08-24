const answerHandler = () => {
  const _getRejection = () => {
    const rejections = [
      'Are you for real? No, what a stupid answer',
      "That's very incorrect. Sorry...",
      "That's the wrong answer",
      'Nope',
      "That's not it, try harder",
      "It's good but it's not right",
      "That's not it, try harder"
    ]
    return rejections[parseInt(Math.random() * rejections.length)]
  }

  this.determine = (answer) => {
    if (answer === 'churches') {
      return {
        status: 'correct',
        message: "You've got it! Your present is two tickets to see Chuh Verh Chiz at the O2 Academy in Bournemouth " +
        'on Tuesday 12th February 2019. ' +
        'Hopefully Ticketmaster will have posted them out to you by then. ' +
        'Well done, and hope you enjoyed playing Guess The Gift. Merry Christmas once again, and bye!!'
      }
    }

    return { status: 'incorrect', message: _getRejection() }
  }

  return this
}

module.exports = answerHandler()
