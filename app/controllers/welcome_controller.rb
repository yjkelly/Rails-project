class WelcomeController < ApplicationController
    def index
       @basketitem = BasketItem.all
       @product = Product.all
       @booking = Booking.all
       @bookingactivity = BookingActivity.all
       @activity = Activity.all
       @accommodation = Accommodation.all
       @destination = Destination.all
       @orders= Order.all
       @order_statuses = OrderStatus.all
    end
end
