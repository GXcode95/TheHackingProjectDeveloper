class CitiesController < ApplicationController
  respond_to :json

  def index
    @cities = City.all

    render json: { data: @cities }
  end
end
