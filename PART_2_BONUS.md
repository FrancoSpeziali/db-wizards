## Bonus Tasks

### Create an endpoint to return all wizard origins

You may have noticed that while trying to test your **create wizard endpoint**, you had a problem getting the `origin` field correct (remember, you used an `enum` here to validate against an array of strings)

To solve this, we will create a new endpoint that can return all wizard origins

1. Inside the `/wizard` route, create an endpoint with the path `/origins`. This endpoint should expect a GET request, and should return all the wizard origins as an array of strings.

There are 2 ways to solve this.

> **Hint (common solution)**:
>
> You will want to return the `enum` values you used when you setup your schema

> **Hint (challenging solution)**:
>
> If you want to do this programmatically (using the values directly from the schema itself)
> You can use the [schema.path()](https://mongoosejs.com/docs/schematypes.html#path) function to extract the enum values from the schema

### Write some middleware to prevent the wizard from learning a spell that is too high for them!

1. Query the **MagicSpell** for the `_id` - and find the `level` of the spell

2. Query the **Wizard** for the wizard `_id` - and find the `level` of the wizard

3. Compare the 2 values, and reject the request if the wizard is too low for the **MagicSpell**

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
