class ContactsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if current_admin
      @contacts = Contact.all
    end
  end

  def create
    @contact = Contact.create(contact_params)

    if @contact.save
      render json: @contact

    else
      render json: @contact.errors
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
