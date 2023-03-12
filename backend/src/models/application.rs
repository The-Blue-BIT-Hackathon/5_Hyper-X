use chrono::prelude::*;
use serde::{Deserialize, Serialize};

#[allow(non_snake_case)]
#[derive(Debug, Deserialize, sqlx::FromRow, Serialize, Clone)]
pub struct Application {
    pub id: uuid::Uuid,
    pub user_id: uuid::Uuid,
    pub company_id: uuid::Uuid,
    pub company_name: String,
    pub job_title: String,
    pub application_status: bool,
    #[serde(rename = "createdAt")]
    pub created_at: Option<DateTime<Utc>>,
    #[serde(rename = "updatedAt")]
    pub updated_at: Option<DateTime<Utc>>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ApplicationTokenClaims {
    pub sub: String,
    pub iat: usize,
    pub exp: usize,
}

#[derive(Debug, Deserialize)]
pub struct RegisterApplicationSchema {
    pub user_id: String,
    pub job_id: String,
}


