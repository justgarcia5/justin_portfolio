# Preview all emails at http://localhost:3000/rails/mailers/admin_mailer
class AdminMailerPreview < ActionMailer::Preview
  def new_message_email
    AdminMailer.new_message_email
  end
end
