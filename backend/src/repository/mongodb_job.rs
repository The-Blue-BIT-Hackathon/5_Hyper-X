use std::env;
extern crate dotenv;
use dotenv::dotenv;

use mongodb::bson::{doc, oid::ObjectId, Document};
use mongodb::options::{FindOneAndUpdateOptions, FindOptions, IndexOptions, ReturnDocument};
use mongodb::{bson, options::ClientOptions, Client, Collection, IndexModel};

use mongodb::{
    bson::{extjson::de::Error},
    results::{ InsertOneResult},
};
use crate::models::job::{Job};

pub struct MongoRepo {
    col: Collection<Job>,
}

impl MongoRepo {
    pub async fn init() -> Self {
        let database_url = env::var("MONGODB_URL").expect("MONGODB_URLL is not set in .env file");
        let mut client_options = ClientOptions::parse(database_url).await.unwrap();
        
        let database_name = "hackathon".to_string();
        let collection = "jobs".to_string();
        
        client_options.app_name = Some(database_name.to_string());
        
        let client = Client::with_options(client_options).unwrap();
        let database = client.database(database_name.as_str());

        let collection: Collection<Job> = database.collection(collection.as_str());

        MongoRepo { col:collection }
    }

    pub async fn create_job(&self, new_job: Job) -> Result<InsertOneResult, Error> {
        let new_doc = Job{
            id: None,
            company_id: new_job.company_id,
            title: new_job.title,
            location: new_job.location,
            experience: new_job.experience,
            payroll: new_job.payroll,
            job_type: new_job.job_type,
            skills: new_job.skills,
            description: new_job.description
        };
        let job = self
            .col
            .insert_one(new_doc, None)
            .await
            .ok()
            .expect("Error creating user");
        Ok(job)
    }
    
    pub async fn get_job(&self, id: &String) -> Result<Job, Error> {
        let obj_id = ObjectId::parse_str(id).unwrap();
        let filter = doc! {"_id": obj_id};
        let job_detail = self
            .col
            .find_one(filter, None)
            .await
            .ok()
            .expect("Error getting user's detail");
        Ok(job_detail.unwrap())
    }
}