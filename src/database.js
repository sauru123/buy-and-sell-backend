import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12595358',
    password: 'GrEKsHbBqp',
    database: 'sql12595358'
});

export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, result, fileds) => {
                if (error) reject(error);
                resolve({ result, fileds });
            })
        }),
    end: () => connection.end(),
}