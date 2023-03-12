use crate::repository::mongodb_job::MongoRepo;
use crate::models::job::Job;

use actix_web::{
    post, get,
    web::{Data, Json, Path},
    HttpResponse,
};

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