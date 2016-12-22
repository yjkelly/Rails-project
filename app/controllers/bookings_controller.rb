class BookingsController < ApplicationController
  include BookingsHelper
  before_action :set_booking, only: [:show, :edit, :update, :destroy]

  # GET /bookings
  # GET /bookings.json
  def index
    @bookings = Booking.all
  end

  # GET /bookings/1
  # GET /bookings/1.json
  def show
  end

  # GET /bookings/new
  def new
    @booking = Booking.new
  end

  # GET /bookings/1/edit
  def edit
  end

  # POST /bookings
  # POST /bookings.json
  def create
    @booking = Booking.new(booking_params)

    respond_to do |format|
      @destinations=Destination.all
      session[:destination] = @destinations[@booking.destination_id-1].name
      if @booking.save
        session[:booking_id] = @booking.id
        format.html { redirect_to url_for(:controller => 'activity_categories', :action => :list) }
        format.json { render :show, status: :created, location: @booking }
      else
        session[:booking_id] = @booking.id
        format.html { render :new }
        format.json { render json: @booking.errors, status: :unprocessable_entity }
      end
    end
  end

  def update_details
    @booking = current_booking
    @booking.update(booking_params)
    #check for other parameters from form
    start_date_str = params[:booking][:start_date]
    #check is the date like 12/12/2016 or 12-12-2016
    if start_date_str.include? '-'
      start_date = Date.parse(start_date_str)
    else
      start_date = Date.strptime(start_date_str,'%m/%d/%Y')
    end

    end_date_str = params[:booking][:end_date]
    if end_date_str.include? '-'
      end_date = Date.parse(end_date_str)
    else
      end_date = Date.strptime(end_date_str,'%m/%d/%Y')
    end
    @booking.update({:start_date=> start_date,
                     :end_date => end_date,
                     :number_guests => params[:booking][:number_guests].to_i,
                     :price => @booking.price
                    })
    session[:booking_id] = @booking.id
  end

  # PATCH / PUT
  def add_accommodation
    @booking = current_booking
    @booking.update({:accommodation_id=> params[:booking][:accommodation_id]})
  end

  # PATCH / PUT
  # Method triggered if the accommodaiton is removed from the basket
  # Will remove whatever accommodation is aded to the booking
  def remove_accommodation
    @booking = current_booking
    @booking.update({:accommodation_id=>nil})
  end

  # PATCH/PUT /bookings/1
  # PATCH/PUT /bookings/1.json
  def update
    respond_to do |format|
      if @booking.update(booking_params)
        format.html { redirect_to @booking, notice: 'Booking was successfully updated.' }
        format.json { render :show, status: :ok, location: @booking }
      else
        format.html { render :edit }
       format.json { render json: @booking.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bookings/1
  # DELETE /bookings/1.json
  def destroy
    @booking.destroy
    respond_to do |format|
      format.html { redirect_to bookings_url, notice: 'Booking was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # Renders partial view for the form box visible on activities and accommodation pages
  def greybox
    @booking = current_booking
    respond_to do |format|
      format.html do
        render :partial => "bookings/greybox"
      end
    end
  end

  # GET /bookings/reciept
  # Partial view handler
  def receipt
    @booking =current_booking
    @booked = BookingActivity.where(:booking_id => @booking.id).map{ |ba|  ba.activity_id }
    @act= Activity.find(@booked)
    @dest = current_dest
    @acc = Accommodation.find_by_id(@booking.accommodation_id)
    render :partial => "bookings/receipt"
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booking
      @booking = Booking.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def booking_params
      params.require(:booking).permit(:status, :destination_id,:price, :number_guests, :start_date, :end_date, :accommodation_id)
    end
end
