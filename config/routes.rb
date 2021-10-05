Rails.application.routes.draw do
  resources :educations
  resources :introductions
  resources :skills
  resources :tasks
  resources :work_histories
  resources :bios
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/bios", to: "bios#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/workhistories", to: "work_histories#create"
  post "/tasks", to: "tasks#create"
  post "/skills", to: "skills#create"
  post "/introductions", to: "introductions#create"
  post "/educations", to: "educations#create"
  
end
