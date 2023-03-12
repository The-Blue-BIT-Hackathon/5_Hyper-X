use crate::repository::mongodb_job::MongoRepo;
use crate::models::job::Job;

use actix_web::{
    post, get, delete,web,
    web::{Data, Json, Path},
    HttpResponse,
};

use serde::Deserialize;

#[post("/job")]
pub async fn create_job(db: Data<MongoRepo>, new_job: Json<Job>) -> HttpResponse {
    let data = Job {
        id: None,
        company_id: new_job.company_id.to_owned(),
        title: new_job.title.to_owned(),
        location: new_job.location.to_owned(),
        experience: new_job.experience,
        payroll: new_job.payroll,
        job_type: new_job.job_type.to_owned(),
        skills: new_job.skills.clone(),
        description: new_job.description.to_owned()
    };
    let job_detail = db.create_job(data).await;
    match job_detail {
        Ok(job) => HttpResponse::Ok().json(job),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}

 #[get("/job/{id}")]
pub async fn get_job(db: Data<MongoRepo>, path: Path<String>) -> HttpResponse {
    let id = path.into_inner();
    if id.is_empty() {
        return HttpResponse::BadRequest().body("invalid ID");
    }
    let user_detail = db.get_job(&id).await;
    match user_detail {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}

#[delete("/job/{id}")]
pub async fn delete_job(db: Data<MongoRepo>, path: Path<String>) -> HttpResponse {
    let id = path.into_inner();
    if id.is_empty() {
        return HttpResponse::BadRequest().body("invalid ID");
    };
    let result = db.delete_job(&id).await;
    match result {
        Ok(res) => {
            if res.deleted_count == 1 {
                return HttpResponse::Ok().json("Job successfully deleted!");
            } else {
                return HttpResponse::NotFound().json("Job with specified ID not found!");
            }
        }
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}

#[get("/jobs")]
pub async fn get_all_jobs(db: Data<MongoRepo>) -> HttpResponse {
    let jobs = db.get_all_jobs().await;
    match jobs {
        Ok(jobs) => HttpResponse::Ok().json(jobs),
        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),
    }
}

#[derive(Deserialize)]
pub struct SearchParams {
    payroll: Option<i64>,
    job_type: Option<String>,
    skills: Option<Vec<String>>
}

#[get("/searchjobs")]
pub async fn search_jobs(db: Data<MongoRepo>, q_params: web::Query<SearchParams>) -> HttpResponse {
    let jobs = db.search_job(q_params.job_type.clone(), q_params.payroll, q_params.skills.clone()).await;
    match jobs {
        Ok(jobs) => return HttpResponse::Ok().json(jobs),
        Err(err) => return HttpResponse::InternalServerError().body(err.to_string()),
    }
}
