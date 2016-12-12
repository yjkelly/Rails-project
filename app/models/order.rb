class Order < ActiveRecord::Base

	belongs_to :user
	has_one :booking
	has_many :basket_items
	belongs_to :order_status

	before_create :set_order_status
	before_save :update_subtotal

	def subtotal
    	basket_items.collect { |bi| bi.valid? ? (bi.quantity * bi.unit_price) : 0 }.sum
	end

	private
	def set_order_status
		self.order_status_id = 1 if self.order_status_id.nil?
	end

	def update_subtotal
		self[:subtotal] = subtotal
	end

end