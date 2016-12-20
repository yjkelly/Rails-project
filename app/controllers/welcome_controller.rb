class WelcomeController < ApplicationController
    def index
         @bookings = Booking.all
         @orders = Order.all
    end
end
