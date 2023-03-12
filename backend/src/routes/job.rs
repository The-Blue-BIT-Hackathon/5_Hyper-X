use actix_web::web;
use crate::controllers::job_controller::{create_job, get_job, delete_job, get_all_jobs};

pub fn config(conf: &mut web::ServiceConfig) {
    let scope = web::scope("/company")
        .service(create_job)
        .service(get_job)
        .service(delete_job)
        .service(get_all_jobs);

    conf.service(scope);
}
