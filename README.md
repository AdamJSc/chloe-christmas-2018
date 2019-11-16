# Chloe Christmas 2018
**v1.1.0**

Made for Chloe to try to guess her Christmas present,
which still hadn't arrived in the post by Christmas Eve.

Built using the [Alexa Skills Kit](https://developer.amazon.com/alexa-skills-kit)
~~for "rapid prototyping"~~ because it was Christmas Eve.

Once you have cloned this repo, you'll need to generate a new ASK config file by doing the following:

* [Install the ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html)
* Run `ask new`
* Name your skill (e.g. _"ChloeChristmas2018"_)
* Run `ask deploy` (this will populate the necessary config files)
* Copy the newly created `.ask` directory into the repo root directory
* In the repo root directory:
    * `cd lambda/custom`
    * `npm install`
    * `cd ../../`
    * `ask deploy`
