json.extract! accommodation, :id, :name, :description, :picture, :type, :price, :created_at, :updated_at
json.url accommodation_url(accommodation, format: :json)