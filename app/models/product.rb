class Product < ActiveRecord::Base

	has_many :basket_items
	belongs_to :product_category

	validates_presence_of :name
	validates_length_of :name, :maximum => 100
	validates_presence_of :picture
	validates_length_of :picture, :maximum => 250
	validates_numericality_of :price, :greater_than => 0

	default_scope { where(active: true) }
	scope :sorted, lambda { order("products.position ASC") }
	scope :newest_first, lambda { order("products.created_at DESC")}
end
