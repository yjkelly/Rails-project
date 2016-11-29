class BookingActivitiesController < ApplicationController
  before_action :set_booking_activity, only: [:show, :edit, :update, :destroy]

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
    @booking_activity = BookingActivity.new(booking_activity_params)

    respond_to do |format|
      if @booking_activity.save
        format.html { redirect_to @booking_activity, notice: 'Booking activity was successfully created.' }
        format.json { render :show, status: :created, location: @booking_activity }
      else
        format.html { render :new }
        format.json { render json: @booking_activity.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /booking_activities/1
  # PATCH/PUT /booking_activities/1.json
  def update
    respond_to do |format|
      if @booking_activity.update(booking_activity_params)
        format.html { redirect_to @booking_activity, notice: 'Booking activity was successfully updated.' }
        format.json { render :show, status: :ok, location: @booking_activity }
      else
        format.html { render :edit }
        format.json { render json: @booking_activity.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /booking_activities/1
  # DELETE /booking_activities/1.json
  def destroy
    @booking_activity.destroy
    respond_to do |format|
      format.html { redirect_to booking_activities_url, notice: 'Booking activity was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booking_activity
      @booking_activity = BookingActivity.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def booking_activity_params
      params.require(:booking_activity).permit(:status, :number_guests, :start_date, :end_date)
    end
end
