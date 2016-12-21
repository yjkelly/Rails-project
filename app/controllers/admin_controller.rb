class AdminController < ApplicationController
  before_action :require_login
  before_action :require_admin

  def index

  end

end
