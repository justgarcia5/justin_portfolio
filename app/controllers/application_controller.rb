class ApplicationController < ActionController::Base

  def route_not_found
    flash[:error] = 'The requested route is not found'
    redirect_to root_path
  end

end
