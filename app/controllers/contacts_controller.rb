class ContactsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :find_contact, only: %i(destroy)

  def index
    if current_admin
      @contacts = Contact.order('created_at DESC')
    else
      route_not_found
    end
  end
  

  def create
    @contact = Contact.create(contact_params)

    respond_to do |format|
      if @contact.save
        AdminMailer.new_message_email.deliver_now

        format.json { render json: @contact, status: :created, location: @contact }
      else
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    return unless @contact.destroy

    redirect_to contacts_path
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end

  def find_contact
    @contact = Contact.find(params[:id])
  end
end
