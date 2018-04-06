Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :books, only: [:index, :show]
    resources :shelves, only: [:index, :show, :create, :update, :destroy]
    resources :shelvings, only: [:create, :destroy]
  end

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
