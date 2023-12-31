const { AppDataSource } = require('./data.source');

const createUser = async (
  email, 
  hashedPassword,
  agreeApp,
  agreeSms, 
  agreeEmail
) => {
  await AppDataSource.query(
    `
    INSERT INTO users (
      email,
      password,
      agree_app,
      agree_sms,
      agree_email      
    ) VALUES (
      ?,
      ?,
      ?,
      ?,
      ?
    )
    `,
    [email, hashedPassword, agreeApp, agreeSms, agreeEmail]
  );
};

const getUserByEmail = async (email) => {
  const [user] = await AppDataSource.query(
    `
    SELECT
        id,
        email,
        password,
        nickname,
        agreement_id,
        agree_app,
        agree_sms,
        agree_email,
        point
    FROM users
    WHERE email = ?
`,
    [email]
  );

  return user;
};

const getUserById = async (id) => {
  const [user] = await AppDataSource.query(
    `
    SELECT
        id,
        email,
        password,
        nickname,
        agreement_id,
        agree_app,
        agree_sms,
        agree_email,
        point
    FROM users
    WHERE id = ?
`,
    [id]
  );

  return user;
};

module.exports = { createUser, getUserByEmail, getUserById };