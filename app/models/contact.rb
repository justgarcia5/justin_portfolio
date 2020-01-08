class Contact < ApplicationRecord
  validates :name, :email, :message, presence: :true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, length: { maximum: 30 }
  validates :message, length: { maximum: 2000 }
end
