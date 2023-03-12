use mongodb::bson::oid::ObjectId;
use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Job {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub company_id: String,
    pub title: String,
    pub location: String,
    pub experience: u8,
    pub payroll: i64,
    pub job_type: String,
    pub skills: Vec<String>,
    pub description: String
}

#[derive(Debug, Serialize, Deserialize)]
pub enum Location {
    OnSite(String),
    Remote(String),
    Hybrid(String)
}

#[derive(Debug, Serialize, Deserialize)]
pub enum JobType {
    Internship(String),
    FullTime(String)
}

