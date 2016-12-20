class User < ActiveRecord::Base

	has_many :orders
    before_save { self.email = email.downcase }
    validates :username, presence: true, length: {maximum:25}
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, presence: true, length: { maximum: 50 },
                    format: { with: VALID_EMAIL_REGEX },
                uniqueness: { case_sensitive: false }
    has_secure_password
    validates :password, presence: true, length: { minimum: 6 }
    validates :firstname, length: {maximum:50}
    validates :surname, length: {maximum:50}
    validates :country, length: {maximum:50}

end