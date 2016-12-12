class StoreController < ApplicationController

  def index
  	@products = Product.all
    @basket_item = current_order.basket_items.new
    @order = current_order
    @basket_items = @order.basket_items
    @product_categories = ProductCategory.all
  end
  
end
