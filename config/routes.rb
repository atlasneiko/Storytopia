Rails.application.routes.draw do

  root to: 'static_pages#root'
  
  namespace :api, defaults:{format: :json} do 
    resources :users, only: [:create, :update, :index, :show]
    resource :sessions, only: [:create, :destroy]
    resources :claps, only:[:create, :update, :show,]
    resources :stories do
      resources :comments, only:[:create, :destroy, :update, :show]
      resources :claps, only:[:index]
    end
    post '/followings/', to: 'followings#create'
    delete '/followings/', to: 'followings#destroy'
  end
end
