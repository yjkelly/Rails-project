class BookingActivitiesController < ApplicationController

  before_action :set_booking_activity, only: [ :show, :edit, :update, :destroy]
  protect_from_forgery

  # GET /booking_activities
  # GET /booking_activities.json
  def index
    @booking_activities = BookingActivity.all
  end

  # GET /booking_activities/1
  # GET /booking_activities/1.json
  def show
  end

  # GET /booking_activities/new
  def new
    @booking_activity = BookingActivity.new
  end

  # GET /booking_activities/1/edit
  def edit
  end

  # POST /booking_activities
  # POST /booking_activities.json
  def create
    @booking = current_booking
    @booking_item = @booking.booking_activities.new(booking_activity_params)
    @booking_item.save
    session[:booking_id] = @booking.id
  end

  # PATCH/PUT /booking_activities/1
  # PATCH/PUT /booking_activities/1.json
  def update
    @booking = current_booking
    @booking_item = @booking.booking_activities.find(params[:id])
    @booking_item.update_attributes(booking_activity_params)
    @booking_activities = @booking.booking_activities
    @booking.update(:price=>total_price)
  end

  # DELETE /booking_activities/1
  # DELETE /booking_activities/1.json
  def destroy
    @booking=current_booking
    @booking_item=@booking.booking_activities.find(params[:id])
    @booking_item.destroy
    @booking_items=@booking.booking_activities
    @booking.update(:price=>total_price)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booking_activity
      @booking_activity = BookingActivity.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def booking_activity_params
      params.require(:booking_activity).permit(:status, :activity_id)
    end
end
