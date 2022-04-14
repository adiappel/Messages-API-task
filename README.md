# Messages-API-task
The task is to write a simple rest API backend system that is responsible for handling messages between users.

Hosted server on Heroku: https://messages-api-nodejs.herokuapp.com/

*Get all messages: 
GET https://messages-api-nodejs.herokuapp.com/messages

*Write message:
POST https://messages-api-nodejs.herokuapp.com/messages
example -

Body: { 
  "sender": "me",
  "receiver": "you",
  "subject": "Hi",
  "message": "This is a message" 
}

*Get all messages for a specific user (enter in username)
GET https://messages-api-nodejs.herokuapp.com/messages/user/username

*Get all unread messages for a specific user (enter in username)
GET https://messages-api-nodejs.herokuapp.com/messages/user/username/unread

*Read message (return one message, enter message's "_id" in messageId)
GET https://messages-api-nodejs.herokuapp.com/messages/messageId

*Delete message (as owner or as receiver, enter message's "_id" in messageId)
DELETE https://messages-api-nodejs.herokuapp.com/messages/messageId

-----------------------------------------------------------------------------
  
Postman requests example:
1. Check that there aren't any messages at this point:
---------------------
    GET https://messages-api-nodejs.herokuapp.com/messages
2. Write a message:
---------------------
    POST https://messages-api-nodejs.herokuapp.com/messages
    Body:
    {
      "sender": "Ross",
      "receiver": "Rachel",
      "subject": "Rach come on",
      "message": "WE WERE ON A BREAK"
    }
 3. Check if Rachel got Ross's message:
 ---------------------
    GET https://messages-api-nodejs.herokuapp.com/messages/user/Rachel
    Copy the message "_id" (messageId) so we can read it
 4. Read Ross's message
 ---------------------
    GET https://messages-api-nodejs.herokuapp.com/messages/messageId
 5. Write a message:
 ---------------------
    POST https://messages-api-nodejs.herokuapp.com/messages
    Body:
    {
      "sender": "Ross",
      "receiver": "Rachel",
      "subject": "Rach please",
      "message": "I'm sorry, You're my lobster."
    }
  6. Check if Rachel has a new unread message:
  ---------------------
    GET https://messages-api-nodejs.herokuapp.com/messages/user/Rachel/unread
  7. Check that we now have two messages, both from Ross, 1 read and 1 unread.
  ---------------------
    GET https://messages-api-nodejs.herokuapp.com/messages
    Copy the unread message "_id" (messageId) so we can delete it
  8. Delete Ross's second message without reading it:
  ---------------------
    DELETE https://messages-api-nodejs.herokuapp.com/messages/messageId
  9. Check Rachel's messages, she has only one message she already read:
  ---------------------
    GET https://messages-api-nodejs.herokuapp.com/messages/user/Rachel
  10. Write a message:
  ---------------------
    POST https://messages-api-nodejs.herokuapp.com/messages
    Body:
    {
      "sender": "Rachel",
      "receiver": "Ross",
      "subject": "I wrote you a letter",
      "message": "You told me you've read it so.. does it?"
    }
  11. Check Ross's new unread message:
  ---------------------
    GET https://messages-api-nodejs.herokuapp.com/messages/user/Ross/unread
  
  It all works out in the end, few seasons later Ross and Rachel end up together.
  
  
