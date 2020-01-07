desc 'This task is called by the Heroku scheduler add-on'

task new_message_email: :environment do
  AdminMailer.new_message_email.deliver
end
