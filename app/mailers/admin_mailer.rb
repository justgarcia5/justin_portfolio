class AdminMailer < ApplicationMailer
  default from: 'justgarcia5@gmail.com'

  def new_message_email
    @admin = Admin.first
    @contacts = Contact.all

    mail(to: @admin.email, subject: 'Welcome to My Awesome Site')

  end
end
