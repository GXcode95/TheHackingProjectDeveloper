class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_one_attached :photo
  
  validates :title, presence: :true
  validates :body, presence: :true, length: {minimum: 10}
end
