/* Warbler Introduction and Backend Part 1

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Introduction to Authentication

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

>> Define one way password hashing
>> Define JSON Web Tokens (JWT)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

One Way Hashing

>> Converting data into a fixed length hash string. You can only recreate the hash if you know the original data.
>> Applicable for saving passwords on your server

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

One Way Hashing Example

password -> bcrypt -> $2a$10$9Mconplm8A780pY6iB2q.eBwkdldFbnz2tSH2uqHEi5B9KTpR3O8.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Sign In (Authentication)

Saved In DB: $2a$10$9Mconplm8A780pY6iB2q.eBwkdldFbnz2tSH2uqHEi5B9KTpR3O8.

Equal?

password -> bcrypt -> $2a$10$9Mconplm8A780pY6iB2q.eBwkdldFbnz2tSH2uqHEi5B9KTpR3O8. 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Trouble With Passwords

>> Users do not want to enter their passwords on every page
>> We need some proof that you have logged in in the past

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

JWT (JSON Web Token)
> A web standard for storing signed data
> We can use JWTs as proof that you've logged in before

JWT Format

Header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
Payload: eyJ1c2VySWQiOiIxMjM0In0.
Signature: kud-czcx6yOSSQgB0lKbibHNFmlAJwrV8iRQ1Ha-r-Q

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

JWT (JSON Web Token)
Creating a token
https://jwt.io/

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Sending JWT To Server
HTTP Header
Authorization: Bearer <JWT>

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
