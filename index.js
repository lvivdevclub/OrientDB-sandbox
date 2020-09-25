const OrientDBClient = require("orientjs").OrientDBClient;


async function test(session) {

let result = await session.query("SELECT EXPAND(OUT(\"OWNER\").IN(\"TEAM_MEMBER\")) FROM ORGANIZATION WHERE NAME = :name", {params: { name: "Lohika" }})
    .all();


result.forEach(e => {
  console.log(e.FIRSTNAME);    
})

}

(async function () {

let client = await OrientDBClient.connect({
    host: "localhost",
    port: 2424
  });


let pool = await client.sessions({
  name: "test",
  username: "root",
  password: "root",
  pool: { max: 10 }
});

let session = await pool.acquire();

await test(session);

await session.close();
await pool.close();
await client.close();

console.log("Client Closed");
})()