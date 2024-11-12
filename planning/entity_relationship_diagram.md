# Entity Relationship Diagram

Reference the Creating an Entity Relationship Diagram final project guide in the course portal for more information about how to complete this deliverable.

## Create the List of Tables

TABLE chefs {
    chef_id varchar [primary key]
    name varchar
    bio text
    created_at timestamp
}


      TABLE recipes {
    recipe_id varchar [primary key]
    chef_id integer
    name varchar
    description text
    cuisine_id integer
    difficulty varchar
    rating integer
    prep_time integer
    cook_time integer
    created_at timestamp
}

  TABLE ingredients {
    ingredient_id varchar [primary key]
    name varchar
    type varchar
    created_at timestamp
}

  TABLE recipe_ingredients {
    recipe_ingredient_id varchar [primary key]
    recipe_id integer
    ingredient_id integer
    quantity varchar
    unit varchar
    created_at timestamp
}

## Add the Entity Relationship Diagram

![image](https://github.com/user-attachments/assets/f80b81a7-b085-4f2d-b930-7db6e5b5a98a)


| Column Name | Type | Description |
|-------------|------|-------------|
| id | integer | primary key |
| name | text | name of the shoe model |
| ... | ... | ... |
