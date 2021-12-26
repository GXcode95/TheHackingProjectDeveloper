class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:show, :update]
  def index 
    @users = User.all
    render json: @users
  end

  def show 
    @user = User.find(params[:id])
    @real_estates = RealEstate.where(user_id: @user.id)
    render json: {user: @user, real_estates: @real_estates}
  end
  def update 
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: { user: @user }
    else
      puts @user.errors.message
    end
  end

  private
  def user_params
    return params.permit(:username, :id, :email, :password, :password_confirmation, :img_id)
  end
end