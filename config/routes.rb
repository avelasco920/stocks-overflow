Rails.application.routes.draw do
  namespace :api do
    get 'watchlist_items/create'
  end

  namespace :api do
    get 'watchlist_items/destroy'
  end

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :companies, only: [:show, :index, :update] do
      resource :watchlist_item, only: [:create, :destroy]
    end
    resources :newsarticles, only: [:show, :index, :update]
    resource :session, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
end
