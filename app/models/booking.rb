class Booking < ActiveRecord::Base

	belongs_to :order
	has_one :accommodation
	has_one :destination
	has_many :booking_activities

	def self.price
		total=0
		if !self[:accommodation_id].nil?
			accommodation = Accommodation.find(self[:accommodation_id])
			if !self[:end_date].nil? and !self[:start_date].nil?
				total+=(accommodation.price*(self[:end_date]-self[:start_date]))#accommodation-price * number of days
			end
		end


		activity_sum=self[:booking_activities].collect{|act| act.valid? ? (

		activity = Activity.find(act.id)
		activity.price*self[:number_guests]) : 0

		}.sum
		# add up the price of all booked activities it does this by using a for loop
		total+=activity_sum
		total
	end

end
