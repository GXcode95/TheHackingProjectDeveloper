Rails.application.routes.draw do
  root "articles#index"
  
  resources :articles
  devise_for :users
end
#3a7774f04ca48140db91e4c6b804d159d6bb4a67a37cb8e4e7d13d3cd1e29e9999154bccfd918d3acbbe42b1439254727507e64d70ae0ba9c2e3a2bf4cc4b417
