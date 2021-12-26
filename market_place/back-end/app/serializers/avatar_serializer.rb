class AvatarSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :user_id, :user_avatar
  def user_avatar
    if object.user_avatar.attached?
      {
        url: rails_blob_url(object.user_avatar, only_path: true)
      }
    end
  end
end
