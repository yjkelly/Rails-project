module SessionsHelper

  # Logs in the given user.
  def log_in(user)
    session[:user_id] = user.id
  end

  # Logs out the current user.
  def log_out
  	session[:return_to] ||= request.referer
    session.delete(:user_id)
    session.delete(:destination)
    @current_user = nil
    @current_dest = :nil
  end
  
  # Returns the current logged-in user (if any).
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
  
  def current_dest
    @current_dest = session[:destination] 
  end

  # Returns true if the user is logged in, false otherwise.
  def logged_in?
    !current_user.nil?
  end
end