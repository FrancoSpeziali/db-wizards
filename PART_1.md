## Part 1 - Schemas

### Task 1 - Write a .env file

Using the `.env.example` file as a template, create a `.env` file, and fill it with your MongoDB connection details
   
   > Hint: The key `DB_NAME` points to the database name

### Task 2 - Adding new fields to the Wizard schema

Our Wizard schema located in `models/Wizard.js` is not yet finished

1. Add a new field to the schema called `origin`. This should be of type `String`.

2. Update the field you just added so that it accepts ONLY one of the following strings;

   > Hint: You need to use `enum` here

```text
'Ankh-Morpork','Bad Schüschein','Betrek','Borogravia','Brindisi','Chimeria','Chirm','Copperhead','Cori Celesti','Djelibeybi','Ephebe','Ghat','Hersheba','Howondaland','Klatchistan','Lipwig','Rehigreed Province','Schmaltzberg','Skund','Sto Helit','Sto Lat','Sunken Leshp','The Chalk','The Wyrmberg','Überwald'
```

Source: [List of Discworld locations](https://wiki.lspace.org/mediawiki/List_of_Discworld_locations)

### Task 3 - Finishing the MagicSpell schema

Our MagicSpell schema located in `models/MagicSpell.js` is not yet finished

1. Add a new field to the schema called 'school'. This should be of type `String`

2. Update the field you just added so that it accepts ONLY one of the following strings

```text
'physical', 'arcane', 'fire', 'frost', 'nature', 'shadow', 'holy'
```

Source: [WoW Magic Schools](https://wowpedia.fandom.com/wiki/Magic_schools)

### Task 4 - Adding defaults to the Wizard schema

Add a default value to the following fields:

- `level` should default to **1**
- `accuracy` should default to **0.3**
- `critical` should default to **0**

### Task 5 - Adding defaults to the MagicSpell schema

Add a default value to the following fields:

- `damage` should default to **0**
- `castingTime` should default to **6**
- `level` should default to **1**
- `range` should default to **0.1**
- `areaOfEffect` should default to **false**

### Task 6 - Adding number validation to the Wizard schema

We don't want clients to add values which might go out of range from what we expect. For example, a person's age should not be below 1!

Add validation to the following number based fields, so that values do not go above or below what we expect

> Hint: Not sure how? Check out [validation](https://mongoosejs.com/docs/validation.html#built-in-validators)

- `age` should not go below **1**
- `level` should not go below **1**
- `accuracy` should not go below **0** and not above **1**
- `critical` should not go below **0** and not above **1**

### Task 7 - Adding number validation to the MagicSpell schema

Add validation to the following number based fields, so that values do not go above or below what we expect

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

### Task 9 - Linking the Wizard schema with the MagicSpell schema

A wizard would be no fun without spells, am I right? Let's give each wizard the ability to learn spells.

1. Add a new field `spells`. This will contain a reference to the MagicSpell model.

2. Set the type to `ObjectId`

3. Add a `ref` to the `MagicSpell` collection

> Now each wizard can have a spell assigned to them

### Task 10 - Extending each wizard's knowledge of spells

Unfortunately each wizard has access to 1 spell, but we want to give them the ability to hold multiple spells

Wrap the object you assigned to the field `spells` inside an array. This will make `spells` an array of `ObjectId`'s.
