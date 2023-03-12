use actix_web::{web, web::Data};
use crate::controllers::job_controller::{create_job, get_job, delete_job, get_all_jobs,search_jobs};
use crate::repository::mongodb_job::MongoRepo;

pub fn config(conf: &mut web::ServiceConfig) {
    let mongo_db = MongoRepo::init();
    let mongo_db_data = Data::new(mongo_db);
    let scope = web::scope("/company")
        .app_data(mongo_db_data.clone())
        .service(create_job)
        .service(get_job)
        .service(delete_job)
        .service(get_all_jobs)
        .service(search_jobs);

    conf.service(scope);
}
