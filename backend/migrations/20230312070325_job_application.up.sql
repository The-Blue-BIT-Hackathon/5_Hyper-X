-- Add up migration script here

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE
    "applications" (
        id UUID NOT NULL PRIMARY KEY DEFAULT (uuid_generate_v4()),
        user_id UUID NOT NULL,
        company_id UUID NOT NULL,
        job_id VARCHAR NOT NULL,
        company_name VARCHAR NOT NULL,
        job_title VARCHAR NOT NULL,
        application_status VARCHAR NOT NULL DEFAULT 'Applied',
        created_at TIMESTAMP
        WITH
            TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP
        WITH
            TIME ZONE DEFAULT NOW(),
        CONSTRAINT fk_user_id
        FOREIGN KEY(user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,
        CONSTRAINT fk_company_id
        FOREIGN KEY(company_id)
        REFERENCES companies(id)
        ON DELETE CASCADE
    );

CREATE INDEX applications_user_idx ON applications (user_id);
