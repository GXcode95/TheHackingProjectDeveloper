Rails.application.routes.draw do
  root "posts#index"
  resources :posts
  devise_for :users

  resources :posts do
    resources :comments
    resources :photos, only: [:show, :create, :destroy]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
