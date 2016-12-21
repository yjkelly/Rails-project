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
    mount_uploader :avatar, PictureUploader

  validate  :avatar_size

  private

    # Validates the size of an uploaded picture.
    def avatar_size
      if avatar.size > 2.megabytes
        errors.add(:avatar, "should be less than 2MB")
      end
    end

end