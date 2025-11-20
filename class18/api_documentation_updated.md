# API Documentation

## Base URL

    http://localhost:3000/api

---

# Auth Routes (`/auth`)

## Register User

**POST** `/auth/register`\
\### Body

```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "123456"
}
```

### Response

```json
{
  "message": "User registered",
  "user": {
    "_id": "userid",
    "username": "john",
    "email": "john@example.com"
  }
}
```

---

## Login User

**POST** `/auth/login`\
\### Body

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

### Response

```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "_id": "userid",
    "username": "john",
    "email": "john@example.com"
  }
}
```

---

## Logout User

**POST** `/auth/logout`\
\### Headers

    Authorization: Bearer <token>

### Response

```json
{ "message": "Logged out successfully" }
```

---

## Get Current User Details

**GET** `/auth/me` \### Headers

    Authorization: Bearer <token>

### Response

```json
{
  "_id": "userid",
  "username": "john",
  "email": "john@example.com"
}
```

---

# Recipe Routes (`/recipe`)

## Get All Recipes

**GET** `/recipe/`\
\### Headers

    Authorization: Bearer <token>

### Response

```json
{
    "count": 30,
    "recipes": [
        {
            "_id": "691c2c96e0c4f2f419bffcb6",
            "title": "Classic Margherita Pizza",
            "ingredients": [
                "Pizza dough",
                "Tomato sauce",
                "Fresh mozzarella cheese",
                "Fresh basil leaves",
                "Olive oil",
                "Salt and pepper to taste"
            ],
            "instructions": "Preheat the oven to 475°F (245°C). Roll out the pizza dough and spread tomato sauce evenly. Top with slices of fresh mozzarella and fresh basil leaves. Drizzle with olive oil and season with salt and pepper. Bake in the preheated oven for 12-15 minutes or until the crust is golden brown. Slice and serve hot.",
            "steps": "Preheat the oven to 475°F (245°C).\nRoll out the pizza dough and spread tomato sauce evenly.\nTop with slices of fresh mozzarella and fresh basil leaves.\nDrizzle with olive oil and season with salt and pepper.\nBake in the preheated oven for 12-15 minutes or until the crust is golden brown.\nSlice and serve hot.",
            "prepTime": 20,
            "cookTime": 15,
            "servings": 4,
            "category": "Dinner",
            "tags": [
                "Pizza",
                "Italian"
            ],
            "__v": 0,
            "createdAt": "2025-11-18T08:21:42.555Z",
            "updatedAt": "2025-11-18T08:21:42.555Z"
        },
        .....
    ]
  }
```

## Add Recipe to Favorites

**POST** `/recipe/favorite/:id`\
\### Headers

    Authorization: Bearer <token>

### Response

```json
{ "message": "Added to favorites" }
```

---

## Remove Recipe from Favorites

**DELETE** `/recipe/favorite/:id`\
\### Headers

    Authorization: Bearer <token>

### Response

```json
{ "message": "Removed from favorites" }
```

---

## Get All Favorite Recipes

**GET** `/recipe/favorites`\
\### Headers

    Authorization: Bearer <token>

### Response

```json
[
  {
    "_id": "recipeid",
    "title": "Pasta",
    "ingredients": ["salt", "noodles"],
    "instructions": "Boil water...",
    "prepTime": 10,
    "cookTime": 15
  }
]
```

---

# Home Routes (`/example`)

## Get Example Index

**GET** `/example/`

## Get Server Date

**GET** `/example/date`
