class CartsController < ApplicationController
  def show
  	@basket_items = current_order.basket_items
  end
end
