class BasketItem < ActiveRecord::Base

	belongs_to :order
	has_one :product

end
