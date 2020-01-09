class AdminMailer < ApplicationMailer
  default from: 'justgarcia5@gmail.com'

  def new_message_email
    @admin = Admin.first
    @contacts = Contact.all

    mail(to: @admin.email, subject: 'New message in Portfolio inbox')
  end
end
