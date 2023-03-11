use chrono::prelude::*;
use serde::Serialize;

#[allow(non_snake_case)]
#[derive(Debug, Serialize)]
pub struct FilteredCompany {
    pub id: String,
    pub name: String,
    pub email: String,
    pub photo: String,
    pub verified: bool,
    pub createdAt: DateTime<Utc>,
    pub updatedAt: DateTime<Utc>,
}

#[derive(Serialize, Debug)]
pub struct CompanyData {
    pub company: FilteredCompany,
}

#[derive(Serialize, Debug)]
pub struct CompanyResponse {
    pub status: String,
    pub data: CompanyData,
}
