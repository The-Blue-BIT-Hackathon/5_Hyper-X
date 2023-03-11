use actix_web::web;
use crate::controllers::company_controller::{register_user_handler, get_me_handler, login_user_handler, logout_handler};

pub fn config(conf: &mut web::ServiceConfig) {
    let scope = web::scope("/company")
        .service(register_user_handler)
        .service(login_user_handler)
        .service(logout_handler)
        .service(get_me_handler);

    conf.service(scope);
}
