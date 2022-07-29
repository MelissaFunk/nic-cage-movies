Rails.application.routes.draw do
  resources :movies, only: [:index]
  resources :users, only: [:index, :create]
  resources :views, only: [:index, :create]


  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'

  get '/movies/80s', to: 'movies#eighties'
  get '/movies/90s', to: 'movies#nineties'
  get '/movies/00s', to: 'movies#twothousands'
  get '/movies/10s', to: 'movies#twentytens'
  get '/movies/20s', to: 'movies#twentytwenties'
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
