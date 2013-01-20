AnatomyOfBackbone::Application.routes.draw do
  resources :tweets

  resources :todos
  root :to => 'home#index'
end
