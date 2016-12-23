class ViewordersController < ApplicationController
    before_action :require_login
    before_action :require_admin
    def index
       @basketitem = BasketItem.all
       @product = Product.all
       @booking = Booking.all
       @bookingactivity = BookingActivity.all
       @activity = Activity.all
       @accommodation = Accommodation.all
       @destination = Destination.all
       @orders= Order.all
       @users = User.all
       @order_statuses = OrderStatus.all
    end
end
