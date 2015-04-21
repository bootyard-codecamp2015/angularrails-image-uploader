Rails.application.routes.draw do
  resources :home, only: [:index]
  root 'home#index'  

  namespace :api, defaults: { format: :json } do
    namespace :public do
      resources :images, except: [:update, :edit] do
        collection do
          post 'upload_file_image'
        end
      end
    end
  end
end
