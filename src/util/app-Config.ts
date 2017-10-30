import { InjectionToken } from "@angular/core";

// Although the ApplicationConfig interface plays no role in dependency injection, 
// it supports typing of the configuration object within the class.
export interface ApplicationConfig {
    appName: string;
    apiEndpoint: string;
    login:string,
    search:string;
    posttask:string;
}

// Configuration values for our app
export const MY_CONFIG: ApplicationConfig = {
    appName: 'Actiqx',
    apiEndpoint: 'task-management-dev.us-east-1.elasticbeanstalk.com',
    login:'/auth/local',
    search:'/api/tasks',
    posttask:'/api/tasks'
};

// Create a config token to avoid naming conflicts
export const MY_CONFIG_TOKEN = new InjectionToken<ApplicationConfig>('config');