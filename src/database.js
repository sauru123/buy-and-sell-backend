import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'hapi-server',
    password: 'root',
    database: 'buy-and-sell'
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