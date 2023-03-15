use actix_web::web;
use crate::controllers::job_controller::{create_job, get_job, delete_job, get_all_jobs,search_jobs, health_checker_handler, get_jobbycompany};

pub fn config(conf: &mut web::ServiceConfig) {
    let scope = web::scope("/jobs")
        .service(create_job)
        .service(get_job)
        .service(delete_job)
        .service(get_all_jobs)
        .service(search_jobs)
        .service(health_checker_handler)
        .service(get_jobbycompany);

    conf.service(scope);
}
