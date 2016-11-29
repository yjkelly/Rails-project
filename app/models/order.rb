class Order < ActiveRecord::Base

	belongs_to :user
	has_one :booking
	has_many :basket_items

end
