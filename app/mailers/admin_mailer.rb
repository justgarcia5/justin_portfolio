class AdminMailer < ApplicationMailer
  default from: 'justgarcia5@gmail.com'

  def new_message_email
    @admin = Admin.first
    @comments = Comment.all

    mail(to: @admin.email, subject: 'Welcome to My Awesome Site').deliver_now

  end
end
