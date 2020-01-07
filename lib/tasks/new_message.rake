desc 'This task is called by the Heroku scheduler add-on'

task send_daily_email: :environment do
  AdminrMailer.new_message_email.deliver
end
