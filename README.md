# Mongoose Wizards!

![Wizard](./wizard.gif)

This assignment will allow you to build a complete REST API for a magical wizard database!

## What you will be doing:

You will be completing a REST API for a wizard database. You will need to;

- Complete the schemas
- Create endpoints for the API

## Tasks

Before starting these tasks, run the command `npm install` or `npm i`

### Task 1 - Write a .env file

1. Using the `.env.example` file as a template, create a `.env` file

2. Add your database connection details to your `.env` file, filling in the details as provided to you by MongoDB
   > Hint: The key `DB_NAME` points to the name of the database you want to connect to. Use the name `db-validation`. This will ensure that Mongoose will try and use the existing sample dataset you previously set up.

   > Hint: The key `DB_HOST` is the **domain** of your MongoDB connection string

### Task 2 - Adding new fields to the Wizard schema

Our Wizard schema located in `models/Wizard.js` is not yet finished. Let's update it.

1. Add a new field to the schema called 'origin'. This should be of type `String`

2. Update the field you just added so that it accepts ONLY one of the following strings;

   > **Hint:** You need to use `enum` here

```text
'Ankh-Morpork','Bad Schüschein','Betrek','Borogravia','Brindisi','Chimeria','Chirm','Copperhead','Cori Celesti','Djelibeybi','Ephebe','Ghat','Hersheba','Howondaland','Klatchistan','Lipwig','Rehigreed Province','Schmaltzberg','Skund','Sto Helit','Sto Lat','Sunken Leshp','The Chalk','The Wyrmberg','Überwald'
```

Source: [List of Discworld locations](https://wiki.lspace.org/mediawiki/List_of_Discworld_locations)

### Task 3 - Finishing the MagicSpell schema

Our MagicSpell schema located in `models/MagicSpell.js` is not yet finished. Let's update it.

1. Add a new field to the schema called 'school'. This should be of type `String`

2. Update the field you just added so that it accepts ONLY one of the following strings

```text
'physical', 'arcane', 'fire', 'frost', 'nature', 'shadow', 'holy'
```

Source: [WoW Magic Schools](https://wowpedia.fandom.com/wiki/Magic_schools)

### Task 4 - Adding more properties to the Wizard schema

Some fields are required. We must make sure the client supplies them.

1. Add the `required` property to the following fields:

   - `name`
   - `description`
   - `age`
   - `origin`

For those fields which are not required, we will give them a default value, if the client does not submit them

2. Add a default value to the following fields:

   - `level` should default to **1**
   - `accuracy` should default to **0.3**
   - `critical` should default to **0**

### Task 5 - Adding more properties to the MagicSpell schema

1. Add the `required` property to the following fields:

   - `name`
   - `description`
   - `school`
   - `damage`

2. Add a default value to the following fields:

   - `castingTime` should default to **6**
   - `level` should default to **1**
   - `range` should default to **0.1**
   - `areaOfEffect` should default to **false**

### Task 6 - Adding number validation to the Wizard schema

We don't want clients to add values which might go out of range from what we expect. For example, a person's age should not be below 1!

1. Add validation to the following number based fields, so that values do not go above or below what we expect

> **Hint:**
>
> You need to use `min` or `max` here

- `age` should not go below **1**
- `level` should not go below **1**
- `accuracy` should not go below **0** and not above **1**
- `critical` should not go below **0** and not above **1**

### Task 7 - Adding number validation to the MagicSpell schema

1. Add validation to the following number based fields, so that values do not go above or below what we expect

- `cost` should not go below **1**
- `damage` should not go below **0**
- `castingTime` should not go below **0**
- `level` should not go below **1**
- `range` should not go below **0**

### Task 8 - Adding a subdocument to the Wizard schema

1. Add a new field `energy`. This will contain the subdocument

2. Add the following fields to the `energy` subdocument. They will all be of type `Number`.

   - `health`
   - `stamina`
   - `magic`

3. Add default values to each of these fields

   - `health` should default to **1**
   - `stamina` should default to **10**
   - `magic` should default to **100**

4. Add validation to these fields

   - `health` should not go below **0**
   - `stamina` should not go below **0**
   - `magic` should not go below **0**

## Task 9 - Linking the Wizard schema with the MagicSpell schema

A wizard would be no fun without spells, am I right?

Let's give each wizard the ability to learn spells

We will reference the MagicSpell model by the `ObjectId`

1. Add a new field `spells`. This will contain a reference to the MagicSpell model. Assign an empty object to this field.

2. Add a property `type`, and assign to it the value `mongoose.Schema.Types.ObjectId`

3. Add a property `ref` and assign to it the following string `'MagicSpell'`

> Now each wizard can have a spell assigned to them

### Task 10 - Extending each wizard's knowledge of spells

Unfortunately what we've done here will only allow each wizard to have access to 1 spell, but we want to give them the ability to hold multiple spells

1. Wrap the object you assigned to the field `spells` inside an array. For example:

```javascript
{
   spells: { type: mongoose.Schema.Types.ObjectId, ref: 'MagicSpell' }
}

```

becomes

```javascript
{
   spells: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MagicSpell' }]
}
```

This means the field `spells` is essentially an array of `ObjectId`'s

### Task 11 - Preparing our server to receive requests

In the next tasks, we will create a REST API so that clients can connect and perform actions on our server. To do this, we must first begin with a few steps:

1. Install the npm package `cors`

2. Import and add `cors` to your middleware stack. This will prevent the dreaded same origin policy error in your browser.

   > Remember to run your middleware before any of your routes!

3. Run `express.json()` as middleware. This will allow any JSON sent for example, with a POST request, to be correctly read by the server.

### Task 12 - Creating the spells

We have our schemas and models all setup, but we need data!

1. Using the `/magic-spell` route (setup in the file `routes/magic-spell.js`), create an endpoint which will allow the user to create a spell via JSON from a POST request.
   - I would suggest the path `/create` (which together with the route would be `/magic-spell/create`) but feel free to use a path of your choosing, if you so wish.

   - This endpoint should create a new spell in the database

2. Create at least 1 spell into your database

> Use your imagination!

### Task 13 - Upload spell data

We will add some spells to our database

Using either;

1) The web interface for MongoDB, 
2) _or_ a GUI such as [MongoDB Compass](https://www.mongodb.com/products/compass)

upload the file `./data/MagicSpells.json` into your magic spells collection

> If you do not have access to these tools, you can also use the endpoint you created in Task 12 - but you will have to send each JSON object individually

## Task 14 - Create an endpoint to return all magic spells

We would like our client to view all spells in the database

Using the `/magic-spell` route, create an endpoint which will allow the user to view all spells in the database
- I would suggest the path `/all`

- This endpoint should return all spells in the database

### Task 15 - Create an endpoint to return all magic spell schools

You may have noticed that while trying to test your create magic spell endpoint, you had trouble with the spell schools (remember, you used an `enum` here to validate against an array of strings)

To solve this, we will create a new endpoint that can return all the magic spell schools

1. Inside the `/magic-spell` route, create an endpoint with the path `/schools`. This endpoint should expect a GET request, and should return all the magic spell schools as an array of strings

### Task 16 - Creating the wizard's route and endpoints

Let's turn our attention to the wizards

1. Create a new route `/wizard`, and create a new file `wizard.js` for the route in `/routes`

1. Using the `/wizard` route create an endpoint which will allow the user to create a wizard via JSON from a POST request.
   - I would suggest the path `/create` (which together with the route would be `/wizard/create`) but feel free to use a path of your choosing, if you so wish.

   - This endpoint should create a new wizard in the database

2. Create at least 1 wizard into your database - but leave the `'spells'` field empty (we will add these later)

> Use your imagination!

### Task 17 - Upload wizard data

Upload the file `./data/Wizards.json` into your wizards collection

### Task 18 - Create an endpoint to return all wizards

We would like our client to view all wizards in the database

Using the `/wizard` route, create an endpoint which will allow the user to view all wizards in the database
- I would suggest the path `/all`

- This endpoint should return all wizards in the database

### Task 19 - Create an endpoint to return all wizard origins

You may have noticed that while trying to test your create wizard endpoint, you had trouble with the origins (remember, you used an `enum` here to validate against an array of strings)

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

### Task 20 - Create a route to read a spell

1. Inside the `/magic-spell` route, create an endpoint with the path `/details`. This endpoint should expect a GET request, and should expect an id as a param or a query param. The id will be the ObjectId of the spell. It should return all the details of the spell.
   - Use the mongoose model method `findById()`
   - `findById()` expects one argument - the ObjectId of the item you are searching for

> **Hint:**
>
> A param looks like `/:id` and uses `request.params`
>
> A query param uses `request.query`

### Task 21 - Create a route to read a wizard

1. Inside the `/wizard` route, create an endpoint with the path `/details`. This endpoint should expect a GET request, and should expect an id as a param or a query param. The id will be the ObjectId of the wizard. It should return all the details of a wizard.
   - Use the mongoose model method `findById()`
   - `findById()` expects one argument - the ObjectId of the item you are searching for

> **Hint:**
>
> A param looks like `/:id` and uses `request.params`
>
> A query param uses `request.query`

### Task 22 - Adding spells to a wizard

A wizard is no fun without spells! We will create an endpoint to allow a wizard to learn a spell

1. Inside the `/wizard` route, create an endpoint with the path `/learn`. This endpoint should expect a PATCH request, and should expect two pieces of information - the `id` of the wizard to update and the `id` of the spell they will learn. Both `id`s will refer to the ObjectId.

> **Hint:**
>
> You could send both of these pieces of information as a `param` or as part of the `request.body`

> CHALLENGE 😈: Write some middleware to prevent the wizard from learning a spell that is too high for them! You will need to:
>
> 1. Query the `MagicSpell` Model with the spell `id` - and find the `level` of the spell
> 2. Query the `Wizard` Model with the wizard `id` - and find the `level` of the wizard
> 3. Compare the 2 values, and reject the request if the wizard is too low for the spell

## Task 23 - Level up a wizard

A wizard should be able to level up, when they have enough experience

1. Inside the `/wizard` route, create an endpoint with the path `/levelup`. This endpoint should expect a `PATCH` request.
   - Use the mongoose model method `findByIdAndUpdate()`
   - `findById()` expects one argument - an object. Modify the level of the wizard by `+1`

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
