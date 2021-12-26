class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  before_action :configure_sign_up_params, only: [:create, :update]

  def create
    super
  end

  def update
    super
  end

  private
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :admin])
  end

  def respond_with(resource, _opts = {})
    register_success && return if resource.persisted?

    register_failed
  end

  def register_success
    render json: { message: 'Signed up sucessfully.', user: @user }
  end

  def register_failed
    render json: { message: "Something went wrong.", error: 'Registation Failed' }
  end
end