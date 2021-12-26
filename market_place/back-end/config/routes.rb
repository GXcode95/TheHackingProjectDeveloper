Rails.application.routes.draw do
  root "real_estates#index"
  resources :cities, only: [:index]
  resources :avatars
  resources :real_estates 
  resources :users, only: [:show, :index, :update]
  devise_for :users,
                controllers:
                  {
                    sessions: 'users/sessions',
                    registrations: 'users/registrations'
                  }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
