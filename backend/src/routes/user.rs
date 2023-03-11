use actix_web::web;
use crate::controllers::user_controller::{health_checker_handler, register_user_handler, get_me_handler, login_user_handler, logout_handler};

pub fn config(conf: &mut web::ServiceConfig) {
    let scope = web::scope("/api")
        .service(health_checker_handler)
        .service(register_user_handler)
        .service(login_user_handler)
        .service(logout_handler)
        .service(get_me_handler);

    conf.service(scope);
}
