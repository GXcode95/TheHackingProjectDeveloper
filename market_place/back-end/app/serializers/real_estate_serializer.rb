class RealEstateSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :name, :price, :sold, :description, :city_id, :user_id, :images
  def images
    if object.images.attached?
      arr = []
      object.images.each do |img|
        arr << {
          url: rails_blob_url(object.images, only_path: true)
        }
      end
    arr
    end
  end
end
