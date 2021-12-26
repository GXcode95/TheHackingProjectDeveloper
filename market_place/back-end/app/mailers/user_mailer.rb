class UserMailer < Devise::Mailer
  default from: 'from@example.com'

  def reset_password_instructions(record, token, opts={})
    super
  end

 end