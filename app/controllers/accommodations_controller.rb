class AccommodationsController < ApplicationController
  before_action :set_accommodation, only: [:show, :edit, :update, :destroy]

  # GET /accommodations
  # GET /accommodations.json
  def index
    @accommodations = Accommodation.all
  end

  def list
    @accommodations = Accommodation.all
    @booking = current_booking
    @destination = Destination.where({:name=>current_dest}).first
    @booked = BookingActivity.where(:booking_id => @booking.id).map{ |ba|  ba.activity_id }
    @act= Activity.find(@booked)
    @acc = Accommodation.find_by_id(@booking.accommodation_id)
    @sort = "asc"
  end

  # GET /accommodations/1
  # GET /accommodations/1.json
  def show
  end

  # GET /accommodations/new
  def new
    @accommodation = Accommodation.new
  end

  # GET /accommodations/1/edit
  def edit
  end

  def accommodation_boxes
    @sort = params[:sort]
    @accommodations = Accommodation.all()
    @booking = Booking.find(params[:booking])
    render :partial => "accommodations/accommodation_boxes"
  end

  # POST /accommodations
  # POST /accommodations.json
  def create
    @accommodation = Accommodation.new(accommodation_params)

    respond_to do |format|
      if @accommodation.save
        format.html { redirect_to @accommodation, notice: 'Accommodation was successfully created.' }
        format.json { render :show, status: :created, location: @accommodation }
      else
        format.html { render :new }
        format.json { render json: @accommodation.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /accommodations/1
  # PATCH/PUT /accommodations/1.json
  def update
    respond_to do |format|
      if @accommodation.update(accommodation_params)
        format.html { redirect_to @accommodation, notice: 'Accommodation was successfully updated.' }
        format.json { render :show, status: :ok, location: @accommodation }
      else
        format.html { render :edit }
        format.json { render json: @accommodation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /accommodations/1
  # DELETE /accommodations/1.json
  def destroy
    @accommodation.destroy
    respond_to do |format|
      format.html { redirect_to accommodations_url, notice: 'Accommodation was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_accommodation
      @accommodation = Accommodation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def accommodation_params
      params.require(:accommodation).permit(:name, :description, :picture, :type, :price)
    end
end
