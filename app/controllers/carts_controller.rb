class CartsController < ApplicationController
  def show
    @booking = current_booking
  	@basket_items = current_order.basket_items
  	@order = current_order
  end
end
