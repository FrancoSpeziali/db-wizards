## Bonus Tasks

### Spellcast! 🧙 🪄 🔥

A wizard is no fun, if they can't perform their magic!

We want to make the wizard's cast a spell, with a request to an endpoint

1. Inside the `/wizard` route, create an endpoint with the path `/spellcast`. This endpoint should expect a GET request, and should expect an id as a param or a query param.

2. The wizard will perform a random spellcast, chosen from the list of his or her known spells. If the wizard knows no spells, return with the message:
   > `"{Wizard Name} knows no spells to cast."`

3. The spellcast should be in the form of a text message, which is returned from the server to the client, for example:
   > `"{Wizard Name} casts {Spell Name}, with {Wizard Accuracy} within a range of {Spell Range} metres."`

4. Calculate whether the spell "hits" based on the accuracy of the wizard. This is % based For example, if the wizard's accuracy is `0.1`, that is a `10%` chance to hit. `1` (the maximum value) is a `100%` chance to hit.
    - If the spell hits, add to the message `The spell hits!`
    - If the spell does not hit, add to the message `The spell misses!`

5. Calculate the chance to cause critical damage based on the `critical` value of the wizard. This is % based For example, if the wizard's critical is `0.1`, that is a `10%` chance to cause a critical hit `1` (the maximum value) is a `100%` chance to cause a critical hit.
    - If the wizard causes a critical hit, add to the message `Critical damage!`

6. Calculate the damage and include it in the message. For example:
   > `"The spell causes {Damage} points"`
    - The spell will cause `0` damage if it does not hit
    - The spell will cause the normal damage of the spell, if it hits
    - The spell will cause double damage`{spell damage} x 2` if it lands a critical hit
