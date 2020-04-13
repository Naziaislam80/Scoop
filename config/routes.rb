Rails.application.routes.draw do
   root to: "static_pages#root"

   mount ActionCable.server, at: '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show, :index] do
      resources :channel_subscribers, only: [:new, :create, :show, :index]
    end
    resource :session, only: [:new, :create, :destroy]
    resources :work_spaces, only: [:create] 
    resources :channels  do
      resources :messages, except: [:destroy]
    end
  end
end
