import { neon } from "@neondatabase/serverless";

const connectionString = [
  process.env.DATABASE_URL,
  process.env.POSTGRES_URL,
  process.env.POSTGRES_URL_NON_POOLING,
  process.env.POSTGRES_PRISMA_URL,
  process.env.POSTGRES_URL_NO_SSL,
  process.env.DATABASE_URL_UNPOOLED,
].find((value) => value && value !== "[SENSITIVE]");

if (!connectionString || connectionString === "[SENSITIVE]") {
  throw new Error("A database connection string is missing from `.env.local`.");
}

const sql = neon(connectionString);

await sql`
  CREATE TABLE IF NOT EXISTS meetings (
    id             SERIAL        PRIMARY KEY,
    date           DATE          NOT NULL UNIQUE,
    meeting_type   VARCHAR(20)   NOT NULL
                                 CHECK (meeting_type IN
                                   ('testimony','regular','stake','general','special')),
    presiding      VARCHAR(255)  NOT NULL,
    conducting     VARCHAR(255)  NOT NULL,
    announcements  TEXT[]        DEFAULT '{}',
    opening_hymn   JSONB         NOT NULL,
    opening_prayer VARCHAR(255)  NOT NULL,
    ward_business  JSONB         DEFAULT '[]',
    stake_business BOOLEAN       DEFAULT false,
    sacrament_hymn JSONB         NOT NULL,
    speakers       JSONB         DEFAULT '[]',
    closing_hymn   JSONB         NOT NULL,
    closing_prayer VARCHAR(255)  NOT NULL
  )
`;

const [{ exists }] = await sql`
  SELECT EXISTS (
    SELECT 1
    FROM information_schema.tables
    WHERE table_schema = 'public'
      AND table_name = 'meetings'
  ) AS exists
`;

if (!exists) {
  throw new Error("The meetings table could not be verified.");
}

console.log("meetings table is ready");
