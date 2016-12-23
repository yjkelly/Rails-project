class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  # If you get this error - ActionController::InvalidAuthenticityToken
  # Try a null_session protection
  #protect_from_forgery with: :null_session
  protect_from_forgery with: :exception
  include SessionsHelper

  helper_method :current_order, :current_booking

  def current_order
    if !session[:order_id].nil?
      order = Order.find_by_id(session[:order_id])
      if order.nil?
        Order.new
      else
        order
      end
    else
      Order.new
    end
  end

  def current_booking
    if !session[:booking_id].nil?
      booking = Booking.find_by_id(session[:booking_id])
      if booking.nil?
        Booking.new
      else
        booking
      end
    else
      Booking.new
    end
  end

end
