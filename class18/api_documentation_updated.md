# API Documentation

## Base URL

    http://localhost:3000/api

------------------------------------------------------------------------

# Auth Routes (`/auth`)

## Register User

**POST** `/auth/register`\
\### Body

``` json
{
  "username": "john",
  "email": "john@example.com",
  "password": "123456"
}
```

### Response

``` json
{
  "message": "User registered",
  "user": {
    "_id": "userid",
    "username": "john",
    "email": "john@example.com"
  }
}
```

------------------------------------------------------------------------

## Login User

**POST** `/auth/login`\
\### Body

``` json
{
  "email": "john@example.com",
  "password": "123456"
}
```

### Response

``` json
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

------------------------------------------------------------------------

## Logout User

**POST** `/auth/logout`\
\### Headers

    Authorization: Bearer <token>

### Response

``` json
{ "message": "Logged out successfully" }
```

------------------------------------------------------------------------

## Get Current User Details

**GET** `/auth/me` \### Headers

    Authorization: Bearer <token>

### Response

``` json
{
  "_id": "userid",
  "username": "john",
  "email": "john@example.com"
}
```

------------------------------------------------------------------------

# Recipe Routes (`/recipe`)

## Add Recipe to Favorites

**POST** `/recipe/favorite/:id`\
\### Headers

    Authorization: Bearer <token>

### Response

``` json
{ "message": "Added to favorites" }
```

------------------------------------------------------------------------

## Remove Recipe from Favorites

**DELETE** `/recipe/favorite/:id`\
\### Headers

    Authorization: Bearer <token>

### Response

``` json
{ "message": "Removed from favorites" }
```

------------------------------------------------------------------------

## Get All Favorite Recipes

**GET** `/recipe/favorites`\
\### Headers

    Authorization: Bearer <token>

### Response

``` json
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

------------------------------------------------------------------------

# Home Routes (`/example`)

## Get Example Index

**GET** `/example/`

## Get Server Date

**GET** `/example/date`
