class Product < ActiveRecord::Base

	belongs_to :basket_item
	belongs_to :product_category

end
