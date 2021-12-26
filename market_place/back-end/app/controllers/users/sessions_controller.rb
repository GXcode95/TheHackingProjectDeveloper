class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
  login_success && return if current_user

  login_failure
  end

  def login_success
    @avatar_id
    @avatar_id = @user.avatar.user_avatar.record.id if @user.avatar
    
    render json: { message: 'You are logged in.', user: @user, avatar_id: @avatar_id }, status: :ok
  end

  def login_failure
    render json: { error: 'Connection Failure' }, status: :ok
  end

  def respond_to_on_destroy
    log_out_success && return if current_user

    log_out_failure
  end

  def log_out_success
    render json: { message: "You are logged out." }, status: :ok
  end

  def log_out_failure
    render json: { message: "Hmm nothing happened.", error: 'Connection Failed' }, status: :unauthorized
  end
end
