class BioSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone, :email, :linkedin
end
