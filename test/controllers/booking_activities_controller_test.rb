require 'test_helper'

class BookingActivitiesControllerTest < ActionController::TestCase
  setup do
    @booking_activity = booking_activities(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:booking_activities)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create booking_activity" do
    assert_difference('BookingActivity.count') do
      post :create, booking_activity: { end_date: @booking_activity.end_date, number_guests: @booking_activity.number_guests, start_date: @booking_activity.start_date, status: @booking_activity.status }
    end

    assert_redirected_to booking_activity_path(assigns(:booking_activity))
  end

  test "should show booking_activity" do
    get :show, id: @booking_activity
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @booking_activity
    assert_response :success
  end

  test "should update booking_activity" do
    patch :update, id: @booking_activity, booking_activity: { end_date: @booking_activity.end_date, number_guests: @booking_activity.number_guests, start_date: @booking_activity.start_date, status: @booking_activity.status }
    assert_redirected_to booking_activity_path(assigns(:booking_activity))
  end

  test "should destroy booking_activity" do
    assert_difference('BookingActivity.count', -1) do
      delete :destroy, id: @booking_activity
    end

    assert_redirected_to booking_activities_path
  end
end
