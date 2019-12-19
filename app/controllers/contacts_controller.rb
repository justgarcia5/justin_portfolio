class ContactsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :find_contact, only: %i[destroy]

  def index
    if current_admin
      @contacts = Contact.all
    else
      route_not_found
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

  def destroy
    return unless @contact.destroy

    redirect_to contacts_path
    flash[:notice] = 'Location was successfully deleted'
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end

  def find_contact
    @contact = Contact.find(params[:id])
  end
end
