class Accommodation < ActiveRecord::Base

	belongs_to :booking
	belongs_to :destination

end
