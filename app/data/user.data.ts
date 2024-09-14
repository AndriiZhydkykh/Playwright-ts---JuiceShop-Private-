import crypto from 'crypto'

export const regNewUserDate = {
 "email": `test${crypto.randomUUID()}@test.com`,
 "password": "superSecretPassword!!!",
 "passwordRepeat": "superSecretPassword!!!",
 "securityAnswer": "Nadia",
 "securityQuestion": {
  "id": 5,
  "question": "Maternal grandmother's first name?"
 }
};
export const staticUsers = {
 'buyers': {
  'testingTalk': {
   "email": "testing-talk@example.com",
   "password": "superSecretPassword!!!"
  }
 }
}
