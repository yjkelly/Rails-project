json.extract! basket_item, :id, :quantity, :status, :created_at, :updated_at
json.url basket_item_url(basket_item, format: :json)