class CartsController < ApplicationController
  include BookingsHelper, CartsHelper
  #http://stackoverflow.com/questions/20724470/cors-issue-getting-error-no-access-control-allow-origin-header-is-present-w
  before_action :require_login, :only => [:checkout]
  skip_before_filter :verify_authenticity_token, :only => [:checkout]
  protect_from_forgery except: [:hook]
  def show
    @booking = current_booking
    @booking.order_id=current_order.id
    @booking.save
  	@basket_items = current_order.basket_items
  	@order=current_order
  	@order.user_id=current_user.id
  	@order.save
 
  	@activities=BookingActivity.all
  end

  # Will redirect a user to paypal
  # From : https://launchschool.com/blog/basic-paypal-checkout-processing-in-rails
  def checkout


    @booking = current_booking
    @basket_items = current_order.basket_items
    @order = current_order
    
     

    # Wrapper to convert all purchaseable items into paypal format
    items = []

    # Add all booking activities
    @booking.booking_activities.each do |ba|
      booking_activity = BookingActivity.find(ba)
      activity = Activity.find(booking_activity.activity_id)
      num_guests = @booking.number_guests
      bactivity = {
          :name=>activity.name,
          :quantity=> num_guests,
          #description:"Booking: #{@booking.id}",
          :amount=>(activity.price*num_guests).to_f
      }
      items << bactivity
    end


    # Add accommodation
    if(!@booking.accommodation_id.nil?)
      accommodation = Accommodation.find(@booking.accommodation_id)
      accommodation_details ={
          :name=>" #{accommodation.name} (#{@booking.end_date-@booking.start_date} nights)",
          :quantity=>1,
          #description:"Booking: #{@booking.id}",
          :amount=>(accommodation.price*(@booking.end_date-@booking.start_date)).to_f
      }
      items << accommodation_details
    end

    # add basket items
    @basket_items.each  do |bi|
      product = Product.find(bi.product_id)
      bitem = {
          :name=>product.name,
          :quantity=>bi.quantity,
          :amount=>bi.total_price
      }
      items << bitem
    end

    values = {
        :business=> "yvette.kelly.2010-facilitator@gmail.com",
        :cmd=>"_xclick",
        :upload=> 1,
        :return=> "#{Rails.application.secrets.app_host}/thankyou",
        :invoice=> @booking.id,
        :currency_code=>'USD',
        :amount=> "#{@booking.price+@order.subtotal}",
        :item_name=> "booking",
        :item_number=> @booking.id,
        :quantity=> '1'
    }

    redirect_to "#{Rails.application.secrets.paypal_host}/cgi-bin/webscr?" + values.to_query

  end

  def thankyou
    @booking = current_booking
    @order = current_order
    @booking.update(:price => total_price, :paid=> true)
  end



end
