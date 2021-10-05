class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone, :email, :links
end
