module BookingsHelper

  def total_price
      total=0
      booking = current_booking
      if !booking.accommodation_id.nil?
        accommodation = Accommodation.find(booking.accommodation_id)
        if !booking.end_date.nil? and !booking.start_date.nil?
          total+=(accommodation.price*(booking.end_date-booking.start_date))#accommodation-price * number of days
        end
      end


      activity_sum=booking.booking_activities.collect{|act| act.valid? ? (

      activity = Activity.find(act.activity_id)
      activity.price*booking.number_guests ):0

      }.sum
      # add up the price of all booked activities it does this by using a for loop
      total+=activity_sum
      total
  end
end
