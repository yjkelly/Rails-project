class BasketItemsController < ApplicationController

  def create
    @order = current_order
    # Below code has been changed from the original to allow a quantity to update if a product is added twice
    # Credit to Dominic for the solution
    @basket_item = @order.basket_items.where(:product_id => basket_item_params[:product_id]).first
    if (@basket_item == nil)
      @basket_item = @order.basket_items.new(basket_item_params)
    else
      @basket_item.quantity += basket_item_params[:quantity].to_i
      @basket_item.save
    end
    @order.save
    session[:order_id] = @order.id
    redirect_to "/store"
  end


  def update
    @order = current_order
    @basket_item = @order.basket_items.find(params[:id])
    @basket_item.update_attributes(basket_item_params)
    @basket_items = @order.basket_items
  end


  def destroy
    @order = current_order
    @basket_item = @order.basket_items.find(params[:id])
    @basket_item.destroy
    @basket_items = @order.basket_items
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def basket_item_params
      params.require(:basket_item).permit(:quantity, :product_id)
    end
  end