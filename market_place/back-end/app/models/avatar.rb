class Avatar < ApplicationRecord
  has_one_attached :user_avatar
  belongs_to :user
end
