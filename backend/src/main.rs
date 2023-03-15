mod config;
mod models;
mod utils;
mod repository;
mod controllers;
mod routes;

use routes::{user, company, job};
use repository::mongodb_job::MongoRepo;
use actix_cors::Cors;
use actix_web::middleware::Logger;
use actix_web::{web::Data, http::header, web, App, HttpServer};
use sqlx::{postgres::PgPoolOptions, Pool, Postgres};
use config::Config;
use dotenv::dotenv;


pub struct AppState {
    db: Pool<Postgres>,
    env: Config
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {

    if std::env::var_os("RUST_LOG").is_none() {
        std::env::set_var("RUST_LOG", "actix_web=info");
    }

    dotenv().ok();
    env_logger::init();
        
    let config = Config::init();
                    
    let pool = match PgPoolOptions::new()
        .max_connections(10)
        .connect(&config.database_url)
        .await
    {
        Ok(pool) => {
            println!("Connection to the database is successful!");
            pool
        }
        Err(err) => {
            println!("Failed to connect to the database: {:?}", err);
            std::process::exit(1);
        }
    }; 

    let mongodb = MongoRepo::init().await;
    let mongodb_data = Data::new(mongodb);

    println!("Server started successfully");        
    HttpServer::new(move || {

        App::new()
            .app_data(web::Data::new(AppState {
                db: pool.clone(),
                env: config.clone(),
            }))
            .app_data(mongodb_data.clone())
                .configure(user::config)
                .configure(company::config)
                .configure(job::config)              
                .wrap(Cors::default().allow_any_origin().allow_any_header().allow_any_method().send_wildcard())
                .wrap(Logger::default())
    })
    .bind(("127.0.0.1", 8000))?
    .run()
    .await
}
