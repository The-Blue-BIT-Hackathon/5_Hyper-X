use actix_web::web::{self, service};
use crate::controllers::job_controller::{create_job, get_job};

pub fn config(conf: &mut web::ServiceConfig) {
    let scope = web::scope("/company")
        .service(create_job)
        .service(get_job);

    conf.service(scope);
}
