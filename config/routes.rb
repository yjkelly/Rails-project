Rails.application.routes.draw do
 
  get 'admin/index'

  # This route was necessary for empty basket to work
  post 'basket_items/destroy_all'
  post "/hook" => "carts#hook"
  post "/bookings/:id" => "bookings#show"
  get 'accommodations/list', to: 'accommodations#list'
  match 'bookings/receipt/' => 'bookings#receipt', :via => :get
  match 'bookings/update_details/' => 'bookings#update_details', :via => :patch
  match 'bookings/add_accommodation' => 'bookings#add_accommodation', :via=> :patch
  match 'bookings/remove_accommodation' => 'bookings#remove_accommodation', :via => :patch
  match 'activities/activity_boxes' => 'activities#activity_boxes', :via => :get
  match 'accommodations/accommodation_boxes' => 'accommodations#accommodation_boxes', :via => :get
  match '/thankyou' => 'carts#thankyou', :via => :get
  resource :cart, only: [:show]
  resources :booking_activities, only: [:create, :update, :destroy]
  resources :bookings, only: [:create, :update, :destroy]
  resources :destinations
  resources :accommodations
  resources :activities
  resources :activity_categories, only: [:list]
  resources :basket_items, only: [:create, :update, :destroy]
  resources :store, only: [:index, :filter]
  resources :product_categories
  resources :orders, only: [:create, :update, :destroy]
  resources :users
  resources :products
  get "landing", to: "landing#index"
  get  '/signup',  to: 'users#new'
  post '/signup',  to: 'users#create'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  get '/welcome', to: 'welcome#index'
  get '/vieworders', to: 'vieworders#index'
  get '/contact', to: 'contact#index'

  root 'landing#index'


  match 'activity_categories/list' => 'activity_categories/list', :via => :get
  # useful temp catch-all route that will process requests based on url structure /controller/action/id/format
  match ':controller(/:action(/:id(.:format)))', :via => :get

  # define root controller and action 
  #root "home#index"


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  # 
  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     #   end
end
