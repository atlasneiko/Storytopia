Rails.application.routes.draw do

  root to: 'static_pages#root'
  
  namespace :api, defaults:{format: :json} do 
    resources :users, only: [:create, :update, :index, :show]
    resource :sessions, only: [:create, :destroy]
    resource :claps, only:[:create, :update, :show, :index]
    resources :stories, only: [:create, :update, :index, :show, :destroy]

  end
end
